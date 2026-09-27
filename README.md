# Stay Dry website

Static Astro site for Stay Dry (damp surveying & damp proofing, near Skipton). No database: `npm run build` outputs plain HTML/CSS/JS in `dist/`.

## Getting started

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production build into dist/
npm run preview  # serve the built site locally
```

Requires Node 18.20.8+, 20.3+ or 22+. `package.json` pins `astro@^5`. Upgrade to a newer major when you're ready.

> **Build status:** This was written in a workspace that couldn't install npm packages, so it hasn't been through `astro build` yet. Pages were checked with a simple preview script instead. Please run `npm install && npm run dev` first and report any errors.

## Structure

```
public/                 served as-is
  favicon.svg           browser tab icon (droplet option)
  favicon-32.png, apple-touch-icon.png
  fonts/                Poppins 500 + 700 (Latin subset, self-hosted, SIL OFL)
  images/               logos (webp + png) and the alternative "SD" icon
src/
  data/site.json        ← phone, WhatsApp, email, areas, accreditation: edit once, used everywhere
  styles/global.css     all styles, design tokens at the top (colours, type, spacing)
  layouts/BaseLayout.astro   <head>, SEO meta, header/footer wrapper
  components/           Header, Footer, MobileActionBar, Icon
  pages/                one file per page (index, style-guide, …)
```

## Design tokens

| Token | Value | Use |
| --- | --- | --- |
| `--purple` | #5F00D1 | brand purple: buttons, links |
| `--purple-light` | #7A1BEA | accents |
| `--ink` | #0A0028 | headings, dark sections |
| `--lilac-100` / `--lilac-50` | #F4EEFF / #FAF7FF | soft backgrounds |

Headings use Poppins and body text uses the system font stack (fast, no extra download).

## Notes

- **Styling:** plain modern CSS with custom properties, not Tailwind. Tailwind couldn't be installed in the build workspace. It can be added later with `npx astro add tailwind` if you prefer.
- **Style guide:** `/style-guide/` is an internal reference page (set to `noindex`). Delete `src/pages/style-guide.astro` before launch if you don't want it live.
- **Browser tab icon:** the droplet is the current icon. To use the SD monogram instead, replace `public/favicon.svg` with `public/images/favicon-sd-alt.svg`, and regenerate the PNG versions.
- **Fonts** are WOFF. You can convert them to WOFF2 for slightly smaller files.
- **Placeholders** marked `[TO CONFIRM]` or `XXX` must be filled in before launch: phone number, WhatsApp number, accreditation name and number (all in `src/data/site.json`).
