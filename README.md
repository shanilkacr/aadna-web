# AADNA — Shopify Online Store 2.0 Theme

A minimalist-luxury jewelry theme (Online Store 2.0, JSON templates) built for the AADNA Shopify store. Style is inspired by clean, airy, product-forward jewelry ecommerce sites; all copy, images, and branding are AADNA's own (pulled from https://aadna.store).

## Structure
- `layout/` — theme.liquid, password.liquid
- `sections/` — header/footer, hero, featured collection, collection list, rich text, newsletter, press strip, product/collection/cart/page/search templates
- `snippets/` — product card, price, cart drawer, logo, icons
- `templates/` — JSON templates for all storefront pages, plus customer account and gift card templates
- `config/settings_schema.json` — theme settings (colors, fonts, spacing all editable in the theme editor)
- `assets/theme.css`, `assets/theme.js` — styling and interactivity

## Deploy to your store
```bash
cd aadna-web
npx @shopify/cli theme dev --store=your-store.myshopify.com   # live preview
npx @shopify/cli theme push --store=your-store.myshopify.com  # publish
```

## Validate before publishing
```bash
cd aadna-web
npx @shopify/cli theme check
```

## Next steps in the theme editor
- Upload the AADNA logo and favicon under Theme settings → Logo
- Set hero, collection, and full-width video images from your file library
- Wire up the `main-menu` navigation and footer link lists in Shopify Admin → Navigation
- Connect real collections (Luna, Isla, Featured, Céleste, etc.) to the featured-collection and collection-list sections
