# AstroDev — Minecraft Developer Portfolio

A personal portfolio for AstroDev, built with Vite, React, TypeScript, Tailwind CSS and Framer Motion. The site showcases Minecraft development and configuration work, server infrastructure, selected projects and contact details.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

## Install dependencies

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Vite.

## Build for production

```bash
npm run build
npm run preview
```

## Portfolio content

- `src/components/Hero.tsx` — profile image, introduction and headline
- `src/components/Experience.tsx` — skills and technologies
- `src/components/Projects.tsx` — Horizon SMP, SMP Connect and AstroGG
- `src/components/Stats.tsx` — five years of Minecraft development experience
- `src/pages/Contact.tsx` — email and Discord contact details
- `src/components/Footer.tsx` — footer and contact information
- `src/index.css` — dark-purple theme and global styles
- `index.html` — SEO and social preview metadata

## Updating the profile image

The current profile image URL is set in `src/components/Hero.tsx` and `src/components/Header.tsx`, and is also used in the social preview metadata in `index.html`. For a permanent image, add the image to `public/` (for example `public/images/astrodev-avatar.webp`) and change these references to `/images/astrodev-avatar.webp`.

## Adding project links

The current project cards intentionally do not contain demo buttons because no public project URLs were supplied. Add verified URLs to `src/components/Projects.tsx` when they are ready to be shared.

## Testimonials

The testimonials section is currently disabled. Add genuine, approved feedback before enabling it.

## Deployment

Run `npm run build` and deploy the generated `dist/` directory to your static host. Configure the host to serve `index.html` for unknown routes so the `/contact` page works on refresh.
