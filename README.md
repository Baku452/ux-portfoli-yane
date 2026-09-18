# UX Portfolio

A static portfolio built with Astro. All content lives in the repository, so the site does not require a CMS, database, or server.

## Edit the portfolio

Update the homepage text and services in `src/content/homepage.ts`. Layout and styles live in `src/components/` and `src/layouts/`; public assets belong in `public/`.

For a non-technical walkthrough of adding projects and case studies in both languages, see [Guía de Proyectos y Casos de Estudio](GUIA_PROYECTOS_Y_CASOS.md).

## Develop locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev -- --background
```

Open `http://localhost:4321`.
Use `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop` to manage the background server.

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/` and can be deployed to any static host, including Cloudflare Pages, Netlify, or Vercel.

## Icons

The site uses Hugeicons through Astro Icon. Import the component and reference an icon with the `hugeicons:` prefix:

```astro
---
import { Icon } from "astro-icon/components";
---

<Icon name="hugeicons:arrow-up-right-01" size={16} />
```

Browse the Hugeicons collection on the Iconify website to find icon names.

For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0` or newer
