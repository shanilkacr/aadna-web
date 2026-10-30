(()=>{var qd=(n,e)=>()=>{try{return e||n((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Yu=qd(()=>{});var Yd=0,fh=1,Zd=2;var bu=1,cc=2,cn=3,ci=0,At=1,zn=2,oi=0,mr=1,dh=2,ph=3,mh=4,Jd=5,Ri=100,$d=101,Kd=102,Qd=103,jd=104,ep=200,tp=201,np=202,ip=203,Go=204,Ho=205,rp=206,sp=207,ap=208,op=209,lp=210,cp=211,hp=212,up=213,fp=214,Vo=0,Wo=1,Xo=2,yr=3,qo=4,Yo=5,Zo=6,Jo=7,Mu=0,dp=1,pp=2,li=0,mp=1,gp=2,vp=3,hc=4,xp=5,yp=6,_p=7;var wu=300,_r=301,Sr=302,$o=303,Ko=304,Fa=306,br=1e3,Ui=1001,Qo=1002,Wt=1003,Sp=1004;var Us=1005;var _n=1006,oo=1007;var Li=1008;var Wn=1009,Tu=1010,Eu=1011,as=1012,uc=1013,Di=1014,Sn=1015,ms=1016,fc=1017,dc=1018,Mr=1020,Au=35902,Cu=1021,Ru=1022,hn=1023,Iu=1024,Pu=1025,gr=1026,wr=1027,pc=1028,mc=1029,Uu=1030,gc=1031;var vc=1033,ra=33776,sa=33777,aa=33778,oa=33779,jo=35840,el=35841,tl=35842,nl=35843,il=36196,rl=37492,sl=37496,al=37808,ol=37809,ll=37810,cl=37811,hl=37812,ul=37813,fl=37814,dl=37815,pl=37816,ml=37817,gl=37818,vl=37819,xl=37820,yl=37821,la=36492,_l=36494,Sl=36495,Lu=36283,bl=36284,Ml=36285,wl=36286;var ca=2300,Tl=2301,lo=2302,gh=2400,vh=2401,xh=2402;var bp=3200,Mp=3201;var Du=0,wp=1,ai="",Bt="srgb",Lr="srgb-linear",Na="linear",ot="srgb";var Ki=7680;var yh=519,Tp=512,Ep=513,Ap=514,Fu=515,Cp=516,Rp=517,Ip=518,Pp=519,_h=35044;var Sh="300 es",Gn=2e3,ha=2001,hi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bh=1234567,ts=Math.PI/180,os=180/Math.PI;function Hi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]).toLowerCase()}function St(n,e,t){return Math.max(e,Math.min(t,n))}function xc(n,e){return(n%e+e)%e}function Up(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Lp(n,e,t){return n!==e?(t-n)/(e-n):0}function ns(n,e,t){return(1-t)*n+t*e}function Dp(n,e,t,i){return ns(n,e,1-Math.exp(-t*i))}function Fp(n,e=1){return e-Math.abs(xc(n,e*2)-e)}function Np(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Op(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function kp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Bp(n,e){return n+Math.random()*(e-n)}function zp(n){return n*(.5-Math.random())}function Gp(n){n!==void 0&&(bh=n);let e=bh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Hp(n){return n*ts}function Vp(n){return n*os}function Wp(n){return(n&n-1)===0&&n!==0}function Xp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function qp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Yp(n,e,t,i,r){let s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),f=s((e-i)/2),u=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*h,l*f,l*u,o*c);break;case"YZY":n.set(l*u,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*u,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*d,o*c);break;case"YXY":n.set(l*d,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ft(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Dr={DEG2RAD:ts,RAD2DEG:os,generateUUID:Hi,clamp:St,euclideanModulo:xc,mapLinear:Up,inverseLerp:Lp,lerp:ns,damp:Dp,pingpong:Fp,smoothstep:Np,smootherstep:Op,randInt:kp,randFloat:Bp,randFloatSpread:zp,seededRandom:Gp,degToRad:Hp,radToDeg:Vp,isPowerOfTwo:Wp,ceilPowerOfTwo:Xp,floorPowerOfTwo:qp,setQuaternionFromProperEuler:Yp,normalize:Ft,denormalize:fr},re=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ze=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],v=r[0],m=r[3],p=r[6],S=r[1],x=r[4],y=r[7],C=r[2],w=r[5],E=r[8];return s[0]=a*v+o*S+l*C,s[3]=a*m+o*x+l*w,s[6]=a*p+o*y+l*E,s[1]=c*v+h*S+f*C,s[4]=c*m+h*x+f*w,s[7]=c*p+h*y+f*E,s[2]=u*v+d*S+g*C,s[5]=u*m+d*x+g*w,s[8]=u*p+d*y+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*s,d=c*s-a*l,g=t*f+i*u+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(r*c-h*i)*v,e[2]=(o*i-r*a)*v,e[3]=u*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(co.makeScale(e,t)),this}rotate(e){return this.premultiply(co.makeRotation(-e)),this}translate(e,t){return this.premultiply(co.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},co=new Ze;function Nu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ua(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Zp(){let n=ua("canvas");return n.style.display="block",n}var Mh={};function jr(n){n in Mh||(Mh[n]=!0,console.warn(n))}function Jp(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function $p(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Kp(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var nt={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(n,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(n.r=Hn(n.r),n.g=Hn(n.g),n.b=Hn(n.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(n.applyMatrix3(this.spaces[e].toXYZ),n.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(n.r=vr(n.r),n.g=vr(n.g),n.b=vr(n.b))),n},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ai?Na:this.spaces[n].transfer},getLuminanceCoefficients:function(n,e=this.workingColorSpace){return n.fromArray(this.spaces[e].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,e,t){return n.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var wh=[.64,.33,.3,.6,.15,.06],Th=[.2126,.7152,.0722],Eh=[.3127,.329],Ah=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);nt.define({[Lr]:{primaries:wh,whitePoint:Eh,transfer:Na,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:Th,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:wh,whitePoint:Eh,transfer:ot,toXYZ:Ah,fromXYZ:Ch,luminanceCoefficients:Th,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}});var Qi,El=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=ua("canvas")),Qi.width=e.width,Qi.height=e.height;let i=Qi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qp=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qp++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ho(r[a].image)):s.push(ho(r[a]))}else s=ho(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function ho(n){return typeof HTMLImageElement!="undefined"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&n instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&n instanceof ImageBitmap?El.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jp=0,zt=class n extends hi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ui,r=Ui,s=_n,a=Li,o=hn,l=Wn,c=n.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=Hi(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case Qo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case Qo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};zt.DEFAULT_IMAGE=null;zt.DEFAULT_MAPPING=wu;zt.DEFAULT_ANISOTROPY=1;var lt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,y=(d+1)/2,C=(p+1)/2,w=(h+u)/4,E=(f+v)/4,T=(g+m)/4;return x>y&&x>C?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=w/i,s=E/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=T/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=E/s,r=T/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-v)/S,this.z=(u-h)/S,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Al=class extends hi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new zt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends Al{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},da=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cl=class extends zt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jt=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3],u=s[a+0],d=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(o===1){e[t+0]=u,e[t+1]=d,e[t+2]=g,e[t+3]=v;return}if(f!==v||l!==u||c!==d||h!==g){let m=1-o,p=l*u+c*d+h*g+f*v,S=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let C=Math.sqrt(x),w=Math.atan2(C,p*S);m=Math.sin(m*w)/C,o=Math.sin(o*w)/C}let y=o*S;if(l=l*m+u*y,c=c*m+d*y,h=h*m+g*y,f=f*m+v*y,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=s[a],u=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+h*f+l*d-c*u,e[t+1]=l*g+h*u+c*f-o*d,e[t+2]=c*g+h*d+o*u-l*f,e[t+3]=h*g-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),f=o(s/2),u=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=i+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*f+this._w*u,this._x=i*f+this._x*u,this._y=r*f+this._y*u,this._z=s*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-s*f,this.z=r+l*f+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return uo.copy(this).projectOnVector(e),this.sub(uo)}reflect(e){return this.sub(uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(St(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uo=new U,Rh=new jt,qt=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,an):an.fromBufferAttribute(s,a),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ls.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ls.copy(i.boundingBox)),Ls.applyMatrix4(e.matrixWorld),this.union(Ls)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qr),Ds.subVectors(this.max,qr),ji.subVectors(e.a,qr),er.subVectors(e.b,qr),tr.subVectors(e.c,qr),ei.subVectors(er,ji),ti.subVectors(tr,er),bi.subVectors(ji,tr);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-bi.z,bi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,bi.z,0,-bi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-bi.y,bi.x,0];return!fo(t,ji,er,tr,Ds)||(t=[1,0,0,0,1,0,0,0,1],!fo(t,ji,er,tr,Ds))?!1:(Fs.crossVectors(ei,ti),t=[Fs.x,Fs.y,Fs.z],fo(t,ji,er,tr,Ds))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Dn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Dn=[new U,new U,new U,new U,new U,new U,new U,new U],an=new U,Ls=new qt,ji=new U,er=new U,tr=new U,ei=new U,ti=new U,bi=new U,qr=new U,Ds=new U,Fs=new U,Mi=new U;function fo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Mi.fromArray(n,s);let o=r.x*Math.abs(Mi.x)+r.y*Math.abs(Mi.y)+r.z*Math.abs(Mi.z),l=e.dot(Mi),c=t.dot(Mi),h=i.dot(Mi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var em=new qt,Yr=new U,po=new U,Fi=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):em.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Yr.subVectors(e,this.center);let t=Yr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Yr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(po.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Yr.copy(e.center).add(po)),this.expandByPoint(Yr.copy(e.center).sub(po))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Fn=new U,mo=new U,Ns=new U,ni=new U,go=new U,Os=new U,vo=new U,Rl=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Fn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Fn.copy(this.origin).addScaledVector(this.direction,t),Fn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mo.copy(e).add(t).multiplyScalar(.5),Ns.copy(t).sub(e).normalize(),ni.copy(this.origin).sub(mo);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Ns),o=ni.dot(this.direction),l=-ni.dot(Ns),c=ni.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=s*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*s+o)),u=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(f=Math.max(0,-(a*s+o)),u=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+u*(u+2*l)+c);else u=a>0?-s:s,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(mo).addScaledVector(Ns,u),d}intersectSphere(e,t){Fn.subVectors(e.center,this.origin);let i=Fn.dot(this.direction),r=Fn.dot(Fn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Fn)!==null}intersectTriangle(e,t,i,r,s){go.subVectors(t,e),Os.subVectors(i,e),vo.crossVectors(go,Os);let a=this.direction.dot(vo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ni.subVectors(this.origin,e);let l=o*this.direction.dot(Os.crossVectors(ni,Os));if(l<0)return null;let c=o*this.direction.dot(go.cross(ni));if(c<0||l+c>a)return null;let h=-o*ni.dot(vo);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},et=class n{constructor(e,t,i,r,s,a,o,l,c,h,f,u,d,g,v,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,f,u,d,g,v,m)}set(e,t,i,r,s,a,o,l,c,h,f,u,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),a=1/nr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){let u=a*h,d=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=u-v*c,t[9]=-o*l,t[2]=v-u*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,g=c*h,v=c*f;t[0]=u+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-g,t[6]=v+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,g=c*h,v=c*f;t[0]=u-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,g=o*h,v=o*f;t[0]=l*h,t[4]=g*c-d,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-u*f,t[8]=g*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+g,t[10]=u-v*f}else if(e.order==="XZY"){let u=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+v,t[5]=a*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*h,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tm,e,nm)}lookAt(e,t,i){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),ii.crossVectors(i,Ht),ii.lengthSq()===0&&(Math.abs(i.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),ii.crossVectors(i,Ht)),ii.normalize(),ks.crossVectors(Ht,ii),r[0]=ii.x,r[4]=ks.x,r[8]=Ht.x,r[1]=ii.y,r[5]=ks.y,r[9]=Ht.y,r[2]=ii.z,r[6]=ks.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],S=i[3],x=i[7],y=i[11],C=i[15],w=r[0],E=r[4],T=r[8],b=r[12],_=r[1],I=r[5],k=r[9],D=r[13],L=r[2],G=r[6],z=r[10],Z=r[14],N=r[3],K=r[7],ie=r[11],Q=r[15];return s[0]=a*w+o*_+l*L+c*N,s[4]=a*E+o*I+l*G+c*K,s[8]=a*T+o*k+l*z+c*ie,s[12]=a*b+o*D+l*Z+c*Q,s[1]=h*w+f*_+u*L+d*N,s[5]=h*E+f*I+u*G+d*K,s[9]=h*T+f*k+u*z+d*ie,s[13]=h*b+f*D+u*Z+d*Q,s[2]=g*w+v*_+m*L+p*N,s[6]=g*E+v*I+m*G+p*K,s[10]=g*T+v*k+m*z+p*ie,s[14]=g*b+v*D+m*Z+p*Q,s[3]=S*w+x*_+y*L+C*N,s[7]=S*E+x*I+y*G+C*K,s[11]=S*T+x*k+y*z+C*ie,s[15]=S*b+x*D+y*Z+C*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*o*u+i*c*u+r*o*d-i*l*d)+v*(+t*l*d-t*c*u+s*a*u-r*a*d+r*c*h-s*l*h)+m*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*h-i*c*h)+p*(-r*o*h-t*l*f+t*o*u+r*a*f-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],S=f*m*c-v*u*c+v*l*d-o*m*d-f*l*p+o*u*p,x=g*u*c-h*m*c-g*l*d+a*m*d+h*l*p-a*u*p,y=h*v*c-g*f*c+g*o*d-a*v*d-h*o*p+a*f*p,C=g*f*l-h*v*l-g*o*u+a*v*u+h*o*m-a*f*m,w=t*S+i*x+r*y+s*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return e[0]=S*E,e[1]=(v*u*s-f*m*s-v*r*d+i*m*d+f*r*p-i*u*p)*E,e[2]=(o*m*s-v*l*s+v*r*c-i*m*c-o*r*p+i*l*p)*E,e[3]=(f*l*s-o*u*s-f*r*c+i*u*c+o*r*d-i*l*d)*E,e[4]=x*E,e[5]=(h*m*s-g*u*s+g*r*d-t*m*d-h*r*p+t*u*p)*E,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*E,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*d+t*l*d)*E,e[8]=y*E,e[9]=(g*f*s-h*v*s-g*i*d+t*v*d+h*i*p-t*f*p)*E,e[10]=(a*v*s-g*o*s+g*i*c-t*v*c-a*i*p+t*o*p)*E,e[11]=(h*o*s-a*f*s-h*i*c+t*f*c+a*i*d-t*o*d)*E,e[12]=C*E,e[13]=(h*v*r-g*f*r+g*i*u-t*v*u-h*i*m+t*f*m)*E,e[14]=(g*o*r-a*v*r-g*i*l+t*v*l+a*i*m-t*o*m)*E,e[15]=(a*f*r-h*o*r+h*i*l-t*f*l-a*i*u+t*o*u)*E,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,f=o+o,u=s*c,d=s*h,g=s*f,v=a*h,m=a*f,p=o*f,S=l*c,x=l*h,y=l*f,C=i.x,w=i.y,E=i.z;return r[0]=(1-(v+p))*C,r[1]=(d+y)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(u+p))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(g+x)*E,r[9]=(m-S)*E,r[10]=(1-(u+v))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=nr.set(r[0],r[1],r[2]).length(),a=nr.set(r[4],r[5],r[6]).length(),o=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],on.copy(this);let c=1/s,h=1/a,f=1/o;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=f,on.elements[9]*=f,on.elements[10]*=f,t.setFromRotationMatrix(on),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),f=(t+e)/(t-e),u=(i+r)/(i-r),d,g;if(o===Gn)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ha)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn){let l=this.elements,c=1/(t-e),h=1/(i-r),f=1/(a-s),u=(t+e)*c,d=(i+r)*h,g,v;if(o===Gn)g=(a+s)*f,v=-2*f;else if(o===ha)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},nr=new U,on=new et,tm=new U(0,0,0),nm=new U(1,1,1),ii=new U,ks=new U,Ht=new U,Ih=new et,Ph=new jt,bn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],f=r[2],u=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ih.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ih,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},im=0,Uh=new U,ir=new jt,Nn=new et,Bs=new U,Zr=new U,rm=new U,sm=new jt,Lh=new U(1,0,0),Dh=new U(0,1,0),Fh=new U(0,0,1),Nh={type:"added"},am={type:"removed"},rr={type:"childadded",child:null},xo={type:"childremoved",child:null},Ct=class n extends hi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new bn,i=new jt,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new et},normalMatrix:{value:new Ze}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Dh,e)}rotateZ(e){return this.rotateOnAxis(Fh,e)}translateOnAxis(e,t){return Uh.copy(e).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Dh,e)}translateZ(e){return this.translateOnAxis(Fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Bs.copy(e):Bs.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Zr,Bs,this.up):Nn.lookAt(Bs,Zr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(Nn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),rr.child=e,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(am),xo.child=e,this.dispatchEvent(xo),xo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,e,rm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zr,sm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ln=new U,On=new U,yo=new U,kn=new U,sr=new U,ar=new U,Oh=new U,_o=new U,So=new U,bo=new U,Mo=new lt,wo=new lt,To=new lt,Ii=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ln.subVectors(e,t),r.cross(ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ln.subVectors(r,t),On.subVectors(i,t),yo.subVectors(e,t);let a=ln.dot(ln),o=ln.dot(On),l=ln.dot(yo),c=On.dot(On),h=On.dot(yo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(a,kn.y),l.addScaledVector(o,kn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Mo.setScalar(0),wo.setScalar(0),To.setScalar(0),Mo.fromBufferAttribute(e,t),wo.fromBufferAttribute(e,i),To.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Mo,s.x),a.addScaledVector(wo,s.y),a.addScaledVector(To,s.z),a}static isFrontFacing(e,t,i,r){return ln.subVectors(i,t),On.subVectors(e,t),ln.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),On.subVectors(this.a,this.b),ln.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;sr.subVectors(r,i),ar.subVectors(s,i),_o.subVectors(e,i);let l=sr.dot(_o),c=ar.dot(_o);if(l<=0&&c<=0)return t.copy(i);So.subVectors(e,r);let h=sr.dot(So),f=ar.dot(So);if(h>=0&&f<=h)return t.copy(r);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(sr,a);bo.subVectors(e,s);let d=sr.dot(bo),g=ar.dot(bo);if(g>=0&&d<=g)return t.copy(s);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ar,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Oh.subVectors(s,r),o=(f-h)/(f-h+(d-g)),t.copy(r).addScaledVector(Oh,o);let p=1/(m+v+u);return a=v*p,o=u*p,t.copy(i).addScaledVector(sr,a).addScaledVector(ar,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},zs={h:0,s:0,l:0};function Eo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Xe=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=xc(e,1),t=St(t,0,1),i=St(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Eo(a,s,e+1/3),this.g=Eo(a,s,e),this.b=Eo(a,s,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=Ou[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return nt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(St(Lt.r*255,0,255))*65536+Math.round(St(Lt.g*255,0,255))*256+Math.round(St(Lt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.fromWorkingColorSpace(Lt.copy(this),t);let i=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=nt.workingColorSpace){return nt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Bt){nt.fromWorkingColorSpace(Lt.copy(this),e);let t=Lt.r,i=Lt.g,r=Lt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(zs);let i=ns(ri.h,zs.h,t),r=ns(ri.s,zs.s,t),s=ns(ri.l,zs.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Lt=new Xe;Xe.NAMES=Ou;var om=0,ui=class extends hi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:om++}),this.uuid=Hi(),this.name="",this.blending=mr,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Go,this.blendDst=Ho,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(i.blending=this.blending),this.side!==ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Go&&(i.blendSrc=this.blendSrc),this.blendDst!==Ho&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Mn=class extends ui{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=Mu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var _t=new U,Gs=new re,Xt=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_h,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_h&&(e.usage=this.usage),e}};var ma=class extends Xt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ga=class extends Xt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Qe=class extends Xt{constructor(e,t,i){super(new Float32Array(e),t,i)}},lm=0,Kt=new et,Ao=new Ct,or=new U,Vt=new qt,Jr=new qt,Et=new U,Rt=class n extends hi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Nu(e)?ga:ma)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return Ao.lookAt(e),Ao.updateMatrix(),this.applyMatrix4(Ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let r=0,s=e.length;r<s;r++){let a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(i,3))}else{for(let i=0,r=t.count;i<r;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];Jr.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(Vt.min,Jr.min),Vt.expandByPoint(Et),Et.addVectors(Vt.max,Jr.max),Vt.expandByPoint(Et)):(Vt.expandByPoint(Jr.min),Vt.expandByPoint(Jr.max))}Vt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Et.fromBufferAttribute(o,c),l&&(or.fromBufferAttribute(e,c),Et.add(or)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let T=0;T<i.count;T++)o[T]=new U,l[T]=new U;let c=new U,h=new U,f=new U,u=new re,d=new re,g=new re,v=new U,m=new U;function p(T,b,_){c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,b),f.fromBufferAttribute(i,_),u.fromBufferAttribute(s,T),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,_),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[T].add(v),o[b].add(v),o[_].add(v),l[T].add(m),l[b].add(m),l[_].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let T=0,b=S.length;T<b;++T){let _=S[T],I=_.start,k=_.count;for(let D=I,L=I+k;D<L;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let x=new U,y=new U,C=new U,w=new U;function E(T){C.fromBufferAttribute(r,T),w.copy(C);let b=o[T];x.copy(b),x.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(w,b);let I=y.dot(l[T])<0?-1:1;a.setXYZW(T,x.x,x.y,x.z,I)}for(let T=0,b=S.length;T<b;++T){let _=S[T],I=_.start,k=_.count;for(let D=I,L=I+k;D<L;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(e)for(let u=0,d=e.count;u<d;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Xt(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],f=s[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kh=new et,wi=new Rl,Hs=new Fi,Bh=new U,Vs=new U,Ws=new U,Xs=new U,Co=new U,qs=new U,zh=new U,Ys=new U,Se=class extends Ct{constructor(e=new Rt,t=new Mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){qs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],f=s[l];h!==0&&(Co.fromBufferAttribute(f,e),a?qs.addScaledVector(Co,h):qs.addScaledVector(Co.sub(t),h))}t.add(qs)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hs.copy(i.boundingSphere),Hs.applyMatrix4(s),wi.copy(e.ray).recast(e.near),!(Hs.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Hs,Bh)===null||wi.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(kh.copy(s).invert(),wi.copy(e.ray).applyMatrix4(kh),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,u=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=x;y<C;y+=3){let w=o.getX(y),E=o.getX(y+1),T=o.getX(y+2);r=Zs(this,p,e,i,c,h,f,w,E,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let S=o.getX(m),x=o.getX(m+1),y=o.getX(m+2);r=Zs(this,a,e,i,c,h,f,S,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],S=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=S,C=x;y<C;y+=3){let w=y,E=y+1,T=y+2;r=Zs(this,p,e,i,c,h,f,w,E,T),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let S=m,x=m+1,y=m+2;r=Zs(this,a,e,i,c,h,f,S,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function cm(n,e,t,i,r,s,a,o){let l;if(e.side===At?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ci,o),l===null)return null;Ys.copy(o),Ys.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ys);return c<t.near||c>t.far?null:{distance:c,point:Ys.clone(),object:n}}function Zs(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Vs),n.getVertexPosition(l,Ws),n.getVertexPosition(c,Xs);let h=cm(n,e,t,i,Vs,Ws,Xs,zh);if(h){let f=new U;Ii.getBarycoord(zh,Vs,Ws,Xs,f),r&&(h.uv=Ii.getInterpolatedAttribute(r,o,l,c,f,new re)),s&&(h.uv1=Ii.getInterpolatedAttribute(s,o,l,c,f,new re)),a&&(h.normal=Ii.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};Ii.getNormal(Vs,Ws,Xs,u.normal),h.face=u,h.barycoord=f}return h}var wn=class n extends Rt{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Qe(c,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(f,2));function g(v,m,p,S,x,y,C,w,E,T,b){let _=y/E,I=C/T,k=y/2,D=C/2,L=w/2,G=E+1,z=T+1,Z=0,N=0,K=new U;for(let ie=0;ie<z;ie++){let Q=ie*I-D;for(let be=0;be<G;be++){let Ie=be*_-k;K[v]=Ie*S,K[m]=Q*x,K[p]=L,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=w>0?1:-1,h.push(K.x,K.y,K.z),f.push(be/E),f.push(1-ie/T),Z+=1}}for(let ie=0;ie<T;ie++)for(let Q=0;Q<E;Q++){let be=u+Q+G*ie,Ie=u+Q+G*(ie+1),Y=u+(Q+1)+G*(ie+1),se=u+(Q+1)+G*ie;l.push(be,Ie,se),l.push(Ie,Y,se),N+=6}o.addGroup(d,N,b),d+=N,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Tr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){let e={};for(let t=0;t<n.length;t++){let i=Tr(n[t]);for(let r in i)e[r]=i[r]}return e}function hm(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ku(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var um={clone:Tr,merge:Nt},fm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tn=class extends ui{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fm,this.fragmentShader=dm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=hm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},va=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},si=new U,Gh=new re,Hh=new re,Dt=class extends va{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ts*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return os*2*Math.atan(Math.tan(ts*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Gh,Hh),t.subVectors(Hh,Gh)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ts*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},lr=-90,cr=1,Il=class extends Ct{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Dt(lr,cr,e,t);r.layers=this.layers,this.add(r);let s=new Dt(lr,cr,e,t);s.layers=this.layers,this.add(s);let a=new Dt(lr,cr,e,t);a.layers=this.layers,this.add(a);let o=new Dt(lr,cr,e,t);o.layers=this.layers,this.add(o);let l=new Dt(lr,cr,e,t);l.layers=this.layers,this.add(l);let c=new Dt(lr,cr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},xa=class extends zt{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:_r,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Pl=class extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xa(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new wn(5,5,5),s=new Tn({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:At,blending:oi});s.uniforms.tEquirect.value=t;let a=new Se(r,s),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=_n),new Il(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},Ro=new U,pm=new U,mm=new Ze,Bn=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Ro.subVectors(i,t).cross(pm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ro),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mm.getNormalMatrix(e),r=this.coplanarPoint(Ro).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ti=new Fi,Js=new U,ls=class{constructor(e=new Bn,t=new Bn,i=new Bn,r=new Bn,s=new Bn,a=new Bn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],f=r[6],u=r[7],d=r[8],g=r[9],v=r[10],m=r[11],p=r[12],S=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,u-c,m-d,y-p).normalize(),i[1].setComponents(l+s,u+c,m+d,y+p).normalize(),i[2].setComponents(l+a,u+h,m+g,y+S).normalize(),i[3].setComponents(l-a,u-h,m-g,y-S).normalize(),i[4].setComponents(l-o,u-f,m-v,y-x).normalize(),t===Gn)i[5].setComponents(l+o,u+f,m+v,y+x).normalize();else if(t===ha)i[5].setComponents(o,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){return Ti.center.set(0,0,0),Ti.radius=.7071067811865476,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bu(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function gm(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var fi=class n extends Rt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,f=e/o,u=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let S=p*u-a;for(let x=0;x<c;x++){let y=x*f-s;g.push(y,-S,0),v.push(0,0,1),m.push(x/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){let x=S+c*p,y=S+c*(p+1),C=S+1+c*(p+1),w=S+1+c*p;d.push(x,y,w),d.push(y,C,w)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Am=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Im=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,km=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,zm=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gm=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ym="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ng=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ig=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ag=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Eg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ag=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ig=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$g=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,r0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,M0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,T0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,I0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,P0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,F0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,k0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:vm,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:_m,alphatest_fragment:Sm,alphatest_pars_fragment:bm,aomap_fragment:Mm,aomap_pars_fragment:wm,batching_pars_vertex:Tm,batching_vertex:Em,begin_vertex:Am,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Im,bumpmap_pars_fragment:Pm,clipping_planes_fragment:Um,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Dm,clipping_planes_vertex:Fm,color_fragment:Nm,color_pars_fragment:Om,color_pars_vertex:km,color_vertex:Bm,common:zm,cube_uv_reflection_fragment:Gm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Wm,emissivemap_fragment:Xm,emissivemap_pars_fragment:qm,colorspace_fragment:Ym,colorspace_pars_fragment:Zm,envmap_fragment:Jm,envmap_common_pars_fragment:$m,envmap_pars_fragment:Km,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:cg,envmap_vertex:jm,fog_vertex:eg,fog_pars_vertex:tg,fog_fragment:ng,fog_pars_fragment:ig,gradientmap_pars_fragment:rg,lightmap_pars_fragment:sg,lights_lambert_fragment:ag,lights_lambert_pars_fragment:og,lights_pars_begin:lg,lights_toon_fragment:hg,lights_toon_pars_fragment:ug,lights_phong_fragment:fg,lights_phong_pars_fragment:dg,lights_physical_fragment:pg,lights_physical_pars_fragment:mg,lights_fragment_begin:gg,lights_fragment_maps:vg,lights_fragment_end:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:Sg,logdepthbuf_vertex:bg,map_fragment:Mg,map_pars_fragment:wg,map_particle_fragment:Tg,map_particle_pars_fragment:Eg,metalnessmap_fragment:Ag,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Rg,morphcolor_vertex:Ig,morphnormal_vertex:Pg,morphtarget_pars_vertex:Ug,morphtarget_vertex:Lg,normal_fragment_begin:Dg,normal_fragment_maps:Fg,normal_pars_fragment:Ng,normal_pars_vertex:Og,normal_vertex:kg,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:zg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Hg,iridescence_pars_fragment:Vg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:$g,roughnessmap_pars_fragment:Kg,shadowmap_pars_fragment:Qg,shadowmap_pars_vertex:jg,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:r0,skinnormal_vertex:s0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:f0,uv_pars_vertex:d0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:v0,backgroundCube_vert:x0,backgroundCube_frag:y0,cube_vert:_0,cube_frag:S0,depth_vert:b0,depth_frag:M0,distanceRGBA_vert:w0,distanceRGBA_frag:T0,equirect_vert:E0,equirect_frag:A0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:I0,meshbasic_frag:P0,meshlambert_vert:U0,meshlambert_frag:L0,meshmatcap_vert:D0,meshmatcap_frag:F0,meshnormal_vert:N0,meshnormal_frag:O0,meshphong_vert:k0,meshphong_frag:B0,meshphysical_vert:z0,meshphysical_frag:G0,meshtoon_vert:H0,meshtoon_frag:V0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:J0},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},yn={basic:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Nt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Nt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Nt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Nt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Nt([pe.points,pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Nt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Nt([pe.common,pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Nt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Nt([pe.sprite,pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:Nt([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:Nt([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};yn.physical={uniforms:Nt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var $s={r:0,b:0,g:0},Ei=new bn,$0=new et;function K0(n,e,t,i,r,s,a){let o=new Xe(0),l=s===!0?0:1,c,h,f=null,u=0,d=null;function g(S){let x=S.isScene===!0?S.background:null;return x&&x.isTexture&&(x=(S.backgroundBlurriness>0?t:e).get(x)),x}function v(S){let x=!1,y=g(S);y===null?p(o,l):y&&y.isColor&&(p(y,1),x=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(S,x){let y=g(x);y&&(y.isCubeTexture||y.mapping===Fa)?(h===void 0&&(h=new Se(new wn(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Tr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Ei.copy(x.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($0.makeRotationFromEuler(Ei)),h.material.toneMapped=nt.getTransfer(y.colorSpace)!==ot,(f!==y||u!==y.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,f=y,u=y.version,d=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Se(new fi(2,2),new Tn({name:"BackgroundMaterial",uniforms:Tr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=nt.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,x){S.getRGB($s,ku(n)),i.buffers.color.setClear($s.r,$s.g,$s.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(S,x=1){o.set(S),l=x,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(o,l)},render:v,addToRenderList:m}}function Q0(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,a=!1;function o(_,I,k,D,L){let G=!1,z=f(D,k,I);s!==z&&(s=z,c(s.object)),G=d(_,D,k,L),G&&g(_,D,k,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,y(_,I,k,D),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function h(_){return n.deleteVertexArray(_)}function f(_,I,k){let D=k.wireframe===!0,L=i[_.id];L===void 0&&(L={},i[_.id]=L);let G=L[I.id];G===void 0&&(G={},L[I.id]=G);let z=G[D];return z===void 0&&(z=u(l()),G[D]=z),z}function u(_){let I=[],k=[],D=[];for(let L=0;L<t;L++)I[L]=0,k[L]=0,D[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:D,object:_,attributes:{},index:null}}function d(_,I,k,D){let L=s.attributes,G=I.attributes,z=0,Z=k.getAttributes();for(let N in Z)if(Z[N].location>=0){let ie=L[N],Q=G[N];if(Q===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),ie===void 0||ie.attribute!==Q||Q&&ie.data!==Q.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function g(_,I,k,D){let L={},G=I.attributes,z=0,Z=k.getAttributes();for(let N in Z)if(Z[N].location>=0){let ie=G[N];ie===void 0&&(N==="instanceMatrix"&&_.instanceMatrix&&(ie=_.instanceMatrix),N==="instanceColor"&&_.instanceColor&&(ie=_.instanceColor));let Q={};Q.attribute=ie,ie&&ie.data&&(Q.data=ie.data),L[N]=Q,z++}s.attributes=L,s.attributesNum=z,s.index=D}function v(){let _=s.newAttributes;for(let I=0,k=_.length;I<k;I++)_[I]=0}function m(_){p(_,0)}function p(_,I){let k=s.newAttributes,D=s.enabledAttributes,L=s.attributeDivisors;k[_]=1,D[_]===0&&(n.enableVertexAttribArray(_),D[_]=1),L[_]!==I&&(n.vertexAttribDivisor(_,I),L[_]=I)}function S(){let _=s.newAttributes,I=s.enabledAttributes;for(let k=0,D=I.length;k<D;k++)I[k]!==_[k]&&(n.disableVertexAttribArray(k),I[k]=0)}function x(_,I,k,D,L,G,z){z===!0?n.vertexAttribIPointer(_,I,k,L,G):n.vertexAttribPointer(_,I,k,D,L,G)}function y(_,I,k,D){v();let L=D.attributes,G=k.getAttributes(),z=I.defaultAttributeValues;for(let Z in G){let N=G[Z];if(N.location>=0){let K=L[Z];if(K===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(K=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(K=_.instanceColor)),K!==void 0){let ie=K.normalized,Q=K.itemSize,be=e.get(K);if(be===void 0)continue;let Ie=be.buffer,Y=be.type,se=be.bytesPerElement,ue=Y===n.INT||Y===n.UNSIGNED_INT||K.gpuType===uc;if(K.isInterleavedBufferAttribute){let le=K.data,Pe=le.stride,Ge=K.offset;if(le.isInstancedInterleavedBuffer){for(let ke=0;ke<N.locationSize;ke++)p(N.location+ke,le.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ke=0;ke<N.locationSize;ke++)m(N.location+ke);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let ke=0;ke<N.locationSize;ke++)x(N.location+ke,Q/N.locationSize,Y,ie,Pe*se,(Ge+Q/N.locationSize*ke)*se,ue)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<N.locationSize;le++)p(N.location+le,K.meshPerAttribute);_.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<N.locationSize;le++)m(N.location+le);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let le=0;le<N.locationSize;le++)x(N.location+le,Q/N.locationSize,Y,ie,Q*se,Q/N.locationSize*le*se,ue)}}else if(z!==void 0){let ie=z[Z];if(ie!==void 0)switch(ie.length){case 2:n.vertexAttrib2fv(N.location,ie);break;case 3:n.vertexAttrib3fv(N.location,ie);break;case 4:n.vertexAttrib4fv(N.location,ie);break;default:n.vertexAttrib1fv(N.location,ie)}}}}S()}function C(){T();for(let _ in i){let I=i[_];for(let k in I){let D=I[k];for(let L in D)h(D[L].object),delete D[L];delete I[k]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;let I=i[_.id];for(let k in I){let D=I[k];for(let L in D)h(D[L].object),delete D[L];delete I[k]}delete i[_.id]}function E(_){for(let I in i){let k=i[I];if(k[_.id]===void 0)continue;let D=k[_.id];for(let L in D)h(D[L].object),delete D[L];delete k[_.id]}}function T(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:T,resetDefaultState:b,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:S}}function j0(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,f){f!==0&&(n.drawArraysInstanced(i,c,h,f),t.update(h,i,f))}function o(c,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,i,1)}function l(c,h,f,u){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=h[v]*u[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ev(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(E){return!(E!==hn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let T=E===ms&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Wn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Sn&&!T)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),x=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:C,maxSamples:w}}function tv(n){let e=this,t=null,i=0,r=!1,s=!1,a=new Bn,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||r;return r=u,i=f.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let S=s?0:i,x=S*4,y=p.clippingState||null;l.value=y,y=h(g,u,x,d);for(let C=0;C!==x;++C)y[C]=t[C];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,y=d;x!==v;++x,y+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function nv(n){let e=new WeakMap;function t(a,o){return o===$o?a.mapping=_r:o===Ko&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===$o||o===Ko)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Pl(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Er=class extends va{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dr=4,Vh=[.125,.215,.35,.446,.526,.582],Pi=20,Io=new Er,Wh=new Xe,Po=null,Uo=0,Lo=0,Do=!1,Ci=(1+Math.sqrt(5))/2,hr=1/Ci,Xh=[new U(-Ci,hr,0),new U(Ci,hr,0),new U(-hr,0,Ci),new U(hr,0,Ci),new U(0,Ci,-hr),new U(0,Ci,hr),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Ar=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Po=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Po,Uo,Lo),this._renderer.xr.enabled=Do,e.scissorTest=!1,Ks(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Po=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Do=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:ms,format:hn,colorSpace:Lr,depthBuffer:!1},r=qh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qh(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iv(s)),this._blurMaterial=rv(s,e,t)}return r}_compileMaterial(e){let t=new Se(this._lodPlanes[0],e);this._renderer.compile(t,Io)}_sceneToCubeUV(e,t,i,r){let o=new Dt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Wh),h.toneMapping=li,h.autoClear=!1;let d=new Mn({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new Se(new wn,d),v=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Wh),v=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let x=this._cubeSize;Ks(r,S*x,p>2?x:0,x,x),h.setRenderTarget(r),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===_r||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yh());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Se(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;Ks(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Io)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Xh[(r-s-1)%Xh.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Se(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Pi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):Pi;m>Pi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Pi}`);let p=[],S=0;for(let E=0;E<Pi;++E){let T=E/v,b=Math.exp(-T*T/2);p.push(b),E===0?S+=b:E<m&&(S+=2*b)}for(let E=0;E<p.length;E++)p[E]=p[E]/S;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-i;let y=this._sizeLods[r],C=3*y*(r>x-dr?r-x+dr:0),w=4*(this._cubeSize-y);Ks(t,C,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Io)}};function iv(n){let e=[],t=[],i=[],r=n,s=n-dr+1+Vh.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>n-dr?l=Vh[a-n+dr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,v=3,m=2,p=1,S=new Float32Array(v*g*d),x=new Float32Array(m*g*d),y=new Float32Array(p*g*d);for(let w=0;w<d;w++){let E=w%3*2/3-1,T=w>2?0:-1,b=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];S.set(b,v*g*w),x.set(u,m*g*w);let _=[w,w,w,w,w,w];y.set(_,p*g*w)}let C=new Rt;C.setAttribute("position",new Xt(S,v)),C.setAttribute("uv",new Xt(x,m)),C.setAttribute("faceIndex",new Xt(y,p)),e.push(C),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function qh(n,e,t){let i=new Xn(n,e,t);return i.texture.mapping=Fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ks(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function rv(n,e,t){let i=new Float32Array(Pi),r=new U(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:Pi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Yh(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function Zh(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:oi,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===$o||l===Ko,h=l===_r||l===Sr;if(c||h){let f=e.get(o),u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Ar(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new Ar(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function av(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&jr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ov(n,e,t,i){let r={},s=new WeakMap;function a(f){let u=f.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let v=u.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}u.removeEventListener("dispose",a),delete r[u.id];let d=s.get(u);d&&(e.remove(d),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(f,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(f){let u=f.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let v=d[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],n.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(d!==null){let S=d.array;v=d.version;for(let x=0,y=S.length;x<y;x+=3){let C=S[x+0],w=S[x+1],E=S[x+2];u.push(C,w,w,E,E,C)}}else if(g!==void 0){let S=g.array;v=g.version;for(let x=0,y=S.length/3-1;x<y;x+=3){let C=x+0,w=x+1,E=x+2;u.push(C,w,w,E,E,C)}}else return;let m=new(Nu(u)?ga:ma)(u,1);m.version=v;let p=s.get(f);p&&e.remove(p),s.set(f,m)}function h(f){let u=s.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function lv(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,d){n.drawElements(i,d,s,u*a),t.update(d,i,1)}function c(u,d,g){g!==0&&(n.drawElementsInstanced(i,d,s,u*a,g),t.update(d,i,g))}function h(u,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];t.update(m,i,1)}function f(u,d,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,d[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,s,u,0,v,0,g);let p=0;for(let S=0;S<g;S++)p+=d[S]*v[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function cv(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function hv(n,e,t){let i=new WeakMap,r=new lt;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==f){let b=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let y=o.attributes.position.count*x,C=1;y>e.maxTextureSize&&(C=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*C*4*f),E=new da(w,y,C,f);E.type=Sn,E.needsUpdate=!0;let T=x*4;for(let _=0;_<f;_++){let I=m[_],k=p[_],D=S[_],L=y*C*4*_;for(let G=0;G<I.count;G++){let z=G*T;d===!0&&(r.fromBufferAttribute(I,G),w[L+z+0]=r.x,w[L+z+1]=r.y,w[L+z+2]=r.z,w[L+z+3]=0),g===!0&&(r.fromBufferAttribute(k,G),w[L+z+4]=r.x,w[L+z+5]=r.y,w[L+z+6]=r.z,w[L+z+7]=0),v===!0&&(r.fromBufferAttribute(D,G),w[L+z+8]=r.x,w[L+z+9]=r.y,w[L+z+10]=r.z,w[L+z+11]=D.itemSize===4?r.w:1)}}u={count:f,texture:E,size:new re(y,C)},i.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function uv(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return f}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var ya=class extends zt{constructor(e,t,i,r,s,a,o,l,c,h=gr){if(h!==gr&&h!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===gr&&(i=Di),i===void 0&&h===wr&&(i=Mr),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},zu=new zt,Jh=new ya(1,1),Gu=new da,Hu=new Cl,Vu=new xa,$h=[],Kh=[],Qh=new Float32Array(16),jh=new Float32Array(9),eu=new Float32Array(4);function Fr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=$h[r];if(s===void 0&&(s=new Float32Array(r),$h[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function fv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function gv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;eu.set(i),n.uniformMatrix2fv(this.addr,!1,eu),wt(t,i)}}function vv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;jh.set(i),n.uniformMatrix3fv(this.addr,!1,jh),wt(t,i)}}function xv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(Mt(t,i))return;Qh.set(i),n.uniformMatrix4fv(this.addr,!1,Qh),wt(t,i)}}function yv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _v(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function Sv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function bv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function Mv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function Tv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function Ev(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function Av(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Jh.compareFunction=Fu,s=Jh):s=zu,t.setTexture2D(e||s,r)}function Cv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Hu,r)}function Rv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Vu,r)}function Iv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gu,r)}function Pv(n){switch(n){case 5126:return fv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return xv;case 5124:case 35670:return yv;case 35667:case 35671:return _v;case 35668:case 35672:return Sv;case 35669:case 35673:return bv;case 5125:return Mv;case 36294:return wv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Iv}}function Uv(n,e){n.uniform1fv(this.addr,e)}function Lv(n,e){let t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function Dv(n,e){let t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function Fv(n,e){let t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function Nv(n,e){let t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ov(n,e){let t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kv(n,e){let t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bv(n,e){n.uniform1iv(this.addr,e)}function zv(n,e){n.uniform2iv(this.addr,e)}function Gv(n,e){n.uniform3iv(this.addr,e)}function Hv(n,e){n.uniform4iv(this.addr,e)}function Vv(n,e){n.uniform1uiv(this.addr,e)}function Wv(n,e){n.uniform2uiv(this.addr,e)}function Xv(n,e){n.uniform3uiv(this.addr,e)}function qv(n,e){n.uniform4uiv(this.addr,e)}function Yv(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||zu,s[a])}function Zv(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Hu,s[a])}function Jv(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Vu,s[a])}function $v(n,e,t){let i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Gu,s[a])}function Kv(n){switch(n){case 5126:return Uv;case 35664:return Lv;case 35665:return Dv;case 35666:return Fv;case 35674:return Nv;case 35675:return Ov;case 35676:return kv;case 5124:case 35670:return Bv;case 35667:case 35671:return zv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Vv;case 36294:return Wv;case 36295:return Xv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Zv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return $v}}var Ul=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Pv(t.type)}},Ll=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Kv(t.type)}},Dl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},Fo=/(\w+)(\])?(\[|\.)?/g;function tu(n,e){n.seq.push(e),n.map[e.id]=e}function Qv(n,e,t){let i=n.name,r=i.length;for(Fo.lastIndex=0;;){let s=Fo.exec(i),a=Fo.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tu(t,c===void 0?new Ul(o,n,e):new Ll(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Dl(o),tu(t,f)),t=f}}}var xr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Qv(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function nu(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var jv=37297,ex=0;function tx(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var iu=new Ze;function nx(n){nt._getMatrix(iu,nt.workingColorSpace,n);let e=`mat3( ${iu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case Na:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ru(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tx(n.getShaderSource(e),a)}else return r}function ix(n,e){let t=nx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rx(n,e){let t;switch(e){case mp:t="Linear";break;case gp:t="Reinhard";break;case vp:t="Cineon";break;case hc:t="ACESFilmic";break;case yp:t="AgX";break;case _p:t="Neutral";break;case xp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Qs=new U;function sx(){nt.getLuminanceCoefficients(Qs);let n=Qs.x.toFixed(4),e=Qs.y.toFixed(4),t=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ax(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(es).join(`
`)}function ox(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function es(n){return n!==""}function su(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fl(n){return n.replace(cx,ux)}var hx=new Map;function ux(n,e){let t=Ke[e];if(t===void 0){let i=hx.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fl(t)}var fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(n){return n.replace(fx,dx)}function dx(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function lu(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function px(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===cc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===cn&&(e="SHADOWMAP_TYPE_VSM"),e}function mx(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _r:case Sr:e="ENVMAP_TYPE_CUBE";break;case Fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gx(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===Sr&&(e="ENVMAP_MODE_REFRACTION"),e}function vx(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mu:e="ENVMAP_BLENDING_MULTIPLY";break;case dp:e="ENVMAP_BLENDING_MIX";break;case pp:e="ENVMAP_BLENDING_ADD";break}return e}function xx(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function yx(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=px(t),c=mx(t),h=gx(t),f=vx(t),u=xx(t),d=ax(t),g=ox(s),v=r.createProgram(),m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(es).join(`
`),p.length>0&&(p+=`
`)):(m=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(es).join(`
`),p=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==li?rx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,ix("linearToOutputTexel",t.outputColorSpace),sx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(es).join(`
`)),a=Fl(a),a=su(a,t),a=au(a,t),o=Fl(o),o=su(o,t),o=au(o,t),a=ou(a),o=ou(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let x=S+m+a,y=S+p+o,C=nu(r,r.VERTEX_SHADER,x),w=nu(r,r.FRAGMENT_SHADER,y);r.attachShader(v,C),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function E(I){if(n.debug.checkShaderErrors){let k=r.getProgramInfoLog(v).trim(),D=r.getShaderInfoLog(C).trim(),L=r.getShaderInfoLog(w).trim(),G=!0,z=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,C,w);else{let Z=ru(r,C,"vertex"),N=ru(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+Z+`
`+N)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(D===""||L==="")&&(z=!1);z&&(I.diagnostics={runnable:G,programLog:k,vertexShader:{log:D,prefix:m},fragmentShader:{log:L,prefix:p}})}r.deleteShader(C),r.deleteShader(w),T=new xr(r,v),b=lx(r,v)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(v,jv)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ex++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}var _x=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Ol(e),t.set(e,i)),i}},Ol=class{constructor(e){this.id=_x++,this.code=e,this.usedTimes=0}};function Sx(n,e,t,i,r,s,a){let o=new pa,l=new Nl,c=new Set,h=[],f=r.logarithmicDepthBuffer,u=r.vertexTextures,d=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,_,I,k,D){let L=k.fog,G=D.geometry,z=b.isMeshStandardMaterial?k.environment:null,Z=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),N=Z&&Z.mapping===Fa?Z.image.height:null,K=g[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Q=ie!==void 0?ie.length:0,be=0;G.morphAttributes.position!==void 0&&(be=1),G.morphAttributes.normal!==void 0&&(be=2),G.morphAttributes.color!==void 0&&(be=3);let Ie,Y,se,ue;if(K){let at=yn[K];Ie=at.vertexShader,Y=at.fragmentShader}else Ie=b.vertexShader,Y=b.fragmentShader,l.update(b),se=l.getVertexShaderID(b),ue=l.getFragmentShaderID(b);let le=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ge=D.isInstancedMesh===!0,ke=D.isBatchedMesh===!0,Je=!!b.map,j=!!b.matcap,oe=!!Z,P=!!b.aoMap,me=!!b.lightMap,te=!!b.bumpMap,fe=!!b.normalMap,ae=!!b.displacementMap,Oe=!!b.emissiveMap,xe=!!b.metalnessMap,R=!!b.roughnessMap,M=b.anisotropy>0,H=b.clearcoat>0,J=b.dispersion>0,ne=b.iridescence>0,$=b.sheen>0,Ue=b.transmission>0,ge=M&&!!b.anisotropyMap,Te=H&&!!b.clearcoatMap,je=H&&!!b.clearcoatNormalMap,ce=H&&!!b.clearcoatRoughnessMap,Ae=ne&&!!b.iridescenceMap,ze=ne&&!!b.iridescenceThicknessMap,Ve=$&&!!b.sheenColorMap,Ce=$&&!!b.sheenRoughnessMap,tt=!!b.specularMap,$e=!!b.specularColorMap,ut=!!b.specularIntensityMap,F=Ue&&!!b.transmissionMap,ve=Ue&&!!b.thicknessMap,q=!!b.gradientMap,ee=!!b.alphaMap,Me=b.alphaTest>0,ye=!!b.alphaHash,qe=!!b.extensions,vt=li;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(vt=n.toneMapping);let Pt={shaderID:K,shaderType:b.type,shaderName:b.name,vertexShader:Ie,fragmentShader:Y,defines:b.defines,customVertexShaderID:se,customFragmentShaderID:ue,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ke,batchingColor:ke&&D._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&D.instanceColor!==null,instancingMorph:Ge&&D.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?n.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Lr,alphaToCoverage:!!b.alphaToCoverage,map:Je,matcap:j,envMap:oe,envMapMode:oe&&Z.mapping,envMapCubeUVHeight:N,aoMap:P,lightMap:me,bumpMap:te,normalMap:fe,displacementMap:u&&ae,emissiveMap:Oe,normalMapObjectSpace:fe&&b.normalMapType===wp,normalMapTangentSpace:fe&&b.normalMapType===Du,metalnessMap:xe,roughnessMap:R,anisotropy:M,anisotropyMap:ge,clearcoat:H,clearcoatMap:Te,clearcoatNormalMap:je,clearcoatRoughnessMap:ce,dispersion:J,iridescence:ne,iridescenceMap:Ae,iridescenceThicknessMap:ze,sheen:$,sheenColorMap:Ve,sheenRoughnessMap:Ce,specularMap:tt,specularColorMap:$e,specularIntensityMap:ut,transmission:Ue,transmissionMap:F,thicknessMap:ve,gradientMap:q,opaque:b.transparent===!1&&b.blending===mr&&b.alphaToCoverage===!1,alphaMap:ee,alphaTest:Me,alphaHash:ye,combine:b.combine,mapUv:Je&&v(b.map.channel),aoMapUv:P&&v(b.aoMap.channel),lightMapUv:me&&v(b.lightMap.channel),bumpMapUv:te&&v(b.bumpMap.channel),normalMapUv:fe&&v(b.normalMap.channel),displacementMapUv:ae&&v(b.displacementMap.channel),emissiveMapUv:Oe&&v(b.emissiveMap.channel),metalnessMapUv:xe&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:ge&&v(b.anisotropyMap.channel),clearcoatMapUv:Te&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ve&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(b.sheenRoughnessMap.channel),specularMapUv:tt&&v(b.specularMap.channel),specularColorMapUv:$e&&v(b.specularColorMap.channel),specularIntensityMapUv:ut&&v(b.specularIntensityMap.channel),transmissionMapUv:F&&v(b.transmissionMap.channel),thicknessMapUv:ve&&v(b.thicknessMap.channel),alphaMapUv:ee&&v(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(fe||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(Je||ee),fog:!!L,useFog:b.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Pe,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:be,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:vt,decodeVideoTexture:Je&&b.map.isVideoTexture===!0&&nt.getTransfer(b.map.colorSpace)===ot,decodeVideoTextureEmissive:Oe&&b.emissiveMap.isVideoTexture===!0&&nt.getTransfer(b.emissiveMap.colorSpace)===ot,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zn,flipSided:b.side===At,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:qe&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(qe&&b.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(b){let _=[];if(b.shaderID?_.push(b.shaderID):(_.push(b.customVertexShaderID),_.push(b.customFragmentShaderID)),b.defines!==void 0)for(let I in b.defines)_.push(I),_.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(S(_,b),x(_,b),_.push(n.outputColorSpace)),_.push(b.customProgramCacheKey),_.join()}function S(b,_){b.push(_.precision),b.push(_.outputColorSpace),b.push(_.envMapMode),b.push(_.envMapCubeUVHeight),b.push(_.mapUv),b.push(_.alphaMapUv),b.push(_.lightMapUv),b.push(_.aoMapUv),b.push(_.bumpMapUv),b.push(_.normalMapUv),b.push(_.displacementMapUv),b.push(_.emissiveMapUv),b.push(_.metalnessMapUv),b.push(_.roughnessMapUv),b.push(_.anisotropyMapUv),b.push(_.clearcoatMapUv),b.push(_.clearcoatNormalMapUv),b.push(_.clearcoatRoughnessMapUv),b.push(_.iridescenceMapUv),b.push(_.iridescenceThicknessMapUv),b.push(_.sheenColorMapUv),b.push(_.sheenRoughnessMapUv),b.push(_.specularMapUv),b.push(_.specularColorMapUv),b.push(_.specularIntensityMapUv),b.push(_.transmissionMapUv),b.push(_.thicknessMapUv),b.push(_.combine),b.push(_.fogExp2),b.push(_.sizeAttenuation),b.push(_.morphTargetsCount),b.push(_.morphAttributeCount),b.push(_.numDirLights),b.push(_.numPointLights),b.push(_.numSpotLights),b.push(_.numSpotLightMaps),b.push(_.numHemiLights),b.push(_.numRectAreaLights),b.push(_.numDirLightShadows),b.push(_.numPointLightShadows),b.push(_.numSpotLightShadows),b.push(_.numSpotLightShadowsWithMaps),b.push(_.numLightProbes),b.push(_.shadowMapType),b.push(_.toneMapping),b.push(_.numClippingPlanes),b.push(_.numClipIntersection),b.push(_.depthPacking)}function x(b,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),b.push(o.mask)}function y(b){let _=g[b.type],I;if(_){let k=yn[_];I=um.clone(k.uniforms)}else I=b.uniforms;return I}function C(b,_){let I;for(let k=0,D=h.length;k<D;k++){let L=h[k];if(L.cacheKey===_){I=L,++I.usedTimes;break}}return I===void 0&&(I=new yx(n,_,b,s),h.push(I)),I}function w(b){if(--b.usedTimes===0){let _=h.indexOf(b);h[_]=h[h.length-1],h.pop(),b.destroy()}}function E(b){l.remove(b)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:C,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:T}}function bx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Mx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function cu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hu(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,u,d,g,v,m){let p=n[e];return p===void 0?(p={id:f.id,object:f,geometry:u,material:d,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},n[e]=p):(p.id=f.id,p.object=f,p.geometry=u,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function o(f,u,d,g,v,m){let p=a(f,u,d,g,v,m);d.transmission>0?i.push(p):d.transparent===!0?r.push(p):t.push(p)}function l(f,u,d,g,v,m){let p=a(f,u,d,g,v,m);d.transmission>0?i.unshift(p):d.transparent===!0?r.unshift(p):t.unshift(p)}function c(f,u){t.length>1&&t.sort(f||Mx),i.length>1&&i.sort(u||cu),r.length>1&&r.sort(u||cu)}function h(){for(let f=e,u=n.length;f<u;f++){let d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function wx(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new hu,n.set(i,[a])):r>=s.length?(a=new hu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Ex(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Ax=0;function Cx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rx(n){let e=new Tx,t=Ex(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let r=new U,s=new et,a=new et;function o(c){let h=0,f=0,u=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,S=0,x=0,y=0,C=0,w=0,E=0;c.sort(Cx);for(let b=0,_=c.length;b<_;b++){let I=c[b],k=I.color,D=I.intensity,L=I.distance,G=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*D,f+=k.g*D,u+=k.b*D;else if(I.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(I.sh.coefficients[z],D);E++}else if(I.isDirectionalLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,N=t.get(I);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.directionalShadow[d]=N,i.directionalShadowMap[d]=G,i.directionalShadowMatrix[d]=I.shadow.matrix,S++}i.directional[d]=z,d++}else if(I.isSpotLight){let z=e.get(I);z.position.setFromMatrixPosition(I.matrixWorld),z.color.copy(k).multiplyScalar(D),z.distance=L,z.coneCos=Math.cos(I.angle),z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),z.decay=I.decay,i.spot[v]=z;let Z=I.shadow;if(I.map&&(i.spotLightMap[C]=I.map,C++,Z.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[v]=Z.matrix,I.castShadow){let N=t.get(I);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,i.spotShadow[v]=N,i.spotShadowMap[v]=G,y++}v++}else if(I.isRectAreaLight){let z=e.get(I);z.color.copy(k).multiplyScalar(D),z.halfWidth.set(I.width*.5,0,0),z.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=z,m++}else if(I.isPointLight){let z=e.get(I);if(z.color.copy(I.color).multiplyScalar(I.intensity),z.distance=I.distance,z.decay=I.decay,I.castShadow){let Z=I.shadow,N=t.get(I);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=G,i.pointShadowMatrix[g]=I.shadow.matrix,x++}i.point[g]=z,g++}else if(I.isHemisphereLight){let z=e.get(I);z.skyColor.copy(I.color).multiplyScalar(D),z.groundColor.copy(I.groundColor).multiplyScalar(D),i.hemi[p]=z,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let T=i.hash;(T.directionalLength!==d||T.pointLength!==g||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==S||T.numPointShadows!==x||T.numSpotShadows!==y||T.numSpotMaps!==C||T.numLightProbes!==E)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=E,T.directionalLength=d,T.pointLength=g,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=S,T.numPointShadows=x,T.numSpotShadows=y,T.numSpotMaps=C,T.numLightProbes=E,i.version=Ax++)}function l(c,h){let f=0,u=0,d=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){let x=c[p];if(x.isDirectionalLight){let y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(x.isSpotLight){let y=i.spot[d];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(x.isRectAreaLight){let y=i.rectArea[g];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){let y=i.point[u];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(m),u++}else if(x.isHemisphereLight){let y=i.hemi[v];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function uu(n){let e=new Rx(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Ix(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new uu(n),e.set(r,[o])):s>=a.length?(o=new uu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var kl=class extends ui{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Bl=class extends ui{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lx(n,e,t){let i=new ls,r=new re,s=new re,a=new lt,o=new kl({depthPacking:Mp}),l=new Bl,c={},h=t.maxTextureSize,f={[ci]:At,[At]:ci,[zn]:zn},u=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:Px,fragmentShader:Ux}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Se(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bu;let p=this.type;this.render=function(w,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let b=n.getRenderTarget(),_=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),k=n.state;k.setBlending(oi),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let D=p!==cn&&this.type===cn,L=p===cn&&this.type!==cn;for(let G=0,z=w.length;G<z;G++){let Z=w[G],N=Z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);let K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null||D===!0||L===!0){let Q=this.type!==cn?{minFilter:Wt,magFilter:Wt}:{};N.map!==null&&N.map.dispose(),N.map=new Xn(r.x,r.y,Q),N.map.texture.name=Z.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();let ie=N.getViewportCount();for(let Q=0;Q<ie;Q++){let be=N.getViewport(Q);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),k.viewport(a),N.updateMatrices(Z,Q),i=N.getFrustum(),y(E,T,N.camera,Z,this.type)}N.isPointLightShadow!==!0&&this.type===cn&&S(N,T),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(b,_,I)};function S(w,E){let T=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(r.x,r.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,T,u,v,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,T,d,v,null)}function x(w,E,T,b){let _=null,I=T.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)_=I;else if(_=T.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let k=_.uuid,D=E.uuid,L=c[k];L===void 0&&(L={},c[k]=L);let G=L[D];G===void 0&&(G=_.clone(),L[D]=G,E.addEventListener("dispose",C)),_=G}if(_.visible=E.visible,_.wireframe=E.wireframe,b===cn?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:f[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,T.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let k=n.properties.get(_);k.light=T}return _}function y(w,E,T,b,_){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===cn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,w.matrixWorld);let D=e.update(w),L=w.material;if(Array.isArray(L)){let G=D.groups;for(let z=0,Z=G.length;z<Z;z++){let N=G[z],K=L[N.materialIndex];if(K&&K.visible){let ie=x(w,K,b,_);w.onBeforeShadow(n,w,E,T,D,ie,N),n.renderBufferDirect(T,null,D,ie,w,N),w.onAfterShadow(n,w,E,T,D,ie,N)}}}else if(L.visible){let G=x(w,L,b,_);w.onBeforeShadow(n,w,E,T,D,G,null),n.renderBufferDirect(T,null,D,G,w,null),w.onAfterShadow(n,w,E,T,D,G,null)}}let k=w.children;for(let D=0,L=k.length;D<L;D++)y(k[D],E,T,b,_)}function C(w){w.target.removeEventListener("dispose",C);for(let T in c){let b=c[T],_=w.target.uuid;_ in b&&(b[_].dispose(),delete b[_])}}}var Dx={[Vo]:Wo,[Xo]:Zo,[qo]:Jo,[yr]:Yo,[Wo]:Vo,[Zo]:Xo,[Jo]:qo,[Yo]:yr};function Fx(n,e){function t(){let F=!1,ve=new lt,q=null,ee=new lt(0,0,0,0);return{setMask:function(Me){q!==Me&&!F&&(n.colorMask(Me,Me,Me,Me),q=Me)},setLocked:function(Me){F=Me},setClear:function(Me,ye,qe,vt,Pt){Pt===!0&&(Me*=vt,ye*=vt,qe*=vt),ve.set(Me,ye,qe,vt),ee.equals(ve)===!1&&(n.clearColor(Me,ye,qe,vt),ee.copy(ve))},reset:function(){F=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let F=!1,ve=!1,q=null,ee=null,Me=null;return{setReversed:function(ye){if(ve!==ye){let qe=e.get("EXT_clip_control");ve?qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.ZERO_TO_ONE_EXT):qe.clipControlEXT(qe.LOWER_LEFT_EXT,qe.NEGATIVE_ONE_TO_ONE_EXT);let vt=Me;Me=null,this.setClear(vt)}ve=ye},getReversed:function(){return ve},setTest:function(ye){ye?le(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ye){q!==ye&&!F&&(n.depthMask(ye),q=ye)},setFunc:function(ye){if(ve&&(ye=Dx[ye]),ee!==ye){switch(ye){case Vo:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case Xo:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case qo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case Zo:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=ye}},setLocked:function(ye){F=ye},setClear:function(ye){Me!==ye&&(ve&&(ye=1-ye),n.clearDepth(ye),Me=ye)},reset:function(){F=!1,q=null,ee=null,Me=null,ve=!1}}}function r(){let F=!1,ve=null,q=null,ee=null,Me=null,ye=null,qe=null,vt=null,Pt=null;return{setTest:function(at){F||(at?le(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(at){ve!==at&&!F&&(n.stencilMask(at),ve=at)},setFunc:function(at,rn,Un){(q!==at||ee!==rn||Me!==Un)&&(n.stencilFunc(at,rn,Un),q=at,ee=rn,Me=Un)},setOp:function(at,rn,Un){(ye!==at||qe!==rn||vt!==Un)&&(n.stencilOp(at,rn,Un),ye=at,qe=rn,vt=Un)},setLocked:function(at){F=at},setClear:function(at){Pt!==at&&(n.clearStencil(at),Pt=at)},reset:function(){F=!1,ve=null,q=null,ee=null,Me=null,ye=null,qe=null,vt=null,Pt=null}}}let s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap,h={},f={},u=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,x=null,y=null,C=null,w=null,E=new Xe(0,0,0),T=0,b=!1,_=null,I=null,k=null,D=null,L=null,G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,Z=0,N=n.getParameter(n.VERSION);N.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(N)[1]),z=Z>=1):N.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),z=Z>=2);let K=null,ie={},Q=n.getParameter(n.SCISSOR_BOX),be=n.getParameter(n.VIEWPORT),Ie=new lt().fromArray(Q),Y=new lt().fromArray(be);function se(F,ve,q,ee){let Me=new Uint8Array(4),ye=n.createTexture();n.bindTexture(F,ye),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let qe=0;qe<q;qe++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ve,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ve+qe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return ye}let ue={};ue[n.TEXTURE_2D]=se(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=se(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=se(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=se(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(n.DEPTH_TEST),a.setFunc(yr),te(!1),fe(fh),le(n.CULL_FACE),P(oi);function le(F){h[F]!==!0&&(n.enable(F),h[F]=!0)}function Pe(F){h[F]!==!1&&(n.disable(F),h[F]=!1)}function Ge(F,ve){return f[F]!==ve?(n.bindFramebuffer(F,ve),f[F]=ve,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ve),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ve),!0):!1}function ke(F,ve){let q=d,ee=!1;if(F){q=u.get(ve),q===void 0&&(q=[],u.set(ve,q));let Me=F.textures;if(q.length!==Me.length||q[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,qe=Me.length;ye<qe;ye++)q[ye]=n.COLOR_ATTACHMENT0+ye;q.length=Me.length,ee=!0}}else q[0]!==n.BACK&&(q[0]=n.BACK,ee=!0);ee&&n.drawBuffers(q)}function Je(F){return g!==F?(n.useProgram(F),g=F,!0):!1}let j={[Ri]:n.FUNC_ADD,[$d]:n.FUNC_SUBTRACT,[Kd]:n.FUNC_REVERSE_SUBTRACT};j[Qd]=n.MIN,j[jd]=n.MAX;let oe={[ep]:n.ZERO,[tp]:n.ONE,[np]:n.SRC_COLOR,[Go]:n.SRC_ALPHA,[lp]:n.SRC_ALPHA_SATURATE,[ap]:n.DST_COLOR,[rp]:n.DST_ALPHA,[ip]:n.ONE_MINUS_SRC_COLOR,[Ho]:n.ONE_MINUS_SRC_ALPHA,[op]:n.ONE_MINUS_DST_COLOR,[sp]:n.ONE_MINUS_DST_ALPHA,[cp]:n.CONSTANT_COLOR,[hp]:n.ONE_MINUS_CONSTANT_COLOR,[up]:n.CONSTANT_ALPHA,[fp]:n.ONE_MINUS_CONSTANT_ALPHA};function P(F,ve,q,ee,Me,ye,qe,vt,Pt,at){if(F===oi){v===!0&&(Pe(n.BLEND),v=!1);return}if(v===!1&&(le(n.BLEND),v=!0),F!==Jd){if(F!==m||at!==b){if((p!==Ri||y!==Ri)&&(n.blendEquation(n.FUNC_ADD),p=Ri,y=Ri),at)switch(F){case mr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFunc(n.ONE,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case mr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case dh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case ph:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case mh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,x=null,C=null,w=null,E.set(0,0,0),T=0,m=F,b=at}return}Me=Me||ve,ye=ye||q,qe=qe||ee,(ve!==p||Me!==y)&&(n.blendEquationSeparate(j[ve],j[Me]),p=ve,y=Me),(q!==S||ee!==x||ye!==C||qe!==w)&&(n.blendFuncSeparate(oe[q],oe[ee],oe[ye],oe[qe]),S=q,x=ee,C=ye,w=qe),(vt.equals(E)===!1||Pt!==T)&&(n.blendColor(vt.r,vt.g,vt.b,Pt),E.copy(vt),T=Pt),m=F,b=!1}function me(F,ve){F.side===zn?Pe(n.CULL_FACE):le(n.CULL_FACE);let q=F.side===At;ve&&(q=!q),te(q),F.blending===mr&&F.transparent===!1?P(oi):P(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);let ee=F.stencilWrite;o.setTest(ee),ee&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function te(F){_!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),_=F)}function fe(F){F!==Yd?(le(n.CULL_FACE),F!==I&&(F===fh?n.cullFace(n.BACK):F===Zd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),I=F}function ae(F){F!==k&&(z&&n.lineWidth(F),k=F)}function Oe(F,ve,q){F?(le(n.POLYGON_OFFSET_FILL),(D!==ve||L!==q)&&(n.polygonOffset(ve,q),D=ve,L=q)):Pe(n.POLYGON_OFFSET_FILL)}function xe(F){F?le(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function R(F){F===void 0&&(F=n.TEXTURE0+G-1),K!==F&&(n.activeTexture(F),K=F)}function M(F,ve,q){q===void 0&&(K===null?q=n.TEXTURE0+G-1:q=K);let ee=ie[q];ee===void 0&&(ee={type:void 0,texture:void 0},ie[q]=ee),(ee.type!==F||ee.texture!==ve)&&(K!==q&&(n.activeTexture(q),K=q),n.bindTexture(F,ve||ue[F]),ee.type=F,ee.texture=ve)}function H(){let F=ie[K];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function $(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ue(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ge(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ze(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(F){Ie.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),Ie.copy(F))}function Ce(F){Y.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function tt(F,ve){let q=c.get(ve);q===void 0&&(q=new WeakMap,c.set(ve,q));let ee=q.get(F);ee===void 0&&(ee=n.getUniformBlockIndex(ve,F.name),q.set(F,ee))}function $e(F,ve){let ee=c.get(ve).get(F);l.get(ve)!==ee&&(n.uniformBlockBinding(ve,ee,F.__bindingPointIndex),l.set(ve,ee))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},K=null,ie={},f={},u=new WeakMap,d=[],g=null,v=!1,m=null,p=null,S=null,x=null,y=null,C=null,w=null,E=new Xe(0,0,0),T=0,b=!1,_=null,I=null,k=null,D=null,L=null,Ie.set(0,0,n.canvas.width,n.canvas.height),Y.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Pe,bindFramebuffer:Ge,drawBuffers:ke,useProgram:Je,setBlending:P,setMaterial:me,setFlipSided:te,setCullFace:fe,setLineWidth:ae,setPolygonOffset:Oe,setScissorTest:xe,activeTexture:R,bindTexture:M,unbindTexture:H,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:Ae,texImage3D:ze,updateUBOMapping:tt,uniformBlockBinding:$e,texStorage2D:je,texStorage3D:ce,texSubImage2D:$,texSubImage3D:Ue,compressedTexSubImage2D:ge,compressedTexSubImage3D:Te,scissor:Ve,viewport:Ce,reset:ut}}function fu(n,e,t,i){let r=Nx(i);switch(t){case Cu:return n*e;case Iu:return n*e;case Pu:return n*e*2;case pc:return n*e/r.components*r.byteLength;case mc:return n*e/r.components*r.byteLength;case Uu:return n*e*2/r.components*r.byteLength;case gc:return n*e*2/r.components*r.byteLength;case Ru:return n*e*3/r.components*r.byteLength;case hn:return n*e*4/r.components*r.byteLength;case vc:return n*e*4/r.components*r.byteLength;case ra:case sa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case aa:case oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case el:case nl:return Math.max(n,16)*Math.max(e,8)/4;case jo:case tl:return Math.max(n,8)*Math.max(e,8)/2;case il:case rl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case al:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case ll:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case fl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ml:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case gl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case xl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case la:case _l:case Sl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Lu:case bl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Ml:case wl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nx(n){switch(n){case Wn:case Tu:return{byteLength:1,components:1};case as:case Eu:case ms:return{byteLength:2,components:1};case fc:case dc:return{byteLength:2,components:4};case Di:case uc:case Sn:return{byteLength:4,components:1};case Au:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ox(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return d?new OffscreenCanvas(R,M):ua("canvas")}function v(R,M,H){let J=1,ne=xe(R);if((ne.width>H||ne.height>H)&&(J=H/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&R instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&R instanceof ImageBitmap||typeof VideoFrame!="undefined"&&R instanceof VideoFrame){let $=Math.floor(J*ne.width),Ue=Math.floor(J*ne.height);f===void 0&&(f=g($,Ue));let ge=M?g($,Ue):f;return ge.width=$,ge.height=Ue,ge.getContext("2d").drawImage(R,0,0,$,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Ue+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(R,M,H,J,ne=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=M;if(M===n.RED&&(H===n.FLOAT&&($=n.R32F),H===n.HALF_FLOAT&&($=n.R16F),H===n.UNSIGNED_BYTE&&($=n.R8)),M===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.R8UI),H===n.UNSIGNED_SHORT&&($=n.R16UI),H===n.UNSIGNED_INT&&($=n.R32UI),H===n.BYTE&&($=n.R8I),H===n.SHORT&&($=n.R16I),H===n.INT&&($=n.R32I)),M===n.RG&&(H===n.FLOAT&&($=n.RG32F),H===n.HALF_FLOAT&&($=n.RG16F),H===n.UNSIGNED_BYTE&&($=n.RG8)),M===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RG8UI),H===n.UNSIGNED_SHORT&&($=n.RG16UI),H===n.UNSIGNED_INT&&($=n.RG32UI),H===n.BYTE&&($=n.RG8I),H===n.SHORT&&($=n.RG16I),H===n.INT&&($=n.RG32I)),M===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGB8UI),H===n.UNSIGNED_SHORT&&($=n.RGB16UI),H===n.UNSIGNED_INT&&($=n.RGB32UI),H===n.BYTE&&($=n.RGB8I),H===n.SHORT&&($=n.RGB16I),H===n.INT&&($=n.RGB32I)),M===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&($=n.RGBA8UI),H===n.UNSIGNED_SHORT&&($=n.RGBA16UI),H===n.UNSIGNED_INT&&($=n.RGBA32UI),H===n.BYTE&&($=n.RGBA8I),H===n.SHORT&&($=n.RGBA16I),H===n.INT&&($=n.RGBA32I)),M===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),M===n.RGBA){let Ue=ne?Na:nt.getTransfer(J);H===n.FLOAT&&($=n.RGBA32F),H===n.HALF_FLOAT&&($=n.RGBA16F),H===n.UNSIGNED_BYTE&&($=Ue===ot?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function y(R,M){let H;return R?M===null||M===Di||M===Mr?H=n.DEPTH24_STENCIL8:M===Sn?H=n.DEPTH32F_STENCIL8:M===as&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Di||M===Mr?H=n.DEPTH_COMPONENT24:M===Sn?H=n.DEPTH_COMPONENT32F:M===as&&(H=n.DEPTH_COMPONENT16),H}function C(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Wt&&R.minFilter!==_n?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function w(R){let M=R.target;M.removeEventListener("dispose",w),T(M),M.isVideoTexture&&h.delete(M)}function E(R){let M=R.target;M.removeEventListener("dispose",E),_(M)}function T(R){let M=i.get(R);if(M.__webglInit===void 0)return;let H=R.source,J=u.get(H);if(J){let ne=J[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(R),Object.keys(J).length===0&&u.delete(H)}i.remove(R)}function b(R){let M=i.get(R);n.deleteTexture(M.__webglTexture);let H=R.source,J=u.get(H);delete J[M.__cacheKey],a.memory.textures--}function _(R){let M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ne=0;ne<M.__webglFramebuffer[J].length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[J][ne]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=R.textures;for(let J=0,ne=H.length;J<ne;J++){let $=i.get(H[J]);$.__webglTexture&&(n.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(H[J])}i.remove(R)}let I=0;function k(){I=0}function D(){let R=I;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),I+=1,R}function L(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function G(R,M){let H=i.get(R);if(R.isVideoTexture&&ae(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){let J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(H,R,M);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+M)}function z(R,M){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Y(H,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+M)}function Z(R,M){let H=i.get(R);if(R.version>0&&H.__version!==R.version){Y(H,R,M);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+M)}function N(R,M){let H=i.get(R);if(R.version>0&&H.__version!==R.version){se(H,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+M)}let K={[br]:n.REPEAT,[Ui]:n.CLAMP_TO_EDGE,[Qo]:n.MIRRORED_REPEAT},ie={[Wt]:n.NEAREST,[Sp]:n.NEAREST_MIPMAP_NEAREST,[Us]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[oo]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},Q={[Tp]:n.NEVER,[Pp]:n.ALWAYS,[Ep]:n.LESS,[Fu]:n.LEQUAL,[Ap]:n.EQUAL,[Ip]:n.GEQUAL,[Cp]:n.GREATER,[Rp]:n.NOTEQUAL};function be(R,M){if(M.type===Sn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===_n||M.magFilter===oo||M.magFilter===Us||M.magFilter===Li||M.minFilter===_n||M.minFilter===oo||M.minFilter===Us||M.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,K[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,K[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,K[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,ie[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,ie[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==Us&&M.minFilter!==Li||M.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ie(R,M){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",w));let J=M.source,ne=u.get(J);ne===void 0&&(ne={},u.set(J,ne));let $=L(M);if($!==R.__cacheKey){ne[$]===void 0&&(ne[$]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[$].usedTimes++;let Ue=ne[R.__cacheKey];Ue!==void 0&&(ne[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(M)),R.__cacheKey=$,R.__webglTexture=ne[$].texture}return H}function Y(R,M,H){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);let ne=Ie(R,M),$=M.source;t.bindTexture(J,R.__webglTexture,n.TEXTURE0+H);let Ue=i.get($);if($.version!==Ue.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);let ge=nt.getPrimaries(nt.workingColorSpace),Te=M.colorSpace===ai?null:nt.getPrimaries(M.colorSpace),je=M.colorSpace===ai||ge===Te?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let ce=v(M.image,!1,r.maxTextureSize);ce=Oe(M,ce);let Ae=s.convert(M.format,M.colorSpace),ze=s.convert(M.type),Ve=x(M.internalFormat,Ae,ze,M.colorSpace,M.isVideoTexture);be(J,M);let Ce,tt=M.mipmaps,$e=M.isVideoTexture!==!0,ut=Ue.__version===void 0||ne===!0,F=$.dataReady,ve=C(M,ce);if(M.isDepthTexture)Ve=y(M.format===wr,M.type),ut&&($e?t.texStorage2D(n.TEXTURE_2D,1,Ve,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,Ve,ce.width,ce.height,0,Ae,ze,null));else if(M.isDataTexture)if(tt.length>0){$e&&ut&&t.texStorage2D(n.TEXTURE_2D,ve,Ve,tt[0].width,tt[0].height);for(let q=0,ee=tt.length;q<ee;q++)Ce=tt[q],$e?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ce.width,Ce.height,Ae,ze,Ce.data):t.texImage2D(n.TEXTURE_2D,q,Ve,Ce.width,Ce.height,0,Ae,ze,Ce.data);M.generateMipmaps=!1}else $e?(ut&&t.texStorage2D(n.TEXTURE_2D,ve,Ve,ce.width,ce.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,Ae,ze,ce.data)):t.texImage2D(n.TEXTURE_2D,0,Ve,ce.width,ce.height,0,Ae,ze,ce.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ve,tt[0].width,tt[0].height,ce.depth);for(let q=0,ee=tt.length;q<ee;q++)if(Ce=tt[q],M.format!==hn)if(Ae!==null)if($e){if(F)if(M.layerUpdates.size>0){let Me=fu(Ce.width,Ce.height,M.format,M.type);for(let ye of M.layerUpdates){let qe=Ce.data.subarray(ye*Me/Ce.data.BYTES_PER_ELEMENT,(ye+1)*Me/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,ye,Ce.width,Ce.height,1,Ae,qe)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ce.width,Ce.height,ce.depth,Ae,Ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,q,Ve,Ce.width,Ce.height,ce.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,q,0,0,0,Ce.width,Ce.height,ce.depth,Ae,ze,Ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,q,Ve,Ce.width,Ce.height,ce.depth,0,Ae,ze,Ce.data)}else{$e&&ut&&t.texStorage2D(n.TEXTURE_2D,ve,Ve,tt[0].width,tt[0].height);for(let q=0,ee=tt.length;q<ee;q++)Ce=tt[q],M.format!==hn?Ae!==null?$e?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,q,0,0,Ce.width,Ce.height,Ae,Ce.data):t.compressedTexImage2D(n.TEXTURE_2D,q,Ve,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ce.width,Ce.height,Ae,ze,Ce.data):t.texImage2D(n.TEXTURE_2D,q,Ve,Ce.width,Ce.height,0,Ae,ze,Ce.data)}else if(M.isDataArrayTexture)if($e){if(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ve,Ve,ce.width,ce.height,ce.depth),F)if(M.layerUpdates.size>0){let q=fu(ce.width,ce.height,M.format,M.type);for(let ee of M.layerUpdates){let Me=ce.data.subarray(ee*q/ce.data.BYTES_PER_ELEMENT,(ee+1)*q/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,Ae,ze,Me)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ae,ze,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ve,ce.width,ce.height,ce.depth,0,Ae,ze,ce.data);else if(M.isData3DTexture)$e?(ut&&t.texStorage3D(n.TEXTURE_3D,ve,Ve,ce.width,ce.height,ce.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ae,ze,ce.data)):t.texImage3D(n.TEXTURE_3D,0,Ve,ce.width,ce.height,ce.depth,0,Ae,ze,ce.data);else if(M.isFramebufferTexture){if(ut)if($e)t.texStorage2D(n.TEXTURE_2D,ve,Ve,ce.width,ce.height);else{let q=ce.width,ee=ce.height;for(let Me=0;Me<ve;Me++)t.texImage2D(n.TEXTURE_2D,Me,Ve,q,ee,0,Ae,ze,null),q>>=1,ee>>=1}}else if(tt.length>0){if($e&&ut){let q=xe(tt[0]);t.texStorage2D(n.TEXTURE_2D,ve,Ve,q.width,q.height)}for(let q=0,ee=tt.length;q<ee;q++)Ce=tt[q],$e?F&&t.texSubImage2D(n.TEXTURE_2D,q,0,0,Ae,ze,Ce):t.texImage2D(n.TEXTURE_2D,q,Ve,Ae,ze,Ce);M.generateMipmaps=!1}else if($e){if(ut){let q=xe(ce);t.texStorage2D(n.TEXTURE_2D,ve,Ve,q.width,q.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,ze,ce)}else t.texImage2D(n.TEXTURE_2D,0,Ve,Ae,ze,ce);m(M)&&p(J),Ue.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function se(R,M,H){if(M.image.length!==6)return;let J=Ie(R,M),ne=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);let $=i.get(ne);if(ne.version!==$.__version||J===!0){t.activeTexture(n.TEXTURE0+H);let Ue=nt.getPrimaries(nt.workingColorSpace),ge=M.colorSpace===ai?null:nt.getPrimaries(M.colorSpace),Te=M.colorSpace===ai||Ue===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let je=M.isCompressedTexture||M.image[0].isCompressedTexture,ce=M.image[0]&&M.image[0].isDataTexture,Ae=[];for(let ee=0;ee<6;ee++)!je&&!ce?Ae[ee]=v(M.image[ee],!0,r.maxCubemapSize):Ae[ee]=ce?M.image[ee].image:M.image[ee],Ae[ee]=Oe(M,Ae[ee]);let ze=Ae[0],Ve=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type),tt=x(M.internalFormat,Ve,Ce,M.colorSpace),$e=M.isVideoTexture!==!0,ut=$.__version===void 0||J===!0,F=ne.dataReady,ve=C(M,ze);be(n.TEXTURE_CUBE_MAP,M);let q;if(je){$e&&ut&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,tt,ze.width,ze.height);for(let ee=0;ee<6;ee++){q=Ae[ee].mipmaps;for(let Me=0;Me<q.length;Me++){let ye=q[Me];M.format!==hn?Ve!==null?$e?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,ye.width,ye.height,Ve,ye.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,tt,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,ye.width,ye.height,Ve,Ce,ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,tt,ye.width,ye.height,0,Ve,Ce,ye.data)}}}else{if(q=M.mipmaps,$e&&ut){q.length>0&&ve++;let ee=xe(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ve,tt,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae[ee].width,Ae[ee].height,Ve,Ce,Ae[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,Ae[ee].width,Ae[ee].height,0,Ve,Ce,Ae[ee].data);for(let Me=0;Me<q.length;Me++){let qe=q[Me].image[ee].image;$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,qe.width,qe.height,Ve,Ce,qe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,tt,qe.width,qe.height,0,Ve,Ce,qe.data)}}else{$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ve,Ce,Ae[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,tt,Ve,Ce,Ae[ee]);for(let Me=0;Me<q.length;Me++){let ye=q[Me];$e?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,Ve,Ce,ye.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,tt,Ve,Ce,ye.image[ee])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),$.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ue(R,M,H,J,ne,$){let Ue=s.convert(H.format,H.colorSpace),ge=s.convert(H.type),Te=x(H.internalFormat,Ue,ge,H.colorSpace),je=i.get(M),ce=i.get(H);if(ce.__renderTarget=M,!je.__hasExternalTextures){let Ae=Math.max(1,M.width>>$),ze=Math.max(1,M.height>>$);ne===n.TEXTURE_3D||ne===n.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,Te,Ae,ze,M.depth,0,Ue,ge,null):t.texImage2D(ne,$,Te,Ae,ze,0,Ue,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ne,ce.__webglTexture,0,te(M)):(ne===n.TEXTURE_2D||ne>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ne,ce.__webglTexture,$),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,M,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){let J=M.depthTexture,ne=J&&J.isDepthTexture?J.type:null,$=y(M.stencilBuffer,ne),Ue=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=te(M);fe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,$,M.width,M.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,$,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,$,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ue,n.RENDERBUFFER,R)}else{let J=M.textures;for(let ne=0;ne<J.length;ne++){let $=J[ne],Ue=s.convert($.format,$.colorSpace),ge=s.convert($.type),Te=x($.internalFormat,Ue,ge,$.colorSpace),je=te(M);H&&fe(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Te,M.width,M.height):fe(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,Te,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Te,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let J=i.get(M.depthTexture);J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G(M.depthTexture,0);let ne=J.__webglTexture,$=te(M);if(M.depthTexture.format===gr)fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(M.depthTexture.format===wr)fe(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ge(R){let M=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=J}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Pe(M.__webglFramebuffer,R)}else if(H){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),le(M.__webglDepthbuffer[J],R,!1);else{let ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,$),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,$)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),le(M.__webglDepthbuffer,R,!1);else{let J=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ne)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(R,M,H){let J=i.get(R);M!==void 0&&ue(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ge(R)}function Je(R){let M=R.texture,H=i.get(R),J=i.get(M);R.addEventListener("dispose",E);let ne=R.textures,$=R.isWebGLCubeRenderTarget===!0,Ue=ne.length>1;if(Ue||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[ge]=[];for(let Te=0;Te<M.mipmaps.length;Te++)H.__webglFramebuffer[ge][Te]=n.createFramebuffer()}else H.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)H.__webglFramebuffer[ge]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(Ue)for(let ge=0,Te=ne.length;ge<Te;ge++){let je=i.get(ne[ge]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&fe(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ge=0;ge<ne.length;ge++){let Te=ne[ge];H.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ge]);let je=s.convert(Te.format,Te.colorSpace),ce=s.convert(Te.type),Ae=x(Te.internalFormat,je,ce,Te.colorSpace,R.isXRRenderTarget===!0),ze=te(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,ze,Ae,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,H.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),le(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),be(n.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)ue(H.__webglFramebuffer[ge][Te],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Te);else ue(H.__webglFramebuffer[ge],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let ge=0,Te=ne.length;ge<Te;ge++){let je=ne[ge],ce=i.get(je);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),be(n.TEXTURE_2D,je),ue(H.__webglFramebuffer,R,je,n.COLOR_ATTACHMENT0+ge,n.TEXTURE_2D,0),m(je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,J.__webglTexture),be(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Te=0;Te<M.mipmaps.length;Te++)ue(H.__webglFramebuffer[Te],R,M,n.COLOR_ATTACHMENT0,ge,Te);else ue(H.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ge,0);m(M)&&p(ge),t.unbindTexture()}R.depthBuffer&&Ge(R)}function j(R){let M=R.textures;for(let H=0,J=M.length;H<J;H++){let ne=M[H];if(m(ne)){let $=S(R),Ue=i.get(ne).__webglTexture;t.bindTexture($,Ue),p($),t.unbindTexture()}}}let oe=[],P=[];function me(R){if(R.samples>0){if(fe(R)===!1){let M=R.textures,H=R.width,J=R.height,ne=n.COLOR_BUFFER_BIT,$=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ue=i.get(R),ge=M.length>1;if(ge)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);let je=i.get(M[Te]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,H,J,0,0,H,J,ne,n.NEAREST),l===!0&&(oe.length=0,P.length=0,oe.push(n.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(oe.push($),P.push($),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.RENDERBUFFER,Ue.__webglColorRenderbuffer[Te]);let je=i.get(M[Te]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Te,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function te(R){return Math.min(r.maxSamples,R.samples)}function fe(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ae(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Oe(R,M){let H=R.colorSpace,J=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Lr&&H!==ai&&(nt.getTransfer(H)===ot?(J!==hn||ne!==Wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function xe(R){return typeof HTMLImageElement!="undefined"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame!="undefined"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=k,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=ke,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=fe}function kx(n,e){function t(i,r=ai){let s,a=nt.getTransfer(r);if(i===Wn)return n.UNSIGNED_BYTE;if(i===fc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===dc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Au)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tu)return n.BYTE;if(i===Eu)return n.SHORT;if(i===as)return n.UNSIGNED_SHORT;if(i===uc)return n.INT;if(i===Di)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===ms)return n.HALF_FLOAT;if(i===Cu)return n.ALPHA;if(i===Ru)return n.RGB;if(i===hn)return n.RGBA;if(i===Iu)return n.LUMINANCE;if(i===Pu)return n.LUMINANCE_ALPHA;if(i===gr)return n.DEPTH_COMPONENT;if(i===wr)return n.DEPTH_STENCIL;if(i===pc)return n.RED;if(i===mc)return n.RED_INTEGER;if(i===Uu)return n.RG;if(i===gc)return n.RG_INTEGER;if(i===vc)return n.RGBA_INTEGER;if(i===ra||i===sa||i===aa||i===oa)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ra)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ra)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===el)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===rl||i===sl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===il||i===rl)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===vl||i===xl||i===yl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===al)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ol)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ll)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ul)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===fl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ml)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===xl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===_l||i===Sl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===la)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lu||i===bl||i===Ml||i===wl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===la)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===wl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var zl=class extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},bt=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bx={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new bt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new zt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Tn({vertexShader:zx,fragmentShader:Gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Se(new fi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hl=class extends hi{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,v=new Gl,m=t.getContextAttributes(),p=null,S=null,x=[],y=[],C=new re,w=null,E=new Dt;E.viewport=new lt;let T=new Dt;T.viewport=new lt;let b=[E,T],_=new zl,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let se=x[Y];return se===void 0&&(se=new is,x[Y]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Y){let se=x[Y];return se===void 0&&(se=new is,x[Y]=se),se.getGripSpace()},this.getHand=function(Y){let se=x[Y];return se===void 0&&(se=new is,x[Y]=se),se.getHandSpace()};function D(Y){let se=y.indexOf(Y.inputSource);if(se===-1)return;let ue=x[se];ue!==void 0&&(ue.update(Y.inputSource,Y.frame,c||a),ue.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",G);for(let Y=0;Y<x.length;Y++){let se=y[Y];se!==null&&(y[Y]=null,x[Y].disconnect(se))}I=null,k=null,v.reset(),e.setRenderTarget(p),d=null,u=null,f=null,r=null,S=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",L),r.addEventListener("inputsourceschange",G),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Xn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:Wn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,ue=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?wr:gr,ue=m.stencil?Mr:Di);let Pe={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,t),u=f.createProjectionLayer(Pe),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Xn(u.textureWidth,u.textureHeight,{format:hn,type:Wn,depthTexture:new ya(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function G(Y){for(let se=0;se<Y.removed.length;se++){let ue=Y.removed[se],le=y.indexOf(ue);le>=0&&(y[le]=null,x[le].disconnect(ue))}for(let se=0;se<Y.added.length;se++){let ue=Y.added[se],le=y.indexOf(ue);if(le===-1){for(let Ge=0;Ge<x.length;Ge++)if(Ge>=y.length){y.push(ue),le=Ge;break}else if(y[Ge]===null){y[Ge]=ue,le=Ge;break}if(le===-1)break}let Pe=x[le];Pe&&Pe.connect(ue)}}let z=new U,Z=new U;function N(Y,se,ue){z.setFromMatrixPosition(se.matrixWorld),Z.setFromMatrixPosition(ue.matrixWorld);let le=z.distanceTo(Z),Pe=se.projectionMatrix.elements,Ge=ue.projectionMatrix.elements,ke=Pe[14]/(Pe[10]-1),Je=Pe[14]/(Pe[10]+1),j=(Pe[9]+1)/Pe[5],oe=(Pe[9]-1)/Pe[5],P=(Pe[8]-1)/Pe[0],me=(Ge[8]+1)/Ge[0],te=ke*P,fe=ke*me,ae=le/(-P+me),Oe=ae*-P;if(se.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Oe),Y.translateZ(ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let xe=ke+ae,R=Je+ae,M=te-Oe,H=fe+(le-Oe),J=j*Je/R*xe,ne=oe*Je/R*xe;Y.projectionMatrix.makePerspective(M,H,J,ne,xe,R),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function K(Y,se){se===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(se.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let se=Y.near,ue=Y.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(ue=v.depthFar)),_.near=T.near=E.near=se,_.far=T.far=E.far=ue,(I!==_.near||k!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),I=_.near,k=_.far),E.layers.mask=Y.layers.mask|2,T.layers.mask=Y.layers.mask|4,_.layers.mask=E.layers.mask|T.layers.mask;let le=Y.parent,Pe=_.cameras;K(_,le);for(let Ge=0;Ge<Pe.length;Ge++)K(Pe[Ge],le);Pe.length===2?N(_,E,T):_.projectionMatrix.copy(E.projectionMatrix),ie(Y,_,le)};function ie(Y,se,ue){ue===null?Y.matrix.copy(se.matrixWorld):(Y.matrix.copy(ue.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(se.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(se.projectionMatrix),Y.projectionMatrixInverse.copy(se.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=os*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Q=null;function be(Y,se){if(h=se.getViewerPose(c||a),g=se,h!==null){let ue=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let le=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,le=!0);for(let Ge=0;Ge<ue.length;Ge++){let ke=ue[Ge],Je=null;if(d!==null)Je=d.getViewport(ke);else{let oe=f.getViewSubImage(u,ke);Je=oe.viewport,Ge===0&&(e.setRenderTargetTextures(S,oe.colorTexture,u.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(S))}let j=b[Ge];j===void 0&&(j=new Dt,j.layers.enable(Ge),j.viewport=new lt,b[Ge]=j),j.matrix.fromArray(ke.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ke.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Je.x,Je.y,Je.width,Je.height),Ge===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),le===!0&&_.cameras.push(j)}let Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){let Ge=f.getDepthInformation(ue[0]);Ge&&Ge.isValid&&Ge.texture&&v.init(e,Ge,r.renderState)}}for(let ue=0;ue<x.length;ue++){let le=y[ue],Pe=x[ue];le!==null&&Pe!==void 0&&Pe.update(le,se,c||a)}Q&&Q(Y,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),g=null}let Ie=new Bu;Ie.setAnimationLoop(be),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},Ai=new bn,Hx=new et;function Vx(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ku(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,x,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,x):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===At&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===At&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=e.get(p),x=S.envMap,y=S.envMapRotation;x&&(m.envMap.value=x,Ai.copy(y),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),m.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===At&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Wx(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,x){let y=x.program;i.uniformBlockBinding(S,y)}function c(S,x){let y=r[S.id];y===void 0&&(g(S),y=h(S),r[S.id]=y,S.addEventListener("dispose",m));let C=x.program;i.updateUBOMapping(S,C);let w=e.render.frame;s[S.id]!==w&&(u(S),s[S.id]=w)}function h(S){let x=f();S.__bindingPointIndex=x;let y=n.createBuffer(),C=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,C,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(S){let x=r[S.id],y=S.uniforms,C=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,E=y.length;w<E;w++){let T=Array.isArray(y[w])?y[w]:[y[w]];for(let b=0,_=T.length;b<_;b++){let I=T[b];if(d(I,w,b,C)===!0){let k=I.__offset,D=Array.isArray(I.value)?I.value:[I.value],L=0;for(let G=0;G<D.length;G++){let z=D[G],Z=v(z);typeof z=="number"||typeof z=="boolean"?(I.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,k+L,I.__data)):z.isMatrix3?(I.__data[0]=z.elements[0],I.__data[1]=z.elements[1],I.__data[2]=z.elements[2],I.__data[3]=0,I.__data[4]=z.elements[3],I.__data[5]=z.elements[4],I.__data[6]=z.elements[5],I.__data[7]=0,I.__data[8]=z.elements[6],I.__data[9]=z.elements[7],I.__data[10]=z.elements[8],I.__data[11]=0):(z.toArray(I.__data,L),L+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,k,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(S,x,y,C){let w=S.value,E=x+"_"+y;if(C[E]===void 0)return typeof w=="number"||typeof w=="boolean"?C[E]=w:C[E]=w.clone(),!0;{let T=C[E];if(typeof w=="number"||typeof w=="boolean"){if(T!==w)return C[E]=w,!0}else if(T.equals(w)===!1)return T.copy(w),!0}return!1}function g(S){let x=S.uniforms,y=0,C=16;for(let E=0,T=x.length;E<T;E++){let b=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,I=b.length;_<I;_++){let k=b[_],D=Array.isArray(k.value)?k.value:[k.value];for(let L=0,G=D.length;L<G;L++){let z=D[L],Z=v(z),N=y%C,K=N%Z.boundary,ie=N+K;y+=K,ie!==0&&C-ie<Z.storage&&(y+=C-ie),k.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Z.storage}}}let w=y%C;return w>0&&(y+=C-w),S.__size=y,S.__cache={},this}function v(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let y=a.indexOf(x.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function p(){for(let S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var _a=class{constructor(e={}){let{canvas:t=Zp(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext!="undefined"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let g=new Uint32Array(4),v=new Int32Array(4),m=null,p=null,S=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=li,this.toneMappingExposure=1;let y=this,C=!1,w=0,E=0,T=null,b=-1,_=null,I=new lt,k=new lt,D=null,L=new Xe(0),G=0,z=t.width,Z=t.height,N=1,K=null,ie=null,Q=new lt(0,0,z,Z),be=new lt(0,0,z,Z),Ie=!1,Y=new ls,se=!1,ue=!1,le=new et,Pe=new et,Ge=new U,ke=new lt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},j=!1;function oe(){return T===null?N:1}let P=i;function me(A,O){return t.getContext(A,O)}try{let A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r170"),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",ye,!1),P===null){let O="webgl2";if(P=me(O,A),P===null)throw me(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let te,fe,ae,Oe,xe,R,M,H,J,ne,$,Ue,ge,Te,je,ce,Ae,ze,Ve,Ce,tt,$e,ut,F;function ve(){te=new av(P),te.init(),$e=new kx(P,te),fe=new ev(P,te,e,$e),ae=new Fx(P,te),fe.reverseDepthBuffer&&u&&ae.buffers.depth.setReversed(!0),Oe=new cv(P),xe=new bx,R=new Ox(P,te,ae,xe,fe,$e,Oe),M=new nv(y),H=new sv(y),J=new gm(P),ut=new Q0(P,J),ne=new ov(P,J,Oe,ut),$=new uv(P,ne,J,Oe),Ve=new hv(P,fe,R),ce=new tv(xe),Ue=new Sx(y,M,H,te,fe,ut,ce),ge=new Vx(y,xe),Te=new wx,je=new Ix(te),ze=new K0(y,M,H,ae,$,d,l),Ae=new Lx(y,$,fe),F=new Wx(P,Oe,fe,ae),Ce=new j0(P,te,Oe),tt=new lv(P,te,Oe),Oe.programs=Ue.programs,y.capabilities=fe,y.extensions=te,y.properties=xe,y.renderLists=Te,y.shadowMap=Ae,y.state=ae,y.info=Oe}ve();let q=new Hl(y,P);this.xr=q,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let A=te.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=te.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(A){A!==void 0&&(N=A,this.setSize(z,Z,!1))},this.getSize=function(A){return A.set(z,Z)},this.setSize=function(A,O,W=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,Z=O,t.width=Math.floor(A*N),t.height=Math.floor(O*N),W===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(z*N,Z*N).floor()},this.setDrawingBufferSize=function(A,O,W){z=A,Z=O,N=W,t.width=Math.floor(A*W),t.height=Math.floor(O*W),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,O,W,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,O,W,X),ae.viewport(I.copy(Q).multiplyScalar(N).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,O,W,X){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,O,W,X),ae.scissor(k.copy(be).multiplyScalar(N).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(A){ae.setScissorTest(Ie=A)},this.setOpaqueSort=function(A){K=A},this.setTransparentSort=function(A){ie=A},this.getClearColor=function(A){return A.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(A=!0,O=!0,W=!0){let X=0;if(A){let B=!1;if(T!==null){let he=T.texture.format;B=he===vc||he===gc||he===mc}if(B){let he=T.texture.type,_e=he===Wn||he===Di||he===as||he===Mr||he===fc||he===dc,Le=ze.getClearColor(),De=ze.getClearAlpha(),We=Le.r,Ye=Le.g,Fe=Le.b;_e?(g[0]=We,g[1]=Ye,g[2]=Fe,g[3]=De,P.clearBufferuiv(P.COLOR,0,g)):(v[0]=We,v[1]=Ye,v[2]=Fe,v[3]=De,P.clearBufferiv(P.COLOR,0,v))}else X|=P.COLOR_BUFFER_BIT}O&&(X|=P.DEPTH_BUFFER_BIT),W&&(X|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),Te.dispose(),je.dispose(),xe.dispose(),M.dispose(),H.dispose(),$.dispose(),ut.dispose(),F.dispose(),Ue.dispose(),q.dispose(),q.removeEventListener("sessionstart",rh),q.removeEventListener("sessionend",sh),Si.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let A=Oe.autoReset,O=Ae.enabled,W=Ae.autoUpdate,X=Ae.needsUpdate,B=Ae.type;ve(),Oe.autoReset=A,Ae.enabled=O,Ae.autoUpdate=W,Ae.needsUpdate=X,Ae.type=B}function ye(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qe(A){let O=A.target;O.removeEventListener("dispose",qe),vt(O)}function vt(A){Pt(A),xe.remove(A)}function Pt(A){let O=xe.get(A).programs;O!==void 0&&(O.forEach(function(W){Ue.releaseProgram(W)}),A.isShaderMaterial&&Ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,W,X,B,he){O===null&&(O=Je);let _e=B.isMesh&&B.matrixWorld.determinant()<0,Le=Vd(A,O,W,X,B);ae.setMaterial(X,_e);let De=W.index,We=1;if(X.wireframe===!0){if(De=ne.getWireframeAttribute(W),De===void 0)return;We=2}let Ye=W.drawRange,Fe=W.attributes.position,it=Ye.start*We,ft=(Ye.start+Ye.count)*We;he!==null&&(it=Math.max(it,he.start*We),ft=Math.min(ft,(he.start+he.count)*We)),De!==null?(it=Math.max(it,0),ft=Math.min(ft,De.count)):Fe!=null&&(it=Math.max(it,0),ft=Math.min(ft,Fe.count));let dt=ft-it;if(dt<0||dt===1/0)return;ut.setup(B,X,Le,W,De);let kt,rt=Ce;if(De!==null&&(kt=J.get(De),rt=tt,rt.setIndex(kt)),B.isMesh)X.wireframe===!0?(ae.setLineWidth(X.wireframeLinewidth*oe()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(B.isLine){let Ne=X.linewidth;Ne===void 0&&(Ne=1),ae.setLineWidth(Ne*oe()),B.isLineSegments?rt.setMode(P.LINES):B.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else B.isPoints?rt.setMode(P.POINTS):B.isSprite&&rt.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)rt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(te.get("WEBGL_multi_draw"))rt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let Ne=B._multiDrawStarts,Ln=B._multiDrawCounts,st=B._multiDrawCount,sn=De?J.get(De).bytesPerElement:1,$i=xe.get(X).currentProgram.getUniforms();for(let Gt=0;Gt<st;Gt++)$i.setValue(P,"_gl_DrawID",Gt),rt.render(Ne[Gt]/sn,Ln[Gt])}else if(B.isInstancedMesh)rt.renderInstances(it,dt,B.count);else if(W.isInstancedBufferGeometry){let Ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ln=Math.min(W.instanceCount,Ne);rt.renderInstances(it,dt,Ln)}else rt.render(it,dt)};function at(A,O,W){A.transparent===!0&&A.side===zn&&A.forceSinglePass===!1?(A.side=At,A.needsUpdate=!0,Ps(A,O,W),A.side=ci,A.needsUpdate=!0,Ps(A,O,W),A.side=zn):Ps(A,O,W)}this.compile=function(A,O,W=null){W===null&&(W=A),p=je.get(W),p.init(O),x.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),A!==W&&A.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();let X=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let he=B.material;if(he)if(Array.isArray(he))for(let _e=0;_e<he.length;_e++){let Le=he[_e];at(Le,W,B),X.add(Le)}else at(he,W,B),X.add(he)}),x.pop(),p=null,X},this.compileAsync=function(A,O,W=null){let X=this.compile(A,O,W);return new Promise(B=>{function he(){if(X.forEach(function(_e){xe.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){B(A);return}setTimeout(he,10)}te.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let rn=null;function Un(A){rn&&rn(A)}function rh(){Si.stop()}function sh(){Si.start()}let Si=new Bu;Si.setAnimationLoop(Un),typeof self!="undefined"&&Si.setContext(self),this.setAnimationLoop=function(A){rn=A,q.setAnimationLoop(A),A===null?Si.stop():Si.start()},q.addEventListener("sessionstart",rh),q.addEventListener("sessionend",sh),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(O),O=q.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,O,T),p=je.get(A,x.length),p.init(O),x.push(p),Pe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),ue=this.localClippingEnabled,se=ce.init(this.clippingPlanes,ue),m=Te.get(A,S.length),m.init(),S.push(m),q.enabled===!0&&q.isPresenting===!0){let he=y.xr.getDepthSensingMesh();he!==null&&ao(he,O,-1/0,y.sortObjects)}ao(A,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(K,ie),j=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,j&&ze.addToRenderList(m,A),this.info.render.frame++,se===!0&&ce.beginShadows();let W=p.state.shadowsArray;Ae.render(W,A,O),se===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=m.opaque,B=m.transmissive;if(p.setupLights(),O.isArrayCamera){let he=O.cameras;if(B.length>0)for(let _e=0,Le=he.length;_e<Le;_e++){let De=he[_e];oh(X,B,A,De)}j&&ze.render(A);for(let _e=0,Le=he.length;_e<Le;_e++){let De=he[_e];ah(m,A,De,De.viewport)}}else B.length>0&&oh(X,B,A,O),j&&ze.render(A),ah(m,A,O);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(y,A,O),ut.resetDefaultState(),b=-1,_=null,x.pop(),x.length>0?(p=x[x.length-1],se===!0&&ce.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ao(A,O,W,X){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)W=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Y.intersectsSprite(A)){X&&ke.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Pe);let _e=$.update(A),Le=A.material;Le.visible&&m.push(A,_e,Le,W,ke.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Y.intersectsObject(A))){let _e=$.update(A),Le=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),ke.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ke.copy(_e.boundingSphere.center)),ke.applyMatrix4(A.matrixWorld).applyMatrix4(Pe)),Array.isArray(Le)){let De=_e.groups;for(let We=0,Ye=De.length;We<Ye;We++){let Fe=De[We],it=Le[Fe.materialIndex];it&&it.visible&&m.push(A,_e,it,W,ke.z,Fe)}}else Le.visible&&m.push(A,_e,Le,W,ke.z,null)}}let he=A.children;for(let _e=0,Le=he.length;_e<Le;_e++)ao(he[_e],O,W,X)}function ah(A,O,W,X){let B=A.opaque,he=A.transmissive,_e=A.transparent;p.setupLightsView(W),se===!0&&ce.setGlobalState(y.clippingPlanes,W),X&&ae.viewport(I.copy(X)),B.length>0&&Is(B,O,W),he.length>0&&Is(he,O,W),_e.length>0&&Is(_e,O,W),ae.buffers.depth.setTest(!0),ae.buffers.depth.setMask(!0),ae.buffers.color.setMask(!0),ae.setPolygonOffset(!1)}function oh(A,O,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Xn(1,1,{generateMipmaps:!0,type:te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float")?ms:Wn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));let he=p.state.transmissionRenderTarget[X.id],_e=X.viewport||I;he.setSize(_e.z,_e.w);let Le=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(L),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),j&&ze.render(W);let De=y.toneMapping;y.toneMapping=li;let We=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),se===!0&&ce.setGlobalState(y.clippingPlanes,X),Is(A,W,X),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),te.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Fe=0,it=O.length;Fe<it;Fe++){let ft=O[Fe],dt=ft.object,kt=ft.geometry,rt=ft.material,Ne=ft.group;if(rt.side===zn&&dt.layers.test(X.layers)){let Ln=rt.side;rt.side=At,rt.needsUpdate=!0,lh(dt,W,X,kt,rt,Ne),rt.side=Ln,rt.needsUpdate=!0,Ye=!0}}Ye===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}y.setRenderTarget(Le),y.setClearColor(L,G),We!==void 0&&(X.viewport=We),y.toneMapping=De}function Is(A,O,W){let X=O.isScene===!0?O.overrideMaterial:null;for(let B=0,he=A.length;B<he;B++){let _e=A[B],Le=_e.object,De=_e.geometry,We=X===null?_e.material:X,Ye=_e.group;Le.layers.test(W.layers)&&lh(Le,O,W,De,We,Ye)}}function lh(A,O,W,X,B,he){A.onBeforeRender(y,O,W,X,B,he),A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(y,O,W,X,A,he),B.transparent===!0&&B.side===zn&&B.forceSinglePass===!1?(B.side=At,B.needsUpdate=!0,y.renderBufferDirect(W,O,X,B,A,he),B.side=ci,B.needsUpdate=!0,y.renderBufferDirect(W,O,X,B,A,he),B.side=zn):y.renderBufferDirect(W,O,X,B,A,he),A.onAfterRender(y,O,W,X,B,he)}function Ps(A,O,W){O.isScene!==!0&&(O=Je);let X=xe.get(A),B=p.state.lights,he=p.state.shadowsArray,_e=B.state.version,Le=Ue.getParameters(A,B.state,he,O,W),De=Ue.getProgramCacheKey(Le),We=X.programs;X.environment=A.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(A.isMeshStandardMaterial?H:M).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",qe),We=new Map,X.programs=We);let Ye=We.get(De);if(Ye!==void 0){if(X.currentProgram===Ye&&X.lightsStateVersion===_e)return hh(A,Le),Ye}else Le.uniforms=Ue.getUniforms(A),A.onBeforeCompile(Le,y),Ye=Ue.acquireProgram(Le,De),We.set(De,Ye),X.uniforms=Le.uniforms;let Fe=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Fe.clippingPlanes=ce.uniform),hh(A,Le),X.needsLights=Xd(A),X.lightsStateVersion=_e,X.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=Ye,X.uniformsList=null,Ye}function ch(A){if(A.uniformsList===null){let O=A.currentProgram.getUniforms();A.uniformsList=xr.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function hh(A,O){let W=xe.get(A);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function Vd(A,O,W,X,B){O.isScene!==!0&&(O=Je),R.resetTextureUnits();let he=O.fog,_e=X.isMeshStandardMaterial?O.environment:null,Le=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Lr,De=(X.isMeshStandardMaterial?H:M).get(X.envMap||_e),We=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ye=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Fe=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,ft=!!W.morphAttributes.color,dt=li;X.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(dt=y.toneMapping);let kt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,rt=kt!==void 0?kt.length:0,Ne=xe.get(X),Ln=p.state.lights;if(se===!0&&(ue===!0||A!==_)){let $t=A===_&&X.id===b;ce.setState(X,A,$t)}let st=!1;X.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ln.state.version||Ne.outputColorSpace!==Le||B.isBatchedMesh&&Ne.batching===!1||!B.isBatchedMesh&&Ne.batching===!0||B.isBatchedMesh&&Ne.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ne.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ne.instancing===!1||!B.isInstancedMesh&&Ne.instancing===!0||B.isSkinnedMesh&&Ne.skinning===!1||!B.isSkinnedMesh&&Ne.skinning===!0||B.isInstancedMesh&&Ne.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ne.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ne.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ne.instancingMorph===!1&&B.morphTexture!==null||Ne.envMap!==De||X.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==We||Ne.vertexTangents!==Ye||Ne.morphTargets!==Fe||Ne.morphNormals!==it||Ne.morphColors!==ft||Ne.toneMapping!==dt||Ne.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ne.__version=X.version);let sn=Ne.currentProgram;st===!0&&(sn=Ps(X,O,B));let $i=!1,Gt=!1,Wr=!1,pt=sn.getUniforms(),xn=Ne.uniforms;if(ae.useProgram(sn.program)&&($i=!0,Gt=!0,Wr=!0),X.id!==b&&(b=X.id,Gt=!0),$i||_!==A){ae.buffers.depth.getReversed()?(le.copy(A.projectionMatrix),$p(le),Kp(le),pt.setValue(P,"projectionMatrix",le)):pt.setValue(P,"projectionMatrix",A.projectionMatrix),pt.setValue(P,"viewMatrix",A.matrixWorldInverse);let Qn=pt.map.cameraPosition;Qn!==void 0&&Qn.setValue(P,Ge.setFromMatrixPosition(A.matrixWorld)),fe.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&pt.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),_!==A&&(_=A,Gt=!0,Wr=!0)}if(B.isSkinnedMesh){pt.setOptional(P,B,"bindMatrix"),pt.setOptional(P,B,"bindMatrixInverse");let $t=B.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),pt.setValue(P,"boneTexture",$t.boneTexture,R))}B.isBatchedMesh&&(pt.setOptional(P,B,"batchingTexture"),pt.setValue(P,"batchingTexture",B._matricesTexture,R),pt.setOptional(P,B,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",B._indirectTexture,R),pt.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",B._colorsTexture,R));let Xr=W.morphAttributes;if((Xr.position!==void 0||Xr.normal!==void 0||Xr.color!==void 0)&&Ve.update(B,W,sn),(Gt||Ne.receiveShadow!==B.receiveShadow)&&(Ne.receiveShadow=B.receiveShadow,pt.setValue(P,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(xn.envMap.value=De,xn.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(xn.envMapIntensity.value=O.environmentIntensity),Gt&&(pt.setValue(P,"toneMappingExposure",y.toneMappingExposure),Ne.needsLights&&Wd(xn,Wr),he&&X.fog===!0&&ge.refreshFogUniforms(xn,he),ge.refreshMaterialUniforms(xn,X,N,Z,p.state.transmissionRenderTarget[A.id]),xr.upload(P,ch(Ne),xn,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(xr.upload(P,ch(Ne),xn,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&pt.setValue(P,"center",B.center),pt.setValue(P,"modelViewMatrix",B.modelViewMatrix),pt.setValue(P,"normalMatrix",B.normalMatrix),pt.setValue(P,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let $t=X.uniformsGroups;for(let Qn=0,jn=$t.length;Qn<jn;Qn++){let uh=$t[Qn];F.update(uh,sn),F.bind(uh,sn)}}return sn}function Wd(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Xd(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,O,W){xe.get(A.texture).__webglTexture=O,xe.get(A.depthTexture).__webglTexture=W;let X=xe.get(A);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){let W=xe.get(A);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,W=0){T=A,w=O,E=W;let X=!0,B=null,he=!1,_e=!1;if(A){let De=xe.get(A);if(De.__useDefaultFramebuffer!==void 0)ae.bindFramebuffer(P.FRAMEBUFFER,null),X=!1;else if(De.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(De.__hasExternalTextures)R.rebindTextures(A,xe.get(A.texture).__webglTexture,xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Fe=A.depthTexture;if(De.__boundDepthTexture!==Fe){if(Fe!==null&&xe.has(Fe)&&(A.width!==Fe.image.width||A.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let We=A.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(_e=!0);let Ye=xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?B=Ye[O][W]:B=Ye[O],he=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?B=xe.get(A).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[W]:B=Ye,I.copy(A.viewport),k.copy(A.scissor),D=A.scissorTest}else I.copy(Q).multiplyScalar(N).floor(),k.copy(be).multiplyScalar(N).floor(),D=Ie;if(ae.bindFramebuffer(P.FRAMEBUFFER,B)&&X&&ae.drawBuffers(A,B),ae.viewport(I),ae.scissor(k),ae.setScissorTest(D),he){let De=xe.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,W)}else if(_e){let De=xe.get(A.texture),We=O||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,W||0,We)}b=-1},this.readRenderTargetPixels=function(A,O,W,X,B,he,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Le=Le[_e]),Le){ae.bindFramebuffer(P.FRAMEBUFFER,Le);try{let De=A.texture,We=De.format,Ye=De.type;if(!fe.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-X&&W>=0&&W<=A.height-B&&P.readPixels(O,W,X,B,$e.convert(We),$e.convert(Ye),he)}finally{let De=T!==null?xe.get(T).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(A,O,W,X,B,he,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Le=Le[_e]),Le){let De=A.texture,We=De.format,Ye=De.type;if(!fe.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=A.width-X&&W>=0&&W<=A.height-B){ae.bindFramebuffer(P.FRAMEBUFFER,Le);let Fe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(O,W,X,B,$e.convert(We),$e.convert(Ye),0);let it=T!==null?xe.get(T).__webglFramebuffer:null;ae.bindFramebuffer(P.FRAMEBUFFER,it);let ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Jp(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Fe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Fe),P.deleteSync(ft),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,O=null,W=0){A.isTexture!==!0&&(jr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,A=arguments[1]);let X=Math.pow(2,-W),B=Math.floor(A.image.width*X),he=Math.floor(A.image.height*X),_e=O!==null?O.x:0,Le=O!==null?O.y:0;R.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,_e,Le,B,he),ae.unbindTexture()},this.copyTextureToTexture=function(A,O,W=null,X=null,B=0){A.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1],O=arguments[2],B=arguments[3]||0,W=null);let he,_e,Le,De,We,Ye,Fe,it,ft,dt=A.isCompressedTexture?A.mipmaps[B]:A.image;W!==null?(he=W.max.x-W.min.x,_e=W.max.y-W.min.y,Le=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,We=W.min.y,Ye=W.isBox3?W.min.z:0):(he=dt.width,_e=dt.height,Le=dt.depth||1,De=0,We=0,Ye=0),X!==null?(Fe=X.x,it=X.y,ft=X.z):(Fe=0,it=0,ft=0);let kt=$e.convert(O.format),rt=$e.convert(O.type),Ne;O.isData3DTexture?(R.setTexture3D(O,0),Ne=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(R.setTexture2DArray(O,0),Ne=P.TEXTURE_2D_ARRAY):(R.setTexture2D(O,0),Ne=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let Ln=P.getParameter(P.UNPACK_ROW_LENGTH),st=P.getParameter(P.UNPACK_IMAGE_HEIGHT),sn=P.getParameter(P.UNPACK_SKIP_PIXELS),$i=P.getParameter(P.UNPACK_SKIP_ROWS),Gt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,De),P.pixelStorei(P.UNPACK_SKIP_ROWS,We),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ye);let Wr=A.isDataArrayTexture||A.isData3DTexture,pt=O.isDataArrayTexture||O.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){let xn=xe.get(A),Xr=xe.get(O),$t=xe.get(xn.__renderTarget),Qn=xe.get(Xr.__renderTarget);ae.bindFramebuffer(P.READ_FRAMEBUFFER,$t.__webglFramebuffer),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qn.__webglFramebuffer);for(let jn=0;jn<Le;jn++)Wr&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(A).__webglTexture,B,Ye+jn),A.isDepthTexture?(pt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(O).__webglTexture,B,ft+jn),P.blitFramebuffer(De,We,he,_e,Fe,it,he,_e,P.DEPTH_BUFFER_BIT,P.NEAREST)):pt?P.copyTexSubImage3D(Ne,B,Fe,it,ft+jn,De,We,he,_e):P.copyTexSubImage2D(Ne,B,Fe,it,ft+jn,De,We,he,_e);ae.bindFramebuffer(P.READ_FRAMEBUFFER,null),ae.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pt?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Ne,B,Fe,it,ft,he,_e,Le,kt,rt,dt.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(Ne,B,Fe,it,ft,he,_e,Le,kt,dt.data):P.texSubImage3D(Ne,B,Fe,it,ft,he,_e,Le,kt,rt,dt):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,B,Fe,it,he,_e,kt,rt,dt.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,B,Fe,it,dt.width,dt.height,kt,dt.data):P.texSubImage2D(P.TEXTURE_2D,B,Fe,it,he,_e,kt,rt,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ln),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),P.pixelStorei(P.UNPACK_SKIP_PIXELS,sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,$i),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Gt),B===0&&O.generateMipmaps&&P.generateMipmap(Ne),ae.unbindTexture()},this.copyTextureToTexture3D=function(A,O,W=null,X=null,B=0){return A.isTexture!==!0&&(jr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,A=arguments[2],O=arguments[3],B=arguments[4]||0),jr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,O,W,X,B)},this.initRenderTarget=function(A){xe.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ae.unbindTexture()},this.resetState=function(){w=0,E=0,T=null,ae.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var Ni=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Vl=class extends zt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Wt,h=Wt,f,u){super(null,a,o,l,c,h,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sa=class extends Xt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ur=new et,du=new et,js=[],pu=new qt,Xx=new et,$r=new Se,Kr=new Fi,qn=class extends Se{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Sa(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Xx)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new qt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),pu.copy(e.boundingBox).applyMatrix4(ur),this.boundingBox.union(pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ur),Kr.copy(e.boundingSphere).applyMatrix4(ur),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){let i=this.matrixWorld,r=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(i),e.ray.intersectsSphere(Kr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ur),du.multiplyMatrices(i,ur),$r.matrixWorld=du,$r.raycast(e,js);for(let a=0,o=js.length;a<o;a++){let l=js[a];l.instanceId=s,l.object=this,t.push(l)}js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Sa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Vl(new Float32Array(r*this.count),r,this.count,pc,Sn));let s=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Yn=class extends zt{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],u=i[r+1]-h,d=(a-h)/u;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new re:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new U,r=[],s=[],a=[],o=new U,l=new et;for(let d=0;d<=e;d++){let g=d/e;r[d]=this.getTangentAt(g,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),f=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(r[d-1],r[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(St(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(St(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],d*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},cs=class extends en{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Wl=class extends cs{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function _c(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,f){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,r(a,o,u,d)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var ea=new U,No=new _c,Oo=new _c,ko=new _c,Zn=class extends en{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new U){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(ea.subVectors(r[0],r[1]).add(r[0]),c=ea);let f=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(ea.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=ea),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),No.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,v,m),Oo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,v,m),ko.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(No.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Oo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),ko.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return i.set(No.calc(l),Oo.calc(l),ko.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mu(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function qx(n,e){let t=1-n;return t*t*e}function Yx(n,e){return 2*(1-n)*n*e}function Zx(n,e){return n*n*e}function rs(n,e,t,i){return qx(n,e)+Yx(n,t)+Zx(n,i)}function Jx(n,e){let t=1-n;return t*t*t*e}function $x(n,e){let t=1-n;return 3*t*t*n*e}function Kx(n,e){return 3*(1-n)*n*n*e}function Qx(n,e){return n*n*n*e}function ss(n,e,t,i,r){return Jx(n,e)+$x(n,t)+Kx(n,i)+Qx(n,r)}var ba=class extends en{constructor(e=new re,t=new re,i=new re,r=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new re){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ss(e,r.x,s.x,a.x,o.x),ss(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xl=class extends en{constructor(e=new U,t=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new U){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(ss(e,r.x,s.x,a.x,o.x),ss(e,r.y,s.y,a.y,o.y),ss(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ma=class extends en{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ql=class extends en{constructor(e=new U,t=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new U){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new U){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},wa=class extends en{constructor(e=new re,t=new re,i=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new re){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(rs(e,r.x,s.x,a.x),rs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ta=class extends en{constructor(e=new U,t=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new U){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(rs(e,r.x,s.x,a.x),rs(e,r.y,s.y,a.y),rs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ea=class extends en{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],f=r[a>r.length-3?r.length-1:a+2];return i.set(mu(o,l.x,c.x,h.x,f.x),mu(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new re().fromArray(r))}return this}},Aa=Object.freeze({__proto__:null,ArcCurve:Wl,CatmullRomCurve3:Zn,CubicBezierCurve:ba,CubicBezierCurve3:Xl,EllipseCurve:cs,LineCurve:Ma,LineCurve3:ql,QuadraticBezierCurve:wa,QuadraticBezierCurve3:Ta,SplineCurve:Ea}),Yl=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Aa[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Aa[r.type]().fromJSON(r))}return this}},di=class extends Yl{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ma(this.currentPoint.clone(),new re(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new wa(this.currentPoint.clone(),new re(e,t),new re(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new ba(this.currentPoint.clone(),new re(e,t),new re(i,r),new re(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Ea(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new cs(e,t,i,r,s,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Oi=class n extends Rt{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=St(r,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/t,f=new U,u=new re,d=new U,g=new U,v=new U,m=0,p=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[S+1].x-e[S].x,p=e[S+1].y-e[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(g)}for(let S=0;S<=t;S++){let x=i+S*h*r,y=Math.sin(x),C=Math.cos(x);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*y,f.y=e[w].y,f.z=e[w].x*C,a.push(f.x,f.y,f.z),u.x=S/t,u.y=w/(e.length-1),o.push(u.x,u.y);let E=l[3*w+0]*y,T=l[3*w+1],b=l[3*w+0]*C;c.push(E,T,b)}}for(let S=0;S<t;S++)for(let x=0;x<e.length-1;x++){let y=x+S*e.length,C=y,w=y+e.length,E=y+e.length+1,T=y+1;s.push(C,w,T),s.push(E,T,w)}this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ca=class n extends Oi{constructor(e=1,t=1,i=4,r=8){let s=new di;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Cr=class n extends Rt{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new U,h=new re;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=i+f/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},En=class n extends Rt{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],f=[],u=[],d=[],g=0,v=[],m=i/2,p=0;S(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function S(){let y=new U,C=new U,w=0,E=(t-e)/i;for(let T=0;T<=s;T++){let b=[],_=T/s,I=_*(t-e)+e;for(let k=0;k<=r;k++){let D=k/r,L=D*l+o,G=Math.sin(L),z=Math.cos(L);C.x=I*G,C.y=-_*i+m,C.z=I*z,f.push(C.x,C.y,C.z),y.set(G,E,z).normalize(),u.push(y.x,y.y,y.z),d.push(D,1-_),b.push(g++)}v.push(b)}for(let T=0;T<r;T++)for(let b=0;b<s;b++){let _=v[b][T],I=v[b+1][T],k=v[b+1][T+1],D=v[b][T+1];(e>0||b!==0)&&(h.push(_,I,D),w+=3),(t>0||b!==s-1)&&(h.push(I,k,D),w+=3)}c.addGroup(p,w,0),p+=w}function x(y){let C=g,w=new re,E=new U,T=0,b=y===!0?e:t,_=y===!0?1:-1;for(let k=1;k<=r;k++)f.push(0,m*_,0),u.push(0,_,0),d.push(.5,.5),g++;let I=g;for(let k=0;k<=r;k++){let L=k/r*l+o,G=Math.cos(L),z=Math.sin(L);E.x=b*z,E.y=m*_,E.z=b*G,f.push(E.x,E.y,E.z),u.push(0,_,0),w.x=G*.5+.5,w.y=z*.5*_+.5,d.push(w.x,w.y),g++}for(let k=0;k<r;k++){let D=C+k,L=I+k;y===!0?h.push(L,L+1,D):h.push(L+1,L,D),T+=3}c.addGroup(p,T,y===!0?1:2),p+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Zl=class n extends Rt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};let s=[],a=[];o(r),c(i),h(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(S){let x=new U,y=new U,C=new U;for(let w=0;w<t.length;w+=3)d(t[w+0],x),d(t[w+1],y),d(t[w+2],C),l(x,y,C,S)}function l(S,x,y,C){let w=C+1,E=[];for(let T=0;T<=w;T++){E[T]=[];let b=S.clone().lerp(y,T/w),_=x.clone().lerp(y,T/w),I=w-T;for(let k=0;k<=I;k++)k===0&&T===w?E[T][k]=b:E[T][k]=b.clone().lerp(_,k/I)}for(let T=0;T<w;T++)for(let b=0;b<2*(w-T)-1;b++){let _=Math.floor(b/2);b%2===0?(u(E[T][_+1]),u(E[T+1][_]),u(E[T][_])):(u(E[T][_+1]),u(E[T+1][_+1]),u(E[T+1][_]))}}function c(S){let x=new U;for(let y=0;y<s.length;y+=3)x.x=s[y+0],x.y=s[y+1],x.z=s[y+2],x.normalize().multiplyScalar(S),s[y+0]=x.x,s[y+1]=x.y,s[y+2]=x.z}function h(){let S=new U;for(let x=0;x<s.length;x+=3){S.x=s[x+0],S.y=s[x+1],S.z=s[x+2];let y=m(S)/2/Math.PI+.5,C=p(S)/Math.PI+.5;a.push(y,1-C)}g(),f()}function f(){for(let S=0;S<a.length;S+=6){let x=a[S+0],y=a[S+2],C=a[S+4],w=Math.max(x,y,C),E=Math.min(x,y,C);w>.9&&E<.1&&(x<.2&&(a[S+0]+=1),y<.2&&(a[S+2]+=1),C<.2&&(a[S+4]+=1))}}function u(S){s.push(S.x,S.y,S.z)}function d(S,x){let y=S*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function g(){let S=new U,x=new U,y=new U,C=new U,w=new re,E=new re,T=new re;for(let b=0,_=0;b<s.length;b+=9,_+=6){S.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),w.set(a[_+0],a[_+1]),E.set(a[_+2],a[_+3]),T.set(a[_+4],a[_+5]),C.copy(S).add(x).add(y).divideScalar(3);let I=m(C);v(w,_+0,S,I),v(E,_+2,x,I),v(T,_+4,y,I)}}function v(S,x,y,C){C<0&&S.x===1&&(a[x]=S.x-1),y.x===0&&y.z===0&&(a[x]=C/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.vertices,e.indices,e.radius,e.details)}};var Qt=class extends di{constructor(e){super(e),this.uuid=Hi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new di().fromJSON(r))}return this}},jx={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=Wu(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,f,u,d;if(i&&(s=ry(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<r;g+=t)f=n[g],u=n[g+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return hs(s,a,t,o,l,d,0),a}};function Wu(n,e,t,i,r){let s,a;if(r===my(n,e,t,i)>0)for(s=e;s<t;s+=i)a=gu(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=gu(s,n[s],n[s+1],a);return a&&ka(a,a.next)&&(fs(a),a=a.next),a}function ki(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(ka(t,t.next)||gt(t.prev,t,t.next)===0)){if(fs(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function hs(n,e,t,i,r,s,a){if(!n)return;!a&&s&&cy(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?ty(n,i,r,s):ey(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),fs(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=ny(ki(n),e,t),hs(n,e,t,i,r,s,2)):a===2&&iy(n,e,t,i,r,s):hs(ki(n),e,t,i,r,s,1);break}}}function ey(n){let e=n.prev,t=n,i=n.next;if(gt(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,f=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,d=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&pr(r,o,s,l,a,c,g.x,g.y)&&gt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ty(n,e,t,i){let r=n.prev,s=n,a=n.next;if(gt(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,f=s.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,g=h<f?h<u?h:u:f<u?f:u,v=o>l?o>c?o:c:l>c?l:c,m=h>f?h>u?h:u:f>u?f:u,p=Jl(d,g,e,t,i),S=Jl(v,m,e,t,i),x=n.prevZ,y=n.nextZ;for(;x&&x.z>=p&&y&&y.z<=S;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&pr(o,h,l,f,c,u,x.x,x.y)&&gt(x.prev,x,x.next)>=0||(x=x.prevZ,y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&pr(o,h,l,f,c,u,y.x,y.y)&&gt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&pr(o,h,l,f,c,u,x.x,x.y)&&gt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;y&&y.z<=S;){if(y.x>=d&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==a&&pr(o,h,l,f,c,u,y.x,y.y)&&gt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function ny(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!ka(r,s)&&Xu(r,i,i.next,s)&&us(r,s)&&us(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),fs(i),fs(i.next),i=n=s),i=i.next}while(i!==n);return ki(i)}function iy(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&fy(a,o)){let l=qu(a,o);a=ki(a,a.next),l=ki(l,l.next),hs(a,e,t,i,r,s,0),hs(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function ry(n,e,t,i){let r=[],s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=Wu(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(uy(c));for(r.sort(sy),s=0;s<r.length;s++)t=ay(r[s],t);return t}function sy(n,e){return n.x-e.x}function ay(n,e){let t=oy(n,e);if(!t)return e;let i=qu(t,n);return ki(i,i.next),ki(t,t.next)}function oy(n,e){let t=e,i=-1/0,r,s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>i&&(i=u,r=t.x<t.next.x?t:t.next,u===s))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0,f;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&pr(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(f=Math.abs(a-t.y)/(s-t.x),us(t,n)&&(f<h||f===h&&(t.x>r.x||t.x===r.x&&ly(r,t)))&&(r=t,h=f)),t=t.next;while(t!==o);return r}function ly(n,e){return gt(n.prev,n,e.prev)<0&&gt(e.next,n,n.next)<0}function cy(n,e,t,i){let r=n;do r.z===0&&(r.z=Jl(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,hy(r)}function hy(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function Jl(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function uy(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function pr(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function fy(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dy(n,e)&&(us(n,e)&&us(e,n)&&py(n,e)&&(gt(n.prev,n,e.prev)||gt(n,e.prev,e))||ka(n,e)&&gt(n.prev,n,n.next)>0&&gt(e.prev,e,e.next)>0)}function gt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function ka(n,e){return n.x===e.x&&n.y===e.y}function Xu(n,e,t,i){let r=na(gt(n,e,t)),s=na(gt(n,e,i)),a=na(gt(t,i,n)),o=na(gt(t,i,e));return!!(r!==s&&a!==o||r===0&&ta(n,t,e)||s===0&&ta(n,i,e)||a===0&&ta(t,n,i)||o===0&&ta(t,e,i))}function ta(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function na(n){return n>0?1:n<0?-1:0}function dy(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Xu(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function us(n,e){return gt(n.prev,n,n.next)<0?gt(n,e,n.next)>=0&&gt(n,n.prev,e)>=0:gt(n,e,n.prev)<0||gt(n,n.next,e)<0}function py(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function qu(n,e){let t=new $l(n.i,n.x,n.y),i=new $l(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function gu(n,e,t,i){let r=new $l(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function fs(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function $l(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function my(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var Vn=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];vu(e),xu(i,e);let a=e.length;t.forEach(vu);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,xu(i,t[l]);let o=jx.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function vu(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function xu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Jn=class n extends Rt{constructor(e=new Qt([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Qe(r,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:gy,x,y=!1,C,w,E,T;p&&(x=p.getSpacedPoints(h),y=!0,u=!1,C=p.computeFrenetFrames(h,!1),w=new U,E=new U,T=new U),u||(m=0,d=0,g=0,v=0);let b=o.extractPoints(c),_=b.shape,I=b.holes;if(!Vn.isClockWise(_)){_=_.reverse();for(let j=0,oe=I.length;j<oe;j++){let P=I[j];Vn.isClockWise(P)&&(I[j]=P.reverse())}}let D=Vn.triangulateShape(_,I),L=_;for(let j=0,oe=I.length;j<oe;j++){let P=I[j];_=_.concat(P)}function G(j,oe,P){return oe||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(oe,P)}let z=_.length,Z=D.length;function N(j,oe,P){let me,te,fe,ae=j.x-oe.x,Oe=j.y-oe.y,xe=P.x-j.x,R=P.y-j.y,M=ae*ae+Oe*Oe,H=ae*R-Oe*xe;if(Math.abs(H)>Number.EPSILON){let J=Math.sqrt(M),ne=Math.sqrt(xe*xe+R*R),$=oe.x-Oe/J,Ue=oe.y+ae/J,ge=P.x-R/ne,Te=P.y+xe/ne,je=((ge-$)*R-(Te-Ue)*xe)/(ae*R-Oe*xe);me=$+ae*je-j.x,te=Ue+Oe*je-j.y;let ce=me*me+te*te;if(ce<=2)return new re(me,te);fe=Math.sqrt(ce/2)}else{let J=!1;ae>Number.EPSILON?xe>Number.EPSILON&&(J=!0):ae<-Number.EPSILON?xe<-Number.EPSILON&&(J=!0):Math.sign(Oe)===Math.sign(R)&&(J=!0),J?(me=-Oe,te=ae,fe=Math.sqrt(M)):(me=ae,te=Oe,fe=Math.sqrt(M/2))}return new re(me/fe,te/fe)}let K=[];for(let j=0,oe=L.length,P=oe-1,me=j+1;j<oe;j++,P++,me++)P===oe&&(P=0),me===oe&&(me=0),K[j]=N(L[j],L[P],L[me]);let ie=[],Q,be=K.concat();for(let j=0,oe=I.length;j<oe;j++){let P=I[j];Q=[];for(let me=0,te=P.length,fe=te-1,ae=me+1;me<te;me++,fe++,ae++)fe===te&&(fe=0),ae===te&&(ae=0),Q[me]=N(P[me],P[fe],P[ae]);ie.push(Q),be=be.concat(Q)}for(let j=0;j<m;j++){let oe=j/m,P=d*Math.cos(oe*Math.PI/2),me=g*Math.sin(oe*Math.PI/2)+v;for(let te=0,fe=L.length;te<fe;te++){let ae=G(L[te],K[te],me);le(ae.x,ae.y,-P)}for(let te=0,fe=I.length;te<fe;te++){let ae=I[te];Q=ie[te];for(let Oe=0,xe=ae.length;Oe<xe;Oe++){let R=G(ae[Oe],Q[Oe],me);le(R.x,R.y,-P)}}}let Ie=g+v;for(let j=0;j<z;j++){let oe=u?G(_[j],be[j],Ie):_[j];y?(E.copy(C.normals[0]).multiplyScalar(oe.x),w.copy(C.binormals[0]).multiplyScalar(oe.y),T.copy(x[0]).add(E).add(w),le(T.x,T.y,T.z)):le(oe.x,oe.y,0)}for(let j=1;j<=h;j++)for(let oe=0;oe<z;oe++){let P=u?G(_[oe],be[oe],Ie):_[oe];y?(E.copy(C.normals[j]).multiplyScalar(P.x),w.copy(C.binormals[j]).multiplyScalar(P.y),T.copy(x[j]).add(E).add(w),le(T.x,T.y,T.z)):le(P.x,P.y,f/h*j)}for(let j=m-1;j>=0;j--){let oe=j/m,P=d*Math.cos(oe*Math.PI/2),me=g*Math.sin(oe*Math.PI/2)+v;for(let te=0,fe=L.length;te<fe;te++){let ae=G(L[te],K[te],me);le(ae.x,ae.y,f+P)}for(let te=0,fe=I.length;te<fe;te++){let ae=I[te];Q=ie[te];for(let Oe=0,xe=ae.length;Oe<xe;Oe++){let R=G(ae[Oe],Q[Oe],me);y?le(R.x,R.y+x[h-1].y,x[h-1].x+P):le(R.x,R.y,f+P)}}}Y(),se();function Y(){let j=r.length/3;if(u){let oe=0,P=z*oe;for(let me=0;me<Z;me++){let te=D[me];Pe(te[2]+P,te[1]+P,te[0]+P)}oe=h+m*2,P=z*oe;for(let me=0;me<Z;me++){let te=D[me];Pe(te[0]+P,te[1]+P,te[2]+P)}}else{for(let oe=0;oe<Z;oe++){let P=D[oe];Pe(P[2],P[1],P[0])}for(let oe=0;oe<Z;oe++){let P=D[oe];Pe(P[0]+z*h,P[1]+z*h,P[2]+z*h)}}i.addGroup(j,r.length/3-j,0)}function se(){let j=r.length/3,oe=0;ue(L,oe),oe+=L.length;for(let P=0,me=I.length;P<me;P++){let te=I[P];ue(te,oe),oe+=te.length}i.addGroup(j,r.length/3-j,1)}function ue(j,oe){let P=j.length;for(;--P>=0;){let me=P,te=P-1;te<0&&(te=j.length-1);for(let fe=0,ae=h+m*2;fe<ae;fe++){let Oe=z*fe,xe=z*(fe+1),R=oe+me+Oe,M=oe+te+Oe,H=oe+te+xe,J=oe+me+xe;Ge(R,M,H,J)}}}function le(j,oe,P){l.push(j),l.push(oe),l.push(P)}function Pe(j,oe,P){ke(j),ke(oe),ke(P);let me=r.length/3,te=S.generateTopUV(i,r,me-3,me-2,me-1);Je(te[0]),Je(te[1]),Je(te[2])}function Ge(j,oe,P,me){ke(j),ke(oe),ke(me),ke(oe),ke(P),ke(me);let te=r.length/3,fe=S.generateSideWallUV(i,r,te-6,te-3,te-2,te-1);Je(fe[0]),Je(fe[1]),Je(fe[3]),Je(fe[1]),Je(fe[2]),Je(fe[3])}function ke(j){r.push(l[j*3+0]),r.push(l[j*3+1]),r.push(l[j*3+2])}function Je(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return vy(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Aa[r.type]().fromJSON(r)),new n(i,e.options)}},gy={generateTopUV:function(n,e,t,i,r){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new re(s,a),new re(o,l),new re(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],u=e[r*3],d=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-f),new re(u,1-g),new re(v,1-p)]:[new re(o,1-l),new re(h,1-f),new re(d,1-g),new re(m,1-p)]}};function vy(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Rr=class n extends Zl{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new n(e.radius,e.detail)}};var Ra=class n extends Rt{constructor(e=new Qt([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],r=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Qe(r,3)),this.setAttribute("normal",new Qe(s,3)),this.setAttribute("uv",new Qe(a,2));function c(h){let f=r.length/3,u=h.extractPoints(t),d=u.shape,g=u.holes;Vn.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,p=g.length;m<p;m++){let S=g[m];Vn.isClockWise(S)===!0&&(g[m]=S.reverse())}let v=Vn.triangulateShape(d,g);for(let m=0,p=g.length;m<p;m++){let S=g[m];d=d.concat(S)}for(let m=0,p=d.length;m<p;m++){let S=d[m];r.push(S.x,S.y,0),s.push(0,0,1),a.push(S.x,S.y)}for(let m=0,p=v.length;m<p;m++){let S=v[m],x=S[0]+f,y=S[1]+f,C=S[2]+f;i.push(x,y,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return xy(t,e)}static fromJSON(e,t){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let a=t[e.shapes[r]];i.push(a)}return new n(i,e.curveSegments)}};function xy(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let r=n[t];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e}var ds=class n extends Rt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new U,u=new U,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let S=[],x=p/i,y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){let w=C/t;f.x=-e*Math.cos(r+w*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+w*s)*Math.sin(a+x*o),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(w+y,1-x),S.push(c++)}h.push(S)}for(let p=0;p<i;p++)for(let S=0;S<t;S++){let x=h[p][S+1],y=h[p][S],C=h[p+1][S],w=h[p+1][S+1];(p!==0||a>0)&&d.push(x,y,w),(p!==i-1||l<Math.PI)&&d.push(y,C,w)}this.setIndex(d),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ot=class n extends Rt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new U,f=new U,u=new U;for(let d=0;d<=i;d++)for(let g=0;g<=r;g++){let v=g/r*s,m=d/i*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(d/i)}for(let d=1;d<=i;d++)for(let g=1;g<=r;g++){let v=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,p=(r+1)*(d-1)+g,S=(r+1)*d+g;a.push(v,m,S),a.push(m,p,S)}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ps=class n extends Rt{constructor(e=new Ta(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new re,h=new U,f=[],u=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qe(f,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(d,2));function v(){for(let x=0;x<t;x++)m(x);m(s===!1?t:0),S(),p()}function m(x){h=e.getPointAt(x/t,h);let y=a.normals[x],C=a.binormals[x];for(let w=0;w<=r;w++){let E=w/r*Math.PI*2,T=Math.sin(E),b=-Math.cos(E);l.x=b*y.x+T*C.x,l.y=b*y.y+T*C.y,l.z=b*y.z+T*C.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let x=1;x<=t;x++)for(let y=1;y<=r;y++){let C=(r+1)*(x-1)+(y-1),w=(r+1)*x+(y-1),E=(r+1)*x+y,T=(r+1)*(x-1)+y;g.push(C,w,T),g.push(w,E,T)}}function S(){for(let x=0;x<=t;x++)for(let y=0;y<=r;y++)c.x=x/t,c.y=y/r,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ir=class extends ui{static get type(){return"ShadowMaterial"}constructor(e){super(),this.isShadowMaterial=!0,this.color=new Xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};var Pr=class extends ui{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Du,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Yt=class extends Pr{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function ia(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yy(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Ur=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break t}a=t.length;break n}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Kl=class extends Ur{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:gh,endingEnd:gh}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case vh:s=e,o=2*t-i;break;case xh:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vh:a=e,l=2*i-t;break;case xh:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-t)/(r-t),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,S=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,x=(-1-d)*m+(1.5+d)*v+.5*g,y=d*m-d*v;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+S*a[c+C]+x*a[l+C]+y*a[f+C];return s}},Ql=class extends Ur{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),f=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*f+a[l+u]*h;return s}},jl=class extends Ur{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},un=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ia(t,this.TimeBufferType),this.values=ia(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ia(e.times,Array),values:ia(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new jl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Kl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ca:t=this.InterpolantFactoryMethodDiscrete;break;case Tl:t=this.InterpolantFactoryMethodLinear;break;case lo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ca;case this.InterpolantFactoryMethodLinear:return Tl;case this.InterpolantFactoryMethodSmooth:return lo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&yy(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===lo,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let f=o*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let v=t[f+g];if(v!==t[u+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};un.prototype.TimeBufferType=Float32Array;un.prototype.ValueBufferType=Float32Array;un.prototype.DefaultInterpolation=Tl;var Bi=class extends un{constructor(e,t,i){super(e,t,i)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ca;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ec=class extends un{};ec.prototype.ValueTypeName="color";var tc=class extends un{};tc.prototype.ValueTypeName="number";var nc=class extends Ur{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)jt.slerpFlat(s,0,a,c-o,a,c,l);return s}},Ia=class extends un{InterpolantFactoryMethodLinear(e){return new nc(this.times,this.values,this.getValueSize(),e)}};Ia.prototype.ValueTypeName="quaternion";Ia.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends un{constructor(e,t,i){super(e,t,i)}};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ca;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var ic=class extends un{};ic.prototype.ValueTypeName="vector";var rc=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},_y=new rc,sc=class{constructor(e){this.manager=e!==void 0?e:_y,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};sc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pa=class extends Ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}};var Bo=new et,yu=new U,_u=new U,Ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;yu.setFromMatrixPosition(e.matrixWorld),t.position.copy(yu),_u.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_u),t.updateMatrixWorld(),Bo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Bo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Su=new et,Qr=new U,zo=new U,ac=class extends Ua{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,t=0){let i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Qr.setFromMatrixPosition(e.matrixWorld),i.position.copy(Qr),zo.copy(i.position),zo.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(zo),i.updateMatrixWorld(),r.makeTranslation(-Qr.x,-Qr.y,-Qr.z),Su.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Su)}},La=class extends Pa{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new ac}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},oc=class extends Ua{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Gi=class extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new oc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Sc="\\[\\]\\.:\\/",Sy=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",by="[^"+Sc.replace("\\.","")+"]",My=/((?:WC+[\/:])*)/.source.replace("WC",bc),wy=/(WCOD+)?/.source.replace("WCOD",by),Ty=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),Ey=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Ay=new RegExp("^"+My+wy+Ty+Ey+"$"),Cy=["material","materials","bones","map"],lc=class{constructor(e,t,i){let r=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sy,"")}static parseTrackName(e){let t=Ay.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);Cy.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=lc;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var rM=new Float32Array(1);var Da=class{constructor(){this.type="ShapePath",this.color=new Xe,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new di,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,a){return this.currentPath.bezierCurveTo(e,t,i,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){let S=[];for(let x=0,y=p.length;x<y;x++){let C=p[x],w=new Qt;w.curves=C.curves,S.push(w)}return S}function i(p,S){let x=S.length,y=!1;for(let C=x-1,w=0;w<x;C=w++){let E=S[C],T=S[w],b=T.x-E.x,_=T.y-E.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(E=S[w],b=-b,T=S[C],_=-_),p.y<E.y||p.y>T.y)continue;if(p.y===E.y){if(p.x===E.x)return!0}else{let I=_*(p.x-E.x)-b*(p.y-E.y);if(I===0)return!0;if(I<0)continue;y=!y}}else{if(p.y!==E.y)continue;if(T.x<=p.x&&p.x<=E.x||E.x<=p.x&&p.x<=T.x)return!0}}return y}let r=Vn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l,c=[];if(s.length===1)return o=s[0],l=new Qt,l.curves=o.curves,c.push(l),c;let h=!r(s[0].getPoints());h=e?!h:h;let f=[],u=[],d=[],g=0,v;u[g]=void 0,d[g]=[];for(let p=0,S=s.length;p<S;p++)o=s[p],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!h&&u[g]&&g++,u[g]={s:new Qt,p:v},u[g].s.curves=o.curves,h&&g++,d[g]=[]):d[g].push({h:o,p:v[0]});if(!u[0])return t(s);if(u.length>1){let p=!1,S=0;for(let x=0,y=u.length;x<y;x++)f[x]=[];for(let x=0,y=u.length;x<y;x++){let C=d[x];for(let w=0;w<C.length;w++){let E=C[w],T=!0;for(let b=0;b<u.length;b++)i(E.p,u[b].p)&&(x!==b&&S++,T?(T=!1,f[b].push(E)):p=!0);T&&f[x].push(E)}}S>0&&p===!1&&(d=f)}let m;for(let p=0,S=u.length;p<S;p++){l=u[p].s,c.push(l),m=d[p];for(let x=0,y=m.length;x<y;x++)l.holes.push(m[x].h)}return c}};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"170"}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="170");var Ba=class extends Ni{constructor(){super();let e=new wn;e.deleteAttribute("uv");let t=new Pr({side:At}),i=new Pr,r=new La(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);let s=new Se(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let a=new Se(e,i);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);let o=new Se(e,i);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);let l=new Se(e,i);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);let c=new Se(e,i);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);let h=new Se(e,i);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);let f=new Se(e,i);f.position.set(-2.193,-.369,-5.547),f.rotation.set(0,.516,0),f.scale.set(3.875,3.487,2.986),this.add(f);let u=new Se(e,Nr(50));u.position.set(-16.116,14.37,8.208),u.scale.set(.1,2.428,2.739),this.add(u);let d=new Se(e,Nr(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);let g=new Se(e,Nr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);let v=new Se(e,Nr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);let m=new Se(e,Nr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);let p=new Se(e,Nr(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function Nr(n){let e=new Mn;return e.color.setScalar(n),e}String.prototype.codePointAt||(function(){var n=(function(){try{var t={},i=Object.defineProperty,r=i(t,t,t)&&i}catch{}return r})(),e=function(t){if(this==null)throw TypeError();var i=String(this),r=i.length,s=t?Number(t):0;if(s!=s&&(s=0),!(s<0||s>=r)){var a=i.charCodeAt(s),o;return a>=55296&&a<=56319&&r>s+1&&(o=i.charCodeAt(s+1),o>=56320&&o<=57343)?(a-55296)*1024+o-56320+65536:a}};n?n(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e})();var Gc=0,Df=-3;function xs(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function Ry(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new xs,this.dtree=new xs}var Ff=new xs,Nf=new xs,Hc=new Uint8Array(30),Vc=new Uint16Array(30),Of=new Uint8Array(30),kf=new Uint16Array(30),Iy=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Zu=new xs,An=new Uint8Array(320);function Bf(n,e,t,i){var r,s;for(r=0;r<t;++r)n[r]=0;for(r=0;r<30-t;++r)n[r+t]=r/t|0;for(s=i,r=0;r<30;++r)e[r]=s,s+=1<<n[r]}function Py(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t}var Ju=new Uint16Array(16);function Mc(n,e,t,i){var r,s;for(r=0;r<16;++r)n.table[r]=0;for(r=0;r<i;++r)n.table[e[t+r]]++;for(n.table[0]=0,s=0,r=0;r<16;++r)Ju[r]=s,s+=n.table[r];for(r=0;r<i;++r)e[t+r]&&(n.trans[Ju[e[t+r]]++]=r)}function Uy(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function Cn(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var i=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,i+t}function Uc(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,i=0,r=0,s=n.tag;do i=2*i+(s&1),s>>>=1,++r,t+=e.table[r],i-=e.table[r];while(i>=0);return n.tag=s,n.bitcount-=r,e.trans[t+i]}function Ly(n,e,t){var i,r,s,a,o,l;for(i=Cn(n,5,257),r=Cn(n,5,1),s=Cn(n,4,4),a=0;a<19;++a)An[a]=0;for(a=0;a<s;++a){var c=Cn(n,3,0);An[Iy[a]]=c}for(Mc(Zu,An,0,19),o=0;o<i+r;){var h=Uc(n,Zu);switch(h){case 16:var f=An[o-1];for(l=Cn(n,2,3);l;--l)An[o++]=f;break;case 17:for(l=Cn(n,3,3);l;--l)An[o++]=0;break;case 18:for(l=Cn(n,7,11);l;--l)An[o++]=0;break;default:An[o++]=h;break}}Mc(e,An,0,i),Mc(t,An,i,r)}function $u(n,e,t){for(;;){var i=Uc(n,e);if(i===256)return Gc;if(i<256)n.dest[n.destLen++]=i;else{var r,s,a,o;for(i-=257,r=Cn(n,Hc[i],Vc[i]),s=Uc(n,t),a=n.destLen-Cn(n,Of[s],kf[s]),o=a;o<a+r;++o)n.dest[n.destLen++]=n.dest[o]}}}function Dy(n){for(var e,t,i;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return Df;for(n.sourceIndex+=4,i=e;i;--i)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,Gc}function Fy(n,e){var t=new Ry(n,e),i,r,s;do{switch(i=Uy(t),r=Cn(t,2,0),r){case 0:s=Dy(t);break;case 1:s=$u(t,Ff,Nf);break;case 2:Ly(t,t.ltree,t.dtree),s=$u(t,t.ltree,t.dtree);break;default:s=Df}if(s!==Gc)throw new Error("Data error")}while(!i);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}Py(Ff,Nf);Bf(Hc,Vc,4,3);Bf(Of,kf,2,1);Hc[28]=0;Vc[28]=258;var Ny=Fy;function Or(n,e,t,i,r){return Math.pow(1-r,3)*n+3*Math.pow(1-r,2)*r*e+3*(1-r)*Math.pow(r,2)*t+Math.pow(r,3)*i}function _i(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}_i.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};_i.prototype.addPoint=function(n,e){typeof n=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=n,this.x2=n),n<this.x1&&(this.x1=n),n>this.x2&&(this.x2=n)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};_i.prototype.addX=function(n){this.addPoint(n,null)};_i.prototype.addY=function(n){this.addPoint(null,n)};_i.prototype.addBezier=function(n,e,t,i,r,s,a,o){var l=[n,e],c=[t,i],h=[r,s],f=[a,o];this.addPoint(n,e),this.addPoint(a,o);for(var u=0;u<=1;u++){var d=6*l[u]-12*c[u]+6*h[u],g=-3*l[u]+9*c[u]-9*h[u]+3*f[u],v=3*c[u]-3*l[u];if(g===0){if(d===0)continue;var m=-v/d;0<m&&m<1&&(u===0&&this.addX(Or(l[u],c[u],h[u],f[u],m)),u===1&&this.addY(Or(l[u],c[u],h[u],f[u],m)));continue}var p=Math.pow(d,2)-4*v*g;if(!(p<0)){var S=(-d+Math.sqrt(p))/(2*g);0<S&&S<1&&(u===0&&this.addX(Or(l[u],c[u],h[u],f[u],S)),u===1&&this.addY(Or(l[u],c[u],h[u],f[u],S)));var x=(-d-Math.sqrt(p))/(2*g);0<x&&x<1&&(u===0&&this.addX(Or(l[u],c[u],h[u],f[u],x)),u===1&&this.addY(Or(l[u],c[u],h[u],f[u],x)))}}};_i.prototype.addQuad=function(n,e,t,i,r,s){var a=n+.6666666666666666*(t-n),o=e+2/3*(i-e),l=a+1/3*(r-n),c=o+1/3*(s-e);this.addBezier(n,e,a,o,l,c,r,s)};function Tt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Tt.prototype.moveTo=function(n,e){this.commands.push({type:"M",x:n,y:e})};Tt.prototype.lineTo=function(n,e){this.commands.push({type:"L",x:n,y:e})};Tt.prototype.curveTo=Tt.prototype.bezierCurveTo=function(n,e,t,i,r,s){this.commands.push({type:"C",x1:n,y1:e,x2:t,y2:i,x:r,y:s})};Tt.prototype.quadTo=Tt.prototype.quadraticCurveTo=function(n,e,t,i){this.commands.push({type:"Q",x1:n,y1:e,x:t,y:i})};Tt.prototype.close=Tt.prototype.closePath=function(){this.commands.push({type:"Z"})};Tt.prototype.extend=function(n){if(n.commands)n=n.commands;else if(n instanceof _i){var e=n;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,n)};Tt.prototype.getBoundingBox=function(){for(var n=new _i,e=0,t=0,i=0,r=0,s=0;s<this.commands.length;s++){var a=this.commands[s];switch(a.type){case"M":n.addPoint(a.x,a.y),e=i=a.x,t=r=a.y;break;case"L":n.addPoint(a.x,a.y),i=a.x,r=a.y;break;case"Q":n.addQuad(i,r,a.x1,a.y1,a.x,a.y),i=a.x,r=a.y;break;case"C":n.addBezier(i,r,a.x1,a.y1,a.x2,a.y2,a.x,a.y),i=a.x,r=a.y;break;case"Z":i=e,r=t;break;default:throw new Error("Unexpected path command "+a.type)}}return n.isEmpty()&&n.addPoint(0,0),n};Tt.prototype.draw=function(n){n.beginPath();for(var e=0;e<this.commands.length;e+=1){var t=this.commands[e];t.type==="M"?n.moveTo(t.x,t.y):t.type==="L"?n.lineTo(t.x,t.y):t.type==="C"?n.bezierCurveTo(t.x1,t.y1,t.x2,t.y2,t.x,t.y):t.type==="Q"?n.quadraticCurveTo(t.x1,t.y1,t.x,t.y):t.type==="Z"&&n.closePath()}this.fill&&(n.fillStyle=this.fill,n.fill()),this.stroke&&(n.strokeStyle=this.stroke,n.lineWidth=this.strokeWidth,n.stroke())};Tt.prototype.toPathData=function(n){n=n!==void 0?n:2;function e(a){return Math.round(a)===a?""+Math.round(a):a.toFixed(n)}function t(){for(var a=arguments,o="",l=0;l<arguments.length;l+=1){var c=a[l];c>=0&&l>0&&(o+=" "),o+=e(c)}return o}for(var i="",r=0;r<this.commands.length;r+=1){var s=this.commands[r];s.type==="M"?i+="M"+t(s.x,s.y):s.type==="L"?i+="L"+t(s.x,s.y):s.type==="C"?i+="C"+t(s.x1,s.y1,s.x2,s.y2,s.x,s.y):s.type==="Q"?i+="Q"+t(s.x1,s.y1,s.x,s.y):s.type==="Z"&&(i+="Z")}return i};Tt.prototype.toSVG=function(n){var e='<path d="';return e+=this.toPathData(n),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Tt.prototype.toDOMElement=function(n){var e=this.toPathData(n),t=document.createElementNS("http://www.w3.org/2000/svg","path");return t.setAttribute("d",e),t};function zf(n){throw new Error(n)}function Ku(n,e){n||zf(e)}var Be={fail:zf,argument:Ku,assert:Ku},Qu=32768,ju=2147483648,Br={},de={},He={};function mn(n){return function(){return n}}de.BYTE=function(n){return Be.argument(n>=0&&n<=255,"Byte value should be between 0 and 255."),[n]};He.BYTE=mn(1);de.CHAR=function(n){return[n.charCodeAt(0)]};He.CHAR=mn(1);de.CHARARRAY=function(n){typeof n=="undefined"&&(n="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],t=0;t<n.length;t+=1)e[t]=n.charCodeAt(t);return e};He.CHARARRAY=function(n){return typeof n=="undefined"?0:n.length};de.USHORT=function(n){return[n>>8&255,n&255]};He.USHORT=mn(2);de.SHORT=function(n){return n>=Qu&&(n=-(2*Qu-n)),[n>>8&255,n&255]};He.SHORT=mn(2);de.UINT24=function(n){return[n>>16&255,n>>8&255,n&255]};He.UINT24=mn(3);de.ULONG=function(n){return[n>>24&255,n>>16&255,n>>8&255,n&255]};He.ULONG=mn(4);de.LONG=function(n){return n>=ju&&(n=-(2*ju-n)),[n>>24&255,n>>16&255,n>>8&255,n&255]};He.LONG=mn(4);de.FIXED=de.ULONG;He.FIXED=He.ULONG;de.FWORD=de.SHORT;He.FWORD=He.SHORT;de.UFWORD=de.USHORT;He.UFWORD=He.USHORT;de.LONGDATETIME=function(n){return[0,0,0,0,n>>24&255,n>>16&255,n>>8&255,n&255]};He.LONGDATETIME=mn(8);de.TAG=function(n){return Be.argument(n.length===4,"Tag should be exactly 4 ASCII characters."),[n.charCodeAt(0),n.charCodeAt(1),n.charCodeAt(2),n.charCodeAt(3)]};He.TAG=mn(4);de.Card8=de.BYTE;He.Card8=He.BYTE;de.Card16=de.USHORT;He.Card16=He.USHORT;de.OffSize=de.BYTE;He.OffSize=He.BYTE;de.SID=de.USHORT;He.SID=He.USHORT;de.NUMBER=function(n){return n>=-107&&n<=107?[n+139]:n>=108&&n<=1131?(n=n-108,[(n>>8)+247,n&255]):n>=-1131&&n<=-108?(n=-n-108,[(n>>8)+251,n&255]):n>=-32768&&n<=32767?de.NUMBER16(n):de.NUMBER32(n)};He.NUMBER=function(n){return de.NUMBER(n).length};de.NUMBER16=function(n){return[28,n>>8&255,n&255]};He.NUMBER16=mn(3);de.NUMBER32=function(n){return[29,n>>24&255,n>>16&255,n>>8&255,n&255]};He.NUMBER32=mn(5);de.REAL=function(n){var e=n.toString(),t=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(t){var i=parseFloat("1e"+((t[2]?+t[2]:0)+t[1].length));e=(Math.round(n*i)/i).toString()}for(var r="",s=0,a=e.length;s<a;s+=1){var o=e[s];o==="e"?r+=e[++s]==="-"?"c":"b":o==="."?r+="a":o==="-"?r+="e":r+=o}r+=r.length&1?"f":"ff";for(var l=[30],c=0,h=r.length;c<h;c+=2)l.push(parseInt(r.substr(c,2),16));return l};He.REAL=function(n){return de.REAL(n).length};de.NAME=de.CHARARRAY;He.NAME=He.CHARARRAY;de.STRING=de.CHARARRAY;He.STRING=He.CHARARRAY;Br.UTF8=function(n,e,t){for(var i=[],r=t,s=0;s<r;s++,e+=1)i[s]=n.getUint8(e);return String.fromCharCode.apply(null,i)};Br.UTF16=function(n,e,t){for(var i=[],r=t/2,s=0;s<r;s++,e+=2)i[s]=n.getUint16(e);return String.fromCharCode.apply(null,i)};de.UTF16=function(n){for(var e=[],t=0;t<n.length;t+=1){var i=n.charCodeAt(t);e[e.length]=i>>8&255,e[e.length]=i&255}return e};He.UTF16=function(n){return n.length*2};var Lc={"x-mac-croatian":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7","x-mac-cyrillic":"\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F\u2020\xB0\u0490\xA3\xA7\u2022\xB6\u0406\xAE\xA9\u2122\u0402\u0452\u2260\u0403\u0453\u221E\xB1\u2264\u2265\u0456\xB5\u0491\u0408\u0404\u0454\u0407\u0457\u0409\u0459\u040A\u045A\u0458\u0405\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\u040B\u045B\u040C\u045C\u0455\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u201E\u040E\u045E\u040F\u045F\u2116\u0401\u0451\u044F\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043A\u043B\u043C\u043D\u043E\u043F\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044A\u044B\u044C\u044D\u044E","x-mac-gaelic":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83","x-mac-greek":"\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026\xA0\u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD","x-mac-icelandic":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-inuit":"\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026\xA0\u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142","x-mac-ce":"\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026\xA0\u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7",macintosh:"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\uFB01\uFB02\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-romanian":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-turkish":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026\xA0\xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"};Br.MACSTRING=function(n,e,t,i){var r=Lc[i];if(r!==void 0){for(var s="",a=0;a<t;a++){var o=n.getUint8(e+a);o<=127?s+=String.fromCharCode(o):s+=r[o&127]}return s}};var za=typeof WeakMap=="function"&&new WeakMap,Ga,Oy=function(n){if(!Ga){Ga={};for(var e in Lc)Ga[e]=new String(e)}var t=Ga[n];if(t!==void 0){if(za){var i=za.get(t);if(i!==void 0)return i}var r=Lc[n];if(r!==void 0){for(var s={},a=0;a<r.length;a++)s[r.charCodeAt(a)]=a+128;return za&&za.set(t,s),s}}};de.MACSTRING=function(n,e){var t=Oy(e);if(t!==void 0){for(var i=[],r=0;r<n.length;r++){var s=n.charCodeAt(r);if(s>=128&&(s=t[s],s===void 0))return;i[r]=s}return i}};He.MACSTRING=function(n,e){var t=de.MACSTRING(n,e);return t!==void 0?t.length:0};function Dc(n){return n>=-128&&n<=127}function ky(n,e,t){for(var i=0,r=n.length;e<r&&i<64&&n[e]===0;)++e,++i;return t.push(128|i-1),e}function By(n,e,t){for(var i=0,r=n.length,s=e;s<r&&i<64;){var a=n[s];if(!Dc(a)||a===0&&s+1<r&&n[s+1]===0)break;++s,++i}t.push(i-1);for(var o=e;o<s;++o)t.push(n[o]+256&255);return s}function zy(n,e,t){for(var i=0,r=n.length,s=e;s<r&&i<64;){var a=n[s];if(a===0||Dc(a)&&s+1<r&&Dc(n[s+1]))break;++s,++i}t.push(64|i-1);for(var o=e;o<s;++o){var l=n[o];t.push(l+65536>>8&255,l+256&255)}return s}de.VARDELTAS=function(n){for(var e=0,t=[];e<n.length;){var i=n[e];i===0?e=ky(n,e,t):i>=-128&&i<=127?e=By(n,e,t):e=zy(n,e,t)}return t};de.INDEX=function(n){for(var e=1,t=[e],i=[],r=0;r<n.length;r+=1){var s=de.OBJECT(n[r]);Array.prototype.push.apply(i,s),e+=s.length,t.push(e)}if(i.length===0)return[0,0];for(var a=[],o=1+Math.floor(Math.log(e)/Math.log(2))/8|0,l=[void 0,de.BYTE,de.USHORT,de.UINT24,de.ULONG][o],c=0;c<t.length;c+=1){var h=l(t[c]);Array.prototype.push.apply(a,h)}return Array.prototype.concat(de.Card16(n.length),de.OffSize(o),a,i)};He.INDEX=function(n){return de.INDEX(n).length};de.DICT=function(n){for(var e=[],t=Object.keys(n),i=t.length,r=0;r<i;r+=1){var s=parseInt(t[r],0),a=n[s];e=e.concat(de.OPERAND(a.value,a.type)),e=e.concat(de.OPERATOR(s))}return e};He.DICT=function(n){return de.DICT(n).length};de.OPERATOR=function(n){return n<1200?[n]:[12,n-1200]};de.OPERAND=function(n,e){var t=[];if(Array.isArray(e))for(var i=0;i<e.length;i+=1)Be.argument(n.length===e.length,"Not enough arguments given for type"+e),t=t.concat(de.OPERAND(n[i],e[i]));else if(e==="SID")t=t.concat(de.NUMBER(n));else if(e==="offset")t=t.concat(de.NUMBER32(n));else if(e==="number")t=t.concat(de.NUMBER(n));else if(e==="real")t=t.concat(de.REAL(n));else throw new Error("Unknown operand type "+e);return t};de.OP=de.BYTE;He.OP=He.BYTE;var Ha=typeof WeakMap=="function"&&new WeakMap;de.CHARSTRING=function(n){if(Ha){var e=Ha.get(n);if(e!==void 0)return e}for(var t=[],i=n.length,r=0;r<i;r+=1){var s=n[r];t=t.concat(de[s.type](s.value))}return Ha&&Ha.set(n,t),t};He.CHARSTRING=function(n){return de.CHARSTRING(n).length};de.OBJECT=function(n){var e=de[n.type];return Be.argument(e!==void 0,"No encoding function for type "+n.type),e(n.value)};He.OBJECT=function(n){var e=He[n.type];return Be.argument(e!==void 0,"No sizeOf function for type "+n.type),e(n.value)};de.TABLE=function(n){for(var e=[],t=n.fields.length,i=[],r=[],s=0;s<t;s+=1){var a=n.fields[s],o=de[a.type];Be.argument(o!==void 0,"No encoding function for field type "+a.type+" ("+a.name+")");var l=n[a.name];l===void 0&&(l=a.value);var c=o(l);a.type==="TABLE"?(r.push(e.length),e=e.concat([0,0]),i.push(c)):e=e.concat(c)}for(var h=0;h<i.length;h+=1){var f=r[h],u=e.length;Be.argument(u<65536,"Table "+n.tableName+" too big."),e[f]=u>>8,e[f+1]=u&255,e=e.concat(i[h])}return e};He.TABLE=function(n){for(var e=0,t=n.fields.length,i=0;i<t;i+=1){var r=n.fields[i],s=He[r.type];Be.argument(s!==void 0,"No sizeOf function for field type "+r.type+" ("+r.name+")");var a=n[r.name];a===void 0&&(a=r.value),e+=s(a),r.type==="TABLE"&&(e+=2)}return e};de.RECORD=de.TABLE;He.RECORD=He.TABLE;de.LITERAL=function(n){return n};He.LITERAL=function(n){return n.length};function It(n,e,t){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var i=0;i<e.length;i+=1){var r=e[i];this[r.name]=r.value}if(this.tableName=n,this.fields=e,t)for(var s=Object.keys(t),a=0;a<s.length;a+=1){var o=s[a],l=t[o];this[o]!==void 0&&(this[o]=l)}}It.prototype.encode=function(){return de.TABLE(this)};It.prototype.sizeOf=function(){return He.TABLE(this)};function ys(n,e,t){t===void 0&&(t=e.length);var i=new Array(e.length+1);i[0]={name:n+"Count",type:"USHORT",value:t};for(var r=0;r<e.length;r++)i[r+1]={name:n+r,type:"USHORT",value:e[r]};return i}function Fc(n,e,t){var i=e.length,r=new Array(i+1);r[0]={name:n+"Count",type:"USHORT",value:i};for(var s=0;s<i;s++)r[s+1]={name:n+s,type:"TABLE",value:t(e[s],s)};return r}function _s(n,e,t){var i=e.length,r=[];r[0]={name:n+"Count",type:"USHORT",value:i};for(var s=0;s<i;s++)r=r.concat(t(e[s],s));return r}function Ya(n){n.format===1?It.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(ys("glyph",n.glyphs))):n.format===2?It.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(_s("rangeRecord",n.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Be.assert(!1,"Coverage format must be 1 or 2.")}Ya.prototype=Object.create(It.prototype);Ya.prototype.constructor=Ya;function Za(n){It.call(this,"scriptListTable",_s("scriptRecord",n,function(e,t){var i=e.script,r=i.defaultLangSys;return Be.assert(!!r,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+t,type:"TAG",value:e.tag},{name:"script"+t,type:"TABLE",value:new It("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new It("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:r.reqFeatureIndex}].concat(ys("featureIndex",r.featureIndexes)))}].concat(_s("langSys",i.langSysRecords,function(s,a){var o=s.langSys;return[{name:"langSysTag"+a,type:"TAG",value:s.tag},{name:"langSys"+a,type:"TABLE",value:new It("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:o.reqFeatureIndex}].concat(ys("featureIndex",o.featureIndexes)))}]})))}]}))}Za.prototype=Object.create(It.prototype);Za.prototype.constructor=Za;function Ja(n){It.call(this,"featureListTable",_s("featureRecord",n,function(e,t){var i=e.feature;return[{name:"featureTag"+t,type:"TAG",value:e.tag},{name:"feature"+t,type:"TABLE",value:new It("featureTable",[{name:"featureParams",type:"USHORT",value:i.featureParams}].concat(ys("lookupListIndex",i.lookupListIndexes)))}]}))}Ja.prototype=Object.create(It.prototype);Ja.prototype.constructor=Ja;function $a(n,e){It.call(this,"lookupListTable",Fc("lookup",n,function(t){var i=e[t.lookupType];return Be.assert(!!i,"Unable to write GSUB lookup type "+t.lookupType+" tables."),new It("lookupTable",[{name:"lookupType",type:"USHORT",value:t.lookupType},{name:"lookupFlag",type:"USHORT",value:t.lookupFlag}].concat(Fc("subtable",t.subtables,i)))}))}$a.prototype=Object.create(It.prototype);$a.prototype.constructor=$a;var we={Table:It,Record:It,Coverage:Ya,ScriptList:Za,FeatureList:Ja,LookupList:$a,ushortList:ys,tableList:Fc,recordList:_s};function ef(n,e){return n.getUint8(e)}function Ka(n,e){return n.getUint16(e,!1)}function Gy(n,e){return n.getInt16(e,!1)}function Wc(n,e){return n.getUint32(e,!1)}function Gf(n,e){var t=n.getInt16(e,!1),i=n.getUint16(e+2,!1);return t+i/65535}function Hy(n,e){for(var t="",i=e;i<e+4;i+=1)t+=String.fromCharCode(n.getInt8(i));return t}function Vy(n,e,t){for(var i=0,r=0;r<t;r+=1)i<<=8,i+=n.getUint8(e+r);return i}function Wy(n,e,t){for(var i=[],r=e;r<t;r+=1)i.push(n.getUint8(r));return i}function Xy(n){for(var e="",t=0;t<n.length;t+=1)e+=String.fromCharCode(n[t]);return e}var qy={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function V(n,e){this.data=n,this.offset=e,this.relativeOffset=0}V.prototype.parseByte=function(){var n=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};V.prototype.parseChar=function(){var n=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,n};V.prototype.parseCard8=V.prototype.parseByte;V.prototype.parseUShort=function(){var n=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};V.prototype.parseCard16=V.prototype.parseUShort;V.prototype.parseSID=V.prototype.parseUShort;V.prototype.parseOffset16=V.prototype.parseUShort;V.prototype.parseShort=function(){var n=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,n};V.prototype.parseF2Dot14=function(){var n=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,n};V.prototype.parseULong=function(){var n=Wc(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};V.prototype.parseOffset32=V.prototype.parseULong;V.prototype.parseFixed=function(){var n=Gf(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,n};V.prototype.parseString=function(n){var e=this.data,t=this.offset+this.relativeOffset,i="";this.relativeOffset+=n;for(var r=0;r<n;r++)i+=String.fromCharCode(e.getUint8(t+r));return i};V.prototype.parseTag=function(){return this.parseString(4)};V.prototype.parseLongDateTime=function(){var n=Wc(this.data,this.offset+this.relativeOffset+4);return n-=2082844800,this.relativeOffset+=8,n};V.prototype.parseVersion=function(n){var e=Ka(this.data,this.offset+this.relativeOffset),t=Ka(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,n===void 0&&(n=4096),e+t/n/10};V.prototype.skip=function(n,e){e===void 0&&(e=1),this.relativeOffset+=qy[n]*e};V.prototype.parseULongList=function(n){n===void 0&&(n=this.parseULong());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint32(i),i+=4;return this.relativeOffset+=n*4,e};V.prototype.parseOffset16List=V.prototype.parseUShortList=function(n){n===void 0&&(n=this.parseUShort());for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint16(i),i+=2;return this.relativeOffset+=n*2,e};V.prototype.parseShortList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getInt16(i),i+=2;return this.relativeOffset+=n*2,e};V.prototype.parseByteList=function(n){for(var e=new Array(n),t=this.data,i=this.offset+this.relativeOffset,r=0;r<n;r++)e[r]=t.getUint8(i++);return this.relativeOffset+=n,e};V.prototype.parseList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};V.prototype.parseList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=0;i<n;i++)t[i]=e.call(this);return t};V.prototype.parseRecordList=function(n,e){e||(e=n,n=this.parseUShort());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var s={},a=0;a<i.length;a++){var o=i[a],l=e[o];s[o]=l.call(this)}t[r]=s}return t};V.prototype.parseRecordList32=function(n,e){e||(e=n,n=this.parseULong());for(var t=new Array(n),i=Object.keys(e),r=0;r<n;r++){for(var s={},a=0;a<i.length;a++){var o=i[a],l=e[o];s[o]=l.call(this)}t[r]=s}return t};V.prototype.parseStruct=function(n){if(typeof n=="function")return n.call(this);for(var e=Object.keys(n),t={},i=0;i<e.length;i++){var r=e[i],s=n[r];t[r]=s.call(this)}return t};V.prototype.parseValueRecord=function(n){if(n===void 0&&(n=this.parseUShort()),n!==0){var e={};return n&1&&(e.xPlacement=this.parseShort()),n&2&&(e.yPlacement=this.parseShort()),n&4&&(e.xAdvance=this.parseShort()),n&8&&(e.yAdvance=this.parseShort()),n&16&&(e.xPlaDevice=void 0,this.parseShort()),n&32&&(e.yPlaDevice=void 0,this.parseShort()),n&64&&(e.xAdvDevice=void 0,this.parseShort()),n&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};V.prototype.parseValueRecordList=function(){for(var n=this.parseUShort(),e=this.parseUShort(),t=new Array(e),i=0;i<e;i++)t[i]=this.parseValueRecord(n);return t};V.prototype.parsePointer=function(n){var e=this.parseOffset16();if(e>0)return new V(this.data,this.offset+e).parseStruct(n)};V.prototype.parsePointer32=function(n){var e=this.parseOffset32();if(e>0)return new V(this.data,this.offset+e).parseStruct(n)};V.prototype.parseListOfLists=function(n){for(var e=this.parseOffset16List(),t=e.length,i=this.relativeOffset,r=new Array(t),s=0;s<t;s++){var a=e[s];if(a===0){r[s]=void 0;continue}if(this.relativeOffset=a,n){for(var o=this.parseOffset16List(),l=new Array(o.length),c=0;c<o.length;c++)this.relativeOffset=a+o[c],l[c]=n.call(this);r[s]=l}else r[s]=this.parseUShortList()}return this.relativeOffset=i,r};V.prototype.parseCoverage=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort(),t=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(t)};if(e===2){for(var i=new Array(t),r=0;r<t;r++)i[r]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:i}}throw new Error("0x"+n.toString(16)+": Coverage format must be 1 or 2.")};V.prototype.parseClassDef=function(){var n=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:V.uShort,end:V.uShort,classId:V.uShort})};throw new Error("0x"+n.toString(16)+": ClassDef format must be 1 or 2.")};V.list=function(n,e){return function(){return this.parseList(n,e)}};V.list32=function(n,e){return function(){return this.parseList32(n,e)}};V.recordList=function(n,e){return function(){return this.parseRecordList(n,e)}};V.recordList32=function(n,e){return function(){return this.parseRecordList32(n,e)}};V.pointer=function(n){return function(){return this.parsePointer(n)}};V.pointer32=function(n){return function(){return this.parsePointer32(n)}};V.tag=V.prototype.parseTag;V.byte=V.prototype.parseByte;V.uShort=V.offset16=V.prototype.parseUShort;V.uShortList=V.prototype.parseUShortList;V.uLong=V.offset32=V.prototype.parseULong;V.uLongList=V.prototype.parseULongList;V.struct=V.prototype.parseStruct;V.coverage=V.prototype.parseCoverage;V.classDef=V.prototype.parseClassDef;var tf={reserved:V.uShort,reqFeatureIndex:V.uShort,featureIndexes:V.uShortList};V.prototype.parseScriptList=function(){return this.parsePointer(V.recordList({tag:V.tag,script:V.pointer({defaultLangSys:V.pointer(tf),langSysRecords:V.recordList({tag:V.tag,langSys:V.pointer(tf)})})}))||[]};V.prototype.parseFeatureList=function(){return this.parsePointer(V.recordList({tag:V.tag,feature:V.pointer({featureParams:V.offset16,lookupListIndexes:V.uShortList})}))||[]};V.prototype.parseLookupList=function(n){return this.parsePointer(V.list(V.pointer(function(){var e=this.parseUShort();Be.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var t=this.parseUShort(),i=t&16;return{lookupType:e,lookupFlag:t,subtables:this.parseList(V.pointer(n[e])),markFilteringSet:i?this.parseUShort():void 0}})))||[]};V.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var n=this.parseUShort(),e=this.parseUShort();Be.argument(n===1&&e<1,"GPOS/GSUB feature variations table unknown.");var t=this.parseRecordList32({conditionSetOffset:V.offset32,featureTableSubstitutionOffset:V.offset32});return t})||[]};var Re={getByte:ef,getCard8:ef,getUShort:Ka,getCard16:Ka,getShort:Gy,getULong:Wc,getFixed:Gf,getTag:Hy,getOffset:Vy,getBytes:Wy,bytesToString:Xy,Parser:V};function Yy(n,e){e.parseUShort(),n.length=e.parseULong(),n.language=e.parseULong();var t;n.groupCount=t=e.parseULong(),n.glyphIndexMap={};for(var i=0;i<t;i+=1)for(var r=e.parseULong(),s=e.parseULong(),a=e.parseULong(),o=r;o<=s;o+=1)n.glyphIndexMap[o]=a,a++}function Zy(n,e,t,i,r){n.length=e.parseUShort(),n.language=e.parseUShort();var s;n.segCount=s=e.parseUShort()>>1,e.skip("uShort",3),n.glyphIndexMap={};for(var a=new Re.Parser(t,i+r+14),o=new Re.Parser(t,i+r+16+s*2),l=new Re.Parser(t,i+r+16+s*4),c=new Re.Parser(t,i+r+16+s*6),h=i+r+16+s*8,f=0;f<s-1;f+=1)for(var u=void 0,d=a.parseUShort(),g=o.parseUShort(),v=l.parseShort(),m=c.parseUShort(),p=g;p<=d;p+=1)m!==0?(h=c.offset+c.relativeOffset-2,h+=m,h+=(p-g)*2,u=Re.getUShort(t,h),u!==0&&(u=u+v&65535)):u=p+v&65535,n.glyphIndexMap[p]=u}function Jy(n,e){var t={};t.version=Re.getUShort(n,e),Be.argument(t.version===0,"cmap table version should be 0."),t.numTables=Re.getUShort(n,e+2);for(var i=-1,r=t.numTables-1;r>=0;r-=1){var s=Re.getUShort(n,e+4+r*8),a=Re.getUShort(n,e+4+r*8+2);if(s===3&&(a===0||a===1||a===10)||s===0&&(a===0||a===1||a===2||a===3||a===4)){i=Re.getULong(n,e+4+r*8+4);break}}if(i===-1)throw new Error("No valid cmap sub-tables found.");var o=new Re.Parser(n,e+i);if(t.format=o.parseUShort(),t.format===12)Yy(t,o);else if(t.format===4)Zy(t,o,n,e,i);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+t.format+").");return t}function $y(n,e,t){n.segments.push({end:e,start:e,delta:-(e-t),offset:0,glyphIndex:t})}function Ky(n){n.segments.push({end:65535,start:65535,delta:1,offset:0})}function Qy(n){var e=!0,t;for(t=n.length-1;t>0;t-=1){var i=n.get(t);if(i.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var r=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(r=r.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),r=r.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var s=new we.Table("cmap",r);for(s.segments=[],t=0;t<n.length;t+=1){for(var a=n.get(t),o=0;o<a.unicodes.length;o+=1)$y(s,a.unicodes[o],t);s.segments=s.segments.sort(function(S,x){return S.start-x.start})}Ky(s);var l=s.segments.length,c=0,h=[],f=[],u=[],d=[],g=[],v=[];for(t=0;t<l;t+=1){var m=s.segments[t];m.end<=65535&&m.start<=65535?(h=h.concat({name:"end_"+t,type:"USHORT",value:m.end}),f=f.concat({name:"start_"+t,type:"USHORT",value:m.start}),u=u.concat({name:"idDelta_"+t,type:"SHORT",value:m.delta}),d=d.concat({name:"idRangeOffset_"+t,type:"USHORT",value:m.offset}),m.glyphId!==void 0&&(g=g.concat({name:"glyph_"+t,type:"USHORT",value:m.glyphId}))):c+=1,!e&&m.glyphIndex!==void 0&&(v=v.concat({name:"cmap12Start_"+t,type:"ULONG",value:m.start}),v=v.concat({name:"cmap12End_"+t,type:"ULONG",value:m.end}),v=v.concat({name:"cmap12Glyph_"+t,type:"ULONG",value:m.glyphIndex}))}if(s.segCountX2=(l-c)*2,s.searchRange=Math.pow(2,Math.floor(Math.log(l-c)/Math.log(2)))*2,s.entrySelector=Math.log(s.searchRange/2)/Math.log(2),s.rangeShift=s.segCountX2-s.searchRange,s.fields=s.fields.concat(h),s.fields.push({name:"reservedPad",type:"USHORT",value:0}),s.fields=s.fields.concat(f),s.fields=s.fields.concat(u),s.fields=s.fields.concat(d),s.fields=s.fields.concat(g),s.cmap4Length=14+h.length*2+2+f.length*2+u.length*2+d.length*2+g.length*2,!e){var p=16+v.length*4;s.cmap12Offset=20+s.cmap4Length,s.fields=s.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:p},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:v.length/3}]),s.fields=s.fields.concat(v)}return s}var Hf={parse:Jy,make:Qy},Xa=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],jy=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],e_=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],Wi=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function Vf(n){this.font=n}Vf.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.font.glyphs;if(t){for(var i=0;i<t.length;i+=1)for(var r=t.get(i),s=0;s<r.unicodes.length;s+=1)if(r.unicodes[s]===e)return i}return null};function Wf(n){this.cmap=n}Wf.prototype.charToGlyphIndex=function(n){return this.cmap.glyphIndexMap[n.codePointAt(0)]||0};function Qa(n,e){this.encoding=n,this.charset=e}Qa.prototype.charToGlyphIndex=function(n){var e=n.codePointAt(0),t=this.encoding[e];return this.charset.indexOf(t)};function Xc(n){switch(n.version){case 1:this.names=Wi.slice();break;case 2:this.names=new Array(n.numberOfGlyphs);for(var e=0;e<n.numberOfGlyphs;e++)n.glyphNameIndex[e]<Wi.length?this.names[e]=Wi[n.glyphNameIndex[e]]:this.names[e]=n.names[n.glyphNameIndex[e]-Wi.length];break;case 2.5:this.names=new Array(n.numberOfGlyphs);for(var t=0;t<n.numberOfGlyphs;t++)this.names[t]=Wi[t+n.glyphNameIndex[t]];break;case 3:this.names=[];break;default:this.names=[];break}}Xc.prototype.nameToGlyphIndex=function(n){return this.names.indexOf(n)};Xc.prototype.glyphIndexToName=function(n){return this.names[n]};function t_(n){for(var e,t=n.tables.cmap.glyphIndexMap,i=Object.keys(t),r=0;r<i.length;r+=1){var s=i[r],a=t[s];e=n.glyphs.get(a),e.addUnicode(parseInt(s))}for(var o=0;o<n.glyphs.length;o+=1)e=n.glyphs.get(o),n.cffEncoding?n.isCIDFont?e.name="gid"+o:e.name=n.cffEncoding.charset[o]:n.glyphNames.names&&(e.name=n.glyphNames.glyphIndexToName(o))}function n_(n){n._IndexToUnicodeMap={};for(var e=n.tables.cmap.glyphIndexMap,t=Object.keys(e),i=0;i<t.length;i+=1){var r=t[i],s=e[r];n._IndexToUnicodeMap[s]===void 0?n._IndexToUnicodeMap[s]={unicodes:[parseInt(r)]}:n._IndexToUnicodeMap[s].unicodes.push(parseInt(r))}}function i_(n,e){e.lowMemory?n_(n):t_(n)}function r_(n,e,t,i,r){n.beginPath(),n.moveTo(e,t),n.lineTo(i,r),n.stroke()}var Vi={line:r_};function s_(n,e){var t=e||new Tt;return{configurable:!0,get:function(){return typeof t=="function"&&(t=t()),t},set:function(i){t=i}}}function tn(n){this.bindConstructorValues(n)}tn.prototype.bindConstructorValues=function(n){this.index=n.index||0,this.name=n.name||null,this.unicode=n.unicode||void 0,this.unicodes=n.unicodes||n.unicode!==void 0?[n.unicode]:[],"xMin"in n&&(this.xMin=n.xMin),"yMin"in n&&(this.yMin=n.yMin),"xMax"in n&&(this.xMax=n.xMax),"yMax"in n&&(this.yMax=n.yMax),"advanceWidth"in n&&(this.advanceWidth=n.advanceWidth),Object.defineProperty(this,"path",s_(this,n.path))};tn.prototype.addUnicode=function(n){this.unicodes.length===0&&(this.unicode=n),this.unicodes.push(n)};tn.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};tn.prototype.getPath=function(n,e,t,i,r){n=n!==void 0?n:0,e=e!==void 0?e:0,t=t!==void 0?t:72;var s,a;i||(i={});var o=i.xScale,l=i.yScale;if(i.hinting&&r&&r.hinting&&(a=this.path&&r.hinting.exec(this,t)),a)s=r.hinting.getCommands(a),n=Math.round(n),e=Math.round(e),o=l=1;else{s=this.path.commands;var c=1/(this.path.unitsPerEm||1e3)*t;o===void 0&&(o=c),l===void 0&&(l=c)}for(var h=new Tt,f=0;f<s.length;f+=1){var u=s[f];u.type==="M"?h.moveTo(n+u.x*o,e+-u.y*l):u.type==="L"?h.lineTo(n+u.x*o,e+-u.y*l):u.type==="Q"?h.quadraticCurveTo(n+u.x1*o,e+-u.y1*l,n+u.x*o,e+-u.y*l):u.type==="C"?h.curveTo(n+u.x1*o,e+-u.y1*l,n+u.x2*o,e+-u.y2*l,n+u.x*o,e+-u.y*l):u.type==="Z"&&h.closePath()}return h};tn.prototype.getContours=function(){if(this.points===void 0)return[];for(var n=[],e=[],t=0;t<this.points.length;t+=1){var i=this.points[t];e.push(i),i.lastPointOfContour&&(n.push(e),e=[])}return Be.argument(e.length===0,"There are still points left in the current contour."),n};tn.prototype.getMetrics=function(){for(var n=this.path.commands,e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];r.type!=="Z"&&(e.push(r.x),t.push(r.y)),(r.type==="Q"||r.type==="C")&&(e.push(r.x1),t.push(r.y1)),r.type==="C"&&(e.push(r.x2),t.push(r.y2))}var s={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,t),leftSideBearing:this.leftSideBearing};return isFinite(s.xMin)||(s.xMin=0),isFinite(s.xMax)||(s.xMax=this.advanceWidth),isFinite(s.yMin)||(s.yMin=0),isFinite(s.yMax)||(s.yMax=0),s.rightSideBearing=this.advanceWidth-s.leftSideBearing-(s.xMax-s.xMin),s};tn.prototype.draw=function(n,e,t,i,r){this.getPath(e,t,i,r).draw(n)};tn.prototype.drawPoints=function(n,e,t,i){function r(f,u,d,g){n.beginPath();for(var v=0;v<f.length;v+=1)n.moveTo(u+f[v].x*g,d+f[v].y*g),n.arc(u+f[v].x*g,d+f[v].y*g,2,0,Math.PI*2,!1);n.closePath(),n.fill()}e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24;for(var s=1/this.path.unitsPerEm*i,a=[],o=[],l=this.path,c=0;c<l.commands.length;c+=1){var h=l.commands[c];h.x!==void 0&&a.push({x:h.x,y:-h.y}),h.x1!==void 0&&o.push({x:h.x1,y:-h.y1}),h.x2!==void 0&&o.push({x:h.x2,y:-h.y2})}n.fillStyle="blue",r(a,e,t,s),n.fillStyle="red",r(o,e,t,s)};tn.prototype.drawMetrics=function(n,e,t,i){var r;e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:24,r=1/this.path.unitsPerEm*i,n.lineWidth=1,n.strokeStyle="black",Vi.line(n,e,-1e4,e,1e4),Vi.line(n,-1e4,t,1e4,t);var s=this.xMin||0,a=this.yMin||0,o=this.xMax||0,l=this.yMax||0,c=this.advanceWidth||0;n.strokeStyle="blue",Vi.line(n,e+s*r,-1e4,e+s*r,1e4),Vi.line(n,e+o*r,-1e4,e+o*r,1e4),Vi.line(n,-1e4,t+-a*r,1e4,t+-a*r),Vi.line(n,-1e4,t+-l*r,1e4,t+-l*r),n.strokeStyle="green",Vi.line(n,e+c*r,-1e4,e+c*r,1e4)};function Va(n,e,t){Object.defineProperty(n,e,{get:function(){return n.path,n[t]},set:function(i){n[t]=i},enumerable:!0,configurable:!0})}function qc(n,e){if(this.font=n,this.glyphs={},Array.isArray(e))for(var t=0;t<e.length;t++){var i=e[t];i.path.unitsPerEm=n.unitsPerEm,this.glyphs[t]=i}this.length=e&&e.length||0}qc.prototype.get=function(n){if(this.glyphs[n]===void 0){this.font._push(n),typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());var e=this.glyphs[n],t=this.font._IndexToUnicodeMap[n];if(t)for(var i=0;i<t.unicodes.length;i++)e.addUnicode(t.unicodes[i]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+n:e.name=this.font.cffEncoding.charset[n]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(n)),this.glyphs[n].advanceWidth=this.font._hmtxTableData[n].advanceWidth,this.glyphs[n].leftSideBearing=this.font._hmtxTableData[n].leftSideBearing}else typeof this.glyphs[n]=="function"&&(this.glyphs[n]=this.glyphs[n]());return this.glyphs[n]};qc.prototype.push=function(n,e){this.glyphs[n]=e,this.length++};function a_(n,e){return new tn({index:e,font:n})}function o_(n,e,t,i,r,s){return function(){var a=new tn({index:e,font:n});return a.path=function(){t(a,i,r);var o=s(n.glyphs,a);return o.unitsPerEm=n.unitsPerEm,o},Va(a,"xMin","_xMin"),Va(a,"xMax","_xMax"),Va(a,"yMin","_yMin"),Va(a,"yMax","_yMax"),a}}function l_(n,e,t,i){return function(){var r=new tn({index:e,font:n});return r.path=function(){var s=t(n,r,i);return s.unitsPerEm=n.unitsPerEm,s},r}}var In={GlyphSet:qc,glyphLoader:a_,ttfGlyphLoader:o_,cffGlyphLoader:l_};function Xf(n,e){if(n===e)return!0;if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;for(var t=0;t<n.length;t+=1)if(!Xf(n[t],e[t]))return!1;return!0}else return!1}function Nc(n){var e;return n.length<1240?e=107:n.length<33900?e=1131:e=32768,e}function gi(n,e,t){var i=[],r=[],s=Re.getCard16(n,e),a,o;if(s!==0){var l=Re.getByte(n,e+2);a=e+(s+1)*l+2;for(var c=e+3,h=0;h<s+1;h+=1)i.push(Re.getOffset(n,c,l)),c+=l;o=a+i[s]}else o=e+2;for(var f=0;f<i.length-1;f+=1){var u=Re.getBytes(n,a+i[f],a+i[f+1]);t&&(u=t(u)),r.push(u)}return{objects:r,startOffset:e,endOffset:o}}function c_(n,e){var t=[],i=Re.getCard16(n,e),r,s;if(i!==0){var a=Re.getByte(n,e+2);r=e+(i+1)*a+2;for(var o=e+3,l=0;l<i+1;l+=1)t.push(Re.getOffset(n,o,a)),o+=a;s=r+t[i]}else s=e+2;return{offsets:t,startOffset:e,endOffset:s}}function h_(n,e,t,i,r){var s=Re.getCard16(t,i),a=0;if(s!==0){var o=Re.getByte(t,i+2);a=i+(s+1)*o+2}var l=Re.getBytes(t,a+e[n],a+e[n+1]);return r&&(l=r(l)),l}function u_(n){for(var e="",t=15,i=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var r=n.parseByte(),s=r>>4,a=r&15;if(s===t||(e+=i[s],a===t))break;e+=i[a]}return parseFloat(e)}function f_(n,e){var t,i,r,s;if(e===28)return t=n.parseByte(),i=n.parseByte(),t<<8|i;if(e===29)return t=n.parseByte(),i=n.parseByte(),r=n.parseByte(),s=n.parseByte(),t<<24|i<<16|r<<8|s;if(e===30)return u_(n);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return t=n.parseByte(),(e-247)*256+t+108;if(e>=251&&e<=254)return t=n.parseByte(),-(e-251)*256-t-108;throw new Error("Invalid b0 "+e)}function d_(n){for(var e={},t=0;t<n.length;t+=1){var i=n[t][0],r=n[t][1],s=void 0;if(r.length===1?s=r[0]:s=r,e.hasOwnProperty(i)&&!isNaN(e[i]))throw new Error("Object "+e+" already has key "+i);e[i]=s}return e}function qf(n,e,t){e=e!==void 0?e:0;var i=new Re.Parser(n,e),r=[],s=[];for(t=t!==void 0?t:n.length;i.relativeOffset<t;){var a=i.parseByte();a<=21?(a===12&&(a=1200+i.parseByte()),r.push([a,s]),s=[]):s.push(f_(i,a))}return d_(r)}function vs(n,e){return e<=390?e=Xa[e]:e=n[e-391],e}function Yf(n,e,t){for(var i={},r,s=0;s<e.length;s+=1){var a=e[s];if(Array.isArray(a.type)){var o=[];o.length=a.type.length;for(var l=0;l<a.type.length;l++)r=n[a.op]!==void 0?n[a.op][l]:void 0,r===void 0&&(r=a.value!==void 0&&a.value[l]!==void 0?a.value[l]:null),a.type[l]==="SID"&&(r=vs(t,r)),o[l]=r;i[a.name]=o}else r=n[a.op],r===void 0&&(r=a.value!==void 0?a.value:null),a.type==="SID"&&(r=vs(t,r)),i[a.name]=r}return i}function p_(n,e){var t={};return t.formatMajor=Re.getCard8(n,e),t.formatMinor=Re.getCard8(n,e+1),t.size=Re.getCard8(n,e+2),t.offsetSize=Re.getCard8(n,e+3),t.startOffset=e,t.endOffset=e+4,t}var Zf=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],Jf=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function m_(n,e){var t=qf(n,0,n.byteLength);return Yf(t,Zf,e)}function $f(n,e,t,i){var r=qf(n,e,t);return Yf(r,Jf,i)}function nf(n,e,t,i){for(var r=[],s=0;s<t.length;s+=1){var a=new DataView(new Uint8Array(t[s]).buffer),o=m_(a,i);o._subrs=[],o._subrsBias=0,o._defaultWidthX=0,o._nominalWidthX=0;var l=o.private[0],c=o.private[1];if(l!==0&&c!==0){var h=$f(n,c+e,l,i);if(o._defaultWidthX=h.defaultWidthX,o._nominalWidthX=h.nominalWidthX,h.subrs!==0){var f=c+h.subrs,u=gi(n,f+e);o._subrs=u.objects,o._subrsBias=Nc(o._subrs)}o._privateDict=h}r.push(o)}return r}function g_(n,e,t,i){var r,s,a=new Re.Parser(n,e);t-=1;var o=[".notdef"],l=a.parseCard8();if(l===0)for(var c=0;c<t;c+=1)r=a.parseSID(),o.push(vs(i,r));else if(l===1)for(;o.length<=t;){r=a.parseSID(),s=a.parseCard8();for(var h=0;h<=s;h+=1)o.push(vs(i,r)),r+=1}else if(l===2)for(;o.length<=t;){r=a.parseSID(),s=a.parseCard16();for(var f=0;f<=s;f+=1)o.push(vs(i,r)),r+=1}else throw new Error("Unknown charset format "+l);return o}function v_(n,e,t){var i,r={},s=new Re.Parser(n,e),a=s.parseCard8();if(a===0)for(var o=s.parseCard8(),l=0;l<o;l+=1)i=s.parseCard8(),r[i]=l;else if(a===1){var c=s.parseCard8();i=1;for(var h=0;h<c;h+=1)for(var f=s.parseCard8(),u=s.parseCard8(),d=f;d<=f+u;d+=1)r[d]=i,i+=1}else throw new Error("Unknown encoding format "+a);return new Qa(r,t)}function rf(n,e,t){var i,r,s,a,o=new Tt,l=[],c=0,h=!1,f=!1,u=0,d=0,g,v,m,p;if(n.isCIDFont){var S=n.tables.cff.topDict._fdSelect[e.index],x=n.tables.cff.topDict._fdArray[S];g=x._subrs,v=x._subrsBias,m=x._defaultWidthX,p=x._nominalWidthX}else g=n.tables.cff.topDict._subrs,v=n.tables.cff.topDict._subrsBias,m=n.tables.cff.topDict._defaultWidthX,p=n.tables.cff.topDict._nominalWidthX;var y=m;function C(T,b){f&&o.closePath(),o.moveTo(T,b),f=!0}function w(){var T;T=l.length%2!==0,T&&!h&&(y=l.shift()+p),c+=l.length>>1,l.length=0,h=!0}function E(T){for(var b,_,I,k,D,L,G,z,Z,N,K,ie,Q=0;Q<T.length;){var be=T[Q];switch(Q+=1,be){case 1:w();break;case 3:w();break;case 4:l.length>1&&!h&&(y=l.shift()+p,h=!0),d+=l.pop(),C(u,d);break;case 5:for(;l.length>0;)u+=l.shift(),d+=l.shift(),o.lineTo(u,d);break;case 6:for(;l.length>0&&(u+=l.shift(),o.lineTo(u,d),l.length!==0);)d+=l.shift(),o.lineTo(u,d);break;case 7:for(;l.length>0&&(d+=l.shift(),o.lineTo(u,d),l.length!==0);)u+=l.shift(),o.lineTo(u,d);break;case 8:for(;l.length>0;)i=u+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),d=a+l.shift(),o.curveTo(i,r,s,a,u,d);break;case 10:D=l.pop()+v,L=g[D],L&&E(L);break;case 11:return;case 12:switch(be=T[Q],Q+=1,be){case 35:i=u+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),G=s+l.shift(),z=a+l.shift(),Z=G+l.shift(),N=z+l.shift(),K=Z+l.shift(),ie=N+l.shift(),u=K+l.shift(),d=ie+l.shift(),l.shift(),o.curveTo(i,r,s,a,G,z),o.curveTo(Z,N,K,ie,u,d);break;case 34:i=u+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),G=s+l.shift(),z=a,Z=G+l.shift(),N=a,K=Z+l.shift(),ie=d,u=K+l.shift(),o.curveTo(i,r,s,a,G,z),o.curveTo(Z,N,K,ie,u,d);break;case 36:i=u+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),G=s+l.shift(),z=a,Z=G+l.shift(),N=a,K=Z+l.shift(),ie=N+l.shift(),u=K+l.shift(),o.curveTo(i,r,s,a,G,z),o.curveTo(Z,N,K,ie,u,d);break;case 37:i=u+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),G=s+l.shift(),z=a+l.shift(),Z=G+l.shift(),N=z+l.shift(),K=Z+l.shift(),ie=N+l.shift(),Math.abs(K-u)>Math.abs(ie-d)?u=K+l.shift():d=ie+l.shift(),o.curveTo(i,r,s,a,G,z),o.curveTo(Z,N,K,ie,u,d);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+be),l.length=0}break;case 14:l.length>0&&!h&&(y=l.shift()+p,h=!0),f&&(o.closePath(),f=!1);break;case 18:w();break;case 19:case 20:w(),Q+=c+7>>3;break;case 21:l.length>2&&!h&&(y=l.shift()+p,h=!0),d+=l.pop(),u+=l.pop(),C(u,d);break;case 22:l.length>1&&!h&&(y=l.shift()+p,h=!0),u+=l.pop(),C(u,d);break;case 23:w();break;case 24:for(;l.length>2;)i=u+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),d=a+l.shift(),o.curveTo(i,r,s,a,u,d);u+=l.shift(),d+=l.shift(),o.lineTo(u,d);break;case 25:for(;l.length>6;)u+=l.shift(),d+=l.shift(),o.lineTo(u,d);i=u+l.shift(),r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),d=a+l.shift(),o.curveTo(i,r,s,a,u,d);break;case 26:for(l.length%2&&(u+=l.shift());l.length>0;)i=u,r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s,d=a+l.shift(),o.curveTo(i,r,s,a,u,d);break;case 27:for(l.length%2&&(d+=l.shift());l.length>0;)i=u+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),d=a,o.curveTo(i,r,s,a,u,d);break;case 28:b=T[Q],_=T[Q+1],l.push((b<<24|_<<16)>>16),Q+=2;break;case 29:D=l.pop()+n.gsubrsBias,L=n.gsubrs[D],L&&E(L);break;case 30:for(;l.length>0&&(i=u,r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),d=a+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,d),l.length!==0);)i=u+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),d=a+l.shift(),u=s+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,d);break;case 31:for(;l.length>0&&(i=u+l.shift(),r=d,s=i+l.shift(),a=r+l.shift(),d=a+l.shift(),u=s+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,d),l.length!==0);)i=u,r=d+l.shift(),s=i+l.shift(),a=r+l.shift(),u=s+l.shift(),d=a+(l.length===1?l.shift():0),o.curveTo(i,r,s,a,u,d);break;default:be<32?console.log("Glyph "+e.index+": unknown operator "+be):be<247?l.push(be-139):be<251?(b=T[Q],Q+=1,l.push((be-247)*256+b+108)):be<255?(b=T[Q],Q+=1,l.push(-(be-251)*256-b-108)):(b=T[Q],_=T[Q+1],I=T[Q+2],k=T[Q+3],Q+=4,l.push((b<<24|_<<16|I<<8|k)/65536))}}}return E(t),e.advanceWidth=y,o}function x_(n,e,t,i){var r=[],s,a=new Re.Parser(n,e),o=a.parseCard8();if(o===0)for(var l=0;l<t;l++){if(s=a.parseCard8(),s>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+s+" (FD count "+i+")");r.push(s)}else if(o===3){var c=a.parseCard16(),h=a.parseCard16();if(h!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+h);for(var f,u=0;u<c;u++){if(s=a.parseCard8(),f=a.parseCard16(),s>=i)throw new Error("CFF table CID Font FDSelect has bad FD index value "+s+" (FD count "+i+")");if(f>t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+f);for(;h<f;h++)r.push(s);h=f}if(f!==t)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+f)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+o);return r}function y_(n,e,t,i){t.tables.cff={};var r=p_(n,e),s=gi(n,r.endOffset,Re.bytesToString),a=gi(n,s.endOffset),o=gi(n,a.endOffset,Re.bytesToString),l=gi(n,o.endOffset);t.gsubrs=l.objects,t.gsubrsBias=Nc(t.gsubrs);var c=nf(n,e,a.objects,o.objects);if(c.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+c.length);var h=c[0];if(t.tables.cff.topDict=h,h._privateDict&&(t.defaultWidthX=h._privateDict.defaultWidthX,t.nominalWidthX=h._privateDict.nominalWidthX),h.ros[0]!==void 0&&h.ros[1]!==void 0&&(t.isCIDFont=!0),t.isCIDFont){var f=h.fdArray,u=h.fdSelect;if(f===0||u===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");f+=e;var d=gi(n,f),g=nf(n,e,d.objects,o.objects);h._fdArray=g,u+=e,h._fdSelect=x_(n,u,t.numGlyphs,g.length)}var v=e+h.private[1],m=$f(n,v,h.private[0],o.objects);if(t.defaultWidthX=m.defaultWidthX,t.nominalWidthX=m.nominalWidthX,m.subrs!==0){var p=v+m.subrs,S=gi(n,p);t.subrs=S.objects,t.subrsBias=Nc(t.subrs)}else t.subrs=[],t.subrsBias=0;var x;i.lowMemory?(x=c_(n,e+h.charStrings),t.nGlyphs=x.offsets.length):(x=gi(n,e+h.charStrings),t.nGlyphs=x.objects.length);var y=g_(n,e+h.charset,t.nGlyphs,o.objects);if(h.encoding===0?t.cffEncoding=new Qa(jy,y):h.encoding===1?t.cffEncoding=new Qa(e_,y):t.cffEncoding=v_(n,e+h.encoding,y),t.encoding=t.encoding||t.cffEncoding,t.glyphs=new In.GlyphSet(t),i.lowMemory)t._push=function(E){var T=h_(E,x.offsets,n,e+h.charStrings);t.glyphs.push(E,In.cffGlyphLoader(t,E,rf,T))};else for(var C=0;C<t.nGlyphs;C+=1){var w=x.objects[C];t.glyphs.push(C,In.cffGlyphLoader(t,C,rf,w))}}function Kf(n,e){var t,i=Xa.indexOf(n);return i>=0&&(t=i),i=e.indexOf(n),i>=0?t=i+Xa.length:(t=Xa.length+e.length,e.push(n)),t}function __(){return new we.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function S_(n){var e=new we.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var t=0;t<n.length;t+=1)e.names.push({name:"name_"+t,type:"NAME",value:n[t]});return e}function Qf(n,e,t){for(var i={},r=0;r<n.length;r+=1){var s=n[r],a=e[s.name];a!==void 0&&!Xf(a,s.value)&&(s.type==="SID"&&(a=Kf(a,t)),i[s.op]={name:s.name,type:s.type,value:a})}return i}function sf(n,e){var t=new we.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Qf(Zf,n,e),t}function af(n){var e=new we.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:n}],e}function b_(n){var e=new we.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var t=0;t<n.length;t+=1)e.strings.push({name:"string_"+t,type:"STRING",value:n[t]});return e}function M_(){return new we.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function w_(n,e){for(var t=new we.Record("Charsets",[{name:"format",type:"Card8",value:0}]),i=0;i<n.length;i+=1){var r=n[i],s=Kf(r,e);t.fields.push({name:"glyph_"+i,type:"SID",value:s})}return t}function T_(n){var e=[],t=n.path;e.push({name:"width",type:"NUMBER",value:n.advanceWidth});for(var i=0,r=0,s=0;s<t.commands.length;s+=1){var a=void 0,o=void 0,l=t.commands[s];if(l.type==="Q"){var c=.3333333333333333,h=2/3;l={type:"C",x:l.x,y:l.y,x1:Math.round(c*i+h*l.x1),y1:Math.round(c*r+h*l.y1),x2:Math.round(c*l.x+h*l.x1),y2:Math.round(c*l.y+h*l.y1)}}if(l.type==="M")a=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rmoveto",type:"OP",value:21}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="L")a=Math.round(l.x-i),o=Math.round(l.y-r),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rlineto",type:"OP",value:5}),i=Math.round(l.x),r=Math.round(l.y);else if(l.type==="C"){var f=Math.round(l.x1-i),u=Math.round(l.y1-r),d=Math.round(l.x2-l.x1),g=Math.round(l.y2-l.y1);a=Math.round(l.x-l.x2),o=Math.round(l.y-l.y2),e.push({name:"dx1",type:"NUMBER",value:f}),e.push({name:"dy1",type:"NUMBER",value:u}),e.push({name:"dx2",type:"NUMBER",value:d}),e.push({name:"dy2",type:"NUMBER",value:g}),e.push({name:"dx",type:"NUMBER",value:a}),e.push({name:"dy",type:"NUMBER",value:o}),e.push({name:"rrcurveto",type:"OP",value:8}),i=Math.round(l.x),r=Math.round(l.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function E_(n){for(var e=new we.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),t=0;t<n.length;t+=1){var i=n.get(t),r=T_(i);e.charStrings.push({name:i.name,type:"CHARSTRING",value:r})}return e}function A_(n,e){var t=new we.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return t.dict=Qf(Jf,n,e),t}function C_(n,e){for(var t=new we.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),i=1/e.unitsPerEm,r={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[i,0,0,i,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},s={},a=[],o,l=1;l<n.length;l+=1)o=n.get(l),a.push(o.name);var c=[];t.header=__(),t.nameIndex=S_([e.postScriptName]);var h=sf(r,c);t.topDictIndex=af(h),t.globalSubrIndex=M_(),t.charsets=w_(a,c),t.charStringsIndex=E_(n),t.privateDict=A_(s,c),t.stringIndex=b_(c);var f=t.header.sizeOf()+t.nameIndex.sizeOf()+t.topDictIndex.sizeOf()+t.stringIndex.sizeOf()+t.globalSubrIndex.sizeOf();return r.charset=f,r.encoding=0,r.charStrings=r.charset+t.charsets.sizeOf(),r.private[1]=r.charStrings+t.charStringsIndex.sizeOf(),h=sf(r,c),t.topDictIndex=af(h),t}var jf={parse:y_,make:C_};function R_(n,e){var t={},i=new Re.Parser(n,e);return t.version=i.parseVersion(),t.fontRevision=Math.round(i.parseFixed()*1e3)/1e3,t.checkSumAdjustment=i.parseULong(),t.magicNumber=i.parseULong(),Be.argument(t.magicNumber===1594834165,"Font header has wrong magic number."),t.flags=i.parseUShort(),t.unitsPerEm=i.parseUShort(),t.created=i.parseLongDateTime(),t.modified=i.parseLongDateTime(),t.xMin=i.parseShort(),t.yMin=i.parseShort(),t.xMax=i.parseShort(),t.yMax=i.parseShort(),t.macStyle=i.parseUShort(),t.lowestRecPPEM=i.parseUShort(),t.fontDirectionHint=i.parseShort(),t.indexToLocFormat=i.parseShort(),t.glyphDataFormat=i.parseShort(),t}function I_(n){var e=Math.round(new Date().getTime()/1e3)+2082844800,t=e;return n.createdTimestamp&&(t=n.createdTimestamp+2082844800),new we.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:t},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],n)}var ed={parse:R_,make:I_};function P_(n,e){var t={},i=new Re.Parser(n,e);return t.version=i.parseVersion(),t.ascender=i.parseShort(),t.descender=i.parseShort(),t.lineGap=i.parseShort(),t.advanceWidthMax=i.parseUShort(),t.minLeftSideBearing=i.parseShort(),t.minRightSideBearing=i.parseShort(),t.xMaxExtent=i.parseShort(),t.caretSlopeRise=i.parseShort(),t.caretSlopeRun=i.parseShort(),t.caretOffset=i.parseShort(),i.relativeOffset+=8,t.metricDataFormat=i.parseShort(),t.numberOfHMetrics=i.parseUShort(),t}function U_(n){return new we.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],n)}var td={parse:P_,make:U_};function L_(n,e,t,i,r){for(var s,a,o=new Re.Parser(n,e),l=0;l<i;l+=1){l<t&&(s=o.parseUShort(),a=o.parseShort());var c=r.get(l);c.advanceWidth=s,c.leftSideBearing=a}}function D_(n,e,t,i,r){n._hmtxTableData={};for(var s,a,o=new Re.Parser(e,t),l=0;l<r;l+=1)l<i&&(s=o.parseUShort(),a=o.parseShort()),n._hmtxTableData[l]={advanceWidth:s,leftSideBearing:a}}function F_(n,e,t,i,r,s,a){a.lowMemory?D_(n,e,t,i,r):L_(e,t,i,r,s)}function N_(n){for(var e=new we.Table("hmtx",[]),t=0;t<n.length;t+=1){var i=n.get(t),r=i.advanceWidth||0,s=i.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+t,type:"USHORT",value:r}),e.fields.push({name:"leftSideBearing_"+t,type:"SHORT",value:s})}return e}var nd={parse:F_,make:N_};function O_(n){for(var e=new we.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:n.length}]),t="",i=12+n.length*4,r=0;r<n.length;++r){var s=t.indexOf(n[r]);s<0&&(s=t.length,t+=n[r]),e.fields.push({name:"offset "+r,type:"USHORT",value:i+s}),e.fields.push({name:"length "+r,type:"USHORT",value:n[r].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),e}function k_(n,e){var t=new Re.Parser(n,e),i=t.parseULong();Be.argument(i===1,"Unsupported ltag table version."),t.skip("uLong",1);for(var r=t.parseULong(),s=[],a=0;a<r;a++){for(var o="",l=e+t.parseUShort(),c=t.parseUShort(),h=l;h<l+c;++h)o+=String.fromCharCode(n.getInt8(h));s.push(o)}return s}var id={make:O_,parse:k_};function B_(n,e){var t={},i=new Re.Parser(n,e);return t.version=i.parseVersion(),t.numGlyphs=i.parseUShort(),t.version===1&&(t.maxPoints=i.parseUShort(),t.maxContours=i.parseUShort(),t.maxCompositePoints=i.parseUShort(),t.maxCompositeContours=i.parseUShort(),t.maxZones=i.parseUShort(),t.maxTwilightPoints=i.parseUShort(),t.maxStorage=i.parseUShort(),t.maxFunctionDefs=i.parseUShort(),t.maxInstructionDefs=i.parseUShort(),t.maxStackElements=i.parseUShort(),t.maxSizeOfInstructions=i.parseUShort(),t.maxComponentElements=i.parseUShort(),t.maxComponentDepth=i.parseUShort()),t}function z_(n){return new we.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:n}])}var rd={parse:B_,make:z_},sd=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],ad={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},G_={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},od={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function H_(n,e,t){switch(n){case 0:if(e===65535)return"und";if(t)return t[e];break;case 1:return ad[e];case 3:return od[e]}}var Oc="utf-16",V_={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},W_={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function ld(n,e,t){switch(n){case 0:return Oc;case 1:return W_[t]||V_[e];case 3:if(e===1||e===10)return Oc;break}}function X_(n,e,t){for(var i={},r=new Re.Parser(n,e),s=r.parseUShort(),a=r.parseUShort(),o=r.offset+r.parseUShort(),l=0;l<a;l++){var c=r.parseUShort(),h=r.parseUShort(),f=r.parseUShort(),u=r.parseUShort(),d=sd[u]||u,g=r.parseUShort(),v=r.parseUShort(),m=H_(c,f,t),p=ld(c,h,f);if(p!==void 0&&m!==void 0){var S=void 0;if(p===Oc?S=Br.UTF16(n,o+v,g):S=Br.MACSTRING(n,o+v,g,p),S){var x=i[d];x===void 0&&(x=i[d]={}),x[m]=S}}}var y=0;return s===1&&(y=r.parseUShort()),i}function wc(n){var e={};for(var t in n)e[n[t]]=parseInt(t);return e}function of(n,e,t,i,r,s){return new we.Record("NameRecord",[{name:"platformID",type:"USHORT",value:n},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:t},{name:"nameID",type:"USHORT",value:i},{name:"length",type:"USHORT",value:r},{name:"offset",type:"USHORT",value:s}])}function q_(n,e){var t=n.length,i=e.length-t+1;e:for(var r=0;r<i;r++)for(;r<i;r++){for(var s=0;s<t;s++)if(e[r+s]!==n[s])continue e;return r}return-1}function lf(n,e){var t=q_(n,e);if(t<0){t=e.length;for(var i=0,r=n.length;i<r;++i)e.push(n[i])}return t}function Y_(n,e){var t,i=[],r={},s=wc(sd);for(var a in n){var o=s[a];if(o===void 0&&(o=a),t=parseInt(o),isNaN(t))throw new Error('Name table entry "'+a+'" does not exist, see nameTableNames for complete list.');r[t]=n[a],i.push(t)}for(var l=wc(ad),c=wc(od),h=[],f=[],u=0;u<i.length;u++){t=i[u];var d=r[t];for(var g in d){var v=d[g],m=1,p=l[g],S=G_[p],x=ld(m,S,p),y=de.MACSTRING(v,x);y===void 0&&(m=0,p=e.indexOf(g),p<0&&(p=e.length,e.push(g)),S=4,y=de.UTF16(v));var C=lf(y,f);h.push(of(m,S,p,t,y.length,C));var w=c[g];if(w!==void 0){var E=de.UTF16(v),T=lf(E,f);h.push(of(3,1,w,t,E.length,T))}}}h.sort(function(I,k){return I.platformID-k.platformID||I.encodingID-k.encodingID||I.languageID-k.languageID||I.nameID-k.nameID});for(var b=new we.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:h.length},{name:"stringOffset",type:"USHORT",value:6+h.length*12}]),_=0;_<h.length;_++)b.fields.push({name:"record_"+_,type:"RECORD",value:h[_]});return b.fields.push({name:"strings",type:"LITERAL",value:f}),b}var cd={parse:X_,make:Y_},kc=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function Z_(n){for(var e=0;e<kc.length;e+=1){var t=kc[e];if(n>=t.begin&&n<t.end)return e}return-1}function J_(n,e){var t={},i=new Re.Parser(n,e);t.version=i.parseUShort(),t.xAvgCharWidth=i.parseShort(),t.usWeightClass=i.parseUShort(),t.usWidthClass=i.parseUShort(),t.fsType=i.parseUShort(),t.ySubscriptXSize=i.parseShort(),t.ySubscriptYSize=i.parseShort(),t.ySubscriptXOffset=i.parseShort(),t.ySubscriptYOffset=i.parseShort(),t.ySuperscriptXSize=i.parseShort(),t.ySuperscriptYSize=i.parseShort(),t.ySuperscriptXOffset=i.parseShort(),t.ySuperscriptYOffset=i.parseShort(),t.yStrikeoutSize=i.parseShort(),t.yStrikeoutPosition=i.parseShort(),t.sFamilyClass=i.parseShort(),t.panose=[];for(var r=0;r<10;r++)t.panose[r]=i.parseByte();return t.ulUnicodeRange1=i.parseULong(),t.ulUnicodeRange2=i.parseULong(),t.ulUnicodeRange3=i.parseULong(),t.ulUnicodeRange4=i.parseULong(),t.achVendID=String.fromCharCode(i.parseByte(),i.parseByte(),i.parseByte(),i.parseByte()),t.fsSelection=i.parseUShort(),t.usFirstCharIndex=i.parseUShort(),t.usLastCharIndex=i.parseUShort(),t.sTypoAscender=i.parseShort(),t.sTypoDescender=i.parseShort(),t.sTypoLineGap=i.parseShort(),t.usWinAscent=i.parseUShort(),t.usWinDescent=i.parseUShort(),t.version>=1&&(t.ulCodePageRange1=i.parseULong(),t.ulCodePageRange2=i.parseULong()),t.version>=2&&(t.sxHeight=i.parseShort(),t.sCapHeight=i.parseShort(),t.usDefaultChar=i.parseUShort(),t.usBreakChar=i.parseUShort(),t.usMaxContent=i.parseUShort()),t}function $_(n){return new we.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],n)}var Bc={parse:J_,make:$_,unicodeRanges:kc,getUnicodeRange:Z_};function K_(n,e){var t={},i=new Re.Parser(n,e);switch(t.version=i.parseVersion(),t.italicAngle=i.parseFixed(),t.underlinePosition=i.parseShort(),t.underlineThickness=i.parseShort(),t.isFixedPitch=i.parseULong(),t.minMemType42=i.parseULong(),t.maxMemType42=i.parseULong(),t.minMemType1=i.parseULong(),t.maxMemType1=i.parseULong(),t.version){case 1:t.names=Wi.slice();break;case 2:t.numberOfGlyphs=i.parseUShort(),t.glyphNameIndex=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)t.glyphNameIndex[r]=i.parseUShort();t.names=[];for(var s=0;s<t.numberOfGlyphs;s++)if(t.glyphNameIndex[s]>=Wi.length){var a=i.parseChar();t.names.push(i.parseString(a))}break;case 2.5:t.numberOfGlyphs=i.parseUShort(),t.offset=new Array(t.numberOfGlyphs);for(var o=0;o<t.numberOfGlyphs;o++)t.offset[o]=i.parseChar();break}return t}function Q_(){return new we.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var hd={parse:K_,make:Q_},fn=new Array(9);fn[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(V.coverage),deltaGlyphId:this.parseUShort()};if(t===2)return{substFormat:2,coverage:this.parsePointer(V.coverage),substitute:this.parseOffset16List()};Be.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};fn[2]=function(){var e=this.parseUShort();return Be.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(V.coverage),sequences:this.parseListOfLists()}};fn[3]=function(){var e=this.parseUShort();return Be.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(V.coverage),alternateSets:this.parseListOfLists()}};fn[4]=function(){var e=this.parseUShort();return Be.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(V.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var kr={sequenceIndex:V.uShort,lookupListIndex:V.uShort};fn[5]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:t,coverage:this.parsePointer(V.coverage),ruleSets:this.parseListOfLists(function(){var s=this.parseUShort(),a=this.parseUShort();return{input:this.parseUShortList(s-1),lookupRecords:this.parseRecordList(a,kr)}})};if(t===2)return{substFormat:t,coverage:this.parsePointer(V.coverage),classDef:this.parsePointer(V.classDef),classSets:this.parseListOfLists(function(){var s=this.parseUShort(),a=this.parseUShort();return{classes:this.parseUShortList(s-1),lookupRecords:this.parseRecordList(a,kr)}})};if(t===3){var i=this.parseUShort(),r=this.parseUShort();return{substFormat:t,coverages:this.parseList(i,V.pointer(V.coverage)),lookupRecords:this.parseRecordList(r,kr)}}Be.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};fn[6]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{substFormat:1,coverage:this.parsePointer(V.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(kr)}})};if(t===2)return{substFormat:2,coverage:this.parsePointer(V.coverage),backtrackClassDef:this.parsePointer(V.classDef),inputClassDef:this.parsePointer(V.classDef),lookaheadClassDef:this.parsePointer(V.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(kr)}})};if(t===3)return{substFormat:3,backtrackCoverage:this.parseList(V.pointer(V.coverage)),inputCoverage:this.parseList(V.pointer(V.coverage)),lookaheadCoverage:this.parseList(V.pointer(V.coverage)),lookupRecords:this.parseRecordList(kr)};Be.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};fn[7]=function(){var e=this.parseUShort();Be.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var t=this.parseUShort(),i=new V(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:t,extension:fn[t].call(i)}};fn[8]=function(){var e=this.parseUShort();return Be.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(V.coverage),backtrackCoverage:this.parseList(V.pointer(V.coverage)),lookaheadCoverage:this.parseList(V.pointer(V.coverage)),substitutes:this.parseUShortList()}};function j_(n,e){e=e||0;var t=new V(n,e),i=t.parseVersion(1);return Be.argument(i===1||i===1.1,"Unsupported GSUB table version."),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(fn)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(fn),variations:t.parseFeatureVariationsList()}}var zr=new Array(9);zr[1]=function(e){return e.substFormat===1?new we.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new we.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new we.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new we.Coverage(e.coverage)}].concat(we.ushortList("substitute",e.substitute)))};zr[2]=function(e){return Be.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new we.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new we.Coverage(e.coverage)}].concat(we.tableList("seqSet",e.sequences,function(t){return new we.Table("sequenceSetTable",we.ushortList("sequence",t))})))};zr[3]=function(e){return Be.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new we.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new we.Coverage(e.coverage)}].concat(we.tableList("altSet",e.alternateSets,function(t){return new we.Table("alternateSetTable",we.ushortList("alternate",t))})))};zr[4]=function(e){return Be.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new we.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new we.Coverage(e.coverage)}].concat(we.tableList("ligSet",e.ligatureSets,function(t){return new we.Table("ligatureSetTable",we.tableList("ligature",t,function(i){return new we.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:i.ligGlyph}].concat(we.ushortList("component",i.components,i.components.length+1)))}))})))};zr[6]=function(e){if(e.substFormat===1){var t=new we.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new we.Coverage(e.coverage)}].concat(we.tableList("chainRuleSet",e.chainRuleSets,function(s){return new we.Table("chainRuleSetTable",we.tableList("chainRule",s,function(a){var o=we.ushortList("backtrackGlyph",a.backtrack,a.backtrack.length).concat(we.ushortList("inputGlyph",a.input,a.input.length+1)).concat(we.ushortList("lookaheadGlyph",a.lookahead,a.lookahead.length)).concat(we.ushortList("substitution",[],a.lookupRecords.length));return a.lookupRecords.forEach(function(l,c){o=o.concat({name:"sequenceIndex"+c,type:"USHORT",value:l.sequenceIndex}).concat({name:"lookupListIndex"+c,type:"USHORT",value:l.lookupListIndex})}),new we.Table("chainRuleTable",o)}))})));return t}else if(e.substFormat===2)Be.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var i=[{name:"substFormat",type:"USHORT",value:e.substFormat}];i.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(s,a){i.push({name:"backtrackCoverage"+a,type:"TABLE",value:new we.Coverage(s)})}),i.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(s,a){i.push({name:"inputCoverage"+a,type:"TABLE",value:new we.Coverage(s)})}),i.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(s,a){i.push({name:"lookaheadCoverage"+a,type:"TABLE",value:new we.Coverage(s)})}),i.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(s,a){i=i.concat({name:"sequenceIndex"+a,type:"USHORT",value:s.sequenceIndex}).concat({name:"lookupListIndex"+a,type:"USHORT",value:s.lookupListIndex})});var r=new we.Table("chainContextTable",i);return r}Be.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function eS(n){return new we.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new we.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new we.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new we.LookupList(n.lookups,zr)}])}var ud={parse:j_,make:eS};function tS(n,e){var t=new Re.Parser(n,e),i=t.parseULong();Be.argument(i===1,"Unsupported META table version."),t.parseULong(),t.parseULong();for(var r=t.parseULong(),s={},a=0;a<r;a++){var o=t.parseTag(),l=t.parseULong(),c=t.parseULong(),h=Br.UTF8(n,e+l,c);s[o]=h}return s}function nS(n){var e=Object.keys(n).length,t="",i=16+e*12,r=new we.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:i},{name:"numTags",type:"ULONG",value:e}]);for(var s in n){var a=t.length;t+=n[s],r.fields.push({name:"tag "+s,type:"TAG",value:s}),r.fields.push({name:"offset "+s,type:"ULONG",value:i+a}),r.fields.push({name:"length "+s,type:"ULONG",value:n[s].length})}return r.fields.push({name:"stringPool",type:"CHARARRAY",value:t}),r}var fd={parse:tS,make:nS};function cf(n){return Math.log(n)/Math.log(2)|0}function Yc(n){for(;n.length%4!==0;)n.push(0);for(var e=0,t=0;t<n.length;t+=4)e+=(n[t]<<24)+(n[t+1]<<16)+(n[t+2]<<8)+n[t+3];return e%=Math.pow(2,32),e}function hf(n,e,t,i){return new we.Record("Table Record",[{name:"tag",type:"TAG",value:n!==void 0?n:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:t!==void 0?t:0},{name:"length",type:"ULONG",value:i!==void 0?i:0}])}function dd(n){var e=new we.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=n,e.numTables=n.length;var t=Math.pow(2,cf(e.numTables));e.searchRange=16*t,e.entrySelector=cf(t),e.rangeShift=e.numTables*16-e.searchRange;for(var i=[],r=[],s=e.sizeOf()+hf().sizeOf()*e.numTables;s%4!==0;)s+=1,r.push({name:"padding",type:"BYTE",value:0});for(var a=0;a<n.length;a+=1){var o=n[a];Be.argument(o.tableName.length===4,"Table name"+o.tableName+" is invalid.");var l=o.sizeOf(),c=hf(o.tableName,Yc(o.encode()),s,l);for(i.push({name:c.tag+" Table Record",type:"RECORD",value:c}),r.push({name:o.tableName+" table",type:"RECORD",value:o}),s+=l,Be.argument(!isNaN(s),"Something went wrong calculating the offset.");s%4!==0;)s+=1,r.push({name:"padding",type:"BYTE",value:0})}return i.sort(function(h,f){return h.value.tag>f.value.tag?1:-1}),e.fields=e.fields.concat(i),e.fields=e.fields.concat(r),e}function uf(n,e,t){for(var i=0;i<e.length;i+=1){var r=n.charToGlyphIndex(e[i]);if(r>0){var s=n.glyphs.get(r);return s.getMetrics()}}return t}function iS(n){for(var e=0,t=0;t<n.length;t+=1)e+=n[t];return e/n.length}function rS(n){for(var e=[],t=[],i=[],r=[],s=[],a=[],o=[],l,c=0,h=0,f=0,u=0,d=0,g=0;g<n.glyphs.length;g+=1){var v=n.glyphs.get(g),m=v.unicode|0;if(isNaN(v.advanceWidth))throw new Error("Glyph "+v.name+" ("+g+"): advanceWidth is not a number.");(l>m||l===void 0)&&m>0&&(l=m),c<m&&(c=m);var p=Bc.getUnicodeRange(m);if(p<32)h|=1<<p;else if(p<64)f|=1<<p-32;else if(p<96)u|=1<<p-64;else if(p<123)d|=1<<p-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(v.name!==".notdef"){var S=v.getMetrics();e.push(S.xMin),t.push(S.yMin),i.push(S.xMax),r.push(S.yMax),a.push(S.leftSideBearing),o.push(S.rightSideBearing),s.push(v.advanceWidth)}}var x={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,t),xMax:Math.max.apply(null,i),yMax:Math.max.apply(null,r),advanceWidthMax:Math.max.apply(null,s),advanceWidthAvg:iS(s),minLeftSideBearing:Math.min.apply(null,a),maxLeftSideBearing:Math.max.apply(null,a),minRightSideBearing:Math.min.apply(null,o)};x.ascender=n.ascender,x.descender=n.descender;var y=ed.make({flags:3,unitsPerEm:n.unitsPerEm,xMin:x.xMin,yMin:x.yMin,xMax:x.xMax,yMax:x.yMax,lowestRecPPEM:3,createdTimestamp:n.createdTimestamp}),C=td.make({ascender:x.ascender,descender:x.descender,advanceWidthMax:x.advanceWidthMax,minLeftSideBearing:x.minLeftSideBearing,minRightSideBearing:x.minRightSideBearing,xMaxExtent:x.maxLeftSideBearing+(x.xMax-x.xMin),numberOfHMetrics:n.glyphs.length}),w=rd.make(n.glyphs.length),E=Bc.make(Object.assign({xAvgCharWidth:Math.round(x.advanceWidthAvg),usFirstCharIndex:l,usLastCharIndex:c,ulUnicodeRange1:h,ulUnicodeRange2:f,ulUnicodeRange3:u,ulUnicodeRange4:d,sTypoAscender:x.ascender,sTypoDescender:x.descender,sTypoLineGap:0,usWinAscent:x.yMax,usWinDescent:Math.abs(x.yMin),ulCodePageRange1:1,sxHeight:uf(n,"xyvw",{yMax:Math.round(x.ascender/2)}).yMax,sCapHeight:uf(n,"HIKLEFJMNTZBDPRAGOQSUVWXY",x).yMax,usDefaultChar:n.hasChar(" ")?32:0,usBreakChar:n.hasChar(" ")?32:0},n.tables.os2)),T=nd.make(n.glyphs),b=Hf.make(n.glyphs),_=n.getEnglishName("fontFamily"),I=n.getEnglishName("fontSubfamily"),k=_+" "+I,D=n.getEnglishName("postScriptName");D||(D=_.replace(/\s/g,"")+"-"+I);var L={};for(var G in n.names)L[G]=n.names[G];L.uniqueID||(L.uniqueID={en:n.getEnglishName("manufacturer")+":"+k}),L.postScriptName||(L.postScriptName={en:D}),L.preferredFamily||(L.preferredFamily=n.names.fontFamily),L.preferredSubfamily||(L.preferredSubfamily=n.names.fontSubfamily);var z=[],Z=cd.make(L,z),N=z.length>0?id.make(z):void 0,K=hd.make(),ie=jf.make(n.glyphs,{version:n.getEnglishName("version"),fullName:k,familyName:_,weightName:I,postScriptName:D,unitsPerEm:n.unitsPerEm,fontBBox:[0,x.yMin,x.ascender,x.advanceWidthMax]}),Q=n.metas&&Object.keys(n.metas).length>0?fd.make(n.metas):void 0,be=[y,C,w,E,Z,b,K,ie,T];N&&be.push(N),n.tables.gsub&&be.push(ud.make(n.tables.gsub)),Q&&be.push(Q);for(var Ie=dd(be),Y=Ie.encode(),se=Yc(Y),ue=Ie.fields,le=!1,Pe=0;Pe<ue.length;Pe+=1)if(ue[Pe].name==="head table"){ue[Pe].value.checkSumAdjustment=2981146554-se,le=!0;break}if(!le)throw new Error("Could not find head table with checkSum to adjust.");return Ie}var sS={make:dd,fontToTable:rS,computeCheckSum:Yc};function Tc(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,s=n[r].tag;if(s===e)return r;s<e?t=r+1:i=r-1}return-t-1}function ff(n,e){for(var t=0,i=n.length-1;t<=i;){var r=t+i>>>1,s=n[r];if(s===e)return r;s<e?t=r+1:i=r-1}return-t-1}function df(n,e){for(var t,i=0,r=n.length-1;i<=r;){var s=i+r>>>1;t=n[s];var a=t.start;if(a===e)return t;a<e?i=s+1:r=s-1}if(i>0)return t=n[i-1],e>t.end?0:t}function bs(n,e){this.font=n,this.tableName=e}bs.prototype={searchTag:Tc,binSearch:ff,getTable:function(n){var e=this.font.tables[this.tableName];return!e&&n&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var n=this.getTable();return n?n.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var n=this.getTable();if(n){for(var e=!1,t=0;t<n.scripts.length;t++){var i=n.scripts[t].tag;if(i==="DFLT")return i;i==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(n,e){var t=this.getTable(e);if(t){n=n||"DFLT";var i=t.scripts,r=Tc(t.scripts,n);if(r>=0)return i[r].script;if(e){var s={tag:n,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return i.splice(-1-r,0,s),s.script}}},getLangSysTable:function(n,e,t){var i=this.getScriptTable(n,t);if(i){if(!e||e==="dflt"||e==="DFLT")return i.defaultLangSys;var r=Tc(i.langSysRecords,e);if(r>=0)return i.langSysRecords[r].langSys;if(t){var s={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return i.langSysRecords.splice(-1-r,0,s),s.langSys}}},getFeatureTable:function(n,e,t,i){var r=this.getLangSysTable(n,e,i);if(r){for(var s,a=r.featureIndexes,o=this.font.tables[this.tableName].features,l=0;l<a.length;l++)if(s=o[a[l]],s.tag===t)return s.feature;if(i){var c=o.length;return Be.assert(c===0||t>=o[c-1].tag,"Features must be added in alphabetical order."),s={tag:t,feature:{params:0,lookupListIndexes:[]}},o.push(s),a.push(c),s.feature}}},getLookupTables:function(n,e,t,i,r){var s=this.getFeatureTable(n,e,t,r),a=[];if(s){for(var o,l=s.lookupListIndexes,c=this.font.tables[this.tableName].lookups,h=0;h<l.length;h++)o=c[l[h]],o.lookupType===i&&a.push(o);if(a.length===0&&r){o={lookupType:i,lookupFlag:0,subtables:[],markFilteringSet:void 0};var f=c.length;return c.push(o),l.push(f),[o]}}return a},getGlyphClass:function(n,e){switch(n.format){case 1:return n.startGlyph<=e&&e<n.startGlyph+n.classes.length?n.classes[e-n.startGlyph]:0;case 2:var t=df(n.ranges,e);return t?t.classId:0}},getCoverageIndex:function(n,e){switch(n.format){case 1:var t=ff(n.glyphs,e);return t>=0?t:-1;case 2:var i=df(n.ranges,e);return i?i.index+e-i.start:-1}},expandCoverage:function(n){if(n.format===1)return n.glyphs;for(var e=[],t=n.ranges,i=0;i<t.length;i++)for(var r=t[i],s=r.start,a=r.end,o=s;o<=a;o++)e.push(o);return e}};function Ms(n){bs.call(this,n,"gpos")}Ms.prototype=bs.prototype;Ms.prototype.init=function(){var n=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(n)};Ms.prototype.getKerningValue=function(n,e,t){for(var i=0;i<n.length;i++)for(var r=n[i].subtables,s=0;s<r.length;s++){var a=r[s],o=this.getCoverageIndex(a.coverage,e);if(!(o<0))switch(a.posFormat){case 1:for(var l=a.pairSets[o],c=0;c<l.length;c++){var h=l[c];if(h.secondGlyph===t)return h.value1&&h.value1.xAdvance||0}break;case 2:var f=this.getGlyphClass(a.classDef1,e),u=this.getGlyphClass(a.classDef2,t),d=a.classRecords[f][u];return d.value1&&d.value1.xAdvance||0}}return 0};Ms.prototype.getKerningTables=function(n,e){if(this.font.tables.gpos)return this.getLookupTables(n,e,"kern",2)};function Zt(n){bs.call(this,n,"gsub")}function aS(n,e){var t=n.length;if(t!==e.length)return!1;for(var i=0;i<t;i++)if(n[i]!==e[i])return!1;return!0}function Zc(n,e,t){for(var i=n.subtables,r=0;r<i.length;r++){var s=i[r];if(s.substFormat===e)return s}if(t)return i.push(t),t}Zt.prototype=bs.prototype;Zt.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};Zt.prototype.getSingle=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,1),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),h=void 0;if(l.substFormat===1){var f=l.deltaGlyphId;for(h=0;h<c.length;h++){var u=c[h];i.push({sub:u,by:u+f})}}else{var d=l.substitute;for(h=0;h<c.length;h++)i.push({sub:c[h],by:d[h]})}}return i};Zt.prototype.getMultiple=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,2),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++){var l=a[o],c=this.expandCoverage(l.coverage),h=void 0;for(h=0;h<c.length;h++){var f=c[h],u=l.sequences[h];i.push({sub:f,by:u})}}return i};Zt.prototype.getAlternates=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,3),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),h=l.alternateSets,f=0;f<c.length;f++)i.push({sub:c[f],by:h[f]});return i};Zt.prototype.getLigatures=function(n,e,t){for(var i=[],r=this.getLookupTables(e,t,n,4),s=0;s<r.length;s++)for(var a=r[s].subtables,o=0;o<a.length;o++)for(var l=a[o],c=this.expandCoverage(l.coverage),h=l.ligatureSets,f=0;f<c.length;f++)for(var u=c[f],d=h[f],g=0;g<d.length;g++){var v=d[g];i.push({sub:[u].concat(v.components),by:v.ligGlyph})}return i};Zt.prototype.addSingle=function(n,e,t,i){var r=this.getLookupTables(t,i,n,1,!0)[0],s=Zc(r,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Be.assert(s.coverage.format===1,"Single: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.substitute.splice(o,0,0)),s.substitute[o]=e.by};Zt.prototype.addMultiple=function(n,e,t,i){Be.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var r=this.getLookupTables(t,i,n,2,!0)[0],s=Zc(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Be.assert(s.coverage.format===1,"Multiple: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.sequences.splice(o,0,0)),s.sequences[o]=e.by};Zt.prototype.addAlternate=function(n,e,t,i){var r=this.getLookupTables(t,i,n,3,!0)[0],s=Zc(r,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Be.assert(s.coverage.format===1,"Alternate: unable to modify coverage table format "+s.coverage.format);var a=e.sub,o=this.binSearch(s.coverage.glyphs,a);o<0&&(o=-1-o,s.coverage.glyphs.splice(o,0,a),s.alternateSets.splice(o,0,0)),s.alternateSets[o]=e.by};Zt.prototype.addLigature=function(n,e,t,i){var r=this.getLookupTables(t,i,n,4,!0)[0],s=r.subtables[0];s||(s={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},r.subtables[0]=s),Be.assert(s.coverage.format===1,"Ligature: unable to modify coverage table format "+s.coverage.format);var a=e.sub[0],o=e.sub.slice(1),l={ligGlyph:e.by,components:o},c=this.binSearch(s.coverage.glyphs,a);if(c>=0){for(var h=s.ligatureSets[c],f=0;f<h.length;f++)if(aS(h[f].components,o))return;h.push(l)}else c=-1-c,s.coverage.glyphs.splice(c,0,a),s.ligatureSets.splice(c,0,[l])};Zt.prototype.getFeature=function(n,e,t){if(/ss\d\d/.test(n))return this.getSingle(n,e,t);switch(n){case"aalt":case"salt":return this.getSingle(n,e,t).concat(this.getAlternates(n,e,t));case"dlig":case"liga":case"rlig":return this.getLigatures(n,e,t);case"ccmp":return this.getMultiple(n,e,t).concat(this.getLigatures(n,e,t));case"stch":return this.getMultiple(n,e,t)}};Zt.prototype.add=function(n,e,t,i){if(/ss\d\d/.test(n))return this.addSingle(n,e,t,i);switch(n){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(n,e,t,i):this.addAlternate(n,e,t,i);case"dlig":case"liga":case"rlig":return this.addLigature(n,e,t,i);case"ccmp":return e.by instanceof Array?this.addMultiple(n,e,t,i):this.addLigature(n,e,t,i)}};function oS(){return typeof window!="undefined"}function lS(n){for(var e=new Buffer(n.byteLength),t=new Uint8Array(n),i=0;i<e.length;++i)e[i]=t[i];return e}function gs(n,e){if(!n)throw e}function pf(n,e,t,i,r){var s;return(e&i)>0?(s=n.parseByte(),(e&r)===0&&(s=-s),s=t+s):(e&r)>0?s=t:s=t+n.parseShort(),s}function pd(n,e,t){var i=new Re.Parser(e,t);n.numberOfContours=i.parseShort(),n._xMin=i.parseShort(),n._yMin=i.parseShort(),n._xMax=i.parseShort(),n._yMax=i.parseShort();var r,s;if(n.numberOfContours>0){for(var a=n.endPointIndices=[],o=0;o<n.numberOfContours;o+=1)a.push(i.parseUShort());n.instructionLength=i.parseUShort(),n.instructions=[];for(var l=0;l<n.instructionLength;l+=1)n.instructions.push(i.parseByte());var c=a[a.length-1]+1;r=[];for(var h=0;h<c;h+=1)if(s=i.parseByte(),r.push(s),(s&8)>0)for(var f=i.parseByte(),u=0;u<f;u+=1)r.push(s),h+=1;if(Be.argument(r.length===c,"Bad flags."),a.length>0){var d=[],g;if(c>0){for(var v=0;v<c;v+=1)s=r[v],g={},g.onCurve=!!(s&1),g.lastPointOfContour=a.indexOf(v)>=0,d.push(g);for(var m=0,p=0;p<c;p+=1)s=r[p],g=d[p],g.x=pf(i,s,m,2,16),m=g.x;for(var S=0,x=0;x<c;x+=1)s=r[x],g=d[x],g.y=pf(i,s,S,4,32),S=g.y}n.points=d}else n.points=[]}else if(n.numberOfContours===0)n.points=[];else{n.isComposite=!0,n.points=[],n.components=[];for(var y=!0;y;){r=i.parseUShort();var C={glyphIndex:i.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(r&1)>0?(r&2)>0?(C.dx=i.parseShort(),C.dy=i.parseShort()):C.matchedPoints=[i.parseUShort(),i.parseUShort()]:(r&2)>0?(C.dx=i.parseChar(),C.dy=i.parseChar()):C.matchedPoints=[i.parseByte(),i.parseByte()],(r&8)>0?C.xScale=C.yScale=i.parseF2Dot14():(r&64)>0?(C.xScale=i.parseF2Dot14(),C.yScale=i.parseF2Dot14()):(r&128)>0&&(C.xScale=i.parseF2Dot14(),C.scale01=i.parseF2Dot14(),C.scale10=i.parseF2Dot14(),C.yScale=i.parseF2Dot14()),n.components.push(C),y=!!(r&32)}if(r&256){n.instructionLength=i.parseUShort(),n.instructions=[];for(var w=0;w<n.instructionLength;w+=1)n.instructions.push(i.parseByte())}}}function Ec(n,e){for(var t=[],i=0;i<n.length;i+=1){var r=n[i],s={x:e.xScale*r.x+e.scale01*r.y+e.dx,y:e.scale10*r.x+e.yScale*r.y+e.dy,onCurve:r.onCurve,lastPointOfContour:r.lastPointOfContour};t.push(s)}return t}function cS(n){for(var e=[],t=[],i=0;i<n.length;i+=1){var r=n[i];t.push(r),r.lastPointOfContour&&(e.push(t),t=[])}return Be.argument(t.length===0,"There are still points left in the current contour."),e}function md(n){var e=new Tt;if(!n)return e;for(var t=cS(n),i=0;i<t.length;++i){var r=t[i],s=null,a=r[r.length-1],o=r[0];if(a.onCurve)e.moveTo(a.x,a.y);else if(o.onCurve)e.moveTo(o.x,o.y);else{var l={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5};e.moveTo(l.x,l.y)}for(var c=0;c<r.length;++c)if(s=a,a=o,o=r[(c+1)%r.length],a.onCurve)e.lineTo(a.x,a.y);else{var h=s,f=o;s.onCurve||(h={x:(a.x+s.x)*.5,y:(a.y+s.y)*.5}),o.onCurve||(f={x:(a.x+o.x)*.5,y:(a.y+o.y)*.5}),e.quadraticCurveTo(a.x,a.y,f.x,f.y)}e.closePath()}return e}function gd(n,e){if(e.isComposite)for(var t=0;t<e.components.length;t+=1){var i=e.components[t],r=n.get(i.glyphIndex);if(r.getPath(),r.points){var s=void 0;if(i.matchedPoints===void 0)s=Ec(r.points,i);else{if(i.matchedPoints[0]>e.points.length-1||i.matchedPoints[1]>r.points.length-1)throw Error("Matched points out of range in "+e.name);var a=e.points[i.matchedPoints[0]],o=r.points[i.matchedPoints[1]],l={xScale:i.xScale,scale01:i.scale01,scale10:i.scale10,yScale:i.yScale,dx:0,dy:0};o=Ec([o],l)[0],l.dx=a.x-o.x,l.dy=a.y-o.y,s=Ec(r.points,l)}e.points=e.points.concat(s)}}return md(e.points)}function hS(n,e,t,i){for(var r=new In.GlyphSet(i),s=0;s<t.length-1;s+=1){var a=t[s],o=t[s+1];a!==o?r.push(s,In.ttfGlyphLoader(i,s,pd,n,e+a,gd)):r.push(s,In.glyphLoader(i,s))}return r}function uS(n,e,t,i){var r=new In.GlyphSet(i);return i._push=function(s){var a=t[s],o=t[s+1];a!==o?r.push(s,In.ttfGlyphLoader(i,s,pd,n,e+a,gd)):r.push(s,In.glyphLoader(i,s))},r}function fS(n,e,t,i,r){return r.lowMemory?uS(n,e,t,i):hS(n,e,t,i)}var vd={getPath:md,parse:fS},xd,qi,yd,zc;function _d(n){this.font=n,this.getCommands=function(e){return vd.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function dS(n){return n}function Sd(n){return Math.sign(n)*Math.round(Math.abs(n))}function pS(n){return Math.sign(n)*Math.round(Math.abs(n*2))/2}function mS(n){return Math.sign(n)*(Math.round(Math.abs(n)+.5)-.5)}function gS(n){return Math.sign(n)*Math.ceil(Math.abs(n))}function vS(n){return Math.sign(n)*Math.floor(Math.abs(n))}var bd=function(n){var e=this.srPeriod,t=this.srPhase,i=this.srThreshold,r=1;return n<0&&(n=-n,r=-1),n+=i-t,n=Math.trunc(n/e)*e,n+=t,n<0?t*r:n*r},Rn={x:1,y:0,axis:"x",distance:function(n,e,t,i){return(t?n.xo:n.x)-(i?e.xo:e.x)},interpolate:function(n,e,t,i){var r,s,a,o,l,c,h;if(!i||i===this){if(r=n.xo-e.xo,s=n.xo-t.xo,l=e.x-e.xo,c=t.x-t.xo,a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){n.x=n.xo+(l+c)/2;return}n.x=n.xo+(l*o+c*a)/h;return}if(r=i.distance(n,e,!0,!0),s=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){Rn.setRelative(n,n,(l+c)/2,i,!0);return}Rn.setRelative(n,n,(l*o+c*a)/h,i,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(n,e,t,i,r){if(!i||i===this){n.x=(r?e.xo:e.x)+t;return}var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y;n.x=o+(n.y-l)/i.normalSlope},slope:0,touch:function(n){n.xTouched=!0},touched:function(n){return n.xTouched},untouch:function(n){n.xTouched=!1}},$n={x:0,y:1,axis:"y",distance:function(n,e,t,i){return(t?n.yo:n.y)-(i?e.yo:e.y)},interpolate:function(n,e,t,i){var r,s,a,o,l,c,h;if(!i||i===this){if(r=n.yo-e.yo,s=n.yo-t.yo,l=e.y-e.yo,c=t.y-t.yo,a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){n.y=n.yo+(l+c)/2;return}n.y=n.yo+(l*o+c*a)/h;return}if(r=i.distance(n,e,!0,!0),s=i.distance(n,t,!0,!0),l=i.distance(e,e,!1,!0),c=i.distance(t,t,!1,!0),a=Math.abs(r),o=Math.abs(s),h=a+o,h===0){$n.setRelative(n,n,(l+c)/2,i,!0);return}$n.setRelative(n,n,(l*o+c*a)/h,i,!0)},normalSlope:0,setRelative:function(n,e,t,i,r){if(!i||i===this){n.y=(r?e.yo:e.y)+t;return}var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y;n.y=l+i.normalSlope*(n.x-o)},slope:Number.POSITIVE_INFINITY,touch:function(n){n.yTouched=!0},touched:function(n){return n.yTouched},untouch:function(n){n.yTouched=!1}};Object.freeze(Rn);Object.freeze($n);function ws(n,e){this.x=n,this.y=e,this.axis=void 0,this.slope=e/n,this.normalSlope=-n/e,Object.freeze(this)}ws.prototype.distance=function(n,e,t,i){return this.x*Rn.distance(n,e,t,i)+this.y*$n.distance(n,e,t,i)};ws.prototype.interpolate=function(n,e,t,i){var r,s,a,o,l,c,h;if(a=i.distance(n,e,!0,!0),o=i.distance(n,t,!0,!0),r=i.distance(e,e,!1,!0),s=i.distance(t,t,!1,!0),l=Math.abs(a),c=Math.abs(o),h=l+c,h===0){this.setRelative(n,n,(r+s)/2,i,!0);return}this.setRelative(n,n,(r*c+s*l)/h,i,!0)};ws.prototype.setRelative=function(n,e,t,i,r){i=i||this;var s=r?e.xo:e.x,a=r?e.yo:e.y,o=s+t*i.x,l=a+t*i.y,c=i.normalSlope,h=this.slope,f=n.x,u=n.y;n.x=(h*f-c*o+l-u)/(h-c),n.y=h*(n.x-f)+u};ws.prototype.touch=function(n){n.xTouched=!0,n.yTouched=!0};function Ts(n,e){var t=Math.sqrt(n*n+e*e);return n/=t,e/=t,n===1&&e===0?Rn:n===0&&e===1?$n:new ws(n,e)}function Kn(n,e,t,i){this.x=this.xo=Math.round(n*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=t,this.onCurve=i,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Kn.prototype.nextTouched=function(n){for(var e=this.nextPointOnContour;!n.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Kn.prototype.prevTouched=function(n){for(var e=this.prevPointOnContour;!n.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Ss=Object.freeze(new Kn(0,0)),xS={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function vi(n,e){switch(this.env=n,this.stack=[],this.prog=e,n){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=Rn,this.round=Sd}}_d.prototype.exec=function(n,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var t=this.font,i=this._prepState;if(!i||i.ppem!==e){var r=this._fpgmState;if(!r){vi.prototype=xS,r=this._fpgmState=new vi("fpgm",t.tables.fpgm),r.funcs=[],r.font=t,exports.DEBUG&&(console.log("---EXEC FPGM---"),r.step=-1);try{qi(r)}catch(c){console.log("Hinting error in FPGM:"+c),this._errorState=3;return}}vi.prototype=r,i=this._prepState=new vi("prep",t.tables.prep),i.ppem=e;var s=t.tables.cvt;if(s)for(var a=i.cvt=new Array(s.length),o=e/t.unitsPerEm,l=0;l<s.length;l++)a[l]=s[l]*o;else i.cvt=[];exports.DEBUG&&(console.log("---EXEC PREP---"),i.step=-1);try{qi(i)}catch(c){this._errorState<2&&console.log("Hinting error in PREP:"+c),this._errorState=2}}if(!(this._errorState>1))try{return yd(n,i)}catch(c){this._errorState<1&&(console.log("Hinting error:"+c),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};yd=function(n,e){var t=e.ppem/e.font.unitsPerEm,i=t,r=n.components,s,a,o;if(vi.prototype=e,!r)o=new vi("glyf",n.instructions),exports.DEBUG&&(console.log("---EXEC GLYPH---"),o.step=-1),zc(n,o,t,i),a=o.gZone;else{var l=e.font;a=[],s=[];for(var c=0;c<r.length;c++){var h=r[c],f=l.glyphs.get(h.glyphIndex);o=new vi("glyf",f.instructions),exports.DEBUG&&(console.log("---EXEC COMP "+c+"---"),o.step=-1),zc(f,o,t,i);for(var u=Math.round(h.dx*t),d=Math.round(h.dy*i),g=o.gZone,v=o.contours,m=0;m<g.length;m++){var p=g[m];p.xTouched=p.yTouched=!1,p.xo=p.x=p.x+u,p.yo=p.y=p.y+d}var S=a.length;a.push.apply(a,g);for(var x=0;x<v.length;x++)s.push(v[x]+S)}n.instructions&&!o.inhibitGridFit&&(o=new vi("glyf",n.instructions),o.gZone=o.z0=o.z1=o.z2=a,o.contours=s,a.push(new Kn(0,0),new Kn(Math.round(n.advanceWidth*t),0)),exports.DEBUG&&(console.log("---EXEC COMPOSITE---"),o.step=-1),qi(o),a.length-=2)}return a};zc=function(n,e,t,i){for(var r=n.points||[],s=r.length,a=e.gZone=e.z0=e.z1=e.z2=[],o=e.contours=[],l,c=0;c<s;c++)l=r[c],a[c]=new Kn(l.x*t,l.y*i,l.lastPointOfContour,l.onCurve);for(var h,f,u=0;u<s;u++)l=a[u],h||(h=l,o.push(u)),l.lastPointOfContour?(l.nextPointOnContour=h,h.prevPointOnContour=l,h=void 0):(f=a[u+1],l.nextPointOnContour=f,f.prevPointOnContour=l);if(!e.inhibitGridFit){if(exports.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var d=0;d<s;d++)console.log(d,a[d].x,a[d].y)}if(a.push(new Kn(0,0),new Kn(Math.round(n.advanceWidth*t),0)),qi(e),a.length-=2,exports.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var g=0;g<s;g++)console.log(g,a[g].x,a[g].y)}}};qi=function(n){var e=n.prog;if(e){var t=e.length,i;for(n.ip=0;n.ip<t;n.ip++){if(exports.DEBUG&&n.step++,i=xd[e[n.ip]],!i)throw new Error("unknown instruction: 0x"+Number(e[n.ip]).toString(16));i(n)}}};function ja(n){for(var e=n.tZone=new Array(n.gZone.length),t=0;t<e.length;t++)e[t]=new Kn(0,0)}function Md(n,e){var t=n.prog,i=n.ip,r=1,s;do if(s=t[++i],s===88)r++;else if(s===89)r--;else if(s===64)i+=t[i+1]+1;else if(s===65)i+=2*t[i+1]+1;else if(s>=176&&s<=183)i+=s-176+1;else if(s>=184&&s<=191)i+=(s-184+1)*2;else if(e&&r===1&&s===27)break;while(r>0);n.ip=i}function mf(n,e){exports.DEBUG&&console.log(e.step,"SVTCA["+n.axis+"]"),e.fv=e.pv=e.dpv=n}function gf(n,e){exports.DEBUG&&console.log(e.step,"SPVTCA["+n.axis+"]"),e.pv=e.dpv=n}function vf(n,e){exports.DEBUG&&console.log(e.step,"SFVTCA["+n.axis+"]"),e.fv=n}function xf(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];exports.DEBUG&&console.log("SPVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.pv=e.dpv=Ts(o,l)}function yf(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];exports.DEBUG&&console.log("SFVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.fv=Ts(o,l)}function yS(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.pv=n.dpv=Ts(i,t)}function _S(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SPVFS[]",t,i),n.fv=Ts(i,t)}function SS(n){var e=n.stack,t=n.pv;exports.DEBUG&&console.log(n.step,"GPV[]"),e.push(t.x*16384),e.push(t.y*16384)}function bS(n){var e=n.stack,t=n.fv;exports.DEBUG&&console.log(n.step,"GFV[]"),e.push(t.x*16384),e.push(t.y*16384)}function MS(n){n.fv=n.pv,exports.DEBUG&&console.log(n.step,"SFVTPV[]")}function wS(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop(),s=e.pop(),a=e.pop(),o=n.z0,l=n.z1,c=o[t],h=o[i],f=l[r],u=l[s],d=n.z2[a];exports.DEBUG&&console.log("ISECT[], ",t,i,r,s,a);var g=c.x,v=c.y,m=h.x,p=h.y,S=f.x,x=f.y,y=u.x,C=u.y,w=(g-m)*(x-C)-(v-p)*(S-y),E=g*p-v*m,T=S*C-x*y;d.x=(E*(S-y)-T*(g-m))/w,d.y=(E*(x-C)-T*(v-p))/w}function TS(n){n.rp0=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SRP0[]",n.rp0)}function ES(n){n.rp1=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SRP1[]",n.rp1)}function AS(n){n.rp2=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SRP2[]",n.rp2)}function CS(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZP0[]",e),n.zp0=e,e){case 0:n.tZone||ja(n),n.z0=n.tZone;break;case 1:n.z0=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function RS(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZP1[]",e),n.zp1=e,e){case 0:n.tZone||ja(n),n.z1=n.tZone;break;case 1:n.z1=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function IS(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZP2[]",e),n.zp2=e,e){case 0:n.tZone||ja(n),n.z2=n.tZone;break;case 1:n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function PS(n){var e=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"SZPS[]",e),n.zp0=n.zp1=n.zp2=e,e){case 0:n.tZone||ja(n),n.z0=n.z1=n.z2=n.tZone;break;case 1:n.z0=n.z1=n.z2=n.gZone;break;default:throw new Error("Invalid zone pointer")}}function US(n){n.loop=n.stack.pop(),exports.DEBUG&&console.log(n.step,"SLOOP[]",n.loop)}function LS(n){exports.DEBUG&&console.log(n.step,"RTG[]"),n.round=Sd}function DS(n){exports.DEBUG&&console.log(n.step,"RTHG[]"),n.round=mS}function FS(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SMD[]",e),n.minDis=e/64}function NS(n){exports.DEBUG&&console.log(n.step,"ELSE[]"),Md(n,!1)}function OS(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"JMPR[]",e),n.ip+=e-1}function kS(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SCVTCI[]",e),n.cvCutIn=e/64}function BS(n){var e=n.stack;exports.DEBUG&&console.log(n.step,"DUP[]"),e.push(e[e.length-1])}function Ac(n){exports.DEBUG&&console.log(n.step,"POP[]"),n.stack.pop()}function zS(n){exports.DEBUG&&console.log(n.step,"CLEAR[]"),n.stack.length=0}function GS(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SWAP[]"),e.push(t),e.push(i)}function HS(n){var e=n.stack;exports.DEBUG&&console.log(n.step,"DEPTH[]"),e.push(e.length)}function VS(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"LOOPCALL[]",t,i);var r=n.ip,s=n.prog;n.prog=n.funcs[t];for(var a=0;a<i;a++)qi(n),exports.DEBUG&&console.log(++n.step,a+1<i?"next loopcall":"done loopcall",a);n.ip=r,n.prog=s}function WS(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"CALL[]",e);var t=n.ip,i=n.prog;n.prog=n.funcs[e],qi(n),n.ip=t,n.prog=i,exports.DEBUG&&console.log(++n.step,"returning from",e)}function XS(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"CINDEX[]",t),e.push(e[e.length-t])}function qS(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"MINDEX[]",t),e.push(e.splice(e.length-t,1)[0])}function YS(n){if(n.env!=="fpgm")throw new Error("FDEF not allowed here");var e=n.stack,t=n.prog,i=n.ip,r=e.pop(),s=i;for(exports.DEBUG&&console.log(n.step,"FDEF[]",r);t[++i]!==45;);n.ip=i,n.funcs[r]=t.slice(s+1,i)}function _f(n,e){var t=e.stack.pop(),i=e.z0[t],r=e.fv,s=e.pv;exports.DEBUG&&console.log(e.step,"MDAP["+n+"]",t);var a=s.distance(i,Ss);n&&(a=e.round(a)),r.setRelative(i,Ss,a,s),r.touch(i),e.rp0=e.rp1=t}function Sf(n,e){var t=e.z2,i=t.length-2,r,s,a;exports.DEBUG&&console.log(e.step,"IUP["+n.axis+"]");for(var o=0;o<i;o++)r=t[o],!n.touched(r)&&(s=r.prevTouched(n),s!==r&&(a=r.nextTouched(n),s===a&&n.setRelative(r,r,n.distance(s,s,!1,!0),n,!0),n.interpolate(r,s,a,n)))}function bf(n,e){for(var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=e.loop,l=e.z2;o--;){var c=t.pop(),h=l[c],f=a.distance(r,r,!1,!0);s.setRelative(h,h,f,a),s.touch(h),exports.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-o)+": ":"")+"SHP["+(n?"rp1":"rp2")+"]",c)}e.loop=1}function Mf(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=t.pop(),l=e.z2[e.contours[o]],c=l;exports.DEBUG&&console.log(e.step,"SHC["+n+"]",o);var h=a.distance(r,r,!1,!0);do c!==r&&s.setRelative(c,c,h,a),c=c.nextPointOnContour;while(c!==l)}function wf(n,e){var t=e.stack,i=n?e.rp1:e.rp2,r=(n?e.z0:e.z1)[i],s=e.fv,a=e.pv,o=t.pop();exports.DEBUG&&console.log(e.step,"SHZ["+n+"]",o);var l;switch(o){case 0:l=e.tZone;break;case 1:l=e.gZone;break;default:throw new Error("Invalid zone")}for(var c,h=a.distance(r,r,!1,!0),f=l.length-2,u=0;u<f;u++)c=l[u],s.setRelative(c,c,h,a)}function ZS(n){for(var e=n.stack,t=n.loop,i=n.fv,r=e.pop()/64,s=n.z2;t--;){var a=e.pop(),o=s[a];exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-t)+": ":"")+"SHPIX[]",a,r),i.setRelative(o,o,r),i.touch(o)}n.loop=1}function JS(n){for(var e=n.stack,t=n.rp1,i=n.rp2,r=n.loop,s=n.z0[t],a=n.z1[i],o=n.fv,l=n.dpv,c=n.z2;r--;){var h=e.pop(),f=c[h];exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"IP[]",h,t,"<->",i),o.interpolate(f,s,a,l),o.touch(f)}n.loop=1}function Tf(n,e){var t=e.stack,i=t.pop()/64,r=t.pop(),s=e.z1[r],a=e.z0[e.rp0],o=e.fv,l=e.pv;o.setRelative(s,a,i,l),o.touch(s),exports.DEBUG&&console.log(e.step,"MSIRP["+n+"]",i,r),e.rp1=e.rp0,e.rp2=r,n&&(e.rp0=r)}function $S(n){for(var e=n.stack,t=n.rp0,i=n.z0[t],r=n.loop,s=n.fv,a=n.pv,o=n.z1;r--;){var l=e.pop(),c=o[l];exports.DEBUG&&console.log(n.step,(n.loop>1?"loop "+(n.loop-r)+": ":"")+"ALIGNRP[]",l),s.setRelative(c,i,0,a),s.touch(c)}n.loop=1}function KS(n){exports.DEBUG&&console.log(n.step,"RTDG[]"),n.round=pS}function Ef(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z0[r],a=e.fv,o=e.pv,l=e.cvt[i];exports.DEBUG&&console.log(e.step,"MIAP["+n+"]",i,"(",l,")",r);var c=o.distance(s,Ss);n&&(Math.abs(c-l)<e.cvCutIn&&(c=l),c=e.round(c)),a.setRelative(s,Ss,c,o),e.zp0===0&&(s.xo=s.x,s.yo=s.y),a.touch(s),e.rp0=e.rp1=r}function QS(n){var e=n.prog,t=n.ip,i=n.stack,r=e[++t];exports.DEBUG&&console.log(n.step,"NPUSHB[]",r);for(var s=0;s<r;s++)i.push(e[++t]);n.ip=t}function jS(n){var e=n.ip,t=n.prog,i=n.stack,r=t[++e];exports.DEBUG&&console.log(n.step,"NPUSHW[]",r);for(var s=0;s<r;s++){var a=t[++e]<<8|t[++e];a&32768&&(a=-((a^65535)+1)),i.push(a)}n.ip=e}function e1(n){var e=n.stack,t=n.store;t||(t=n.store=[]);var i=e.pop(),r=e.pop();exports.DEBUG&&console.log(n.step,"WS",i,r),t[r]=i}function t1(n){var e=n.stack,t=n.store,i=e.pop();exports.DEBUG&&console.log(n.step,"RS",i);var r=t&&t[i]||0;e.push(r)}function n1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"WCVTP",t,i),n.cvt[i]=t/64}function i1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"RCVT",t),e.push(n.cvt[t]*64)}function Af(n,e){var t=e.stack,i=t.pop(),r=e.z2[i];exports.DEBUG&&console.log(e.step,"GC["+n+"]",i),t.push(e.dpv.distance(r,Ss,n,!1)*64)}function Cf(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z1[i],a=e.z0[r],o=e.dpv.distance(a,s,n,n);exports.DEBUG&&console.log(e.step,"MD["+n+"]",i,r,"->",o),e.stack.push(Math.round(o*64))}function r1(n){exports.DEBUG&&console.log(n.step,"MPPEM[]"),n.stack.push(n.ppem)}function s1(n){exports.DEBUG&&console.log(n.step,"FLIPON[]"),n.autoFlip=!0}function a1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"LT[]",t,i),e.push(i<t?1:0)}function o1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"LTEQ[]",t,i),e.push(i<=t?1:0)}function l1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"GT[]",t,i),e.push(i>t?1:0)}function c1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"GTEQ[]",t,i),e.push(i>=t?1:0)}function h1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"EQ[]",t,i),e.push(t===i?1:0)}function u1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"NEQ[]",t,i),e.push(t!==i?1:0)}function f1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"ODD[]",t),e.push(Math.trunc(t)%2?1:0)}function d1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"EVEN[]",t),e.push(Math.trunc(t)%2?0:1)}function p1(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"IF[]",e),e||(Md(n,!0),exports.DEBUG&&console.log(n.step,"EIF[]"))}function m1(n){exports.DEBUG&&console.log(n.step,"EIF[]")}function g1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"AND[]",t,i),e.push(t&&i?1:0)}function v1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"OR[]",t,i),e.push(t||i?1:0)}function x1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"NOT[]",t),e.push(t?0:1)}function Cc(n,e){var t=e.stack,i=t.pop(),r=e.fv,s=e.pv,a=e.ppem,o=e.deltaBase+(n-1)*16,l=e.deltaShift,c=e.z0;exports.DEBUG&&console.log(e.step,"DELTAP["+n+"]",i,t);for(var h=0;h<i;h++){var f=t.pop(),u=t.pop(),d=o+((u&240)>>4);if(d===a){var g=(u&15)-8;g>=0&&g++,exports.DEBUG&&console.log(e.step,"DELTAPFIX",f,"by",g*l);var v=c[f];r.setRelative(v,v,g*l,s)}}}function y1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"SDB[]",t),n.deltaBase=t}function _1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"SDS[]",t),n.deltaShift=Math.pow(.5,t)}function S1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"ADD[]",t,i),e.push(i+t)}function b1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"SUB[]",t,i),e.push(i-t)}function M1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"DIV[]",t,i),e.push(i*64/t)}function w1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"MUL[]",t,i),e.push(i*t/64)}function T1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"ABS[]",t),e.push(Math.abs(t))}function E1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"NEG[]",t),e.push(-t)}function A1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"FLOOR[]",t),e.push(Math.floor(t/64)*64)}function C1(n){var e=n.stack,t=e.pop();exports.DEBUG&&console.log(n.step,"CEILING[]",t),e.push(Math.ceil(t/64)*64)}function Wa(n,e){var t=e.stack,i=t.pop();exports.DEBUG&&console.log(e.step,"ROUND[]"),t.push(e.round(i/64)*64)}function R1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"WCVTF[]",t,i),n.cvt[i]=t*n.ppem/n.font.unitsPerEm}function Rc(n,e){var t=e.stack,i=t.pop(),r=e.ppem,s=e.deltaBase+(n-1)*16,a=e.deltaShift;exports.DEBUG&&console.log(e.step,"DELTAC["+n+"]",i,t);for(var o=0;o<i;o++){var l=t.pop(),c=t.pop(),h=s+((c&240)>>4);if(h===r){var f=(c&15)-8;f>=0&&f++;var u=f*a;exports.DEBUG&&console.log(e.step,"DELTACFIX",l,"by",u),e.cvt[l]+=u}}}function I1(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SROUND[]",e),n.round=bd;var t;switch(e&192){case 0:t=.5;break;case 64:t=1;break;case 128:t=2;break;default:throw new Error("invalid SROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function P1(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"S45ROUND[]",e),n.round=bd;var t;switch(e&192){case 0:t=Math.sqrt(2)/2;break;case 64:t=Math.sqrt(2);break;case 128:t=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(n.srPeriod=t,e&48){case 0:n.srPhase=0;break;case 16:n.srPhase=.25*t;break;case 32:n.srPhase=.5*t;break;case 48:n.srPhase=.75*t;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?n.srThreshold=0:n.srThreshold=(e/8-.5)*t}function U1(n){exports.DEBUG&&console.log(n.step,"ROFF[]"),n.round=dS}function L1(n){exports.DEBUG&&console.log(n.step,"RUTG[]"),n.round=gS}function D1(n){exports.DEBUG&&console.log(n.step,"RDTG[]"),n.round=vS}function F1(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SCANCTRL[]",e)}function Rf(n,e){var t=e.stack,i=t.pop(),r=t.pop(),s=e.z2[i],a=e.z1[r];exports.DEBUG&&console.log(e.step,"SDPVTL["+n+"]",i,r);var o,l;n?(o=s.y-a.y,l=a.x-s.x):(o=a.x-s.x,l=a.y-s.y),e.dpv=Ts(o,l)}function N1(n){var e=n.stack,t=e.pop(),i=0;exports.DEBUG&&console.log(n.step,"GETINFO[]",t),t&1&&(i=35),t&32&&(i|=4096),e.push(i)}function O1(n){var e=n.stack,t=e.pop(),i=e.pop(),r=e.pop();exports.DEBUG&&console.log(n.step,"ROLL[]"),e.push(i),e.push(t),e.push(r)}function k1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"MAX[]",t,i),e.push(Math.max(i,t))}function B1(n){var e=n.stack,t=e.pop(),i=e.pop();exports.DEBUG&&console.log(n.step,"MIN[]",t,i),e.push(Math.min(i,t))}function z1(n){var e=n.stack.pop();exports.DEBUG&&console.log(n.step,"SCANTYPE[]",e)}function G1(n){var e=n.stack.pop(),t=n.stack.pop();switch(exports.DEBUG&&console.log(n.step,"INSTCTRL[]",e,t),e){case 1:n.inhibitGridFit=!!t;return;case 2:n.ignoreCvt=!!t;return;default:throw new Error("invalid INSTCTRL[] selector")}}function pi(n,e){var t=e.stack,i=e.prog,r=e.ip;exports.DEBUG&&console.log(e.step,"PUSHB["+n+"]");for(var s=0;s<n;s++)t.push(i[++r]);e.ip=r}function mi(n,e){var t=e.ip,i=e.prog,r=e.stack;exports.DEBUG&&console.log(e.ip,"PUSHW["+n+"]");for(var s=0;s<n;s++){var a=i[++t]<<8|i[++t];a&32768&&(a=-((a^65535)+1)),r.push(a)}e.ip=t}function Ee(n,e,t,i,r,s){var a=s.stack,o=n&&a.pop(),l=a.pop(),c=s.rp0,h=s.z0[c],f=s.z1[l],u=s.minDis,d=s.fv,g=s.dpv,v,m,p,S;m=v=g.distance(f,h,!0,!0),p=m>=0?1:-1,m=Math.abs(m),n&&(S=s.cvt[o],i&&Math.abs(m-S)<s.cvCutIn&&(m=S)),t&&m<u&&(m=u),i&&(m=s.round(m)),d.setRelative(f,h,p*m,g),d.touch(f),exports.DEBUG&&console.log(s.step,(n?"MIRP[":"MDRP[")+(e?"M":"m")+(t?">":"_")+(i?"R":"_")+(r===0?"Gr":r===1?"Bl":r===2?"Wh":"")+"]",n?o+"("+s.cvt[o]+","+S+")":"",l,"(d =",v,"->",p*m,")"),s.rp1=s.rp0,s.rp2=l,e&&(s.rp0=l)}xd=[mf.bind(void 0,$n),mf.bind(void 0,Rn),gf.bind(void 0,$n),gf.bind(void 0,Rn),vf.bind(void 0,$n),vf.bind(void 0,Rn),xf.bind(void 0,0),xf.bind(void 0,1),yf.bind(void 0,0),yf.bind(void 0,1),yS,_S,SS,bS,MS,wS,TS,ES,AS,CS,RS,IS,PS,US,LS,DS,FS,NS,OS,kS,void 0,void 0,BS,Ac,zS,GS,HS,XS,qS,void 0,void 0,void 0,VS,WS,YS,void 0,_f.bind(void 0,0),_f.bind(void 0,1),Sf.bind(void 0,$n),Sf.bind(void 0,Rn),bf.bind(void 0,0),bf.bind(void 0,1),Mf.bind(void 0,0),Mf.bind(void 0,1),wf.bind(void 0,0),wf.bind(void 0,1),ZS,JS,Tf.bind(void 0,0),Tf.bind(void 0,1),$S,KS,Ef.bind(void 0,0),Ef.bind(void 0,1),QS,jS,e1,t1,n1,i1,Af.bind(void 0,0),Af.bind(void 0,1),void 0,Cf.bind(void 0,0),Cf.bind(void 0,1),r1,void 0,s1,void 0,void 0,a1,o1,l1,c1,h1,u1,f1,d1,p1,m1,g1,v1,x1,Cc.bind(void 0,1),y1,_1,S1,b1,M1,w1,T1,E1,A1,C1,Wa.bind(void 0,0),Wa.bind(void 0,1),Wa.bind(void 0,2),Wa.bind(void 0,3),void 0,void 0,void 0,void 0,R1,Cc.bind(void 0,2),Cc.bind(void 0,3),Rc.bind(void 0,1),Rc.bind(void 0,2),Rc.bind(void 0,3),I1,P1,void 0,void 0,U1,void 0,L1,D1,Ac,Ac,void 0,void 0,void 0,void 0,void 0,F1,Rf.bind(void 0,0),Rf.bind(void 0,1),N1,void 0,O1,k1,B1,z1,G1,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,pi.bind(void 0,1),pi.bind(void 0,2),pi.bind(void 0,3),pi.bind(void 0,4),pi.bind(void 0,5),pi.bind(void 0,6),pi.bind(void 0,7),pi.bind(void 0,8),mi.bind(void 0,1),mi.bind(void 0,2),mi.bind(void 0,3),mi.bind(void 0,4),mi.bind(void 0,5),mi.bind(void 0,6),mi.bind(void 0,7),mi.bind(void 0,8),Ee.bind(void 0,0,0,0,0,0),Ee.bind(void 0,0,0,0,0,1),Ee.bind(void 0,0,0,0,0,2),Ee.bind(void 0,0,0,0,0,3),Ee.bind(void 0,0,0,0,1,0),Ee.bind(void 0,0,0,0,1,1),Ee.bind(void 0,0,0,0,1,2),Ee.bind(void 0,0,0,0,1,3),Ee.bind(void 0,0,0,1,0,0),Ee.bind(void 0,0,0,1,0,1),Ee.bind(void 0,0,0,1,0,2),Ee.bind(void 0,0,0,1,0,3),Ee.bind(void 0,0,0,1,1,0),Ee.bind(void 0,0,0,1,1,1),Ee.bind(void 0,0,0,1,1,2),Ee.bind(void 0,0,0,1,1,3),Ee.bind(void 0,0,1,0,0,0),Ee.bind(void 0,0,1,0,0,1),Ee.bind(void 0,0,1,0,0,2),Ee.bind(void 0,0,1,0,0,3),Ee.bind(void 0,0,1,0,1,0),Ee.bind(void 0,0,1,0,1,1),Ee.bind(void 0,0,1,0,1,2),Ee.bind(void 0,0,1,0,1,3),Ee.bind(void 0,0,1,1,0,0),Ee.bind(void 0,0,1,1,0,1),Ee.bind(void 0,0,1,1,0,2),Ee.bind(void 0,0,1,1,0,3),Ee.bind(void 0,0,1,1,1,0),Ee.bind(void 0,0,1,1,1,1),Ee.bind(void 0,0,1,1,1,2),Ee.bind(void 0,0,1,1,1,3),Ee.bind(void 0,1,0,0,0,0),Ee.bind(void 0,1,0,0,0,1),Ee.bind(void 0,1,0,0,0,2),Ee.bind(void 0,1,0,0,0,3),Ee.bind(void 0,1,0,0,1,0),Ee.bind(void 0,1,0,0,1,1),Ee.bind(void 0,1,0,0,1,2),Ee.bind(void 0,1,0,0,1,3),Ee.bind(void 0,1,0,1,0,0),Ee.bind(void 0,1,0,1,0,1),Ee.bind(void 0,1,0,1,0,2),Ee.bind(void 0,1,0,1,0,3),Ee.bind(void 0,1,0,1,1,0),Ee.bind(void 0,1,0,1,1,1),Ee.bind(void 0,1,0,1,1,2),Ee.bind(void 0,1,0,1,1,3),Ee.bind(void 0,1,1,0,0,0),Ee.bind(void 0,1,1,0,0,1),Ee.bind(void 0,1,1,0,0,2),Ee.bind(void 0,1,1,0,0,3),Ee.bind(void 0,1,1,0,1,0),Ee.bind(void 0,1,1,0,1,1),Ee.bind(void 0,1,1,0,1,2),Ee.bind(void 0,1,1,0,1,3),Ee.bind(void 0,1,1,1,0,0),Ee.bind(void 0,1,1,1,0,1),Ee.bind(void 0,1,1,1,0,2),Ee.bind(void 0,1,1,1,0,3),Ee.bind(void 0,1,1,1,1,0),Ee.bind(void 0,1,1,1,1,1),Ee.bind(void 0,1,1,1,1,2),Ee.bind(void 0,1,1,1,1,3)];function Gr(n){this.char=n,this.state={},this.activeState=null}function Jc(n,e,t){this.contextName=t,this.startIndex=n,this.endOffset=e}function H1(n,e,t){this.contextName=n,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=t}function dn(n,e){this.context=n,this.index=e,this.length=n.length,this.current=n[e],this.backtrack=n.slice(0,e),this.lookahead=n.slice(e+1)}function eo(n){this.eventId=n,this.subscribers=[]}function V1(n){var e=this,t=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];t.forEach(function(r){Object.defineProperty(e.events,r,{value:new eo(r)})}),n&&t.forEach(function(r){var s=n[r];typeof s=="function"&&e.events[r].subscribe(s)});var i=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];i.forEach(function(r){e.events[r].subscribe(e.updateContextsRanges)})}function xt(n){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],V1.call(this,n)}Gr.prototype.setState=function(n,e){return this.state[n]=e,this.activeState={key:n,value:this.state[n]},this.activeState};Gr.prototype.getState=function(n){return this.state[n]||null};xt.prototype.inboundIndex=function(n){return n>=0&&n<this.tokens.length};xt.prototype.composeRUD=function(n){var e=this,t=!0,i=n.map(function(s){return e[s[0]].apply(e,s.slice(1).concat(t))}),r=function(s){return typeof s=="object"&&s.hasOwnProperty("FAIL")};if(i.every(r))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:i.filter(r)};this.dispatch("composeRUD",[i.filter(function(s){return!r(s)})])};xt.prototype.replaceRange=function(n,e,t,i){e=e!==null?e:this.tokens.length;var r=t.every(function(a){return a instanceof Gr});if(!isNaN(n)&&this.inboundIndex(n)&&r){var s=this.tokens.splice.apply(this.tokens,[n,e].concat(t));return i||this.dispatch("replaceToken",[n,e,t]),[s,t]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};xt.prototype.replaceToken=function(n,e,t){if(!isNaN(n)&&this.inboundIndex(n)&&e instanceof Gr){var i=this.tokens.splice(n,1,e);return t||this.dispatch("replaceToken",[n,e]),[i[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};xt.prototype.removeRange=function(n,e,t){e=isNaN(e)?this.tokens.length:e;var i=this.tokens.splice(n,e);return t||this.dispatch("removeRange",[i,n,e]),i};xt.prototype.removeToken=function(n,e){if(!isNaN(n)&&this.inboundIndex(n)){var t=this.tokens.splice(n,1);return e||this.dispatch("removeToken",[t,n]),t}else return{FAIL:"removeToken: invalid token index."}};xt.prototype.insertToken=function(n,e,t){var i=n.every(function(r){return r instanceof Gr});return i?(this.tokens.splice.apply(this.tokens,[e,0].concat(n)),t||this.dispatch("insertToken",[n,e]),n):{FAIL:"insertToken: invalid token(s)."}};xt.prototype.registerModifier=function(n,e,t){this.events.newToken.subscribe(function(i,r){var s=[i,r],a=e===null||e.apply(this,s)===!0,o=[i,r];if(a){var l=t.apply(this,o);i.setState(n,l)}}),this.registeredModifiers.push(n)};eo.prototype.subscribe=function(n){return typeof n=="function"?this.subscribers.push(n)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};eo.prototype.unsubscribe=function(n){this.subscribers.splice(n,1)};dn.prototype.setCurrentIndex=function(n){this.index=n,this.current=this.context[n],this.backtrack=this.context.slice(0,n),this.lookahead=this.context.slice(n+1)};dn.prototype.get=function(n){switch(!0){case n===0:return this.current;case(n<0&&Math.abs(n)<=this.backtrack.length):return this.backtrack.slice(n)[0];case(n>0&&n<=this.lookahead.length):return this.lookahead[n-1];default:return null}};xt.prototype.rangeToText=function(n){if(n instanceof Jc)return this.getRangeTokens(n).map(function(e){return e.char}).join("")};xt.prototype.getText=function(){return this.tokens.map(function(n){return n.char}).join("")};xt.prototype.getContext=function(n){var e=this.registeredContexts[n];return e||null};xt.prototype.on=function(n,e){var t=this.events[n];return t?t.subscribe(e):null};xt.prototype.dispatch=function(n,e){var t=this,i=this.events[n];i instanceof eo&&i.subscribers.forEach(function(r){r.apply(t,e||[])})};xt.prototype.registerContextChecker=function(n,e,t){if(this.getContext(n))return{FAIL:"context name '"+n+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof t!="function")return{FAIL:"missing context end check."};var i=new H1(n,e,t);return this.registeredContexts[n]=i,this.contextCheckers.push(i),i};xt.prototype.getRangeTokens=function(n){var e=n.startIndex+n.endOffset;return[].concat(this.tokens.slice(n.startIndex,e))};xt.prototype.getContextRanges=function(n){var e=this.getContext(n);return e?e.ranges:{FAIL:"context checker '"+n+"' is not registered."}};xt.prototype.resetContextsRanges=function(){var n=this.registeredContexts;for(var e in n)if(n.hasOwnProperty(e)){var t=n[e];t.ranges=[]}};xt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var n=this.tokens.map(function(i){return i.char}),e=0;e<n.length;e++){var t=new dn(n,e);this.runContextCheck(t)}this.dispatch("updateContextsRanges",[this.registeredContexts])};xt.prototype.setEndOffset=function(n,e){var t=this.getContext(e).openRange.startIndex,i=new Jc(t,n,e),r=this.getContext(e).ranges;return i.rangeId=e+"."+r.length,r.push(i),this.getContext(e).openRange=null,i};xt.prototype.runContextCheck=function(n){var e=this,t=n.index;this.contextCheckers.forEach(function(i){var r=i.contextName,s=e.getContext(r).openRange;if(!s&&i.checkStart(n)&&(s=new Jc(t,null,r),e.getContext(r).openRange=s,e.dispatch("contextStart",[r,t])),s&&i.checkEnd(n)){var a=t-s.startIndex+1,o=e.setEndOffset(a,r);e.dispatch("contextEnd",[r,o])}})};xt.prototype.tokenize=function(n){this.tokens=[],this.resetContextsRanges();var e=Array.from(n);this.dispatch("start");for(var t=0;t<e.length;t++){var i=e[t],r=new dn(e,t);this.dispatch("next",[r]),this.runContextCheck(r);var s=new Gr(i);this.tokens.push(s),this.dispatch("newToken",[s,r])}return this.dispatch("end",[this.tokens]),this.tokens};function xi(n){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(n)}function wd(n){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(n)}function yi(n){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(n)}function qa(n){return/[A-z]/.test(n)}function W1(n){return/\s/.test(n)}function Jt(n){this.font=n,this.features={}}function Xi(n){this.id=n.id,this.tag=n.tag,this.substitution=n.substitution}function Es(n,e){if(!n)return-1;switch(e.format){case 1:return e.glyphs.indexOf(n);case 2:for(var t=e.ranges,i=0;i<t.length;i++){var r=t[i];if(n>=r.start&&n<=r.end){var s=n-r.start;return r.index+s}}break;default:return-1}return-1}function X1(n,e){var t=Es(n,e.coverage);return t===-1?null:n+e.deltaGlyphId}function q1(n,e){var t=Es(n,e.coverage);return t===-1?null:e.substitute[t]}function Ic(n,e){for(var t=[],i=0;i<n.length;i++){var r=n[i],s=e.current;s=Array.isArray(s)?s[0]:s;var a=Es(s,r);a!==-1&&t.push(a)}return t.length!==n.length?-1:t}function Y1(n,e){var t=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(n.context.length<t)return[];var i=Ic(e.inputCoverage,n);if(i===-1)return[];var r=e.inputCoverage.length-1;if(n.lookahead.length<e.lookaheadCoverage.length)return[];for(var s=n.lookahead.slice(r);s.length&&yi(s[0].char);)s.shift();var a=new dn(s,0),o=Ic(e.lookaheadCoverage,a),l=[].concat(n.backtrack);for(l.reverse();l.length&&yi(l[0].char);)l.shift();if(l.length<e.backtrackCoverage.length)return[];var c=new dn(l,0),h=Ic(e.backtrackCoverage,c),f=i.length===e.inputCoverage.length&&o.length===e.lookaheadCoverage.length&&h.length===e.backtrackCoverage.length,u=[];if(f)for(var d=0;d<e.lookupRecords.length;d++)for(var g=e.lookupRecords[d],v=g.lookupListIndex,m=this.getLookupByIndex(v),p=0;p<m.subtables.length;p++){var S=m.subtables[p],x=this.getLookupMethod(m,S),y=this.getSubstitutionType(m,S);if(y==="12")for(var C=0;C<i.length;C++){var w=n.get(C),E=x(w);E&&u.push(E)}}return u}function Z1(n,e){var t=n.current,i=Es(t,e.coverage);if(i===-1)return null;for(var r,s=e.ligatureSets[i],a=0;a<s.length;a++){r=s[a];for(var o=0;o<r.components.length;o++){var l=n.lookahead[o],c=r.components[o];if(l!==c)break;if(o===r.components.length-1)return r}}return null}function J1(n,e){var t=Es(n,e.coverage);return t===-1?null:e.sequences[t]}Jt.prototype.getDefaultScriptFeaturesIndexes=function(){for(var n=this.font.tables.gsub.scripts,e=0;e<n.length;e++){var t=n[e];if(t.tag==="DFLT")return t.script.defaultLangSys.featureIndexes}return[]};Jt.prototype.getScriptFeaturesIndexes=function(n){var e=this.font.tables;if(!e.gsub)return[];if(!n)return this.getDefaultScriptFeaturesIndexes();for(var t=this.font.tables.gsub.scripts,i=0;i<t.length;i++){var r=t[i];if(r.tag===n&&r.script.defaultLangSys)return r.script.defaultLangSys.featureIndexes;var s=r.langSysRecords;if(s)for(var a=0;a<s.length;a++){var o=s[a];if(o.tag===n){var l=o.langSys;return l.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};Jt.prototype.mapTagsToFeatures=function(n,e){for(var t={},i=0;i<n.length;i++){var r=n[i].tag,s=n[i].feature;t[r]=s}this.features[e].tags=t};Jt.prototype.getScriptFeatures=function(n){var e=this.features[n];if(this.features.hasOwnProperty(n))return e;var t=this.getScriptFeaturesIndexes(n);if(!t)return null;var i=this.font.tables.gsub;return e=t.map(function(r){return i.features[r]}),this.features[n]=e,this.mapTagsToFeatures(e,n),e};Jt.prototype.getSubstitutionType=function(n,e){var t=n.lookupType.toString(),i=e.substFormat.toString();return t+i};Jt.prototype.getLookupMethod=function(n,e){var t=this,i=this.getSubstitutionType(n,e);switch(i){case"11":return function(r){return X1.apply(t,[r,e])};case"12":return function(r){return q1.apply(t,[r,e])};case"63":return function(r){return Y1.apply(t,[r,e])};case"41":return function(r){return Z1.apply(t,[r,e])};case"21":return function(r){return J1.apply(t,[r,e])};default:throw new Error("lookupType: "+n.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};Jt.prototype.lookupFeature=function(n){var e=n.contextParams,t=e.index,i=this.getFeature({tag:n.tag,script:n.script});if(!i)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+n.tag+"' for script '"+n.script+"'.");for(var r=this.getFeatureLookups(i),s=[].concat(e.context),a=0;a<r.length;a++)for(var o=r[a],l=this.getLookupSubtables(o),c=0;c<l.length;c++){var h=l[c],f=this.getSubstitutionType(o,h),u=this.getLookupMethod(o,h),d=void 0;switch(f){case"11":d=u(e.current),d&&s.splice(t,1,new Xi({id:11,tag:n.tag,substitution:d}));break;case"12":d=u(e.current),d&&s.splice(t,1,new Xi({id:12,tag:n.tag,substitution:d}));break;case"63":d=u(e),Array.isArray(d)&&d.length&&s.splice(t,1,new Xi({id:63,tag:n.tag,substitution:d}));break;case"41":d=u(e),d&&s.splice(t,1,new Xi({id:41,tag:n.tag,substitution:d}));break;case"21":d=u(e.current),d&&s.splice(t,1,new Xi({id:21,tag:n.tag,substitution:d}));break}e=new dn(s,t),!(Array.isArray(d)&&!d.length)&&(d=null)}return s.length?s:null};Jt.prototype.supports=function(n){if(!n.script)return!1;this.getScriptFeatures(n.script);var e=this.features.hasOwnProperty(n.script);if(!n.tag)return e;var t=this.features[n.script].some(function(i){return i.tag===n.tag});return e&&t};Jt.prototype.getLookupSubtables=function(n){return n.subtables||null};Jt.prototype.getLookupByIndex=function(n){var e=this.font.tables.gsub.lookups;return e[n]||null};Jt.prototype.getFeatureLookups=function(n){return n.lookupListIndexes.map(this.getLookupByIndex.bind(this))};Jt.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var t=this.features[e.script];return t?t.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function $1(n){var e=n.current,t=n.get(-1);return t===null&&xi(e)||!xi(t)&&xi(e)}function K1(n){var e=n.get(1);return e===null||!xi(e)}var Q1={startCheck:$1,endCheck:K1};function j1(n){var e=n.current,t=n.get(-1);return(xi(e)||yi(e))&&!xi(t)}function eb(n){var e=n.get(1);switch(!0){case e===null:return!0;case(!xi(e)&&!yi(e)):var t=W1(e);if(!t)return!0;if(t){var i=!1;if(i=n.lookahead.some(function(r){return xi(r)||yi(r)}),!i)return!0}break;default:return!1}}var tb={startCheck:j1,endCheck:eb};function nb(n,e,t){e[t].setState(n.tag,n.substitution)}function ib(n,e,t){e[t].setState(n.tag,n.substitution)}function rb(n,e,t){n.substitution.forEach(function(i,r){var s=e[t+r];s.setState(n.tag,i)})}function sb(n,e,t){var i=e[t];i.setState(n.tag,n.substitution.ligGlyph);for(var r=n.substitution.components.length,s=0;s<r;s++)i=e[t+s+1],i.setState("deleted",!0)}var If={11:nb,12:ib,63:rb,41:sb};function $c(n,e,t){n instanceof Xi&&If[n.id]&&If[n.id](n,e,t)}function ab(n){for(var e=[].concat(n.backtrack),t=e.length-1;t>=0;t--){var i=e[t],r=wd(i),s=yi(i);if(!r&&!s)return!0;if(r)return!1}return!1}function ob(n){if(wd(n.current))return!1;for(var e=0;e<n.lookahead.length;e++){var t=n.lookahead[e],i=yi(t);if(!i)return!0}return!1}function lb(n){var e=this,t="arab",i=this.featuresTags[t],r=this.tokenizer.getRangeTokens(n);if(r.length!==1){var s=new dn(r.map(function(o){return o.getState("glyphIndex")}),0),a=new dn(r.map(function(o){return o.char}),0);r.forEach(function(o,l){if(!yi(o.char)){s.setCurrentIndex(l),a.setCurrentIndex(l);var c=0;ab(a)&&(c|=1),ob(a)&&(c|=2);var h;switch(c){case 1:h="fina";break;case 2:h="init";break;case 3:h="medi";break}if(i.indexOf(h)!==-1){var f=e.query.lookupFeature({tag:h,script:t,contextParams:s});if(f instanceof Error)return console.info(f.message);f.forEach(function(u,d){u instanceof Xi&&($c(u,r,d),s.context[d]=u.substitution)})}}})}}function Pf(n,e){var t=n.map(function(i){return i.activeState.value});return new dn(t,e||0)}function cb(n){var e=this,t="arab",i=this.tokenizer.getRangeTokens(n),r=Pf(i);r.context.forEach(function(s,a){r.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"rlig",script:t,contextParams:r});o.length&&(o.forEach(function(l){return $c(l,i,a)}),r=Pf(i))})}function hb(n){var e=n.current,t=n.get(-1);return t===null&&qa(e)||!qa(t)&&qa(e)}function ub(n){var e=n.get(1);return e===null||!qa(e)}var fb={startCheck:hb,endCheck:ub};function Uf(n,e){var t=n.map(function(i){return i.activeState.value});return new dn(t,e||0)}function db(n){var e=this,t="latn",i=this.tokenizer.getRangeTokens(n),r=Uf(i);r.context.forEach(function(s,a){r.setCurrentIndex(a);var o=e.query.lookupFeature({tag:"liga",script:t,contextParams:r});o.length&&(o.forEach(function(l){return $c(l,i,a)}),r=Uf(i))})}function gn(n){this.baseDir=n||"ltr",this.tokenizer=new xt,this.featuresTags={}}gn.prototype.setText=function(n){this.text=n};gn.prototype.contextChecks={latinWordCheck:fb,arabicWordCheck:Q1,arabicSentenceCheck:tb};function Pc(n){var e=this.contextChecks[n+"Check"];return this.tokenizer.registerContextChecker(n,e.startCheck,e.endCheck)}function pb(){return Pc.call(this,"latinWord"),Pc.call(this,"arabicWord"),Pc.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function mb(){var n=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(t){var i=n.tokenizer.getRangeTokens(t);n.tokenizer.replaceRange(t.startIndex,t.endOffset,i.reverse())})}gn.prototype.registerFeatures=function(n,e){var t=this,i=e.filter(function(r){return t.query.supports({script:n,tag:r})});this.featuresTags.hasOwnProperty(n)?this.featuresTags[n]=this.featuresTags[n].concat(i):this.featuresTags[n]=i};gn.prototype.applyFeatures=function(n,e){if(!n)throw new Error("No valid font was provided to apply features");this.query||(this.query=new Jt(n));for(var t=0;t<e.length;t++){var i=e[t];this.query.supports({script:i.script})&&this.registerFeatures(i.script,i.tags)}};gn.prototype.registerModifier=function(n,e,t){this.tokenizer.registerModifier(n,e,t)};function Kc(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function gb(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){Kc.call(this);var t=this.tokenizer.getContextRanges("arabicWord");t.forEach(function(i){lb.call(n,i)})}}function vb(){var n=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("rlig")!==-1){Kc.call(this);var i=this.tokenizer.getContextRanges("arabicWord");i.forEach(function(r){cb.call(n,r)})}}}function xb(){var n=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var t=this.featuresTags[e];if(t.indexOf("liga")!==-1){Kc.call(this);var i=this.tokenizer.getContextRanges("latinWord");i.forEach(function(r){db.call(n,r)})}}}gn.prototype.checkContextReady=function(n){return!!this.tokenizer.getContext(n)};gn.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(gb.call(this),vb.call(this)),this.checkContextReady("latinWord")&&xb.call(this),this.checkContextReady("arabicSentence")&&mb.call(this)};gn.prototype.processText=function(n){(!this.text||this.text!==n)&&(this.setText(n),pb.call(this),this.applyFeaturesToContexts())};gn.prototype.getBidiText=function(n){return this.processText(n),this.tokenizer.getText()};gn.prototype.getTextGlyphs=function(n){this.processText(n);for(var e=[],t=0;t<this.tokenizer.tokens.length;t++){var i=this.tokenizer.tokens[t];if(!i.state.deleted){var r=i.activeState.value;e.push(Array.isArray(r)?r[0]:r)}}return e};function ct(n){n=n||{},n.tables=n.tables||{},n.empty||(gs(n.familyName,"When creating a new Font object, familyName is required."),gs(n.styleName,"When creating a new Font object, styleName is required."),gs(n.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),gs(n.ascender,"When creating a new Font object, ascender is required."),gs(n.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:n.familyName||" "},fontSubfamily:{en:n.styleName||" "},fullName:{en:n.fullName||n.familyName+" "+n.styleName},postScriptName:{en:n.postScriptName||(n.familyName+n.styleName).replace(/\s/g,"")},designer:{en:n.designer||" "},designerURL:{en:n.designerURL||" "},manufacturer:{en:n.manufacturer||" "},manufacturerURL:{en:n.manufacturerURL||" "},license:{en:n.license||" "},licenseURL:{en:n.licenseURL||" "},version:{en:n.version||"Version 0.1"},description:{en:n.description||" "},copyright:{en:n.copyright||" "},trademark:{en:n.trademark||" "}},this.unitsPerEm=n.unitsPerEm||1e3,this.ascender=n.ascender,this.descender=n.descender,this.createdTimestamp=n.createdTimestamp,this.tables=Object.assign(n.tables,{os2:Object.assign({usWeightClass:n.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:n.widthClass||this.usWidthClasses.MEDIUM,fsSelection:n.fsSelection||this.fsSelectionValues.REGULAR},n.tables.os2)})),this.supported=!0,this.glyphs=new In.GlyphSet(this,n.glyphs||[]),this.encoding=new Vf(this),this.position=new Ms(this),this.substitution=new Zt(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new _d(this)}})}ct.prototype.hasChar=function(n){return this.encoding.charToGlyphIndex(n)!==null};ct.prototype.charToGlyphIndex=function(n){return this.encoding.charToGlyphIndex(n)};ct.prototype.charToGlyph=function(n){var e=this.charToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};ct.prototype.updateFeatures=function(n){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(t){return n[t]})}:e})};ct.prototype.stringToGlyphs=function(n,e){var t=this,i=new gn,r=function(f){return t.charToGlyphIndex(f.char)};i.registerModifier("glyphIndex",null,r);var s=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;i.applyFeatures(this,s);for(var a=i.getTextGlyphs(n),o=a.length,l=new Array(o),c=this.glyphs.get(0),h=0;h<o;h+=1)l[h]=this.glyphs.get(a[h])||c;return l};ct.prototype.nameToGlyphIndex=function(n){return this.glyphNames.nameToGlyphIndex(n)};ct.prototype.nameToGlyph=function(n){var e=this.nameToGlyphIndex(n),t=this.glyphs.get(e);return t||(t=this.glyphs.get(0)),t};ct.prototype.glyphIndexToName=function(n){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(n):""};ct.prototype.getKerningValue=function(n,e){n=n.index||n,e=e.index||e;var t=this.position.defaultKerningTables;return t?this.position.getKerningValue(t,n,e):this.kerningPairs[n+","+e]||0};ct.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};ct.prototype.forEachGlyph=function(n,e,t,i,r,s){e=e!==void 0?e:0,t=t!==void 0?t:0,i=i!==void 0?i:72,r=Object.assign({},this.defaultRenderOptions,r);var a=1/this.unitsPerEm*i,o=this.stringToGlyphs(n,r),l;if(r.kerning){var c=r.script||this.position.getDefaultScriptName();l=this.position.getKerningTables(c,r.language)}for(var h=0;h<o.length;h+=1){var f=o[h];if(s.call(this,f,e,t,i,r),f.advanceWidth&&(e+=f.advanceWidth*a),r.kerning&&h<o.length-1){var u=l?this.position.getKerningValue(l,f.index,o[h+1].index):this.getKerningValue(f,o[h+1]);e+=u*a}r.letterSpacing?e+=r.letterSpacing*i:r.tracking&&(e+=r.tracking/1e3*i)}return e};ct.prototype.getPath=function(n,e,t,i,r){var s=new Tt;return this.forEachGlyph(n,e,t,i,r,function(a,o,l,c){var h=a.getPath(o,l,c,r,this);s.extend(h)}),s};ct.prototype.getPaths=function(n,e,t,i,r){var s=[];return this.forEachGlyph(n,e,t,i,r,function(a,o,l,c){var h=a.getPath(o,l,c,r,this);s.push(h)}),s};ct.prototype.getAdvanceWidth=function(n,e,t){return this.forEachGlyph(n,0,0,e,t,function(){})};ct.prototype.draw=function(n,e,t,i,r,s){this.getPath(e,t,i,r,s).draw(n)};ct.prototype.drawPoints=function(n,e,t,i,r,s){this.forEachGlyph(e,t,i,r,s,function(a,o,l,c){a.drawPoints(n,o,l,c)})};ct.prototype.drawMetrics=function(n,e,t,i,r,s){this.forEachGlyph(e,t,i,r,s,function(a,o,l,c){a.drawMetrics(n,o,l,c)})};ct.prototype.getEnglishName=function(n){var e=this.names[n];if(e)return e.en};ct.prototype.validate=function(){var n=this;function e(i,r){}function t(i){var r=n.getEnglishName(i);r&&r.trim().length>0}t("fontFamily"),t("weightName"),t("manufacturer"),t("copyright"),t("version"),this.unitsPerEm>0};ct.prototype.toTables=function(){return sS.fontToTable(this)};ct.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};ct.prototype.toArrayBuffer=function(){for(var n=this.toTables(),e=n.encode(),t=new ArrayBuffer(e.length),i=new Uint8Array(t),r=0;r<e.length;r++)i[r]=e[r];return t};ct.prototype.download=function(n){var e=this.getEnglishName("fontFamily"),t=this.getEnglishName("fontSubfamily");n=n||e.replace(/\s/g,"")+"-"+t+".otf";var i=this.toArrayBuffer();if(oS())if(window.URL=window.URL||window.webkitURL,window.URL){var r=new DataView(i),s=new Blob([r],{type:"font/opentype"}),a=document.createElement("a");a.href=window.URL.createObjectURL(s),a.download=n;var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!1),a.dispatchEvent(o)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var l=Yu(),c=lS(i);l.writeFileSync(n,c)}};ct.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};ct.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};ct.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function Td(n,e){var t=JSON.stringify(n),i=256;for(var r in e){var s=parseInt(r);if(!(!s||s<256)){if(JSON.stringify(e[r])===t)return s;i<=s&&(i=s+1)}}return e[i]=n,i}function yb(n,e,t){var i=Td(e.name,t);return[{name:"tag_"+n,type:"TAG",value:e.tag},{name:"minValue_"+n,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+n,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+n,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+n,type:"USHORT",value:0},{name:"nameID_"+n,type:"USHORT",value:i}]}function _b(n,e,t){var i={},r=new Re.Parser(n,e);return i.tag=r.parseTag(),i.minValue=r.parseFixed(),i.defaultValue=r.parseFixed(),i.maxValue=r.parseFixed(),r.skip("uShort",1),i.name=t[r.parseUShort()]||{},i}function Sb(n,e,t,i){for(var r=Td(e.name,i),s=[{name:"nameID_"+n,type:"USHORT",value:r},{name:"flags_"+n,type:"USHORT",value:0}],a=0;a<t.length;++a){var o=t[a].tag;s.push({name:"axis_"+n+" "+o,type:"FIXED",value:e.coordinates[o]<<16})}return s}function bb(n,e,t,i){var r={},s=new Re.Parser(n,e);r.name=i[s.parseUShort()]||{},s.skip("uShort",1),r.coordinates={};for(var a=0;a<t.length;++a)r.coordinates[t[a].tag]=s.parseFixed();return r}function Mb(n,e){var t=new we.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:n.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:n.instances.length},{name:"instanceSize",type:"USHORT",value:4+n.axes.length*4}]);t.offsetToData=t.sizeOf();for(var i=0;i<n.axes.length;i++)t.fields=t.fields.concat(yb(i,n.axes[i],e));for(var r=0;r<n.instances.length;r++)t.fields=t.fields.concat(Sb(r,n.instances[r],n.axes,e));return t}function wb(n,e,t){var i=new Re.Parser(n,e),r=i.parseULong();Be.argument(r===65536,"Unsupported fvar table version.");var s=i.parseOffset16();i.skip("uShort",1);for(var a=i.parseUShort(),o=i.parseUShort(),l=i.parseUShort(),c=i.parseUShort(),h=[],f=0;f<a;f++)h.push(_b(n,e+s+f*o,t));for(var u=[],d=e+s+a*o,g=0;g<l;g++)u.push(bb(n,d+g*c,h,t));return{axes:h,instances:u}}var Tb={make:Mb,parse:wb},Eb=function(){return{coverage:this.parsePointer(V.coverage),attachPoints:this.parseList(V.pointer(V.uShortList))}},Ab=function(){var n=this.parseUShort();if(Be.argument(n===1||n===2||n===3,"Unsupported CaretValue table version."),n===1)return{coordinate:this.parseShort()};if(n===2)return{pointindex:this.parseShort()};if(n===3)return{coordinate:this.parseShort()}},Cb=function(){return this.parseList(V.pointer(Ab))},Rb=function(){return{coverage:this.parsePointer(V.coverage),ligGlyphs:this.parseList(V.pointer(Cb))}},Ib=function(){return this.parseUShort(),this.parseList(V.pointer(V.coverage))};function Pb(n,e){e=e||0;var t=new V(n,e),i=t.parseVersion(1);Be.argument(i===1||i===1.2||i===1.3,"Unsupported GDEF table version.");var r={version:i,classDef:t.parsePointer(V.classDef),attachList:t.parsePointer(Eb),ligCaretList:t.parsePointer(Rb),markAttachClassDef:t.parsePointer(V.classDef)};return i>=1.2&&(r.markGlyphSets=t.parsePointer(Ib)),r}var Ub={parse:Pb},pn=new Array(10);pn[1]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();if(t===1)return{posFormat:1,coverage:this.parsePointer(V.coverage),value:this.parseValueRecord()};if(t===2)return{posFormat:2,coverage:this.parsePointer(V.coverage),values:this.parseValueRecordList()};Be.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};pn[2]=function(){var e=this.offset+this.relativeOffset,t=this.parseUShort();Be.assert(t===1||t===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var i=this.parsePointer(V.coverage),r=this.parseUShort(),s=this.parseUShort();if(t===1)return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:s,pairSets:this.parseList(V.pointer(V.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(r),value2:this.parseValueRecord(s)}})))};if(t===2){var a=this.parsePointer(V.classDef),o=this.parsePointer(V.classDef),l=this.parseUShort(),c=this.parseUShort();return{posFormat:t,coverage:i,valueFormat1:r,valueFormat2:s,classDef1:a,classDef2:o,class1Count:l,class2Count:c,classRecords:this.parseList(l,V.list(c,function(){return{value1:this.parseValueRecord(r),value2:this.parseValueRecord(s)}}))}}};pn[3]=function(){return{error:"GPOS Lookup 3 not supported"}};pn[4]=function(){return{error:"GPOS Lookup 4 not supported"}};pn[5]=function(){return{error:"GPOS Lookup 5 not supported"}};pn[6]=function(){return{error:"GPOS Lookup 6 not supported"}};pn[7]=function(){return{error:"GPOS Lookup 7 not supported"}};pn[8]=function(){return{error:"GPOS Lookup 8 not supported"}};pn[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function Lb(n,e){e=e||0;var t=new V(n,e),i=t.parseVersion(1);return Be.argument(i===1||i===1.1,"Unsupported GPOS table version "+i),i===1?{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(pn)}:{version:i,scripts:t.parseScriptList(),features:t.parseFeatureList(),lookups:t.parseLookupList(pn),variations:t.parseFeatureVariationsList()}}var Db=new Array(10);function Fb(n){return new we.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new we.ScriptList(n.scripts)},{name:"features",type:"TABLE",value:new we.FeatureList(n.features)},{name:"lookups",type:"TABLE",value:new we.LookupList(n.lookups,Db)}])}var Nb={parse:Lb,make:Fb};function Ob(n){var e={};n.skip("uShort");var t=n.parseUShort();Be.argument(t===0,"Unsupported kern sub-table version."),n.skip("uShort",2);var i=n.parseUShort();n.skip("uShort",3);for(var r=0;r<i;r+=1){var s=n.parseUShort(),a=n.parseUShort(),o=n.parseShort();e[s+","+a]=o}return e}function kb(n){var e={};n.skip("uShort");var t=n.parseULong();t>1&&console.warn("Only the first kern subtable is supported."),n.skip("uLong");var i=n.parseUShort(),r=i&255;if(n.skip("uShort"),r===0){var s=n.parseUShort();n.skip("uShort",3);for(var a=0;a<s;a+=1){var o=n.parseUShort(),l=n.parseUShort(),c=n.parseShort();e[o+","+l]=c}}return e}function Bb(n,e){var t=new Re.Parser(n,e),i=t.parseUShort();if(i===0)return Ob(t);if(i===1)return kb(t);throw new Error("Unsupported kern table version ("+i+").")}var zb={parse:Bb};function Gb(n,e,t,i){for(var r=new Re.Parser(n,e),s=i?r.parseUShort:r.parseULong,a=[],o=0;o<t+1;o+=1){var l=s.call(r);i&&(l*=2),a.push(l)}return a}var Hb={parse:Gb};function Lf(n,e){for(var t=[],i=12,r=0;r<e;r+=1){var s=Re.getTag(n,i),a=Re.getULong(n,i+4),o=Re.getULong(n,i+8),l=Re.getULong(n,i+12);t.push({tag:s,checksum:a,offset:o,length:l,compression:!1}),i+=16}return t}function Vb(n,e){for(var t=[],i=44,r=0;r<e;r+=1){var s=Re.getTag(n,i),a=Re.getULong(n,i+4),o=Re.getULong(n,i+8),l=Re.getULong(n,i+12),c=void 0;o<l?c="WOFF":c=!1,t.push({tag:s,offset:a,compression:c,compressedLength:o,length:l}),i+=20}return t}function yt(n,e){if(e.compression==="WOFF"){var t=new Uint8Array(n.buffer,e.offset+2,e.compressedLength-2),i=new Uint8Array(e.length);if(Ny(t,i),i.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var r=new DataView(i.buffer,0);return{data:r,offset:0}}else return{data:n,offset:e.offset}}function Ed(n,e){e=e==null?{}:e;var t,i,r=new ct({empty:!0}),s=new DataView(n,0),a,o=[],l=Re.getTag(s,0);if(l==="\0\0\0"||l==="true"||l==="typ1")r.outlinesFormat="truetype",a=Re.getUShort(s,4),o=Lf(s,a);else if(l==="OTTO")r.outlinesFormat="cff",a=Re.getUShort(s,4),o=Lf(s,a);else if(l==="wOFF"){var c=Re.getTag(s,4);if(c==="\0\0\0")r.outlinesFormat="truetype";else if(c==="OTTO")r.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+l);a=Re.getUShort(s,12),o=Vb(s,a)}else throw new Error("Unsupported OpenType signature "+l);for(var h,f,u,d,g,v,m,p,S,x,y,C,w=0;w<a;w+=1){var E=o[w],T=void 0;switch(E.tag){case"cmap":T=yt(s,E),r.tables.cmap=Hf.parse(T.data,T.offset),r.encoding=new Wf(r.tables.cmap);break;case"cvt ":T=yt(s,E),C=new Re.Parser(T.data,T.offset),r.tables.cvt=C.parseShortList(E.length/2);break;case"fvar":f=E;break;case"fpgm":T=yt(s,E),C=new Re.Parser(T.data,T.offset),r.tables.fpgm=C.parseByteList(E.length);break;case"head":T=yt(s,E),r.tables.head=ed.parse(T.data,T.offset),r.unitsPerEm=r.tables.head.unitsPerEm,t=r.tables.head.indexToLocFormat;break;case"hhea":T=yt(s,E),r.tables.hhea=td.parse(T.data,T.offset),r.ascender=r.tables.hhea.ascender,r.descender=r.tables.hhea.descender,r.numberOfHMetrics=r.tables.hhea.numberOfHMetrics;break;case"hmtx":m=E;break;case"ltag":T=yt(s,E),i=id.parse(T.data,T.offset);break;case"maxp":T=yt(s,E),r.tables.maxp=rd.parse(T.data,T.offset),r.numGlyphs=r.tables.maxp.numGlyphs;break;case"name":x=E;break;case"OS/2":T=yt(s,E),r.tables.os2=Bc.parse(T.data,T.offset);break;case"post":T=yt(s,E),r.tables.post=hd.parse(T.data,T.offset),r.glyphNames=new Xc(r.tables.post);break;case"prep":T=yt(s,E),C=new Re.Parser(T.data,T.offset),r.tables.prep=C.parseByteList(E.length);break;case"glyf":u=E;break;case"loca":S=E;break;case"CFF ":h=E;break;case"kern":p=E;break;case"GDEF":d=E;break;case"GPOS":g=E;break;case"GSUB":v=E;break;case"meta":y=E;break}}var b=yt(s,x);if(r.tables.name=cd.parse(b.data,b.offset,i),r.names=r.tables.name,u&&S){var _=t===0,I=yt(s,S),k=Hb.parse(I.data,I.offset,r.numGlyphs,_),D=yt(s,u);r.glyphs=vd.parse(D.data,D.offset,k,r,e)}else if(h){var L=yt(s,h);jf.parse(L.data,L.offset,r,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var G=yt(s,m);if(nd.parse(r,G.data,G.offset,r.numberOfHMetrics,r.numGlyphs,r.glyphs,e),i_(r,e),p){var z=yt(s,p);r.kerningPairs=zb.parse(z.data,z.offset)}else r.kerningPairs={};if(d){var Z=yt(s,d);r.tables.gdef=Ub.parse(Z.data,Z.offset)}if(g){var N=yt(s,g);r.tables.gpos=Nb.parse(N.data,N.offset),r.position.init()}if(v){var K=yt(s,v);r.tables.gsub=ud.parse(K.data,K.offset)}if(f){var ie=yt(s,f);r.tables.fvar=Tb.parse(ie.data,ie.offset,r.names)}if(y){var Q=yt(s,y);r.tables.meta=fd.parse(Q.data,Q.offset),r.metas=r.tables.meta}return r}var As=-8.7,Xb=1.45,qb=13,to=-9.4,ht={w:1536,h:1024,ppc:98.5},Ad={l:[[377,76],[345,112],[295,151],[246,181],[197,205],[148,225],[98,246],[49,268],[0,286],[-49,304],[-98,318],[-197,338],[-295,345],[-394,351],[-492,381]],r:[[1198,99],[1231,149],[1280,187],[1329,218],[1378,245],[1428,268],[1477,289],[1526,307],[1575,322],[1625,337],[1723,359],[1822,374],[1920,387],[2028,425]]},Cs={ppc:27,x:817,y:288,rot:-40.4,scale:.84},Yb=[[898,0],[875,40],[856,80],[839,120],[821,161],[799,201],[770,241],[736,281],[700,321],[662,361],[843,361],[855,341],[884,301],[916,261],[951,221],[986,181],[1050,134],[1050,0]],Yi={ppc:50,x:493,y:247,rot:-60,scale:1,head:1.25},nn={x:0,y:(ht.h/2-689)/ht.ppc},Cd={gold:{color:15976826,roughness:.22,envMapIntensity:1.5},rhodium:{color:16777215,roughness:.2,envMapIntensity:3.2}};function Rd(n){return/gold/i.test(n||"")?"gold":/rhodium|silver/i.test(n||"")?"rhodium":"gold"}function Rs(n){return(n||"").replace(/[^ -~ -ÿ]/g,"").replace(/\s+/g," ").trim()}var eh=(n,e,t)=>{let i=Dr.clamp((t-n)/(e-n),0,1);return i*i*(3-2*i)};function Id(n,e){let t=[];for(let i=0;i<n.length;i++){let r=n[i],s=n[(i+1)%n.length],a=Math.max(1,Math.ceil(r.distanceTo(s)/e));for(let o=0;o<a;o++)t.push(new re().lerpVectors(r,s,o/a))}return t}function Qc(n,e,t){let i=new Da;for(let r of n.commands)switch(r.type){case"M":i.moveTo(r.x,-r.y);break;case"L":i.lineTo(r.x,-r.y);break;case"Q":i.quadraticCurveTo(r.x1,-r.y1,r.x,-r.y);break;case"C":i.bezierCurveTo(r.x1,-r.y1,r.x2,-r.y2,r.x,-r.y);break;default:break}return i.toShapes(!!t).map(r=>{let s=new Qt(Id(r.getPoints(10),e));return s.holes=r.holes.map(a=>new di(Id(a.getPoints(10),e))),s})}function Zb(n,e){let i=document.createElement("canvas");i.width=512,i.height=512;let r=i.getContext("2d"),s=r.createImageData(512,512);for(let o=0;o<512;o++)for(let l=0;l<512;l++){let c=(Math.random()-.5)*64,h=Math.sin(l*.021+Math.sin(o*.013)*3)*15+Math.sin(o*.017+Math.sin(l*.011)*2.5)*15,f=Dr.clamp(128+c+h,0,255),u=(o*512+l)*4;s.data[u]=s.data[u+1]=s.data[u+2]=f,s.data[u+3]=255}r.putImageData(s,0,0);let a=new Yn(i);return a.wrapS=a.wrapT=br,a.repeat.set(n,e),a.anisotropy=8,a}function ih(n,e){return new Yt({color:394759,roughness:1,metalness:0,bumpMap:Zb(n,e),bumpScale:.4,sheen:.6,sheenColor:new Xe(5592415),sheenRoughness:.4,envMapIntensity:.25})}function Od(){return new Yt({color:657931,roughness:.3,metalness:.15,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:.9})}function kd(n){let e=new Se(new fi(60,60),new Ir({opacity:.16}));return e.rotation.x=-Math.PI/2,e.position.y=n,e.receiveShadow=!0,e}var Bd=[[0,6.5],[2.9,6.3],[4,5.4],[4.2,2.5],[4.3,-.5],[4.5,-2.8],[5.3,-4.2],[7.6,-5],[10.8,-6],[13.2,-7.6],[14.4,-10.2],[14.4,-12.8],[13.8,-15.2],[12.8,-17.4],[0,-17.4]],Pn=Bd.slice(0,-1).map(n=>n[1]).reverse(),Hr=Bd.slice(0,-1).map(n=>n[0]).reverse(),Pd=(()=>{let n=Pn.length,e=[],t=[],i=new Array(n).fill(0);for(let r=0;r<n-1;r++)e[r]=Pn[r+1]-Pn[r],t[r]=(Hr[r+1]-Hr[r])/e[r];for(let r=1;r<n-1;r++)if(t[r-1]*t[r]>0){let s=2*e[r]+e[r-1],a=e[r]+2*e[r-1];i[r]=(s+a)/(s/t[r-1]+a/t[r])}return i[0]=t[0],i[n-1]=t[n-2],i})();function vn(n){let e=Pn.length;if(n<=Pn[0])return Hr[0];if(n>=Pn[e-1])return Hr[e-1];let t=0;for(;t<e-2&&n>Pn[t+1];)t++;let i=Pn[t+1]-Pn[t],r=(n-Pn[t])/i,s=r*r,a=s*r;return(2*a-3*s+1)*Hr[t]+(a-2*s+r)*i*Pd[t]+(-2*a+3*s)*Hr[t+1]+(a-s)*i*Pd[t+1]}var Ji=n=>1-.5*eh(-4.2,-8,n);function Vr(n,e,t){let i=vn(e),r=i*Ji(e),s=Math.sin(n),a=Math.cos(n),o=s/i,l=a/r,c=Math.hypot(o,l);return new U(i*s+t*o/c,e,r*a+t*l/c)}function jc(n,e){let i=vn(e),r=i*Ji(e),s=vn(e+.02),a=vn(e-.02),o=(s-a)/(2*.02),l=(s*Ji(e+.02)-a*Ji(e-.02))/(2*.02),c=Math.sin(n),h=Math.cos(n),f=new U(i*c,e,r*h),u=new U(i*h,0,-r*c),d=new U(o*c,1,l*h),g=new U().crossVectors(u,d).normalize(),v=u.normalize(),m=new U().crossVectors(g,v).normalize();return{P:f,t:v,v:m,n:g}}function Jb(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),i=t.createImageData(256,256);for(let s=0;s<256*256;s++){let a=128+(Math.random()-.5)*70;i.data[s*4]=i.data[s*4+1]=i.data[s*4+2]=a,i.data[s*4+3]=255}t.putImageData(i,0,0);let r=new Yn(e);return r.wrapS=r.wrapT=br,r.repeat.set(30,16),r.anisotropy=8,r}function $b(){let n=[new re(0,-17.4),new re(12.8,-17.4)];for(let l=-17.25;l<=6.5;l+=.15)n.push(new re(vn(l),l));n.push(new re(0,6.5));let e=new Oi(n,200),t=e.attributes.position;for(let l=0;l<t.count;l++)t.setZ(l,t.getZ(l)*Ji(t.getY(l)));e.computeVertexNormals();let i=[];for(let l=0;l<t.count;l++){let c=t.getY(l),h=Math.abs(t.getX(l)),f=1-.55*eh(2,6.4,c)-.14*Math.exp(-Math.pow((c+5.2)/1.4,2))*eh(5,0,h);i.push(f,f,f)}e.setAttribute("color",new Qe(i,3));let r=new Yt({vertexColors:!0,color:12159334,roughness:.74,metalness:0,bumpMap:Jb(),bumpScale:.12,sheen:.5,sheenColor:new Xe(14195320),sheenRoughness:.5,clearcoat:.06,clearcoatRoughness:.5,envMapIntensity:.3}),s=new bt,a=new Se(e,r);a.castShadow=!0,a.receiveShadow=!0,s.add(a);let o=r.clone();return o.vertexColors=!1,o.color.set(11041370),[-1,1].forEach(l=>{let c=[];for(let f=0;f<=14;f++){let u=f/14,d=1.1+u*6.2,g=-4.7+.55*Math.sin(u*2.6)-.15*u;c.push(Vr(l*Math.asin(Math.min(.99,d/vn(g))),g,-.05))}let h=new Se(new ps(new Zn(c),40,.3,10,!1),o);h.scale.multiplyScalar(1),h.receiveShadow=!0,s.add(h)}),[-1,1].forEach(l=>{let c=[];for(let f=0;f<=12;f++){let u=f/12,d=3.3-2.1*u,g=4.8-9*u;c.push(Vr(l*Math.asin(Math.min(.99,d/vn(g))),g,-.18))}let h=new Se(new ps(new Zn(c),30,.55,10,!1),o);h.receiveShadow=!0,s.add(h)}),s}var no=-6,th=5.2,io=3.4,zd=.825,Ud=0;function Gd(n){if(n<=io)return 2.85-.032*n;let e=(n-io)/(th-io);return(2.85-.032*io)*Math.sqrt(Math.max(0,1-e*e))}function Kb(){let n=[new re(0,no)];for(let a=no;a<=th-.01;a+=.1)n.push(new re(Gd(a),a));n.push(new re(0,th));let e=new Oi(n,128),t=e.attributes.position;for(let a=0;a<t.count;a++)t.setZ(a,t.getZ(a)*zd);e.computeVertexNormals();let i=new bt,r=new Se(e,ih(14,6));r.castShadow=!0,r.receiveShadow=!0,i.add(r);let s=new Se(new En(4.2,4.4,.7,96),Od());return s.position.y=no-.35,s.scale.z=.9,s.castShadow=!0,s.receiveShadow=!0,i.add(s),i.add(kd(no-.7)),i}function Qb(n,e){let i=[0];for(let r=1;r<=400;r++){let s=(r-.5)/400*Math.PI;i.push(i[r-1]+Math.hypot(n*Math.cos(s),e*Math.sin(s))*(Math.PI/400))}return r=>{let s=Math.sign(r),a=Math.min(Math.abs(r),i[400]),o=0,l=400;for(;l-o>1;){let h=o+l>>1;i[h]<a?o=h:l=h}let c=(a-i[o])/Math.max(1e-6,i[l]-i[o]);return s*((o+c)/400)*Math.PI}}function ro(n,e,t,i,r){let s=Math.sin(t),a=Math.cos(t),o=s/n,l=a/e,c=Math.hypot(o,l),h=new U(o/c,0,l/c);return{P:new U(n*s+h.x*r,i,e*a+h.z*r),t:new U(h.z,0,-h.x),n:h}}var Hd=-.32,Ld=.62;function jb(){let i=new Qt;i.moveTo(-12.6/2+.9,-7.4/2),i.lineTo(12.6/2-.9,-7.4/2),i.quadraticCurveTo(12.6/2,-7.4/2,12.6/2,-7.4/2+.9),i.lineTo(12.6/2,7.4/2-.9),i.quadraticCurveTo(12.6/2,7.4/2,12.6/2-.9,7.4/2),i.lineTo(-12.6/2+.9,7.4/2),i.quadraticCurveTo(-12.6/2,7.4/2,-12.6/2,7.4/2-.9),i.lineTo(-12.6/2,-7.4/2+.9),i.quadraticCurveTo(-12.6/2,-7.4/2,-12.6/2+.9,-7.4/2);let r=1.1,s=.35,a=new Jn(i,{depth:r,bevelEnabled:!0,bevelThickness:s,bevelSize:s,bevelSegments:5,curveSegments:16});a.translate(0,0,-(r+s));let o=new Se(a,ih(1.4,.8));o.receiveShadow=!0,o.castShadow=!0;let l=new bt;return l.add(o),l.rotation.x=Hd,l}var Zi=.82;function eM(){let n=[new re(0,-3.2),new re(Zi+.02,-3.2)];for(let s=-3.1;s<=2.5;s+=.1)n.push(new re(Zi-6e-4*(s+3.2),s));for(let s=0;s<=90;s+=6){let a=s*Math.PI/180;n.push(new re(Zi*Math.cos(a),2.5+Zi*.92*Math.sin(a)))}let e=new Oi(n,96);e.computeVertexNormals();let t=new bt,i=new Se(e,ih(5,4));i.castShadow=!0,i.receiveShadow=!0,t.add(i);let r=new Se(new En(2.3,2.45,.5,80),Od());return r.position.y=-3.45,r.castShadow=!0,r.receiveShadow=!0,t.add(r),t.add(kd(-3.7)),t}function Dd(n){let i=n.gap||0,r=Math.PI*2-(n.gap||0),s=[],a=[];for(let l=0;l<=180;l++){let c=i+(r-i)*(l/180),h=Math.min(c,Math.PI*2-c),f=Math.exp(-Math.pow(h/(n.sigma||.8),2)),u=n.wB+(n.wH-n.wB)*f,d=n.tB+(n.tH-n.tB)*f,g=Math.sin(c),v=Math.cos(c);for(let m=0;m<22;m++){let p=m/22*Math.PI*2,S=n.rIn+d/2+d/2*Math.cos(p);s.push(g*S,u/2*Math.sin(p),v*S)}}for(let l=0;l<180;l++)for(let c=0;c<22;c++){let h=l*22+c,f=l*22+(c+1)%22,u=(l+1)*22+c,d=(l+1)*22+(c+1)%22;a.push(h,u,f,f,u,d)}let o=new Rt;return o.setAttribute("position",new Qe(s,3)),o.setIndex(a),o.computeVertexNormals(),o}function so(n,e){let t=new Qt;return t.absellipse(0,0,n,e,0,Math.PI*2,!1,0),t}function Fd(n,e,t){let i=new Qt;return i.moveTo(-n+t,-e),i.lineTo(n-t,-e),i.lineTo(n,-e+t),i.lineTo(n,e-t),i.lineTo(n-t,e),i.lineTo(-n+t,e),i.lineTo(-n,e-t),i.lineTo(-n,-e+t),i.lineTo(-n+t,-e),i}function tM(){let n=new Ni;n.add(new Se(new wn(40,40,40),new Mn({color:new Xe(.17,.11,.05),side:At})));let e=(t,i,r,s,a,o)=>{let l=new Se(new fi(t,i),new Mn({color:new Xe(...o),toneMapped:!1,side:2}));l.position.set(...r),l.rotation.y=s,l.rotation.x=a,n.add(l)};return e(22,14,[0,2,16],Math.PI,0,[2.3,1.95,1.4]),e(30,6,[0,18,4],0,Math.PI/2,[5,4.6,4]),e(5,26,[-17,2,6],Math.PI/2,0,[4,3.6,3]),e(5,26,[17,2,6],-Math.PI/2,0,[3,2.7,2.2]),e(30,5,[0,-17,6],0,-Math.PI/2,[1.2,.95,.6]),n}var nh=class{constructor(e,t){this.stage=e,this.canvas=e.querySelector("[data-nnp-canvas]"),this.fonts=t.fonts,this.fontCache=new Map;let i=e.dataset;this.mode=["coin","bracelet","cufflinks","ring"].includes(i.nnpMode)?i.nnpMode:"name",this.ringStyle=i.ringStyle||"plain-oval",this.coinStyle=i.coinStyle==="pave"?"pave":"rope",this.placeholder=i.placeholder||(this.mode==="name"?"Name":this.mode==="cufflinks"?"BR":this.mode==="ring"&&this.ringStyle!=="plain-oval"?"A":"Engrave here"),this.photo=!!i.nnpPhoto&&(this.mode==="name"||this.mode==="coin"||this.mode==="bracelet"||this.mode==="ring"),this.photo&&this.mode==="bracelet"&&Object.assign(ht,{w:1030,h:820,ppc:Cs.ppc}),this.photo&&this.mode==="ring"&&Object.assign(ht,{w:1030,h:820,ppc:Yi.ppc}),this.viewT=0,this.viewTarget=0,this.state={text:this.placeholder,fontId:t.fonts[0].id,metal:"gold"},this.pointer={x:0,y:0},this.rot={x:0,y:0},this.visible=!0,this.reduceMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.buildToken=0,this.initScene()}initScene(){let e=this.renderer=new _a({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setClearColor(0,0),e.outputColorSpace=Bt,e.toneMapping=hc,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=this.photo?cn:cc,this.scene=new Ni;let t=new Ar(e);if(this.scene.environment=t.fromScene(this.photo?tM():new Ba,.03).texture,t.dispose(),this.photo&&this.mode!=="ring"){let o=this.mode==="bracelet"?Yb:[...Ad.l.map(([l,c])=>[l+2,c]),[0,ht.h],[ht.w,ht.h],...Ad.r.slice().reverse().map(([l,c])=>[l-2,c])];this.canvas.style.clipPath=`polygon(${o.map(([l,c])=>`${(l/ht.w*100).toFixed(2)}% ${(c/ht.h*100).toFixed(2)}%`).join(",")})`}if(this.camera=this.photo?new Er(-13.2,13.2,ht.h/2/ht.ppc,-ht.h/2/ht.ppc,.1,200):new Dt(24,1,.1,200),this.camLook=new U(0,-7.4,0),this.rig=new bt,this.scene.add(this.rig),this.necklace=new bt,this.mode==="cufflinks")this.rig.add(jb()),this.necklace.rotation.x=Hd;else if(this.mode==="ring"&&!this.photo)this.rig.add(eM());else if(this.mode==="bracelet"&&!this.photo)this.rig.add(Kb());else if(!this.photo)this.rig.add($b());else if(this.mode==="ring"){this.wearer=new bt,this.wearer.rotation.z=Dr.degToRad(Yi.rot),this.wearer.scale.setScalar(Yi.scale),this.wearer.position.set((Yi.x-ht.w/2)/ht.ppc,(ht.h/2-Yi.y)/ht.ppc,0);let o=new En(Zi,Zi,8,64),l=new Se(o,new Mn({colorWrite:!1}));l.renderOrder=-1;let c=new Se(o,new Ir({opacity:.32}));c.scale.setScalar(1.004),c.receiveShadow=!0,this.wearer.add(l,c),this.rig.add(this.wearer)}else{let o=new Se(new fi(60,60),new Ir({opacity:.38}));o.position.z=this.mode==="bracelet"?2.2:-.12,o.receiveShadow=!0,this.rig.add(o),this.mode==="bracelet"&&(this.necklace.rotation.z=Dr.degToRad(Cs.rot),this.necklace.scale.setScalar(Cs.scale),this.necklace.position.set((Cs.x-ht.w/2)/ht.ppc,(ht.h/2-Cs.y)/ht.ppc,0))}(this.wearer||this.rig).add(this.necklace),this.material=new Yt({metalness:1,roughness:.22,clearcoat:.25,clearcoatRoughness:.15}),this.applyMetal("gold"),this.light=new Gi(16773598,2.4),this.light.position.set(...this.photo?[-3,4,30]:[-9,8,24]),this.light.target.position.set(0,-5,0),this.light.castShadow=!0,this.light.shadow.mapSize.set(2048,2048),this.light.shadow.bias=-2e-4,this.light.shadow.normalBias=.04,this.light.shadow.radius=this.photo?7:5,this.light.shadow.blurSamples=16;let i=this.light.shadow.camera;i.left=-18,i.right=18,i.top=16,i.bottom=-18,i.near=1,i.far=70,this.scene.add(this.light,this.light.target);let r=new Gi(15134207,1.6);r.position.set(18,7,-4);let s=new Gi(16773344,1.1);s.position.set(-18,5,-4);let a=new Gi(16774890,.45);a.position.set(14,2,18),this.scene.add(r,s,a),this.resize(),new ResizeObserver(()=>this.resize()).observe(this.stage),new IntersectionObserver(o=>{this.visible=o[0].isIntersecting}).observe(this.stage),this.stage.addEventListener("pointermove",o=>{let l=this.stage.getBoundingClientRect();this.pointer.x=((o.clientX-l.left)/l.width-.5)*2,this.pointer.y=((o.clientY-l.top)/l.height-.5)*2}),this.stage.addEventListener("pointerleave",()=>{this.pointer.x=0,this.pointer.y=0}),this.clockStart=performance.now(),this.tick=this.tick.bind(this),requestAnimationFrame(this.tick)}resize(){let e=this.stage.clientWidth||600,t=this.stage.clientHeight||480;this.renderer.setPixelRatio(this.photo?Math.min(Math.max(window.devicePixelRatio||1,2.5),3):Math.min(window.devicePixelRatio||1,2)),this.renderer.setSize(e,t,!1),this.camera.aspect=e/t,this.updateCamera()}updateCamera(){if(this.photo){this.camera.position.set(0,0,50),this.camera.lookAt(0,0,0);let o=ht.h/2/ht.ppc;this.camera.top=o,this.camera.bottom=-o,this.camera.left=-o*this.camera.aspect,this.camera.right=o*this.camera.aspect,this.camera.updateProjectionMatrix();return}let e=Math.tan(Dr.degToRad(this.camera.fov/2)),t=this.camera.aspect,i=this.viewT,r,s,a;if(this.mode==="coin"){let o=new U(0,-7.4,0),l=new U(0,to+.1,0),c=Math.max(26,5.9/(e*t)),h=Math.max(7,1.5/(e*t)),f=jc(0,to).P.z+.1;r=o.lerp(l,i),s=c+(h+f-c)*i,a=1.6*(1-i)+.15*i}else if(this.mode==="ring"){let o=new U(0,0,.4),l=new U(0,0,1.1),c=Math.max(11.5,3.2/(e*t)),h=Math.max(5.2,1.6/(e*t));r=o.lerp(l,i),s=c+(h-c)*i,a=.7*(1-i)+.05*i}else if(this.mode==="cufflinks"){let o=new U(0,-.2,.3),l=new U(-2.6,.2,.9),c=Math.max(22,6.9/(e*t)),h=Math.max(8,2.3/(e*t));r=o.lerp(l,i),s=c+(h-c)*i,a=1*(1-i)+.15*i}else if(this.mode==="bracelet"){let o=new U(0,-.4,0),l=new U(0,Ud,0),c=Math.max(22,5.4/(e*t)),h=Math.max(9,2.9/(e*t));r=o.lerp(l,i),s=c+(h-c)*i,a=1.4*(1-i)+.2*i}else r=this.camLook,s=Math.max(40,10.6/(e*t)),a=1;this.camera.position.set(r.x,r.y+a,s),this.camera.lookAt(r),this.camera.updateProjectionMatrix()}setView(e){this.viewTarget=e?1:0}applyMetal(e){let t={...Cd[e]||Cd.gold};this.photo&&e==="gold"&&(t.color=16765024,t.roughness=.13,t.envMapIntensity=1.15),[this.material,this.ropeMaterial,this.faceMaterial].filter(Boolean).forEach(i=>{i.color.setHex(t.color),i.envMapIntensity=t.envMapIntensity*(this.mode==="cufflinks"?.55:1),i!==this.faceMaterial&&(i.roughness=t.roughness+(this.mode==="cufflinks"?.07:0))}),this.metalRough=t.roughness,this.faceMaterial&&(this.faceMaterial.roughness=1),this.state.metal=e}async loadFont(e){if(this.fontCache.has(e))return this.fontCache.get(e);let t=this.fonts.find(r=>r.id===e),i=fetch(t.url).then(r=>r.arrayBuffer()).then(r=>Ed(r));return this.fontCache.set(e,i),i}async update(e){Object.assign(this.state,e),e.metal&&this.applyMetal(e.metal),("text"in e||"fontId"in e)&&await this.rebuild()}clearJewellery(){this.necklace.traverse(e=>{e.geometry&&e.geometry.dispose()}),this.engrave&&(this.engrave.bump.dispose(),this.engrave.rough.dispose(),this.engrave.map&&this.engrave.map.dispose(),this.engrave=null),this.necklace.clear()}async rebuild(){return this.mode==="coin"?this.rebuildCoin():this.mode==="bracelet"?this.rebuildBracelet():this.mode==="cufflinks"?this.rebuildCufflinks():this.mode==="ring"?this.rebuildRing():this.rebuildName()}async rebuildName(){let e=++this.buildToken,t=Rs(this.state.text)||this.placeholder,i=await this.loadFont(this.state.fontId);if(e!==this.buildToken)return;this.clearJewellery();let r=100,s=this.fonts.find(_=>_.id===this.state.fontId)||{},a=s.tracking!=null?s.tracking:-.02,o=i.getPaths(t,0,0,r,{kerning:!0,letterSpacing:a}),l=r*(s.depth?s.depth:.045)*(this.photo?1.6:1),c=l*.45,h=[];o.forEach(_=>{if(!_.commands.length)return;let I=Qc(_,r*.014,i.outlinesFormat==="cff");I.length&&h.push(new Jn(I,{depth:l,curveSegments:10,bevelEnabled:!0,bevelThickness:c,bevelSize:l*.32,bevelSegments:5}))});let f=new qt;h.forEach(_=>{_.computeBoundingBox(),f.union(_.boundingBox)});let u=(f.min.x+f.max.x)/2,d=(f.min.y+f.max.y)/2,g=f.max.x-f.min.x,v=r*.7,m=Xb*(this.photo?.65:1)*(s.scale||1)*(this.photo&&s.photoScale||1)/v,p=this.photo?8:qb;g*m>p&&(m=p/g);let S=vn(As),x=S*Ji(As),y=400,C=[0];for(let _=1;_<=y;_++){let I=(_-.5)/y*(Math.PI/2);C.push(C[_-1]+Math.hypot(S*Math.cos(I),x*Math.sin(I))*(Math.PI/2/y))}let w=_=>{let I=Math.sign(_),k=Math.min(Math.abs(_),C[y]),D=0,L=y;for(;L-D>1;){let z=D+L>>1;C[z]<k?D=z:L=z}let G=(k-C[D])/Math.max(1e-6,C[L]-C[D]);return I*((D+G)/y)*(Math.PI/2)},E=c*m,T=new bt,b={l:{x:1/0,y:0},r:{x:-1/0,y:0}};h.forEach(_=>{let I=_.attributes.position,k=_.attributes.normal;for(let L=0;L<I.count;L++){let G=(I.getX(L)-u)*m,z=(I.getY(L)-d)*m,Z=I.getZ(L)*m+E+.012;if(G<b.l.x&&(b.l.x=G,b.l.y=z),G>b.r.x&&(b.r.x=G,b.r.y=z),this.photo){let Ie=.1*G,Y=1/Math.hypot(Ie,1);I.setXYZ(L,nn.x+G,nn.y+z,Z-.05*G*G);let se=k.getX(L),ue=k.getY(L),le=k.getZ(L);k.setXYZ(L,(se+le*Ie)*Y,ue,(le-se*Ie)*Y);continue}let N=jc(w(G),z+As);I.setXYZ(L,N.P.x+N.n.x*Z,N.P.y+N.n.y*Z,N.P.z+N.n.z*Z);let K=k.getX(L),ie=k.getY(L),Q=k.getZ(L);k.setXYZ(L,K*N.t.x+ie*N.v.x+Q*N.n.x,K*N.t.y+ie*N.v.y+Q*N.n.y,K*N.t.z+ie*N.v.z+Q*N.n.z)}I.needsUpdate=!0,k.needsUpdate=!0,_.computeBoundingSphere();let D=new Se(_,this.material);D.castShadow=!0,D.receiveShadow=!0,T.add(D)}),this.necklace.add(T),this.photo?this.buildPhotoChain(new U(nn.x+b.l.x-.12,nn.y+b.l.y,0),new U(nn.x+b.r.x+.12,nn.y+b.r.y,0),!1):this.buildChain(b,w),this.hasModel=!0,this.stage.classList.add("is-rendered")}buildPhotoChain(e,t,i){let r=u=>new U((u[0]-ht.w/2)/ht.ppc,(ht.h/2-u[1])/ht.ppc,0),s=[[e,[[576,689],[552,652],[529,614],[507,576],[486,537],[465,498],[446,459],[428,418],[410,378],[394,337],[378,296],[363,254],[350,211],[337,168],[325,125],[318,98]]],[t,[[960,689],[989,654],[1018,619],[1045,583],[1072,546],[1098,509],[1123,472],[1147,434],[1171,395],[1193,356],[1215,316],[1236,275],[1256,234],[1275,193],[1293,151],[1304,124]]]],a=.26,o=new Ot(a*.5,.044,8,20);o.scale(1,.62,1);let l=new Ct,c=new U,h=new U(0,0,1),f=new U;s.forEach(([u,d])=>{let g=d.map(r),v=u.clone().sub(g[0]),m=g.map((y,C)=>y.clone().addScaledVector(v,Math.pow(1-C/(g.length-1),1.6))),p=new Zn(m,!1,"centripetal"),S=Math.floor(p.getLength()/(a*.74)),x=new qn(o,this.material,S);x.castShadow=!0;for(let y=0;y<S;y++){let C=(y+.5)/S,w=p.getPointAt(C);p.getTangentAt(C,c).normalize(),f.crossVectors(h,c).normalize();let E=new et;y%2===0?E.makeBasis(c,f,h):E.makeBasis(c,h,f.clone().negate()),l.matrix.copy(E).setPosition(w),l.matrix.decompose(l.position,l.quaternion,l.scale),l.updateMatrix(),x.setMatrixAt(y,l.matrix)}if(x.instanceMatrix.needsUpdate=!0,this.necklace.add(x),i){let y=new Se(new Ot(.17,.045,10,28),this.material);y.position.copy(u),y.position.z=.05,y.castShadow=!0,this.necklace.add(y)}})}buildChain(e,t){let s=new Ot(.2,.052000000000000005,14,36),a=.2*2.1;[-1,1].forEach(o=>{let l=o<0?e.l:e.r,c=t(l.x+o*.2*.9),h=new Se(s,this.material);h.position.copy(Vr(c,As+l.y,.07)),h.rotation.y=c,h.castShadow=!0,this.necklace.add(h)}),this.chainSides(o=>{let l=o<0?e.l:e.r;return{x0:Math.abs(l.x)+a*1.05,y0:As+l.y}})}chainSides(e){let i=new Ot(.2,.05,10,24);i.scale(1,.62,1);let r=new Ct,s=new U,a=new U,o=new U;[-1,1].forEach(c=>{let{x0:h,y0:f}=e(c),u=-5.4,d=1.2,g=vn(u)*Math.sin(d),v=[],m=26;for(let C=0;C<=m;C++){let w=C/m,E=h+(g-h)*w,T=f+(u-f)*w+Math.sin(Math.PI*w)*-.35,b=vn(T);v.push(Vr(c*Math.asin(Math.min(.999,E/b)),T,.1))}let p=18;for(let C=1;C<=p;C++){let w=C/p;v.push(Vr(c*(d+(Math.PI-d)*w),u+(-2.6-u)*Math.pow(w,1.3),.1))}let S=new Zn(v,!1,"centripetal"),x=Math.floor(S.getLength()/(.4*.74)),y=new qn(i,this.material,x);y.castShadow=!0,y.receiveShadow=!0;for(let C=0;C<x;C++){let w=(C+.5)/x,E=S.getPointAt(w);S.getTangentAt(w,s).normalize();let T=vn(E.y),b=T*Ji(E.y);a.set(E.x/(T*T),0,E.z/(b*b)).normalize(),o.crossVectors(a,s).normalize(),new U().crossVectors(s,o).dot(a)<0&&o.negate();let _=new et;C%2===0?_.makeBasis(s,o,a):_.makeBasis(s,a,o.clone().negate()),r.matrix.copy(_).setPosition(E),r.matrix.decompose(r.position,r.quaternion,r.scale),r.updateMatrix(),y.setMatrixAt(C,r.matrix)}y.instanceMatrix.needsUpdate=!0,this.necklace.add(y)});let l=new Se(new Ot(.24,.05,12,30),this.material);l.position.copy(Vr(Math.PI,-2.6,.1)),l.castShadow=!0,this.necklace.add(l)}engravingMaps(e,t){let r=e.split(" "),s=[e];if(e.length>12&&r.length>1){let d=0,g=1e9;for(let v=1;v<r.length;v++){let m=Math.abs(r.slice(0,v).join(" ").length-r.slice(v).join(" ").length);m<g&&(g=m,d=v)}s=[r.slice(0,d).join(" "),r.slice(d).join(" ")]}let a=document.createElement("canvas").getContext("2d"),o=380,l=d=>(a.font=`${d}px ${t}`,Math.max(...s.map(g=>a.measureText(g).width)));for(;o>36&&l(o)>1024*.84;)o-=6;let c=o*1.15,h=1024/2-(s.length-1)*c/2,f=(d,g)=>{let v=document.createElement("canvas");v.width=1024,v.height=1024;let m=v.getContext("2d");m.fillStyle=d,m.fillRect(0,0,1024,1024),m.fillStyle=g,m.font=`${o}px ${t}`,m.textAlign="center",m.textBaseline="middle",s.forEach((S,x)=>m.fillText(S,1024/2,h+x*c));let p=new Yn(v);return p.anisotropy=8,p},u=Math.round(this.metalRough*255);return{bump:f("#ffffff","#000000"),rough:f(`rgb(${u},${u},${u})`,"rgb(170,170,170)"),map:f("#ffffff","#6e6a64")}}async rebuildCoin(){let e=++this.buildToken,t=Rs(this.state.text)||this.placeholder,r=`"NNP ${(this.fonts.find(d=>d.id===this.state.fontId)||this.fonts[0]).id}"`;try{await document.fonts.load(`64px ${r}`,t)}catch{}if(e!==this.buildToken)return;this.clearJewellery(),this.engrave=this.engravingMaps(t,r),this.faceMaterial=new Yt({metalness:1,roughness:1,roughnessMap:this.engrave.rough,bumpMap:this.engrave.bump,bumpScale:3,map:this.engrave.map,clearcoat:.2,clearcoatRoughness:.2});let s=this.coinStyle==="pave";if(!s&&!this.ropeMaterial){let d=document.createElement("canvas");d.width=512,d.height=64;let g=d.getContext("2d"),v=g.getImageData(0,0,512,64);for(let m=0;m<64;m++)for(let p=0;p<512;p++){let S=.5+.5*Math.sin(2*Math.PI*(44*(p/512)+m/64)),x=(m*512+p)*4,y=60+S*195;v.data[x]=v.data[x+1]=v.data[x+2]=y,v.data[x+3]=255}g.putImageData(v,0,0),this.ropeMaterial=new Yt({metalness:1,roughness:.22,clearcoat:.25,clearcoatRoughness:.15,bumpMap:new Yn(d),bumpScale:2.2})}this.applyMetal(this.state.metal);let a=new bt,o=(d,g=!0)=>(d.castShadow=g,a.add(d),d),l;if(s){l=.95;let d=new Se(new En(.95,.95,.14,96),this.material);d.rotation.x=Math.PI/2,o(d),o(new Se(new Ot(.68,.028,10,90),this.material)).position.z=.07;let g=new Se(new Cr(.665,80),this.faceMaterial);g.position.z=.075,o(g,!1),this.stoneMaterial||(this.stoneMaterial=new Yt({color:16777215,metalness:.05,roughness:.02,clearcoat:1,flatShading:!0,envMapIntensity:4.5}));let v=28,m=new qn(new Rr(.072,1),this.stoneMaterial,v),p=new et,S=new jt,x=new U(1,1,.62),y=new U;for(let C=0;C<v;C++){let w=C/v*Math.PI*2;y.set(Math.cos(w)*.815,Math.sin(w)*.815,.082),p.compose(y,S.identity(),x),m.setMatrixAt(C,p)}m.instanceMatrix.needsUpdate=!0,m.castShadow=!0,a.add(m)}else{l=.9,o(new Se(new Ot(.84,.078,14,140),this.ropeMaterial));let d=new Se(new Cr(.775,80),this.faceMaterial);d.position.z=.03,o(d,!1);let g=new Se(new Cr(.775,80),this.material);g.position.z=-.03,g.rotation.y=Math.PI,o(g,!1);let v=new Se(new En(.775,.775,.06,80,1,!0),this.material);v.rotation.x=Math.PI/2,o(v,!1)}let c=new Se(new Ot(.15,.04,10,28),this.material);c.scale.set(.72,1.55,1),c.position.set(0,l+.2,0),o(c);let h=new Se(new Ot(.07,.022,8,20),this.material);if(h.rotation.y=Math.PI/2,h.position.set(0,l+.02,0),o(h),this.photo){a.position.set(nn.x,nn.y-.2,.12),a.scale.setScalar(1.45),this.necklace.add(a),this.buildPhotoChain(new U(nn.x-.08,nn.y-.2+(l+.3)*1.45,0),new U(nn.x+.08,nn.y-.2+(l+.3)*1.45,0),!1),this.hasModel=!0,this.stage.classList.add("is-rendered");return}let f=jc(0,to);a.quaternion.setFromRotationMatrix(new et().makeBasis(f.t,f.v,f.n)),a.position.copy(f.P).addScaledVector(f.n,.1),this.necklace.add(a);let u=to+l+.36;this.chainSides(()=>({x0:.09,y0:u})),this.hasModel=!0,this.stage.classList.add("is-rendered")}barEngraving(e,t){let s=document.createElement("canvas").getContext("2d"),a=this.photo?520:340,o=h=>(s.font=`${h}px ${t}`,s.measureText(e).width);for(;a>30&&(o(a)>2048*.86||a>430*(this.photo?1.25:.8));)a-=6;let l=(h,f)=>{let u=document.createElement("canvas");u.width=2048,u.height=430;let d=u.getContext("2d");d.fillStyle=h,d.fillRect(0,0,2048,430),d.fillStyle=f,d.font=`${a}px ${t}`,d.textAlign="center",d.textBaseline="middle",d.fillText(e,2048/2,430/2+a*.04);let g=new Yn(u);return g.anisotropy=8,g},c=Math.round(this.metalRough*255);return{bump:l("#ffffff","#000000"),rough:l(`rgb(${c},${c},${c})`,"rgb(170,170,170)"),map:this.photo?l("#ffffff","#5e5a52"):null}}async rebuildBracelet(){let e=++this.buildToken,t=Rs(this.state.text)||this.placeholder,r=`"NNP ${(this.fonts.find(L=>L.id===this.state.fontId)||this.fonts[0]).id}"`;try{await document.fonts.load(`64px ${r}`,t)}catch{}if(e!==this.buildToken)return;this.clearJewellery(),this.engrave=this.barEngraving(t,r),this.faceMaterial=new Yt({metalness:1,roughness:1,roughnessMap:this.engrave.rough,bumpMap:this.engrave.bump,bumpScale:2.2,clearcoat:.2,clearcoatRoughness:.2,map:this.engrave.map||null}),this.applyMetal(this.state.metal);let s=Ud,a=Gd(s),o=a*zd,l=Qb(a+.1,o+.1),c=this.photo?6:3.3,h=this.photo?1.35:.7,f=.085,u=new wn(c,h,f,90,5,1),d=u.attributes.position,g=u.attributes.normal;for(let L=0;L<d.count;L++){let G=d.getX(L),z=d.getY(L),Z=d.getZ(L)+f/2+.06,N=ro(a,o,l(G),s+z,Z);d.setXYZ(L,N.P.x,N.P.y,N.P.z);let K=g.getX(L),ie=g.getY(L),Q=g.getZ(L);g.setXYZ(L,K*N.t.x+Q*N.n.x,ie,K*N.t.z+Q*N.n.z)}d.needsUpdate=!0,g.needsUpdate=!0;let v=new Se(u,[this.material,this.material,this.material,this.material,this.faceMaterial,this.material]);v.castShadow=!0,this.necklace.add(v);let m=new Ot(.17,.048,10,28),p=[];[-1,1].forEach(L=>{let G=l(L*(c/2+.05)),z=ro(a,o,G,s,.16),Z=new Se(m,this.material);Z.position.copy(z.P),Z.rotation.y=G,Z.castShadow=!0,this.necklace.add(Z),p.push(G)});let S=new Ot(.29,.058,10,28);S.scale(1,.8,1);let x=p[0]-.06,y=p[1]+.06,C=a+.17,w=o+.17,E=new Ct,T=new U,b=new U(0,1,0),_=new U,I=new U,k=new U;if((this.photo?[[y,Math.PI/2+.1],[-Math.PI/2-.1,x]]:[[y,Math.PI*2+x]]).forEach(([L,G])=>{let z=[];for(let Q=0;Q<=120;Q++){let be=L+(G-L)*(Q/120);z.push(ro(C,w,be,s,0).P)}let N=new Zn(z,!1,"centripetal"),K=Math.floor(N.getLength()/.34),ie=new qn(S,this.material,K);ie.castShadow=!0;for(let Q=0;Q<K;Q++){let be=(Q+.5)/K,Ie=N.getPointAt(be);N.getTangentAt(be,T).normalize(),_.set(Ie.x/(C*C),0,Ie.z/(w*w)).normalize();let Y=(Q%2?1:-1)*.3;I.copy(b).multiplyScalar(Math.cos(Y)).addScaledVector(_,Math.sin(Y)).normalize(),k.crossVectors(T,I).normalize(),I.crossVectors(k,T).normalize(),E.matrix.copy(new et().makeBasis(T,I,k)).setPosition(Ie),E.matrix.decompose(E.position,E.quaternion,E.scale),E.updateMatrix(),ie.setMatrixAt(Q,E.matrix)}ie.instanceMatrix.needsUpdate=!0,this.necklace.add(ie)}),!this.photo){let L=ro(C,w,Math.PI,s,0),G=new Se(new Ca(.11,.42,6,14),this.material);G.position.copy(L.P),G.quaternion.setFromRotationMatrix(new et().makeBasis(L.t,b.clone(),L.n)),G.rotation.z+=Math.PI/2,G.castShadow=!0,this.necklace.add(G);let z=new Se(new Ot(.15,.04,8,22),this.material);z.position.copy(L.P).addScaledVector(L.t,-.42),z.rotation.y=Math.PI,this.necklace.add(z)}this.hasModel=!0,this.stage.classList.add("is-rendered")}async rebuildCufflinks(){let e=++this.buildToken,i=(Rs(this.state.text).replace(/\s+/g,"").toUpperCase()||this.placeholder).slice(0,4),r=await this.loadFont(this.state.fontId);if(e!==this.buildToken)return;this.clearJewellery();let s=100,a=s*.7,o=7.5,l=1.6,c=i.length,h=[],f=0,u=0;for(let T=0;T<c;T++){let b=r.charToGlyph(i[T]),_=(b.advanceWidth||r.unitsPerEm)*s/r.unitsPerEm;T>0&&(f+=c===2?u*.58:u*.94);let I=c===2&&T===1?a*.46:0;h.push({path:b.getPath(f,I,s)}),u=_}let d=[];h.forEach(T=>{if(!T.path.commands.length)return;let b=Qc(T.path,s*.014,r.outlinesFormat==="cff");b.length&&d.push(new Jn(b,{depth:o,curveSegments:12,bevelEnabled:!0,bevelThickness:l,bevelSize:1,bevelSegments:4}))});let g=new qt;d.forEach(T=>{T.computeBoundingBox(),g.union(T.boundingBox)});let v=(g.min.x+g.max.x)/2,m=(g.min.y+g.max.y)/2,p=g.max.x-g.min.x,S=g.max.y-g.min.y,x=1.15/a;p*x>3.3&&(x=3.3/p),S*x>1.9&&(x=1.9/S),d.forEach(T=>{T.translate(-v,-m,0),T.scale(x,x,x)});let y=S*x,C=()=>{let T=new bt,b=new bt;d.forEach(L=>{let G=new Se(L,this.material);G.castShadow=!0,b.add(G)}),b.position.z=Ld+l*x,T.add(b);let _=-y*.12,I=new Se(new En(.105,.105,1.7,24),this.material);I.rotation.z=Math.PI/2,I.position.set(0,_,.13),I.castShadow=!0,T.add(I),[-1,1].forEach(L=>{let G=new Se(new ds(.165,20,14),this.material);G.position.set(L*.85,_,.13),G.castShadow=!0,T.add(G)});let k=Ld+l*x-.13,D=new Se(new En(.075,.075,k,16),this.material);return D.rotation.x=Math.PI/2,D.position.set(0,_,.13+k/2),D.castShadow=!0,T.add(D),T},w=C();w.position.set(-2.6,.15,0),w.rotation.z=.05;let E=C();E.position.set(2.6,.15,0),E.rotation.z=-.05,this.necklace.add(w,E),this.hasModel=!0,this.stage.classList.add("is-rendered")}faceEngraving(e,t,i,r){let a=Math.max(256,Math.round(1024*r/i)),o=e.split(" "),l=[e];if(e.length>6&&o.length>1){let x=1,y=1e9;for(let C=1;C<o.length;C++){let w=Math.abs(o.slice(0,C).join(" ").length-o.slice(C).join(" ").length);w<y&&(y=w,x=C)}l=[o.slice(0,x).join(" "),o.slice(x).join(" ")]}let c=document.createElement("canvas").getContext("2d"),h=this.photo?760:420,f=this.photo,u=f?a*.86:1024*.86,d=f?1024*.8:a*.8,g=x=>(c.font=`${x}px ${t}`,Math.max(...l.map(y=>c.measureText(y).width))<=(this.photo?u:1024*.74)&&x*1.15*l.length<=(this.photo?d:a*.72));for(;h>30&&!g(h);)h-=6;let v=h*1.15,m=a/2-(l.length-1)*v/2,p=(x,y)=>{let C=document.createElement("canvas");C.width=1024,C.height=a;let w=C.getContext("2d");w.fillStyle=x,w.fillRect(0,0,1024,a),w.fillStyle=y,w.font=`${h}px ${t}`,w.textAlign="center",w.textBaseline="middle",f?(w.translate(1024/2,a/2),w.rotate(-Math.PI/2),l.forEach((T,b)=>w.fillText(T,0,(b-(l.length-1)/2)*v))):l.forEach((T,b)=>w.fillText(T,1024/2,m+b*v));let E=new Yn(C);return E.anisotropy=8,E.repeat.set(1/i,1/r),E.offset.set(.5,.5),E},S=Math.round(this.metalRough*255);return{bump:p("#ffffff","#000000"),rough:p(`rgb(${S},${S},${S})`,"rgb(170,170,170)"),map:this.photo?p("#ffffff","#5e5a52"):null}}async rebuildRing(){let e=++this.buildToken,t=this.ringStyle,i=Rs(this.state.text);t==="letter"?i=(i.replace(/\s+/g,"")[0]||"A").toUpperCase():i=i||this.placeholder;let s=`"NNP ${(this.fonts.find(w=>w.id===this.state.fontId)||this.fonts[0]).id}"`,a=null;if(t==="letter")a=await this.loadFont("jost");else try{await document.fonts.load(`64px ${s}`,i)}catch{}if(e!==this.buildToken)return;this.clearJewellery(),this.stoneMaterial||(this.stoneMaterial=new Yt({color:16777215,metalness:.05,roughness:.02,clearcoat:1,flatShading:!0,envMapIntensity:4.5}));let o=Zi+.03,l=(w,E=!0)=>(w.castShadow=E,this.necklace.add(w),w);if(t==="letter"){this.applyMetal(this.state.metal);let w=100,E=w*.7,T=a.charToGlyph(i),b=Qc(T.getPath(0,0,w),w*.012,!1),_=new Jn(b,{depth:.05/.0143,curveSegments:14,bevelEnabled:!0,bevelThickness:.014/.0143,bevelSize:.012/.0143,bevelSegments:3});_.computeBoundingBox();let I=_.boundingBox,k=(I.min.x+I.max.x)/2,D=(I.min.y+I.max.y)/2,L=this.photo?1.15:1,G=L/E,z=o+.075,Z=(I.max.x-I.min.x)*G,N=_.attributes.position,K=_.attributes.normal;for(let P=0;P<N.count;P++){let me=(N.getX(P)-k)*G,te=(N.getY(P)-D)*G,fe=N.getZ(P)*G,ae=me/z,Oe=z+fe;N.setXYZ(P,Oe*Math.sin(ae),te,Oe*Math.cos(ae));let xe=K.getX(P),R=K.getY(P),M=K.getZ(P);K.setXYZ(P,xe*Math.cos(ae)+M*Math.sin(ae),R,-xe*Math.sin(ae)+M*Math.cos(ae))}N.needsUpdate=!0,K.needsUpdate=!0,_.computeBoundingSphere(),l(new Se(_,this.material));let ie=this.photo?0:Z/2/z,Q=this.photo?.15:.1,be=this.photo?.22:.15;l(new Se(Dd({rIn:o,tB:Q,wB:be,tH:Q,wH:be,gap:ie,sigma:1}),this.material)),this.photo||[-1,1].forEach(P=>{let me=P*ie,te=o+.05,fe=new Se(new ds(.075,14,10),this.material);fe.position.set(Math.sin(me)*te,0,Math.cos(me)*te),l(fe)});let Ie=220,Y=document.createElement("canvas");Y.width=Ie,Y.height=Ie;let se=Y.getContext("2d"),ue=Ie/(1.8*L);T.getPath(Ie/2-k*G*ue,Ie/2+D*G*ue,w*G*ue).draw(se),se.fillStyle="#fff";let le=T.getPath(Ie/2-k*G*ue,Ie/2+D*G*ue,w*G*ue);se.clearRect(0,0,Ie,Ie),le.fill="#fff",le.draw(se);let Pe=se.getImageData(0,0,Ie,Ie).data,Ge=(P,me)=>Pe[(Math.round(me)*Ie+Math.round(P))*4+3]>128,ke=.043,Je=ke*ue,j=ke*2.1*ue,oe=[];for(let P=Je;P<Ie-Je;P+=j)for(let me=Je;me<Ie-Je;me+=j){if(!Ge(me,P))continue;let te=!0;for(let ae=0;ae<8&&te;ae++)te=Ge(me+Math.cos(ae*Math.PI/4)*Je*1.05,P+Math.sin(ae*Math.PI/4)*Je*1.05);let fe=(me-Ie/2)/ue;te&&fe<-Z*.02&&fe<.05&&oe.push([fe,-(P-Ie/2)/ue])}if(oe.length){let P=new qn(new Rr(ke,1),this.stoneMaterial,oe.length),me=new et,te=new jt,fe=new U(1,1,.6),ae=new U;oe.forEach(([Oe,xe],R)=>{let M=Oe/z,H=z+.075+.012;ae.set(H*Math.sin(M),xe,H*Math.cos(M)),te.setFromAxisAngle(new U(0,1,0),M),me.compose(ae,te,fe),P.setMatrixAt(R,me)}),P.instanceMatrix.needsUpdate=!0,P.castShadow=!0,this.necklace.add(P)}this.hasModel=!0,this.stage.classList.add("is-rendered");return}let c={"studded-oval":{outer:()=>so(.6,.74),plate:()=>so(.43,.57),band:{tH:.2,wH:.9}},"plain-oval":{outer:()=>so(.64,.8),plate:()=>so(.57,.73),band:{tH:.2,wH:1.05}},cushion:{outer:()=>Fd(.68,.6,.26),plate:()=>Fd(.56,.48,.2),band:{tH:.2,wH:.9}}}[t];if(!c)return;let h=c.plate(),f=new qt;h.getPoints(40).forEach(w=>f.expandByPoint(new U(w.x,w.y,0)));let u=f.max.x-f.min.x,d=f.max.y-f.min.y;this.engrave=this.faceEngraving(i,s,u,d),this.faceMaterial=new Yt({metalness:1,roughness:1,roughnessMap:this.engrave.rough,bumpMap:this.engrave.bump,bumpScale:2,clearcoat:.2,clearcoatRoughness:.2,map:this.engrave.map||null}),this.applyMetal(this.state.metal),l(new Se(Dd({rIn:o,tB:.13,wB:.27,tH:c.band.tH,wH:c.band.wH,sigma:.85}),this.material));let g=this.necklace.children.length,v=.8,m=.3,p=.04,S=new Se(new Jn(c.outer(),{depth:m,bevelEnabled:!0,bevelThickness:p,bevelSize:p,bevelSegments:3,curveSegments:48}),this.material);S.position.z=v+p,l(S);let x=v+m+2*p,y=new Se(new Jn(h,{depth:.035,bevelEnabled:!0,bevelThickness:.012,bevelSize:.012,bevelSegments:2,curveSegments:48}),this.material);y.position.z=x,l(y,!1);let C=new Se(new Ra(h,48),this.faceMaterial);if(C.position.z=x+.035+.012+.002,l(C,!1),t==="studded-oval"){let b=new qn(new Rr(.034,1),this.stoneMaterial,52),_=new et,I=new jt,k=new U(1,1,.65),D=new U;for(let L=0;L<52;L++){let G=L/52*Math.PI*2;D.set(Math.cos(G)*.52,Math.sin(G)*.66,x+.02),_.compose(D,I.identity(),k),b.setMatrixAt(L,_)}b.instanceMatrix.needsUpdate=!0,b.castShadow=!0,this.necklace.add(b)}if(this.photo){let w=new bt;this.necklace.children.slice(g).forEach(E=>w.add(E)),w.scale.set(Yi.head,Yi.head*1.15,1),this.necklace.add(w)}this.hasModel=!0,this.stage.classList.add("is-rendered")}tick(e){if(requestAnimationFrame(this.tick),!this.visible||!this.hasModel)return;let t=(e-this.clockStart)/1e3,i=Math.min(.25,Math.max(0,(e-(this.lastNow||e))/1e3));this.lastNow=e,Math.abs(this.viewTarget-this.viewT)>.001&&(this.viewT+=(this.viewTarget-this.viewT)*(1-Math.exp(-7*i)),this.updateCamera());let r=1-.65*this.viewT,s=this.reduceMotion?0:Math.sin(t*.6)*.1,a=(this.pointer.x*.6+s)*r,o=this.pointer.y*.1;this.rot.y+=(a-this.rot.y)*.06,this.rot.x+=(o-this.rot.x)*.06,this.photo||(this.rig.rotation.y=this.rot.y,this.rig.rotation.x=this.rot.x),this.renderer.render(this.scene,this.camera)}};function nM(){try{let n=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(n.getContext("webgl2")||n.getContext("webgl")))}catch{return!1}}function Nd(){let n=document.querySelector("[data-nnp-stage]");if(!n)return;if(!nM()){n.setAttribute("hidden","");return}let e=JSON.parse(n.getAttribute("data-fonts")||"[]");if(!e.length)return;let t=document.querySelector("[data-personalization-input]"),i=Array.from(document.querySelectorAll("[data-nnp-font]")),r=document.querySelector("[data-nnp-font-field]"),s=new nh(n,{fonts:e});/nnpdebug/.test(location.search)&&(window.__nnp=s),n.classList.add("is-ready");let a=()=>{let g=document.querySelector("[data-color-chips] .is-selected");if(g)return Rd(g.getAttribute("data-color-value"));let v=document.querySelector(".product__option--color select");return Rd(v?v.value:"gold")},o=g=>{i.forEach(v=>{v.querySelector("[data-nnp-sample]").textContent=g||n.dataset.sample||"Name"})},l=g=>{i.forEach(m=>{let p=m.getAttribute("data-nnp-font")===g;m.classList.toggle("is-selected",p),m.setAttribute("aria-checked",p?"true":"false")});let v=e.find(m=>m.id===g);r&&v&&(r.value=v.label),s.update({fontId:g})};i.forEach(g=>g.addEventListener("click",()=>l(g.getAttribute("data-nnp-font"))));let c,h=()=>{let g=t?t.value:"";o(g),clearTimeout(c),c=setTimeout(()=>s.update({text:g}),60)};t&&t.addEventListener("input",h);let f=()=>setTimeout(()=>s.update({metal:a()}),0);document.addEventListener("click",g=>{g.target.closest("[data-color-chips]")&&f()}),document.addEventListener("change",g=>{g.target.closest(".product__option")&&f()}),s.applyMetal(a());let u=n.querySelector("[data-nnp-view-toggle]");u&&u.addEventListener("click",()=>{let g=u.getAttribute("aria-pressed")!=="true";u.setAttribute("aria-pressed",g?"true":"false"),u.textContent=g?"Worn view":"Close-up",s.setView(g)});let d=e.find(g=>g.id===n.dataset.defaultFont)||e[0];l(d.id),h()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Nd):Nd();})();
