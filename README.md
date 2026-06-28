# Gharib Analytics

A client-facing single-page website for Gharib Analytics, built with Next.js, TypeScript, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deploy To Vercel

1. Push this folder to a GitHub repository.
2. Import the repository in Vercel.
3. Use the default Next.js settings.
4. Add your final domain in Vercel.
5. Update `siteConfig.siteUrl` in `src/data/siteConfig.ts` to match the production domain.

## Where To Update Content

- Brand, headline metadata, CTAs, socials, email, Calendly, form endpoint, profile image paths: `src/data/siteConfig.ts`
- Service support items shown inside the value section: `src/data/services.ts`
- Tools, expertise, and metrics: `src/data/tools.ts`
- Interactive value examples: `src/data/valueUnlocks.ts`

## Where To Add Assets

- Profile photos: `public/images/profile`
- CV or downloadable files: `public/files`

After adding an image, update the matching path in `src/data/siteConfig.ts`.

## Current Placeholders To Confirm

- Final production domain in `siteConfig.siteUrl`
- Calendly or booking URL in `siteConfig.contact.calendlyUrl`
- Contact form endpoint in `siteConfig.contact.contactFormEndpoint`
- Public email address in `siteConfig.contact.email`
- Optional public phone number in `siteConfig.contact.phone`
- Whether the CV should remain downloadable on the client-facing site

## Recommended Next Improvements

- Add 1-2 compact proof points or client outcomes once you can name them without breaching confidentiality.
- Add a real contact form endpoint before launch.
- Connect analytics only after choosing the analytics tool.
