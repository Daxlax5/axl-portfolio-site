# CLAUDE.md

Personal portfolio for Axl Cabunoc. Astro 7, static output, deployed to Vercel from `main`.
Live at https://axl-portfolio-site.vercel.app. See README.md for the full project structure.

## Commands

- `npm install` (Node 22.12 or newer)
- `npm run dev` for the dev server at http://localhost:4321
- `npm run check` to type-check components and validate content frontmatter
- `npm run build` for the production build

Run `npm run check` and `npm run build` before calling any change done. Both must pass with zero
errors. A bad frontmatter field, a wrong image path, or a non-integer `order` fails the build, which
is intended.

## How to work in this repo

- Plan first. For anything beyond a copy edit, outline the steps before writing code.
- One logical change per commit, with a message that says what changed and why.
- Keep TypeScript strict (`astro/tsconfigs/strict`). No `any`, no disabled checks.
- Don't add dependencies, client-side JavaScript, or UI frameworks without asking first. The site
  ships zero client-side JavaScript beyond Vercel Analytics and Speed Insights.

## Design rules (fixed, do not change without asking)

- White background, Instrument Sans only (self-hosted), one blue for links.
- A 680px left-aligned column, 1px dividers. No cards, shadows, gradients, or animations.
- Dark mode follows `prefers-color-scheme` via the tokens on `:root` in `src/styles/global.css`.
- All styling lives in `src/styles/global.css`. Components carry no styles of their own.
- Text colours must meet WCAG AA contrast in both themes. Don't reintroduce font-swap layout shift;
  keep the metric-matched fallback font face.

## Content

- Copy lives in `src/content/` (markdown collections, schemas in `src/content.config.ts`) and
  `src/data/` (site, experience, skills). Don't hardcode copy in components.
- New workflow entry: add a WebP to `src/assets/workflows/` and a matching `.md` in
  `src/content/automation/`. The file name becomes the `/workflows/[slug]` URL.
- Markdown uses straight quotes and hyphens as written (smart punctuation is off).
- Writing style: plain, conversational prose. No em dashes, minimal hyphenation.
- Never put client names anywhere on the site. Describe each engagement by what the work was.
- Only mark an entry `status: In production` if it actually runs in production for a client. Don't
  add tools or claims that aren't backed by real work.

## Config notes

- `site` in `astro.config.ts` drives the sitemap, canonical URLs, Open Graph URLs, and robots.txt.
- `trailingSlash: 'never'` plus `cleanUrls` in `vercel.json` give clean URLs. Keep them in sync.
- The Open Graph image (`src/pages/og.png.ts`) and robots.txt are build-time endpoints and are
  excluded from the sitemap.
