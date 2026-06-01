# Streaming Anime Gratis — Portal

Portal streaming anime gratis tanpa login. Built with Next.js 14 App Router + React 18 + TailwindCSS + Framer Motion.

## Struktur

```
/app
  layout.tsx
  page.tsx
  loading.tsx
  globals.css
/components
  LogoHero.tsx
  PortalCard.tsx
/config
  links.ts          <- ubah semua URL di sini
/types
  index.ts
/public
  favicon.svg
package.json
tailwind.config.ts
postcss.config.mjs
next.config.mjs
tsconfig.json
```

## Install

```bash
npm install
# atau: pnpm install / bun install / yarn
```

## Run dev

```bash
npm run dev
```

## Build & Deploy ke Vercel

```bash
npm run build
```

Push ke GitHub, lalu import di [vercel.com](https://vercel.com). Tidak butuh env var.

## Ubah URL

Edit `config/links.ts`:

```ts
export const LINKS = {
  MAIN_SERVER: "https://...",
  BACKUP_SERVER: "https://...",
  WHATSAPP_GROUP: "https://chat.whatsapp.com/...",
};
```
