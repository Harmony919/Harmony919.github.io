# Stressless spec sheets

Drop the official Stressless PDF brochures into this folder.

## Naming convention

Use the product **slug** as the filename, lowercase, with `.pdf` extension:

- `emily.pdf`        → Stressless Emily sofa
- `mary.pdf`         → Stressless Mary sofa
- `mayfair.pdf`      → Stressless Mayfair recliner
- `mayfair-power.pdf`→ Stressless Mayfair power recliner
- `wing.pdf`         → Stressless Wing recliner

The slug for each product is defined in `src/data/stresslessProducts.ts`
(the `slug` field — NOT `seoSlug`).

## Wiring it to the product page

After dropping a PDF in here, set `pdfUrl` on that product entry, e.g.:

```ts
{
  slug: "emily",
  // ...
  pdfUrl: "/stressless-pdfs/emily.pdf",
}
```

The "Download spec sheet" button will appear automatically. Products
without a `pdfUrl` simply don't show the button — no broken links.
