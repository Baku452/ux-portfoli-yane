# UX Portfolio

A static portfolio built with Astro. All content lives in the repository, so the site does not require a CMS, database, or server.

## Edit the portfolio

Update the homepage text and services in `src/content/homepage.ts`. Layout and styles live in `src/pages/index.astro`, and public assets belong in `public/`.

## Develop locally

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Open `http://localhost:4321`.

## Build and preview

```sh
npm run build
npm run preview
```

The production site is generated in `dist/` and can be deployed to any static host, including Cloudflare Pages, Netlify, or Vercel.

For Cloudflare Pages, use:

- Build command: `npm run build`
- Build output directory: `dist`
- Node.js version: `22.12.0` or newer
