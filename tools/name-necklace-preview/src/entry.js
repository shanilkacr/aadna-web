// AADNA live 3D preview (three.js). Renders personalised jewellery on a black velvet
// display form and updates as the customer types, picks a font or switches finish.
//
//   mode "name"      name necklace on a bust (extruded lettering bent to the chest + cable chain)
//   mode "coin"      coin pendant on a bust (style "rope" = Coin III, "pave" = Coin II)
//   mode "bracelet"  ID-bar curb bracelet on a wrist stand
//   mode "cufflinks" monogram cufflink pair on a display pad
//   mode "ring"      signet / letter rings on a finger form (data-ring-style)
//
// Mounts on [data-nnp-stage]; reads the typed text from [data-personalization-input].
// Build: see ../README.md. 1 world unit = 1 cm.
import {
  WebGLRenderer, Scene, PerspectiveCamera, OrthographicCamera, Group, Mesh, InstancedMesh, Object3D,
  ShapePath, Shape, Path, Vector2, ExtrudeGeometry, TorusGeometry, LatheGeometry,
  CircleGeometry, CylinderGeometry, IcosahedronGeometry, Quaternion, BoxGeometry, CapsuleGeometry, BackSide, MeshBasicMaterial,
  SphereGeometry, ShapeGeometry, TubeGeometry, BufferGeometry, Float32BufferAttribute, PlaneGeometry,
  MeshPhysicalMaterial, ShadowMaterial, DirectionalLight, PMREMGenerator, CatmullRomCurve3,
  Vector3, Matrix4, Box3, CanvasTexture, RepeatWrapping, Color, ACESFilmicToneMapping,
  SRGBColorSpace, PCFSoftShadowMap, VSMShadowMap, MathUtils,
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import * as opentype from 'opentype.js/dist/opentype.module.js';

// ---------------------------------------------------------------- constants
const NECK_R = 4.4;       // bust neck radius
const NECK_BASE = -4.0;   // where the neck flares into the shoulders
const PENDANT_Y = -8.7;   // centre of a name resting on the chest
const CAP_HEIGHT_CM = 1.45;
const MAX_NAME_CM = 13;
const COIN_Y = -9.4;
const PHOTO = { w: 1536, h: 1024, ppc: 98.5 };   // neck photo size in px and its scale (px per cm); a close crop so the name reads
// outline of the body in the photo: the chain is clipped to it, so it goes behind the neck instead of ending on the skin
const BODY_EDGE = {   // top of the shoulders, measured from the photo; starts where each side of the neck meets the shoulder (the chain is hidden above the line between them, behind the neck)
  l: [[377, 76], [345, 112], [295, 151], [246, 181], [197, 205], [148, 225], [98, 246], [49, 268], [0, 286], [-49, 304], [-98, 318], [-197, 338], [-295, 345], [-394, 351], [-492, 381]],
  r: [[1198, 99], [1231, 149], [1280, 187], [1329, 218], [1378, 245], [1428, 268], [1477, 289], [1526, 307], [1575, 322], [1625, 337], [1723, 359], [1822, 374], [1920, 387], [2028, 425]],
};
// hands photo (bracelet): the bracelet wraps the forearm at (x,y) in photo px; `rot` turns its tangent (the bar's length) across the arm
const WRIST = { ppc: 27, x: 817, y: 288, rot: -40.4, scale: 0.84 };
const WRIST_CLIP = [[898, 0], [875, 40], [856, 80], [839, 120], [821, 161], [799, 201], [770, 241], [736, 281], [700, 321], [662, 361], [843, 361], [855, 341], [884, 301], [916, 261], [951, 221], [986, 181], [1050, 134], [1050, 0]];
// hands photo (rings): the ring sits on the proximal segment of a finger at (x,y) in photo px; `rot` lays the ring's axis along the finger
const FINGER = { ppc: 50, x: 493, y: 247, rot: -60, scale: 1.0, head: 1.25 };
const PH = { x: 0, y: (PHOTO.h / 2 - 689) / PHOTO.ppc };   // where the pendant hangs on the neck photo (just below the collarbones)

const METALS = {
  gold: { color: 0xf3c97a, roughness: 0.22, envMapIntensity: 1.5 },
  rhodium: { color: 0xffffff, roughness: 0.2, envMapIntensity: 3.2 },
};

function metalFromLabel(label) {
  return /gold/i.test(label || '') ? 'gold' : /rhodium|silver/i.test(label || '') ? 'rhodium' : 'gold';
}

// Fonts are subset to Latin + Latin-1; drop anything else so no empty boxes render.
function sanitize(text) {
  return (text || '').replace(/[^ -~ -ÿ]/g, '').replace(/\s+/g, ' ').trim();
}

const smooth = (a, b, x) => { const t = MathUtils.clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };

// Evenly resample a contour so it can be bent round a surface without long straight chords.
function resample(points, step) {
  const out = [];
  for (let i = 0; i < points.length; i++) {
    const a = points[i]; const b = points[(i + 1) % points.length];
    const n = Math.max(1, Math.ceil(a.distanceTo(b) / step));
    for (let k = 0; k < n; k++) out.push(new Vector2().lerpVectors(a, b, k / n));
  }
  return out;
}

// opentype glyph path -> three shapes (y flipped to y-up). `cff` = outer contours wind the other way.
function pathToShapes(path, step, cff) {
  const sp = new ShapePath();
  for (const c of path.commands) {
    switch (c.type) {
      case 'M': sp.moveTo(c.x, -c.y); break;
      case 'L': sp.lineTo(c.x, -c.y); break;
      case 'Q': sp.quadraticCurveTo(c.x1, -c.y1, c.x, -c.y); break;
      case 'C': sp.bezierCurveTo(c.x1, -c.y1, c.x2, -c.y2, c.x, -c.y); break;
      default: break;
    }
  }
  return sp.toShapes(!!cff).map((shape) => {
    const s = new Shape(resample(shape.getPoints(10), step));
    s.holes = shape.holes.map((h) => new Path(resample(h.getPoints(10), step)));
    return s;
  });
}

// ---------------------------------------------------------------- velvet
// Fine pile grain plus soft mottling, so light breaks up the way brushed velvet does.
function velvetTexture(repeatX, repeatY) {
  const S = 512; const c = document.createElement('canvas'); c.width = S; c.height = S;
  const g = c.getContext('2d'); const img = g.createImageData(S, S);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const grain = (Math.random() - 0.5) * 64;
      const mottle = Math.sin(x * 0.021 + Math.sin(y * 0.013) * 3) * 15 + Math.sin(y * 0.017 + Math.sin(x * 0.011) * 2.5) * 15;
      const v = MathUtils.clamp(128 + grain + mottle, 0, 255);
      const k = (y * S + x) * 4;
      img.data[k] = img.data[k + 1] = img.data[k + 2] = v; img.data[k + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const t = new CanvasTexture(c);
  t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(repeatX, repeatY); t.anisotropy = 8;
  return t;
}
function velvetMaterial(repeatX, repeatY) {
  return new MeshPhysicalMaterial({
    color: 0x060607, roughness: 1, metalness: 0, bumpMap: velvetTexture(repeatX, repeatY), bumpScale: 0.4,
    sheen: 0.6, sheenColor: new Color(0x55555f), sheenRoughness: 0.4, envMapIntensity: 0.25,
  });
}
function blackGloss() {
  return new MeshPhysicalMaterial({ color: 0x0a0a0b, roughness: 0.3, metalness: 0.15, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.9 });
}
// A thin piped edge round a velvet form (flat torus lying in the horizontal plane).
function piping(radius, y, tube, mat, squashZ = 1) {
  const m = new Mesh(new TorusGeometry(radius, tube, 10, 120), mat);
  m.rotation.x = Math.PI / 2; m.position.y = y; m.scale.y = squashZ; m.castShadow = true;
  return m;
}
// Invisible floor that only catches the soft contact shadow of whatever stands on it.
function shadowFloor(y) {
  const m = new Mesh(new PlaneGeometry(60, 60), new ShadowMaterial({ opacity: 0.16 }));
  m.rotation.x = -Math.PI / 2; m.position.y = y; m.receiveShadow = true;
  return m;
}

// ---------------------------------------------------------------- bust
// Profile (radius, y) top -> bottom: short neck, sloping trapezius, rounded shoulders that taper in.
const PROFILE = [
  [0.0, 6.5], [2.9, 6.3], [4.0, 5.4], [4.2, 2.5], [4.3, -0.5],
  [4.5, -2.8], [5.3, -4.2], [7.6, -5.0], [10.8, -6.0], [13.2, -7.6], [14.4, -10.2],
  [14.4, -12.8], [13.8, -15.2], [12.8, -17.4], [0.0, -17.4],
];
// Smooth (monotone cubic) interpolation through the profile so there are no creases between points.
const PX = PROFILE.slice(0, -1).map((p) => p[1]).reverse();
const PR = PROFILE.slice(0, -1).map((p) => p[0]).reverse();
const PD = (() => {
  const n = PX.length; const h = []; const d = []; const m = new Array(n).fill(0);
  for (let i = 0; i < n - 1; i++) { h[i] = PX[i + 1] - PX[i]; d[i] = (PR[i + 1] - PR[i]) / h[i]; }
  for (let i = 1; i < n - 1; i++) {
    if (d[i - 1] * d[i] > 0) {
      const w1 = 2 * h[i] + h[i - 1]; const w2 = h[i] + 2 * h[i - 1];
      m[i] = (w1 + w2) / (w1 / d[i - 1] + w2 / d[i]);
    }
  }
  m[0] = d[0]; m[n - 1] = d[n - 2];
  return m;
})();
function radiusAt(y) {
  const n = PX.length;
  if (y <= PX[0]) return PR[0];
  if (y >= PX[n - 1]) return PR[n - 1];
  let i = 0;
  while (i < n - 2 && y > PX[i + 1]) i++;
  const h = PX[i + 1] - PX[i]; const t = (y - PX[i]) / h; const t2 = t * t; const t3 = t2 * t;
  return (2 * t3 - 3 * t2 + 1) * PR[i] + (t3 - 2 * t2 + t) * h * PD[i] + (-2 * t3 + 3 * t2) * PR[i + 1] + (t3 - t2) * h * PD[i + 1];
}
const depthAt = (y) => 1 - 0.5 * smooth(-4.2, -8.0, y); // the chest is much shallower than it is wide

// Point on the bust surface (theta 0 = front) pushed out along the ellipse normal by `off`.
function surf(theta, y, off) {
  const a = radiusAt(y); const b = a * depthAt(y);
  const sx = Math.sin(theta); const cz = Math.cos(theta);
  const nx = sx / a; const nz = cz / b; const nl = Math.hypot(nx, nz);
  return new Vector3(a * sx + (off * nx) / nl, y, b * cz + (off * nz) / nl);
}
// Local frame (position, tangent, vertical, outward normal) so flat lettering lies on the sloping chest.
function surfaceFrame(theta, Y) {
  const h = 0.02;
  const a = radiusAt(Y); const b = a * depthAt(Y);
  const a2 = radiusAt(Y + h); const a1 = radiusAt(Y - h);
  const da = (a2 - a1) / (2 * h);
  const db = (a2 * depthAt(Y + h) - a1 * depthAt(Y - h)) / (2 * h);
  const sx = Math.sin(theta); const cz = Math.cos(theta);
  const P = new Vector3(a * sx, Y, b * cz);
  const St = new Vector3(a * cz, 0, -b * sx);
  const Sy = new Vector3(da * sx, 1, db * cz);
  const n = new Vector3().crossVectors(St, Sy).normalize();
  const t = St.normalize();
  const v = new Vector3().crossVectors(n, t).normalize();
  return { P, t, v, n };
}

function skinTexture() {
  const S = 256; const c = document.createElement('canvas'); c.width = S; c.height = S;
  const g = c.getContext('2d'); const img = g.createImageData(S, S);
  for (let i = 0; i < S * S; i++) { const v = 128 + (Math.random() - 0.5) * 70; img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v; img.data[i * 4 + 3] = 255; }
  g.putImageData(img, 0, 0);
  const t = new CanvasTexture(c); t.wrapS = t.wrapT = RepeatWrapping; t.repeat.set(30, 16); t.anisotropy = 8; return t;
}
function buildBust() {
  // neck, collarbones and shoulders of a person; the frame crops the head and arms
  const rows = [new Vector2(0, -17.4), new Vector2(12.8, -17.4)];
  for (let y = -17.25; y <= 6.5; y += 0.15) rows.push(new Vector2(radiusAt(y), y));
  rows.push(new Vector2(0, 6.5));
  const geo = new LatheGeometry(rows, 200);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setZ(i, p.getZ(i) * depthAt(p.getY(i)));
  geo.computeVertexNormals();
  const cols = [];                                  // soft shade under the jaw and in the collar hollow
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i); const x = Math.abs(p.getX(i));
    const k = 1 - 0.55 * smooth(2.0, 6.4, y) - 0.14 * Math.exp(-Math.pow((y + 5.2) / 1.4, 2)) * smooth(5, 0, x);
    cols.push(k, k, k);
  }
  geo.setAttribute('color', new Float32BufferAttribute(cols, 3));
  const mat = new MeshPhysicalMaterial({
    vertexColors: true, color: 0xb98966, roughness: 0.74, metalness: 0, bumpMap: skinTexture(), bumpScale: 0.12,
    sheen: 0.5, sheenColor: new Color(0xd89a78), sheenRoughness: 0.5, clearcoat: 0.06, clearcoatRoughness: 0.5, envMapIntensity: 0.3,
  });
  const g = new Group();
  const body = new Mesh(geo, mat); body.castShadow = true; body.receiveShadow = true; g.add(body);
  const mat2 = mat.clone(); mat2.vertexColors = false; mat2.color.set(0xa87a5a);
  [-1, 1].forEach((side) => {                       // collarbones
    const pts = [];
    for (let i = 0; i <= 14; i++) {
      const t = i / 14; const x = 1.1 + t * 6.2; const y = -4.7 + 0.55 * Math.sin(t * 2.6) - 0.15 * t;
      pts.push(surf(side * Math.asin(Math.min(0.99, x / radiusAt(y))), y, -0.05));
    }
    const tube = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 40, 0.3, 10, false), mat2);
    tube.scale.multiplyScalar(1); tube.receiveShadow = true; g.add(tube);
  });
  [-1, 1].forEach((side) => {                       // neck muscles running down to the collarbones
    const pts = [];
    for (let i = 0; i <= 12; i++) {
      const t = i / 12; const x = 3.3 - 2.1 * t; const y = 4.8 - 9.0 * t;
      pts.push(surf(side * Math.asin(Math.min(0.99, x / radiusAt(y))), y, -0.18));
    }
    const m = new Mesh(new TubeGeometry(new CatmullRomCurve3(pts), 30, 0.55, 10, false), mat2);
    m.receiveShadow = true; g.add(m);
  });
  return g;
}

// ---------------------------------------------------------------- bracelet stand
const ST_BOTTOM = -6.0; const ST_TOP = 5.2; const ST_DOME = 3.4; const ST_SQUASH = 0.825;
const BR_Y = 0;
function standRadius(y) {
  if (y <= ST_DOME) return 2.85 - 0.032 * y;
  const k = (y - ST_DOME) / (ST_TOP - ST_DOME);
  return (2.85 - 0.032 * ST_DOME) * Math.sqrt(Math.max(0, 1 - k * k));
}
function buildStand() {
  const rows = [new Vector2(0, ST_BOTTOM)];
  for (let y = ST_BOTTOM; y <= ST_TOP - 0.01; y += 0.1) rows.push(new Vector2(standRadius(y), y));
  rows.push(new Vector2(0, ST_TOP));
  const geo = new LatheGeometry(rows, 128);
  const p = geo.attributes.position;
  for (let i = 0; i < p.count; i++) p.setZ(i, p.getZ(i) * ST_SQUASH);
  geo.computeVertexNormals();
  const g = new Group();
  const body = new Mesh(geo, velvetMaterial(14, 6)); body.castShadow = true; body.receiveShadow = true; g.add(body);
  const base = new Mesh(new CylinderGeometry(4.2, 4.4, 0.7, 96), blackGloss());
  base.position.y = ST_BOTTOM - 0.35; base.scale.z = 0.9; base.castShadow = true; base.receiveShadow = true; g.add(base);
  g.add(shadowFloor(ST_BOTTOM - 0.7));
  return g;
}
// arc length -> angle on an ellipse (semi-axes a along x, b along z), 0 = front
function ellipseArcTheta(a, b) {
  const steps = 400; const lens = [0];
  for (let i = 1; i <= steps; i++) {
    const th = ((i - 0.5) / steps) * Math.PI;
    lens.push(lens[i - 1] + Math.hypot(a * Math.cos(th), b * Math.sin(th)) * (Math.PI / steps));
  }
  return (sArc) => {
    const sign = Math.sign(sArc); const v = Math.min(Math.abs(sArc), lens[steps]);
    let lo = 0; let hi = steps;
    while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (lens[mid] < v) lo = mid; else hi = mid; }
    const f = (v - lens[lo]) / Math.max(1e-6, lens[hi] - lens[lo]);
    return sign * ((lo + f) / steps) * Math.PI;
  };
}
function ellipseFrame(a, b, theta, y, off) {
  const sx = Math.sin(theta); const cz = Math.cos(theta);
  const nx = sx / a; const nz = cz / b; const nl = Math.hypot(nx, nz);
  const n = new Vector3(nx / nl, 0, nz / nl);
  return { P: new Vector3(a * sx + n.x * off, y, b * cz + n.z * off), t: new Vector3(n.z, 0, -n.x), n };
}

// ---------------------------------------------------------------- cufflink pad
const PAD_TILT = -0.32;   // leans back so the faces catch the light
const CUFF_Z = 0.62;      // height of the letters' back above the pad
function buildPad() {
  const w = 12.6; const h = 7.4; const r = 0.9;
  const s = new Shape();
  s.moveTo(-w / 2 + r, -h / 2); s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  const depth = 1.1; const bev = 0.35;
  const geo = new ExtrudeGeometry(s, { depth, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 5, curveSegments: 16 });
  geo.translate(0, 0, -(depth + bev));
  const m = new Mesh(geo, velvetMaterial(1.4, 0.8)); m.receiveShadow = true; m.castShadow = true;
  const g = new Group(); g.add(m); g.rotation.x = PAD_TILT;
  return g;
}

// ---------------------------------------------------------------- finger form + ring parts
const FINGER_R = 0.82;
function buildFinger() {
  const rows = [new Vector2(0, -3.2), new Vector2(FINGER_R + 0.02, -3.2)];
  for (let y = -3.1; y <= 2.5; y += 0.1) rows.push(new Vector2(FINGER_R - 0.0006 * (y + 3.2), y));
  for (let a = 0; a <= 90; a += 6) {
    const r = (a * Math.PI) / 180;
    rows.push(new Vector2(FINGER_R * Math.cos(r), 2.5 + FINGER_R * 0.92 * Math.sin(r)));
  }
  const geo = new LatheGeometry(rows, 96);
  geo.computeVertexNormals();
  const g = new Group();
  const body = new Mesh(geo, velvetMaterial(5, 4)); body.castShadow = true; body.receiveShadow = true; g.add(body);
  const base = new Mesh(new CylinderGeometry(2.3, 2.45, 0.5, 80), blackGloss());
  base.position.y = -3.45; base.castShadow = true; base.receiveShadow = true; g.add(base);
  g.add(shadowFloor(-3.7));
  return g;
}
// Band round the finger; thicker/wider near the front (theta = 0) for signet shoulders.
function ringBandGeometry(o) {
  const NP = 22; const NT = 180;
  const a0 = o.gap || 0; const a1 = Math.PI * 2 - (o.gap || 0);
  const pos = []; const idx = [];
  for (let i = 0; i <= NT; i++) {
    const th = a0 + (a1 - a0) * (i / NT);
    const d = Math.min(th, Math.PI * 2 - th);
    const bump = Math.exp(-Math.pow(d / (o.sigma || 0.8), 2));
    const w = o.wB + (o.wH - o.wB) * bump; const t = o.tB + (o.tH - o.tB) * bump;
    const sx = Math.sin(th); const cz = Math.cos(th);
    for (let k = 0; k < NP; k++) {
      const ph = (k / NP) * Math.PI * 2;
      const r = o.rIn + t / 2 + (t / 2) * Math.cos(ph);
      pos.push(sx * r, (w / 2) * Math.sin(ph), cz * r);
    }
  }
  for (let i = 0; i < NT; i++) {
    for (let k = 0; k < NP; k++) {
      const a = i * NP + k; const b = i * NP + ((k + 1) % NP);
      const c = (i + 1) * NP + k; const d = (i + 1) * NP + ((k + 1) % NP);
      idx.push(a, c, b, b, c, d);
    }
  }
  const g = new BufferGeometry();
  g.setAttribute('position', new Float32BufferAttribute(pos, 3));
  g.setIndex(idx); g.computeVertexNormals();
  return g;
}
function ovalShape(rx, ry) { const s = new Shape(); s.absellipse(0, 0, rx, ry, 0, Math.PI * 2, false, 0); return s; }
function cushionShape(hw, hh, c) {
  const s = new Shape();
  s.moveTo(-hw + c, -hh); s.lineTo(hw - c, -hh); s.lineTo(hw, -hh + c); s.lineTo(hw, hh - c);
  s.lineTo(hw - c, hh); s.lineTo(-hw + c, hh); s.lineTo(-hw, hh - c); s.lineTo(-hw, -hh + c); s.lineTo(-hw + c, -hh);
  return s;
}

// Studio softbox environment for the photo mode: bright panels over a warm dark room, so polished gold
// shows crisp white-yellow highlights against deep amber, like a jewellery product shot.
function productEnvironment() {
  const sc = new Scene();
  sc.add(new Mesh(new BoxGeometry(40, 40, 40), new MeshBasicMaterial({ color: new Color(0.17, 0.11, 0.05), side: BackSide })));
  const panel = (w, h, pos, rotY, rotX, rgb) => {
    const m = new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(...rgb), toneMapped: false, side: 2 }));
    m.position.set(...pos); m.rotation.y = rotY; m.rotation.x = rotX; sc.add(m);
  };
  panel(22, 14, [0, 2, 16], Math.PI, 0, [2.3, 1.95, 1.4]);            // large soft panel behind the camera
  panel(30, 6, [0, 18, 4], 0, Math.PI / 2, [5, 4.6, 4]);               // overhead strip
  panel(5, 26, [-17, 2, 6], Math.PI / 2, 0, [4, 3.6, 3]);              // left strip
  panel(5, 26, [17, 2, 6], -Math.PI / 2, 0, [3, 2.7, 2.2]);            // right strip
  panel(30, 5, [0, -17, 6], 0, -Math.PI / 2, [1.2, 0.95, 0.6]);        // warm bounce from below
  return sc;
}

// ---------------------------------------------------------------- the preview
class NamePreview {
  constructor(stage, opts) {
    this.stage = stage;
    this.canvas = stage.querySelector('[data-nnp-canvas]');
    this.fonts = opts.fonts;                      // [{id,label,url,tracking?,depth?,scale?}]
    this.fontCache = new Map();
    const ds = stage.dataset;
    this.mode = ['coin', 'bracelet', 'cufflinks', 'ring'].includes(ds.nnpMode) ? ds.nnpMode : 'name';
    this.ringStyle = ds.ringStyle || 'plain-oval';
    this.coinStyle = ds.coinStyle === 'pave' ? 'pave' : 'rope';
    this.placeholder = ds.placeholder || (this.mode === 'name' ? 'Name' : this.mode === 'cufflinks' ? 'BR'
      : this.mode === 'ring' && this.ringStyle !== 'plain-oval' ? 'A' : 'Engrave here');
    this.photo = !!ds.nnpPhoto && (this.mode === 'name' || this.mode === 'coin' || this.mode === 'bracelet' || this.mode === 'ring');
    if (this.photo && this.mode === 'bracelet') Object.assign(PHOTO, { w: 1030, h: 820, ppc: WRIST.ppc });   // the hands photos are 5:4, the neck photo 3:2
    if (this.photo && this.mode === 'ring') Object.assign(PHOTO, { w: 1030, h: 820, ppc: FINGER.ppc });
    this.viewT = 0; this.viewTarget = 0;
    this.state = { text: this.placeholder, fontId: opts.fonts[0].id, metal: 'gold' };
    this.pointer = { x: 0, y: 0 };
    this.rot = { x: 0, y: 0 };
    this.visible = true;
    this.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.buildToken = 0;
    this.initScene();
  }

  initScene() {
    const r = (this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true, alpha: true, powerPreference: 'high-performance' }));
    r.setClearColor(0x000000, 0);
    r.outputColorSpace = SRGBColorSpace;
    r.toneMapping = ACESFilmicToneMapping;
    r.toneMappingExposure = 1.0;
    r.shadowMap.enabled = true;
    r.shadowMap.type = this.photo ? VSMShadowMap : PCFSoftShadowMap;

    this.scene = new Scene();
    const pmrem = new PMREMGenerator(r);
    this.scene.environment = pmrem.fromScene(this.photo ? productEnvironment() : new RoomEnvironment(), 0.03).texture;
    pmrem.dispose();

    if (this.photo && this.mode !== 'ring') {
      const pts = this.mode === 'bracelet' ? WRIST_CLIP : [...BODY_EDGE.l.map(([x, y]) => [x + 2, y]), [0, PHOTO.h], [PHOTO.w, PHOTO.h], ...BODY_EDGE.r.slice().reverse().map(([x, y]) => [x - 2, y])];
      this.canvas.style.clipPath = `polygon(${pts.map(([x, y]) => `${((x / PHOTO.w) * 100).toFixed(2)}% ${((y / PHOTO.h) * 100).toFixed(2)}%`).join(',')})`;
    }
    this.camera = this.photo ? new OrthographicCamera(-13.2, 13.2, PHOTO.h / 2 / PHOTO.ppc, -PHOTO.h / 2 / PHOTO.ppc, 0.1, 200) : new PerspectiveCamera(24, 1, 0.1, 200);
    this.camLook = new Vector3(0, -7.4, 0);

    this.rig = new Group();                       // turns round the form's vertical axis
    this.scene.add(this.rig);
    this.necklace = new Group();                  // the jewellery (rebuilt on every change)
    if (this.mode === 'cufflinks') { this.rig.add(buildPad()); this.necklace.rotation.x = PAD_TILT; }
    else if (this.mode === 'ring' && !this.photo) this.rig.add(buildFinger());
    else if (this.mode === 'bracelet' && !this.photo) this.rig.add(buildStand());
    else if (!this.photo) this.rig.add(buildBust());
    else if (this.mode === 'ring') {              // photo backdrop: the ring is built round a vertical finger; lay its axis along the finger in the photo
      this.wearer = new Group();
      this.wearer.rotation.z = MathUtils.degToRad(FINGER.rot);
      this.wearer.scale.setScalar(FINGER.scale);
      this.wearer.position.set((FINGER.x - PHOTO.w / 2) / PHOTO.ppc, (PHOTO.h / 2 - FINGER.y) / PHOTO.ppc, 0);
      const fingerGeo = new CylinderGeometry(FINGER_R, FINGER_R, 8, 64);
      const hide = new Mesh(fingerGeo, new MeshBasicMaterial({ colorWrite: false }));   // invisible finger: hides the back half of the band
      hide.renderOrder = -1;
      const skin = new Mesh(fingerGeo, new ShadowMaterial({ opacity: 0.32 }));          // the ring's shadow on the finger
      skin.scale.setScalar(1.004); skin.receiveShadow = true;
      this.wearer.add(hide, skin);
      this.rig.add(this.wearer);
    } else {                                        // photo backdrop: the necklace is drawn over a real neck, with its shadow on the skin
      const sh = new Mesh(new PlaneGeometry(60, 60), new ShadowMaterial({ opacity: 0.38 }));
      sh.position.z = this.mode === 'bracelet' ? 2.2 : -0.12; sh.receiveShadow = true; this.rig.add(sh);
      if (this.mode === 'bracelet') {           // the bracelet is built round a vertical stand: lay its axis along the forearm
        this.necklace.rotation.z = MathUtils.degToRad(WRIST.rot);
        this.necklace.scale.setScalar(WRIST.scale);
        this.necklace.position.set((WRIST.x - PHOTO.w / 2) / PHOTO.ppc, (PHOTO.h / 2 - WRIST.y) / PHOTO.ppc, 0);
      }
    }
    (this.wearer || this.rig).add(this.necklace);

    this.material = new MeshPhysicalMaterial({ metalness: 1, roughness: 0.22, clearcoat: 0.25, clearcoatRoughness: 0.15 });
    this.applyMetal('gold');

    // key light (soft shadows) + two cool/warm rims so the black velvet keeps its shape + a gentle fill
    this.light = new DirectionalLight(0xfff1de, 2.4);
    this.light.position.set(...(this.photo ? [-3, 4, 30] : [-9, 8, 24]));
    this.light.target.position.set(0, -5, 0);
    this.light.castShadow = true;
    this.light.shadow.mapSize.set(2048, 2048);
    this.light.shadow.bias = -0.0002;
    this.light.shadow.normalBias = 0.04;
    this.light.shadow.radius = this.photo ? 7 : 5; this.light.shadow.blurSamples = 16;
    const sc = this.light.shadow.camera;
    sc.left = -18; sc.right = 18; sc.top = 16; sc.bottom = -18; sc.near = 1; sc.far = 70;
    this.scene.add(this.light, this.light.target);
    const rim = new DirectionalLight(0xe6edff, 1.6); rim.position.set(18, 7, -4);
    const rim2 = new DirectionalLight(0xfff0e0, 1.1); rim2.position.set(-18, 5, -4);
    const fill = new DirectionalLight(0xfff6ea, 0.45); fill.position.set(14, 2, 18);
    this.scene.add(rim, rim2, fill);

    this.resize();
    new ResizeObserver(() => this.resize()).observe(this.stage);
    new IntersectionObserver((e) => { this.visible = e[0].isIntersecting; }).observe(this.stage);
    this.stage.addEventListener('pointermove', (e) => {
      const b = this.stage.getBoundingClientRect();
      this.pointer.x = ((e.clientX - b.left) / b.width - 0.5) * 2;
      this.pointer.y = ((e.clientY - b.top) / b.height - 0.5) * 2;
    });
    this.stage.addEventListener('pointerleave', () => { this.pointer.x = 0; this.pointer.y = 0; });
    this.clockStart = performance.now();
    this.tick = this.tick.bind(this);
    requestAnimationFrame(this.tick);
  }

  resize() {
    const w = this.stage.clientWidth || 600;
    const h = this.stage.clientHeight || 480;
    // the photo mode draws very thin chain, so always supersample (the browser smooths it down) to keep edges clean
    this.renderer.setPixelRatio(this.photo ? Math.min(Math.max(window.devicePixelRatio || 1, 2.5), 3) : Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.updateCamera();
  }

  // Worn view <-> close-up, per product type. viewT: 0 = worn, 1 = close-up.
  updateCamera() {
    if (this.photo) {                             // the stage is locked to the photo's aspect ratio so the 3D necklace lines up with it
      this.camera.position.set(0, 0, 50); this.camera.lookAt(0, 0, 0);
      const hh = PHOTO.h / 2 / PHOTO.ppc;
      this.camera.top = hh; this.camera.bottom = -hh; this.camera.left = -hh * this.camera.aspect; this.camera.right = hh * this.camera.aspect;
      this.camera.updateProjectionMatrix();
      return;
    }
    const halfFov = Math.tan(MathUtils.degToRad(this.camera.fov / 2));
    const asp = this.camera.aspect; const t = this.viewT;
    let look; let dist; let yOff;
    if (this.mode === 'coin') {
      const lookW = new Vector3(0, -7.4, 0); const lookC = new Vector3(0, COIN_Y + 0.1, 0);
      const dW = Math.max(26, 5.9 / (halfFov * asp)); const dC = Math.max(7, 1.5 / (halfFov * asp));
      const zc = surfaceFrame(0, COIN_Y).P.z + 0.1;   // the coin hangs well in front of the bust's centre
      look = lookW.lerp(lookC, t); dist = dW + (dC + zc - dW) * t; yOff = 1.6 * (1 - t) + 0.15 * t;
    } else if (this.mode === 'ring') {
      const lookW = new Vector3(0, 0, 0.4); const lookC = new Vector3(0, 0, 1.1);
      const dW = Math.max(11.5, 3.2 / (halfFov * asp)); const dC = Math.max(5.2, 1.6 / (halfFov * asp));
      look = lookW.lerp(lookC, t); dist = dW + (dC - dW) * t; yOff = 0.7 * (1 - t) + 0.05 * t;
    } else if (this.mode === 'cufflinks') {
      const lookW = new Vector3(0, -0.2, 0.3); const lookC = new Vector3(-2.6, 0.2, 0.9);
      const dW = Math.max(22, 6.9 / (halfFov * asp)); const dC = Math.max(8, 2.3 / (halfFov * asp));
      look = lookW.lerp(lookC, t); dist = dW + (dC - dW) * t; yOff = 1.0 * (1 - t) + 0.15 * t;
    } else if (this.mode === 'bracelet') {
      const lookW = new Vector3(0, -0.4, 0); const lookC = new Vector3(0, BR_Y, 0);
      const dW = Math.max(22, 5.4 / (halfFov * asp)); const dC = Math.max(9, 2.9 / (halfFov * asp));
      look = lookW.lerp(lookC, t); dist = dW + (dC - dW) * t; yOff = 1.4 * (1 - t) + 0.2 * t;
    } else {
      look = this.camLook; dist = Math.max(40, 10.6 / (halfFov * asp)); yOff = 1.0;
    }
    this.camera.position.set(look.x, look.y + yOff, dist);
    this.camera.lookAt(look);
    this.camera.updateProjectionMatrix();
  }

  setView(closeUp) { this.viewTarget = closeUp ? 1 : 0; }

  applyMetal(name) {
    const m = { ...(METALS[name] || METALS.gold) };
    if (this.photo && name === 'gold') { m.color = 0xffd060; m.roughness = 0.13; m.envMapIntensity = 1.15; }   // lit like skin in daylight, not a studio bust
    [this.material, this.ropeMaterial, this.faceMaterial].filter(Boolean).forEach((mat) => {
      mat.color.setHex(m.color);
      // flat monogram faces mirror the bright backdrop, so ease the reflection for cufflinks
      mat.envMapIntensity = m.envMapIntensity * (this.mode === 'cufflinks' ? 0.55 : 1);
      if (mat !== this.faceMaterial) mat.roughness = m.roughness + (this.mode === 'cufflinks' ? 0.07 : 0);
    });
    this.metalRough = m.roughness;
    if (this.faceMaterial) this.faceMaterial.roughness = 1;     // engraved faces take roughness from their map
    this.state.metal = name;
  }

  async loadFont(id) {
    if (this.fontCache.has(id)) return this.fontCache.get(id);
    const def = this.fonts.find((f) => f.id === id);
    // The store's CDN re-encodes .woff assets as WOFF2, which opentype.js can't read, so the 3D text reads the original
    // font from a base64 copy (assets/nnp-*-data.js); the .woff stays for the CSS @font-face of the picker.
    const bytes = def.data
      ? fetch(def.data).then((r) => r.text()).then((t) => Uint8Array.from(atob(t.trim().replace(/^"|"$/g, '')), (c) => c.charCodeAt(0)).buffer)
      : fetch(def.url).then((r) => r.arrayBuffer());
    const p = bytes.then((buf) => opentype.parse(buf));
    this.fontCache.set(id, p);
    return p;
  }

  async update(partial) {
    Object.assign(this.state, partial);
    if (partial.metal) this.applyMetal(partial.metal);
    if ('text' in partial || 'fontId' in partial) await this.rebuild();
  }

  clearJewellery() {
    this.necklace.traverse((o) => { if (o.geometry) o.geometry.dispose(); });
    if (this.engrave) { this.engrave.bump.dispose(); this.engrave.rough.dispose(); if (this.engrave.map) this.engrave.map.dispose(); this.engrave = null; }
    this.necklace.clear();
  }

  async rebuild() {
    if (this.mode === 'coin') return this.rebuildCoin();
    if (this.mode === 'bracelet') return this.rebuildBracelet();
    if (this.mode === 'cufflinks') return this.rebuildCufflinks();
    if (this.mode === 'ring') return this.rebuildRing();
    return this.rebuildName();
  }

  // ---- name necklace ----
  async rebuildName() {
    const token = ++this.buildToken;
    const text = sanitize(this.state.text) || this.placeholder;
    const font = await this.loadFont(this.state.fontId);
    if (token !== this.buildToken) return;
    this.clearJewellery();

    const size = 100;
    const fontDef = this.fonts.find((f) => f.id === this.state.fontId) || {};
    const tracking = fontDef.tracking != null ? fontDef.tracking : -0.02;
    const paths = font.getPaths(text, 0, 0, size, { kerning: true, letterSpacing: tracking });
    const depth = size * (fontDef.depth ? fontDef.depth : 0.045) * (this.photo ? 1.6 : 1);
    const bevelT = depth * 0.45;

    const geos = [];
    paths.forEach((p) => {
      if (!p.commands.length) return;
      const shapes = pathToShapes(p, size * 0.014, font.outlinesFormat === 'cff');
      if (!shapes.length) return;
      geos.push(new ExtrudeGeometry(shapes, {
        depth, curveSegments: 10, bevelEnabled: true, bevelThickness: bevelT, bevelSize: depth * 0.32, bevelSegments: 5,
      }));
    });
    const bb = new Box3();
    geos.forEach((g) => { g.computeBoundingBox(); bb.union(g.boundingBox); });
    const cx = (bb.min.x + bb.max.x) / 2; const cy = (bb.min.y + bb.max.y) / 2;
    const rawW = bb.max.x - bb.min.x;

    // real-world size, then lay the word on the chest ellipse (arc length preserved)
    const capUnits = size * 0.7;
    let s = (CAP_HEIGHT_CM * (this.photo ? 0.65 : 1) * (fontDef.scale || 1) * (this.photo ? (fontDef.photoScale || 1) : 1)) / capUnits;
    const maxW = this.photo ? 8 : MAX_NAME_CM;
    if (rawW * s > maxW) s = maxW / rawW;
    const a = radiusAt(PENDANT_Y); const b = a * depthAt(PENDANT_Y);
    const steps = 400; const lens = [0];
    for (let i = 1; i <= steps; i++) {
      const th = ((i - 0.5) / steps) * (Math.PI / 2);
      lens.push(lens[i - 1] + Math.hypot(a * Math.cos(th), b * Math.sin(th)) * (Math.PI / 2 / steps));
    }
    const thetaAt = (sArc) => {
      const sign = Math.sign(sArc); const v = Math.min(Math.abs(sArc), lens[steps]);
      let lo = 0; let hi = steps;
      while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (lens[mid] < v) lo = mid; else hi = mid; }
      const f = (v - lens[lo]) / Math.max(1e-6, lens[hi] - lens[lo]);
      return sign * ((lo + f) / steps) * (Math.PI / 2);
    };
    const lift = bevelT * s;                      // so the back face sits on the surface
    const letters = new Group();
    const ends = { l: { x: Infinity, y: 0 }, r: { x: -Infinity, y: 0 } };
    geos.forEach((g) => {
      const pos = g.attributes.position; const nor = g.attributes.normal;
      for (let i = 0; i < pos.count; i++) {
        const x = (pos.getX(i) - cx) * s; const y = (pos.getY(i) - cy) * s;
        const z = pos.getZ(i) * s + lift + 0.012;
        if (x < ends.l.x) { ends.l.x = x; ends.l.y = y; }
        if (x > ends.r.x) { ends.r.x = x; ends.r.y = y; }
        if (this.photo) {                     // gentle curve across the chest so highlights roll over the letters
          const k = 0.05; const sl = 2 * k * x; const il = 1 / Math.hypot(sl, 1);
          pos.setXYZ(i, PH.x + x, PH.y + y, z - k * x * x);
          const lx = nor.getX(i); const ly = nor.getY(i); const lz = nor.getZ(i);
          nor.setXYZ(i, (lx + lz * sl) * il, ly, (lz - lx * sl) * il);
          continue;
        }
        const fr = surfaceFrame(thetaAt(x), y + PENDANT_Y);
        pos.setXYZ(i, fr.P.x + fr.n.x * z, fr.P.y + fr.n.y * z, fr.P.z + fr.n.z * z);
        const lx = nor.getX(i); const ly = nor.getY(i); const lz = nor.getZ(i);
        nor.setXYZ(i,
          lx * fr.t.x + ly * fr.v.x + lz * fr.n.x,
          lx * fr.t.y + ly * fr.v.y + lz * fr.n.y,
          lx * fr.t.z + ly * fr.v.z + lz * fr.n.z);
      }
      pos.needsUpdate = true; nor.needsUpdate = true; g.computeBoundingSphere();
      const m = new Mesh(g, this.material); m.castShadow = true; m.receiveShadow = true; letters.add(m);
    });
    this.necklace.add(letters);
    if (this.photo) this.buildPhotoChain(new Vector3(PH.x + ends.l.x - 0.12, PH.y + ends.l.y, 0), new Vector3(PH.x + ends.r.x + 0.12, PH.y + ends.r.y, 0), false);
    else this.buildChain(ends, thetaAt);
    this.hasModel = true;
    this.stage.classList.add('is-rendered');
  }

  // Chain drawn over the photo: it follows the chain in the photo from the pendant up behind the neck.
  buildPhotoChain(leftStart, rightStart, jumpRings) {
    const w = (q) => new Vector3((q[0] - PHOTO.w / 2) / PHOTO.ppc, (PHOTO.h / 2 - q[1]) / PHOTO.ppc, 0);
    const paths = [
      [leftStart, [[576, 689], [552, 652], [529, 614], [507, 576], [486, 537], [465, 498], [446, 459], [428, 418], [410, 378], [394, 337], [378, 296], [363, 254], [350, 211], [337, 168], [325, 125], [318, 98]]],
      [rightStart, [[960, 689], [989, 654], [1018, 619], [1045, 583], [1072, 546], [1098, 509], [1123, 472], [1147, 434], [1171, 395], [1193, 356], [1215, 316], [1236, 275], [1256, 234], [1275, 193], [1293, 151], [1304, 124]]],
    ];
    const linkLen = 0.26;
    const linkGeo = new TorusGeometry(linkLen * 0.5, 0.044, 8, 20); linkGeo.scale(1, 0.62, 1);
    const dummy = new Object3D(); const tng = new Vector3(); const nrm = new Vector3(0, 0, 1); const b = new Vector3();
    paths.forEach(([start, list]) => {
      const base = list.map(w); const d = start.clone().sub(base[0]);
      const pts = base.map((q, i) => q.clone().addScaledVector(d, Math.pow(1 - i / (base.length - 1), 1.6)));
      const curve = new CatmullRomCurve3(pts, false, 'centripetal');
      const count = Math.floor(curve.getLength() / (linkLen * 0.74));
      const inst = new InstancedMesh(linkGeo, this.material, count); inst.castShadow = true;
      for (let i = 0; i < count; i++) {
        const u = (i + 0.5) / count;
        const q = curve.getPointAt(u); curve.getTangentAt(u, tng).normalize();
        b.crossVectors(nrm, tng).normalize();
        const m = new Matrix4();
        if (i % 2 === 0) m.makeBasis(tng, b, nrm); else m.makeBasis(tng, nrm, b.clone().negate());
        dummy.matrix.copy(m).setPosition(q);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        dummy.updateMatrix(); inst.setMatrixAt(i, dummy.matrix);
      }
      inst.instanceMatrix.needsUpdate = true; this.necklace.add(inst);
      if (jumpRings) {
        const r = new Mesh(new TorusGeometry(0.17, 0.045, 10, 28), this.material);
        r.position.copy(start); r.position.z = 0.05; r.castShadow = true; this.necklace.add(r);
      }
    });
  }

  buildChain(ends, thetaAt) {
    const ringR = 0.2; const tube = 0.04;
    const ringGeo = new TorusGeometry(ringR, tube * 1.3, 14, 36);
    const gap = ringR * 2.1;
    [-1, 1].forEach((side) => {                   // jump rings at each end of the name
      const e = side < 0 ? ends.l : ends.r;
      const th = thetaAt(e.x + side * ringR * 0.9);
      const ring = new Mesh(ringGeo, this.material);
      ring.position.copy(surf(th, PENDANT_Y + e.y, 0.07)); ring.rotation.y = th; ring.castShadow = true;
      this.necklace.add(ring);
    });
    this.chainSides((side) => {
      const e = side < 0 ? ends.l : ends.r;
      return { x0: Math.abs(e.x) + gap * 1.05, y0: PENDANT_Y + e.y };    // from the pendant's real end point
    });
  }

  // Loose V of chain over the shoulders and round the back of the neck, from a start point per side.
  chainSides(startFor) {
    const linkLen = 0.4;
    const linkGeo = new TorusGeometry(linkLen * 0.5, 0.05, 10, 24);
    linkGeo.scale(1.0, 0.62, 1.0);
    const dummy = new Object3D();
    const tng = new Vector3(); const nrm = new Vector3(); const b1 = new Vector3();
    [-1, 1].forEach((side) => {
      const { x0, y0 } = startFor(side);
      const yTop = -5.4;                          // rises over the shoulder line
      const thTop = 1.2;
      const xTop = radiusAt(yTop) * Math.sin(thTop);
      const pts = [];
      const nUp = 26;
      for (let i = 0; i <= nUp; i++) {            // loose V across the chest
        const t = i / nUp;
        const x = x0 + (xTop - x0) * t;
        const y = y0 + (yTop - y0) * t + Math.sin(Math.PI * t) * -0.35;
        const a = radiusAt(y);
        pts.push(surf(side * Math.asin(Math.min(0.999, x / a)), y, 0.1));
      }
      const nBack = 18;                           // up and round the back of the neck
      for (let i = 1; i <= nBack; i++) {
        const t = i / nBack;
        pts.push(surf(side * (thTop + (Math.PI - thTop) * t), yTop + (-2.6 - yTop) * Math.pow(t, 1.3), 0.1));
      }
      const curve = new CatmullRomCurve3(pts, false, 'centripetal');
      const count = Math.floor(curve.getLength() / (linkLen * 0.74));
      const inst = new InstancedMesh(linkGeo, this.material, count);
      inst.castShadow = true; inst.receiveShadow = true;
      for (let i = 0; i < count; i++) {
        const u = (i + 0.5) / count;
        const pos = curve.getPointAt(u);
        curve.getTangentAt(u, tng).normalize();
        const a = radiusAt(pos.y); const bb = a * depthAt(pos.y);
        nrm.set(pos.x / (a * a), 0, pos.z / (bb * bb)).normalize();
        b1.crossVectors(nrm, tng).normalize();
        if (new Vector3().crossVectors(tng, b1).dot(nrm) < 0) b1.negate();
        const m = new Matrix4();
        if (i % 2 === 0) m.makeBasis(tng, b1, nrm); else m.makeBasis(tng, nrm, b1.clone().negate());
        dummy.matrix.copy(m).setPosition(pos);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
      }
      inst.instanceMatrix.needsUpdate = true;
      this.necklace.add(inst);
    });
    const clasp = new Mesh(new TorusGeometry(0.24, 0.05, 12, 30), this.material);   // clasp ring at the back of the neck
    clasp.position.copy(surf(Math.PI, -2.6, 0.1)); clasp.castShadow = true;
    this.necklace.add(clasp);
  }

  // ---- coin pendants (Coin II: stone halo, Coin III: rope border) ----
  engravingMaps(text, family) {
    const S = 1024;
    const words = text.split(' ');
    let lines = [text];
    if (text.length > 12 && words.length > 1) {   // two lines only for longer, multi-word text
      let best = 0; let bestDiff = 1e9;
      for (let k = 1; k < words.length; k++) {
        const d = Math.abs(words.slice(0, k).join(' ').length - words.slice(k).join(' ').length);
        if (d < bestDiff) { bestDiff = d; best = k; }
      }
      lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')];
    }
    const probe = document.createElement('canvas').getContext('2d');
    let px = 380;
    const widest = (p) => { probe.font = `${p}px ${family}`; return Math.max(...lines.map((l) => probe.measureText(l).width)); };
    while (px > 36 && widest(px) > S * 0.84) px -= 6;
    const lineH = px * 1.15;
    const y0 = S / 2 - ((lines.length - 1) * lineH) / 2;
    const make = (bg, fg) => {
      const c = document.createElement('canvas'); c.width = S; c.height = S;
      const g = c.getContext('2d');
      g.fillStyle = bg; g.fillRect(0, 0, S, S);
      g.fillStyle = fg; g.font = `${px}px ${family}`; g.textAlign = 'center'; g.textBaseline = 'middle';
      lines.forEach((l, i) => g.fillText(l, S / 2, y0 + i * lineH));
      const t = new CanvasTexture(c); t.anisotropy = 8; return t;
    };
    const base = Math.round(this.metalRough * 255);
    return { bump: make('#ffffff', '#000000'), rough: make(`rgb(${base},${base},${base})`, 'rgb(170,170,170)'), map: make('#ffffff', '#6e6a64') };
  }

  async rebuildCoin() {
    const token = ++this.buildToken;
    const text = sanitize(this.state.text) || this.placeholder;
    const fontDef = this.fonts.find((f) => f.id === this.state.fontId) || this.fonts[0];
    const family = `"NNP ${fontDef.id}"`;
    try { await document.fonts.load(`64px ${family}`, text); } catch (e) { /* fall back to the default font */ }
    if (token !== this.buildToken) return;
    this.clearJewellery();

    this.engrave = this.engravingMaps(text, family);
    this.faceMaterial = new MeshPhysicalMaterial({
      metalness: 1, roughness: 1, roughnessMap: this.engrave.rough, bumpMap: this.engrave.bump, bumpScale: 3, map: this.engrave.map,
      clearcoat: 0.2, clearcoatRoughness: 0.2,
    });
    const pave = this.coinStyle === 'pave';
    if (!pave && !this.ropeMaterial) {            // twisted-rope bump texture for the Coin III border
      const c = document.createElement('canvas'); c.width = 512; c.height = 64;
      const g = c.getContext('2d'); const img = g.getImageData(0, 0, 512, 64);
      for (let y = 0; y < 64; y++) {
        for (let x = 0; x < 512; x++) {
          const v = 0.5 + 0.5 * Math.sin(2 * Math.PI * (44 * (x / 512) + y / 64));
          const k = (y * 512 + x) * 4; const val = 60 + v * 195;
          img.data[k] = img.data[k + 1] = img.data[k + 2] = val; img.data[k + 3] = 255;
        }
      }
      g.putImageData(img, 0, 0);
      this.ropeMaterial = new MeshPhysicalMaterial({
        metalness: 1, roughness: 0.22, clearcoat: 0.25, clearcoatRoughness: 0.15, bumpMap: new CanvasTexture(c), bumpScale: 2.2,
      });
    }
    this.applyMetal(this.state.metal);

    const coin = new Group();
    const add = (mesh, castShadow = true) => { mesh.castShadow = castShadow; coin.add(mesh); return mesh; };
    let R;
    if (!pave) {                                  // Coin III: twisted-rope border
      R = 0.9;
      add(new Mesh(new TorusGeometry(0.84, 0.078, 14, 140), this.ropeMaterial));
      const face = new Mesh(new CircleGeometry(0.775, 80), this.faceMaterial); face.position.z = 0.03; add(face, false);
      const back = new Mesh(new CircleGeometry(0.775, 80), this.material); back.position.z = -0.03; back.rotation.y = Math.PI; add(back, false);
      const wall = new Mesh(new CylinderGeometry(0.775, 0.775, 0.06, 80, 1, true), this.material); wall.rotation.x = Math.PI / 2; add(wall, false);
    } else {                                      // Coin II: engraved face inside a stone halo
      R = 0.95;
      const body = new Mesh(new CylinderGeometry(0.95, 0.95, 0.14, 96), this.material); body.rotation.x = Math.PI / 2; add(body);
      add(new Mesh(new TorusGeometry(0.68, 0.028, 10, 90), this.material)).position.z = 0.07;
      const face = new Mesh(new CircleGeometry(0.665, 80), this.faceMaterial); face.position.z = 0.075; add(face, false);
      if (!this.stoneMaterial) {
        this.stoneMaterial = new MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.05, roughness: 0.02, clearcoat: 1, flatShading: true, envMapIntensity: 4.5 });
      }
      const N = 28; const stones = new InstancedMesh(new IcosahedronGeometry(0.072, 1), this.stoneMaterial, N);
      const m4 = new Matrix4(); const q = new Quaternion(); const sc = new Vector3(1, 1, 0.62); const ps = new Vector3();
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        ps.set(Math.cos(a) * 0.815, Math.sin(a) * 0.815, 0.082);
        m4.compose(ps, q.identity(), sc); stones.setMatrixAt(i, m4);
      }
      stones.instanceMatrix.needsUpdate = true; stones.castShadow = true; coin.add(stones);
    }
    const bail = new Mesh(new TorusGeometry(0.15, 0.04, 10, 28), this.material);   // loop the chain runs through
    bail.scale.set(0.72, 1.55, 1); bail.position.set(0, R + 0.2, 0); add(bail);
    const jr = new Mesh(new TorusGeometry(0.07, 0.022, 8, 20), this.material);
    jr.rotation.y = Math.PI / 2; jr.position.set(0, R + 0.02, 0); add(jr);

    if (this.photo) {
      coin.position.set(PH.x, PH.y - 0.2, 0.12); coin.scale.setScalar(1.45);   // a little larger than life so the engraving can be read
      this.necklace.add(coin);
      this.buildPhotoChain(new Vector3(PH.x - 0.08, PH.y - 0.2 + (R + 0.3) * 1.45, 0), new Vector3(PH.x + 0.08, PH.y - 0.2 + (R + 0.3) * 1.45, 0), false);
      this.hasModel = true; this.stage.classList.add('is-rendered');
      return;
    }
    const fr = surfaceFrame(0, COIN_Y);
    coin.quaternion.setFromRotationMatrix(new Matrix4().makeBasis(fr.t, fr.v, fr.n));
    coin.position.copy(fr.P).addScaledVector(fr.n, 0.1);
    this.necklace.add(coin);
    const apexY = COIN_Y + R + 0.36;              // top of the bail, where the chain meets
    this.chainSides(() => ({ x0: 0.09, y0: apexY }));
    this.hasModel = true;
    this.stage.classList.add('is-rendered');
  }

  // ---- ID-bar curb bracelet on a velvet stand ----
  barEngraving(text, family) {
    const W = 2048; const H = 430;
    const probe = document.createElement('canvas').getContext('2d');
    let px = this.photo ? 520 : 340;
    const wid = (p) => { probe.font = `${p}px ${family}`; return probe.measureText(text).width; };
    while (px > 30 && (wid(px) > W * 0.86 || px > H * (this.photo ? 1.25 : 0.8))) px -= 6;
    const make = (bg, fg) => {
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const g = c.getContext('2d');
      g.fillStyle = bg; g.fillRect(0, 0, W, H);
      g.fillStyle = fg; g.font = `${px}px ${family}`; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.fillText(text, W / 2, H / 2 + px * 0.04);
      const t = new CanvasTexture(c); t.anisotropy = 8; return t;
    };
    const base = Math.round(this.metalRough * 255);
    return { bump: make('#ffffff', '#000000'), rough: make(`rgb(${base},${base},${base})`, 'rgb(170,170,170)'), map: this.photo ? make('#ffffff', '#5e5a52') : null };
  }

  async rebuildBracelet() {
    const token = ++this.buildToken;
    const text = sanitize(this.state.text) || this.placeholder;
    const fontDef = this.fonts.find((f) => f.id === this.state.fontId) || this.fonts[0];
    const family = `"NNP ${fontDef.id}"`;
    try { await document.fonts.load(`64px ${family}`, text); } catch (e) { /* fall back */ }
    if (token !== this.buildToken) return;
    this.clearJewellery();

    this.engrave = this.barEngraving(text, family);
    this.faceMaterial = new MeshPhysicalMaterial({
      metalness: 1, roughness: 1, roughnessMap: this.engrave.rough, bumpMap: this.engrave.bump, bumpScale: 2.2,
      clearcoat: 0.2, clearcoatRoughness: 0.2, map: this.engrave.map || null,
    });
    this.applyMetal(this.state.metal);

    const y = BR_Y;
    const a0 = standRadius(y); const b0 = a0 * ST_SQUASH;
    const arc = ellipseArcTheta(a0 + 0.1, b0 + 0.1);
    const L = this.photo ? 6.0 : 3.3; const H = this.photo ? 1.35 : 0.7; const T = 0.085;

    const bar = new BoxGeometry(L, H, T, 90, 5, 1);               // ID bar, bent round the stand
    const pos = bar.attributes.position; const nor = bar.attributes.normal;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i); const yy = pos.getY(i); const z = pos.getZ(i) + T / 2 + 0.06;
      const fr = ellipseFrame(a0, b0, arc(x), y + yy, z);
      pos.setXYZ(i, fr.P.x, fr.P.y, fr.P.z);
      const lx = nor.getX(i); const ly = nor.getY(i); const lz = nor.getZ(i);
      nor.setXYZ(i, lx * fr.t.x + lz * fr.n.x, ly, lx * fr.t.z + lz * fr.n.z);
    }
    pos.needsUpdate = true; nor.needsUpdate = true;
    const barMesh = new Mesh(bar, [this.material, this.material, this.material, this.material, this.faceMaterial, this.material]);
    barMesh.castShadow = true;
    this.necklace.add(barMesh);

    const loopGeo = new TorusGeometry(0.17, 0.048, 10, 28);        // end loops joining bar and chain
    const ends = [];
    [-1, 1].forEach((side) => {
      const th = arc(side * (L / 2 + 0.05));
      const fr = ellipseFrame(a0, b0, th, y, 0.16);
      const ring = new Mesh(loopGeo, this.material);
      ring.position.copy(fr.P); ring.rotation.y = th; ring.castShadow = true; this.necklace.add(ring);
      ends.push(th);
    });

    // curb chain: flattened, tilted links overlapping round the back of the stand
    const linkGeo = new TorusGeometry(0.29, 0.058, 10, 28); linkGeo.scale(1, 0.8, 1);
    const thL = ends[0] - 0.06; const thR = ends[1] + 0.06;
    const aC = a0 + 0.17; const bC = b0 + 0.17;
    const dummy = new Object3D(); const t = new Vector3(); const up = new Vector3(0, 1, 0);
    const n = new Vector3(); const v = new Vector3(); const nrm = new Vector3();
    // on a photo only the half of the chain facing the camera is drawn (the rest is behind the wrist)
    const segs = this.photo ? [[thR, Math.PI / 2 + 0.1], [-Math.PI / 2 - 0.1, thL]] : [[thR, Math.PI * 2 + thL]];
    segs.forEach(([t0, t1]) => {
      const pts = []; const N = 120;
      for (let i = 0; i <= N; i++) {
        const th = t0 + (t1 - t0) * (i / N);
        pts.push(ellipseFrame(aC, bC, th, y, 0).P);
      }
      const curve = new CatmullRomCurve3(pts, false, 'centripetal');
      const count = Math.floor(curve.getLength() / 0.34);
      const inst = new InstancedMesh(linkGeo, this.material, count);
      inst.castShadow = true;
          for (let i = 0; i < count; i++) {
        const u = (i + 0.5) / count;
        const p = curve.getPointAt(u); curve.getTangentAt(u, t).normalize();
        n.set(p.x / (aC * aC), 0, p.z / (bC * bC)).normalize();
        const roll = (i % 2 ? 1 : -1) * 0.3;                         // +-17 deg: links lie almost flat, overlapping
        v.copy(up).multiplyScalar(Math.cos(roll)).addScaledVector(n, Math.sin(roll)).normalize();
        nrm.crossVectors(t, v).normalize();
        v.crossVectors(nrm, t).normalize();
        dummy.matrix.copy(new Matrix4().makeBasis(t, v, nrm)).setPosition(p);
        dummy.matrix.decompose(dummy.position, dummy.quaternion, dummy.scale);
        dummy.updateMatrix(); inst.setMatrixAt(i, dummy.matrix);
      }
      inst.instanceMatrix.needsUpdate = true;
      this.necklace.add(inst);
    });

    if (!this.photo) {
      const cf = ellipseFrame(aC, bC, Math.PI, y, 0);                // lobster clasp at the back
      const clasp = new Mesh(new CapsuleGeometry(0.11, 0.42, 6, 14), this.material);
      clasp.position.copy(cf.P);
      clasp.quaternion.setFromRotationMatrix(new Matrix4().makeBasis(cf.t, up.clone(), cf.n));
      clasp.rotation.z += Math.PI / 2; clasp.castShadow = true;
      this.necklace.add(clasp);
      const cring = new Mesh(new TorusGeometry(0.15, 0.04, 8, 22), this.material);
      cring.position.copy(cf.P).addScaledVector(cf.t, -0.42); cring.rotation.y = Math.PI; this.necklace.add(cring);
    }

    this.hasModel = true;
    this.stage.classList.add('is-rendered');
  }

  // ---- monogram cufflinks: serif initials on a T-bar, shown as a pair on a velvet pad ----
  async rebuildCufflinks() {
    const token = ++this.buildToken;
    const raw = sanitize(this.state.text).replace(/\s+/g, '').toUpperCase();
    const text = (raw || this.placeholder).slice(0, 4);
    const font = await this.loadFont(this.state.fontId);
    if (token !== this.buildToken) return;
    this.clearJewellery();

    const size = 100; const cap = size * 0.7;
    const depthU = 7.5; const bevelT = 1.6;
    const n = text.length;
    const glyphs = []; let penX = 0; let prevAdv = 0;
    for (let i = 0; i < n; i++) {
      const g = font.charToGlyph(text[i]);
      const adv = ((g.advanceWidth || font.unitsPerEm) * size) / font.unitsPerEm;
      if (i > 0) penX += n === 2 ? prevAdv * 0.58 : prevAdv * 0.94;
      const dropDown = n === 2 && i === 1 ? cap * 0.46 : 0;        // 2 initials: the second steps down and right
      glyphs.push({ path: g.getPath(penX, dropDown, size) });
      prevAdv = adv;
    }
    const geos = [];
    glyphs.forEach((g) => {
      if (!g.path.commands.length) return;
      const shapes = pathToShapes(g.path, size * 0.014, font.outlinesFormat === 'cff');
      if (!shapes.length) return;
      geos.push(new ExtrudeGeometry(shapes, {
        depth: depthU, curveSegments: 12, bevelEnabled: true, bevelThickness: bevelT, bevelSize: 1.0, bevelSegments: 4,
      }));
    });
    const bb = new Box3();
    geos.forEach((g) => { g.computeBoundingBox(); bb.union(g.boundingBox); });
    const cx = (bb.min.x + bb.max.x) / 2; const cy = (bb.min.y + bb.max.y) / 2;
    const rawW = bb.max.x - bb.min.x; const rawH = bb.max.y - bb.min.y;
    let s = 1.15 / cap;
    if (rawW * s > 3.3) s = 3.3 / rawW;
    if (rawH * s > 1.9) s = 1.9 / rawH;
    geos.forEach((g) => { g.translate(-cx, -cy, 0); g.scale(s, s, s); });
    const faceH = rawH * s;

    const makeCufflink = () => {
      const c = new Group();
      const letters = new Group();
      geos.forEach((g) => { const m = new Mesh(g, this.material); m.castShadow = true; letters.add(m); });
      letters.position.z = CUFF_Z + bevelT * s;
      c.add(letters);
      const barY = -faceH * 0.12;
      const bar = new Mesh(new CylinderGeometry(0.105, 0.105, 1.7, 24), this.material);
      bar.rotation.z = Math.PI / 2; bar.position.set(0, barY, 0.13); bar.castShadow = true; c.add(bar);
      [-1, 1].forEach((side) => {
        const ball = new Mesh(new SphereGeometry(0.165, 20, 14), this.material);
        ball.position.set(side * 0.85, barY, 0.13); ball.castShadow = true; c.add(ball);
      });
      const postLen = CUFF_Z + bevelT * s - 0.13;
      const post = new Mesh(new CylinderGeometry(0.075, 0.075, postLen, 16), this.material);
      post.rotation.x = Math.PI / 2; post.position.set(0, barY, 0.13 + postLen / 2); post.castShadow = true; c.add(post);
      return c;
    };
    const left = makeCufflink(); left.position.set(-2.6, 0.15, 0); left.rotation.z = 0.05;
    const right = makeCufflink(); right.position.set(2.6, 0.15, 0); right.rotation.z = -0.05;
    this.necklace.add(left, right);
    this.hasModel = true;
    this.stage.classList.add('is-rendered');
  }

  // ---- rings: signet heads with an engraved face, or a sculpted letter on an open band ----
  faceEngraving(text, family, w, h) {
    const W = 1024; const H = Math.max(256, Math.round((1024 * h) / w));
    const words = text.split(' ');
    let lines = [text];
    if (text.length > 6 && words.length > 1) {
      let best = 1; let bd = 1e9;
      for (let k = 1; k < words.length; k++) {
        const d = Math.abs(words.slice(0, k).join(' ').length - words.slice(k).join(' ').length);
        if (d < bd) { bd = d; best = k; }
      }
      lines = [words.slice(0, best).join(' '), words.slice(best).join(' ')];
    }
    const probe = document.createElement('canvas').getContext('2d');
    let px = this.photo ? 760 : 420;
    const along = this.photo;                      // on the photo the text runs along the finger (the plate's long side) so it reads and fits more letters
    const lenMax = along ? H * 0.86 : W * 0.86; const thickMax = along ? W * 0.8 : H * 0.8;
    const fits = (p) => { probe.font = `${p}px ${family}`; return Math.max(...lines.map((l) => probe.measureText(l).width)) <= (this.photo ? lenMax : W * 0.74) && p * 1.15 * lines.length <= (this.photo ? thickMax : H * 0.72); };
    while (px > 30 && !fits(px)) px -= 6;
    const lh = px * 1.15; const y0 = H / 2 - ((lines.length - 1) * lh) / 2;
    const make = (bg, fg) => {
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const g = c.getContext('2d'); g.fillStyle = bg; g.fillRect(0, 0, W, H);
      g.fillStyle = fg; g.font = `${px}px ${family}`; g.textAlign = 'center'; g.textBaseline = 'middle';
      if (along) { g.translate(W / 2, H / 2); g.rotate(-Math.PI / 2); lines.forEach((l, i) => g.fillText(l, 0, (i - (lines.length - 1) / 2) * lh)); }
      else lines.forEach((l, i) => g.fillText(l, W / 2, y0 + i * lh));
      const t = new CanvasTexture(c); t.anisotropy = 8; t.repeat.set(1 / w, 1 / h); t.offset.set(0.5, 0.5); return t;
    };
    const base = Math.round(this.metalRough * 255);
    return { bump: make('#ffffff', '#000000'), rough: make(`rgb(${base},${base},${base})`, 'rgb(170,170,170)'), map: this.photo ? make('#ffffff', '#5e5a52') : null };
  }

  async rebuildRing() {
    const token = ++this.buildToken;
    const style = this.ringStyle;
    let text = sanitize(this.state.text);
    if (style === 'letter') text = (text.replace(/\s+/g, '')[0] || 'A').toUpperCase(); else text = text || this.placeholder;
    const fontDef = this.fonts.find((f) => f.id === this.state.fontId) || this.fonts[0];
    const family = `"NNP ${fontDef.id}"`;
    let jost = null;
    if (style === 'letter') jost = await this.loadFont('jost');
    else { try { await document.fonts.load(`64px ${family}`, text); } catch (e) { /* default font */ } }
    if (token !== this.buildToken) return;
    this.clearJewellery();
    if (!this.stoneMaterial) {
      this.stoneMaterial = new MeshPhysicalMaterial({ color: 0xffffff, metalness: 0.05, roughness: 0.02, clearcoat: 1, flatShading: true, envMapIntensity: 4.5 });
    }
    const rIn = FINGER_R + 0.03;
    const add = (m, shadow = true) => { m.castShadow = shadow; this.necklace.add(m); return m; };

    if (style === 'letter') {
      this.applyMetal(this.state.metal);
      const size = 100; const capU = size * 0.7;
      const glyph = jost.charToGlyph(text);
      const shapes = pathToShapes(glyph.getPath(0, 0, size), size * 0.012, false);
      const geo = new ExtrudeGeometry(shapes, {
        depth: 0.05 / 0.0143, curveSegments: 14, bevelEnabled: true, bevelThickness: 0.014 / 0.0143, bevelSize: 0.012 / 0.0143, bevelSegments: 3,
      });
      geo.computeBoundingBox();
      const bb = geo.boundingBox;
      const cx = (bb.min.x + bb.max.x) / 2; const cy = (bb.min.y + bb.max.y) / 2;
      const LS = this.photo ? 1.15 : 1;            // a bigger letter on the photo so it reads
      const s = LS / capU;                       // 1.0 cm tall capitals
      const Rp = rIn + 0.075;
      const widthCm = (bb.max.x - bb.min.x) * s;
      const pos = geo.attributes.position; const nor = geo.attributes.normal;
      for (let i = 0; i < pos.count; i++) {       // bend the letter round the finger
        const x = (pos.getX(i) - cx) * s; const y = (pos.getY(i) - cy) * s; const z = pos.getZ(i) * s;
        const th = x / Rp; const r = Rp + z;
        pos.setXYZ(i, r * Math.sin(th), y, r * Math.cos(th));
        const lx = nor.getX(i); const ly = nor.getY(i); const lz = nor.getZ(i);
        nor.setXYZ(i, lx * Math.cos(th) + lz * Math.sin(th), ly, -lx * Math.sin(th) + lz * Math.cos(th));
      }
      pos.needsUpdate = true; nor.needsUpdate = true; geo.computeBoundingSphere();
      add(new Mesh(geo, this.material));
      const gapA = this.photo ? 0 : widthCm / 2 / Rp;   // open band meeting the letter at both sides (a closed band under the letter on the photo, so it reads as a ring)
      const bt = this.photo ? 0.15 : 0.1; const bw = this.photo ? 0.22 : 0.15;
      add(new Mesh(ringBandGeometry({ rIn, tB: bt, wB: bw, tH: bt, wH: bw, gap: gapA, sigma: 1 }), this.material));
      if (!this.photo) [-1, 1].forEach((side) => {
        const th = side * gapA; const r = rIn + 0.05;
        const cap = new Mesh(new SphereGeometry(0.075, 14, 10), this.material);
        cap.position.set(Math.sin(th) * r, 0, Math.cos(th) * r); add(cap);
      });
      // stones along the left half of the letter: raster the glyph, keep points where a stone fits
      const K = 220; const cv = document.createElement('canvas'); cv.width = K; cv.height = K;
      const g2 = cv.getContext('2d');
      const pxPerCm = K / (1.8 * LS);
      glyph.getPath(K / 2 - cx * s * pxPerCm, K / 2 + cy * s * pxPerCm, size * s * pxPerCm).draw(g2);
      g2.fillStyle = '#fff';
      const gp = glyph.getPath(K / 2 - cx * s * pxPerCm, K / 2 + cy * s * pxPerCm, size * s * pxPerCm);
      g2.clearRect(0, 0, K, K); gp.fill = '#fff'; gp.draw(g2);
      const data = g2.getImageData(0, 0, K, K).data;
      const inside = (px2, py2) => data[(Math.round(py2) * K + Math.round(px2)) * 4 + 3] > 128;
      const rS = 0.043; const rPx = rS * pxPerCm; const step = rS * 2.1 * pxPerCm;
      const pts = [];
      for (let yy = rPx; yy < K - rPx; yy += step) {
        for (let xx = rPx; xx < K - rPx; xx += step) {
          if (!inside(xx, yy)) continue;
          let ok = true;
          for (let a = 0; a < 8 && ok; a++) ok = inside(xx + Math.cos((a * Math.PI) / 4) * rPx * 1.05, yy + Math.sin((a * Math.PI) / 4) * rPx * 1.05);
          const xCm = (xx - K / 2) / pxPerCm;
          if (ok && xCm < -widthCm * 0.02 && xCm < 0.05) pts.push([xCm, -(yy - K / 2) / pxPerCm]);
        }
      }
      if (pts.length) {
        const stones = new InstancedMesh(new IcosahedronGeometry(rS, 1), this.stoneMaterial, pts.length);
        const m4 = new Matrix4(); const q = new Quaternion(); const sc = new Vector3(1, 1, 0.6); const ps = new Vector3();
        pts.forEach(([x, y], i) => {
          const th = x / Rp; const r = Rp + 0.075 + 0.012;
          ps.set(r * Math.sin(th), y, r * Math.cos(th));
          q.setFromAxisAngle(new Vector3(0, 1, 0), th);
          m4.compose(ps, q, sc); stones.setMatrixAt(i, m4);
        });
        stones.instanceMatrix.needsUpdate = true; stones.castShadow = true; this.necklace.add(stones);
      }
      this.hasModel = true; this.stage.classList.add('is-rendered');
      return;
    }

    // signet styles
    const cfg = {
      'studded-oval': { outer: () => ovalShape(0.6, 0.74), plate: () => ovalShape(0.43, 0.57), band: { tH: 0.2, wH: 0.9 } },
      'plain-oval': { outer: () => ovalShape(0.64, 0.8), plate: () => ovalShape(0.57, 0.73), band: { tH: 0.2, wH: 1.05 } },
      cushion: { outer: () => cushionShape(0.68, 0.6, 0.26), plate: () => cushionShape(0.56, 0.48, 0.2), band: { tH: 0.2, wH: 0.9 } },
    }[style];
    if (!cfg) return;
    const plateShape = cfg.plate();
    const pb = new Box3();
    plateShape.getPoints(40).forEach((p) => pb.expandByPoint(new Vector3(p.x, p.y, 0)));
    const pw = pb.max.x - pb.min.x; const ph = pb.max.y - pb.min.y;
    this.engrave = this.faceEngraving(text, family, pw, ph);
    this.faceMaterial = new MeshPhysicalMaterial({
      metalness: 1, roughness: 1, roughnessMap: this.engrave.rough, bumpMap: this.engrave.bump, bumpScale: 2.0, clearcoat: 0.2, clearcoatRoughness: 0.2, map: this.engrave.map || null,
    });
    this.applyMetal(this.state.metal);

    add(new Mesh(ringBandGeometry({ rIn, tB: 0.13, wB: 0.27, tH: cfg.band.tH, wH: cfg.band.wH, sigma: 0.85 }), this.material));
    const headFrom = this.necklace.children.length;
    const zBack = 0.8; const depth = 0.3; const bev = 0.04;
    const slab = new Mesh(new ExtrudeGeometry(cfg.outer(), { depth, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelSegments: 3, curveSegments: 48 }), this.material);
    slab.position.z = zBack + bev; add(slab);
    const zFront = zBack + depth + 2 * bev;
    const plate = new Mesh(new ExtrudeGeometry(plateShape, { depth: 0.035, bevelEnabled: true, bevelThickness: 0.012, bevelSize: 0.012, bevelSegments: 2, curveSegments: 48 }), this.material);
    plate.position.z = zFront; add(plate, false);
    const face = new Mesh(new ShapeGeometry(plateShape, 48), this.faceMaterial);
    face.position.z = zFront + 0.035 + 0.012 + 0.002; add(face, false);
    if (style === 'studded-oval') {               // halo of stones between the rim and the plate
      const rx = 0.52; const ry = 0.66; const N = 52;
      const stones = new InstancedMesh(new IcosahedronGeometry(0.034, 1), this.stoneMaterial, N);
      const m4 = new Matrix4(); const q = new Quaternion(); const sc = new Vector3(1, 1, 0.65); const ps = new Vector3();
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        ps.set(Math.cos(a) * rx, Math.sin(a) * ry, zFront + 0.02);
        m4.compose(ps, q.identity(), sc); stones.setMatrixAt(i, m4);
      }
      stones.instanceMatrix.needsUpdate = true; stones.castShadow = true; this.necklace.add(stones);
    }
    if (this.photo) {                             // on the photo the head is larger than life so the engraving can be read; the band stays finger-sized
      const head = new Group();
      this.necklace.children.slice(headFrom).forEach((m) => head.add(m));
      head.scale.set(FINGER.head, FINGER.head * 1.15, 1);
      this.necklace.add(head);
    }
    this.hasModel = true; this.stage.classList.add('is-rendered');
  }

  tick(now) {
    requestAnimationFrame(this.tick);
    if (!this.visible || !this.hasModel) return;
    const t = (now - this.clockStart) / 1000;
    const dt = Math.min(0.25, Math.max(0, (now - (this.lastNow || now)) / 1000)); this.lastNow = now;
    if (Math.abs(this.viewTarget - this.viewT) > 0.001) {          // time-based, so it matches at any frame rate
      this.viewT += (this.viewTarget - this.viewT) * (1 - Math.exp(-7 * dt));
      this.updateCamera();
    }
    const tiltK = 1 - 0.65 * this.viewT;
    const idleY = this.reduceMotion ? 0 : Math.sin(t * 0.6) * 0.1;
    const ty = (this.pointer.x * 0.6 + idleY) * tiltK;
    const tx = this.pointer.y * 0.1;
    this.rot.y += (ty - this.rot.y) * 0.06;
    this.rot.x += (tx - this.rot.x) * 0.06;
    if (!this.photo) { this.rig.rotation.y = this.rot.y; this.rig.rotation.x = this.rot.x; }
    this.renderer.render(this.scene, this.camera);
  }
}

// ---------------------------------------------------------------- page wiring
function webglOK() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

function init() {
  const stage = document.querySelector('[data-nnp-stage]');
  if (!stage) return;
  if (!webglOK()) { stage.setAttribute('hidden', ''); return; }

  const fonts = JSON.parse(stage.getAttribute('data-fonts') || '[]');
  if (!fonts.length) return;
  const nameInput = document.querySelector('[data-personalization-input]');
  const fontButtons = Array.from(document.querySelectorAll('[data-nnp-font]'));
  const fontField = document.querySelector('[data-nnp-font-field]');

  const preview = new NamePreview(stage, { fonts });
  if (/nnpdebug/.test(location.search)) window.__nnp = preview;
  stage.classList.add('is-ready');

  const currentMetal = () => {
    const sel = document.querySelector('[data-color-chips] .is-selected');
    if (sel) return metalFromLabel(sel.getAttribute('data-color-value'));
    const opt = document.querySelector('.product__option--color select');
    return metalFromLabel(opt ? opt.value : 'gold');
  };
  const setSwatchText = (text) => {
    fontButtons.forEach((b) => { b.querySelector('[data-nnp-sample]').textContent = text || stage.dataset.sample || 'Name'; });
  };
  const pickFont = (id) => {
    fontButtons.forEach((b) => {
      const on = b.getAttribute('data-nnp-font') === id;
      b.classList.toggle('is-selected', on);
      b.setAttribute('aria-checked', on ? 'true' : 'false');
    });
    const def = fonts.find((f) => f.id === id);
    if (fontField && def) fontField.value = def.label;
    preview.update({ fontId: id });
  };
  fontButtons.forEach((b) => b.addEventListener('click', () => pickFont(b.getAttribute('data-nnp-font'))));

  let debounce;
  const onName = () => {
    const v = nameInput ? nameInput.value : '';
    setSwatchText(v);
    clearTimeout(debounce);
    debounce = setTimeout(() => preview.update({ text: v }), 60);
  };
  if (nameInput) nameInput.addEventListener('input', onName);

  const syncMetal = () => setTimeout(() => preview.update({ metal: currentMetal() }), 0);
  document.addEventListener('click', (e) => { if (e.target.closest('[data-color-chips]')) syncMetal(); });
  document.addEventListener('change', (e) => { if (e.target.closest('.product__option')) syncMetal(); });

  preview.applyMetal(currentMetal());
  const toggle = stage.querySelector('[data-nnp-view-toggle]');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const on = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', on ? 'true' : 'false');
      toggle.textContent = on ? 'Worn view' : 'Close-up';
      preview.setView(on);
    });
  }
  const startFont = fonts.find((f) => f.id === stage.dataset.defaultFont) || fonts[0];
  pickFont(startFont.id);
  onName();
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
else init();
