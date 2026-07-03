# AADNA — Shopify Online Store 2.0 Theme

A minimalist-luxury jewelry theme (Online Store 2.0, JSON templates) built for the AADNA Shopify store. Style is inspired by clean, airy, product-forward jewelry ecommerce sites; all copy, images, and branding are AADNA's own (pulled from https://aadna.store).

## Structure
- `layout/` — theme.liquid, password.liquid
- `sections/` — header/footer, hero slideshow, featured collection, collection list, rich text, newsletter, press strip, product/collection/cart/page templates
- `snippets/` — product card, price, cart drawer, icons
- `config/settings_schema.json` — theme settings (colors, fonts, spacing all editable in the theme editor)
- `assets/theme.css`, `assets/theme.js` — original styling and interactivity (no third-party theme code)

## Deploy to your store
```
cd aadna-store-theme
npx @shopify/cli theme dev --store=your-store.myshopify.com   # live preview
npx @shopify/cli theme push --store=your-store.myshopify.com  # publish
```

## Next steps in the theme editor
- Upload the AADNA logo (IMG_0203.png) and favicon under Theme settings → Logo
- Swap the hero slideshow/collection fallback image URLs for real `image_picker` selections from your file library (fallbacks already point at your existing CDN images so it looks populated out of the box)
- Wire up the `main-menu` navigation and footer link lists in Shopify Admin → Navigation
- Connect real collections (Luna, Isla, Featured, Céleste, etc.) to the featured-collection and collection-list sections
