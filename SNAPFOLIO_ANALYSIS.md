# SnapFolio Analysis

The existing `SnapFolio/SnapFolio` folder is a BootstrapMade static portfolio template. It contains useful personal proof material, but it is not yet structured like a launch-ready consulting website.

## What Was Useful

- Real profile imagery and project thumbnails were available under `assets/img`.
- The existing copy showed credible analytics experience across public sector, healthcare, media, marketing, SQL, Python, Power BI, Tableau, automation, and stakeholder work.
- The GitHub and LinkedIn links were already present.
- Five personal projects had enough detail to become proof-of-work cards.

## Main Launch Risks Found

- The site was portfolio/resume-first rather than client-conversion-first.
- SEO metadata was empty or template-based.
- Several pages still carried template names, comments, and footer wording.
- The main CTA was split between "View My Work" and "Get In Touch" rather than one clear action.
- Contact links included a broken email href and a PHP form that would not work on Vercel without backend setup.
- Some content looked placeholder-like or inconsistent, including education entries and hidden testimonials.
- Portfolio HTML had malformed closing markup in the last item.
- The template relied on many front-end vendor scripts that are unnecessary for a focused first launch.

## How The New Site Responds

- The root project is now a Next.js, TypeScript, and Tailwind app.
- Client-facing content is service-first and points visitors toward "Request a Free Data Audit."
- Editable content is centralised under `src/data`.
- Sections are split under `src/sections` and reusable UI is under `src/components`.
- The original SnapFolio folder remains untouched as reference material.
