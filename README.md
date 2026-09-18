# axlcabunoc.com portfolio

Personal site built with [Astro](https://astro.build). Static output, deployed on Vercel from `main`.
Live at https://axl-portfolio-site.vercel.app.

The design is intentional and fixed: white background, Instrument Sans only, one blue for links, a
680px left-aligned column, 1px dividers, no cards, shadows, gradients, or animations. Dark mode follows
`prefers-color-scheme`. All of it lives in `src/styles/global.css`; components carry no styles of their own.

## Commands

| Command           | What it does                                          |
| ----------------- | ----------------------------------------------------- |
| `npm install`     | Install dependencies (Node 22.12 or newer)            |
| `npm run dev`     | Dev server at http://localhost:4321                   |
| `npm run build`   | Production build to `dist/` and `.vercel/output/`     |
| `npm run preview` | Serve the production build locally                    |
| `npm run check`   | Type-check components and validate content frontmatter |

## Project structure

```
astro.config.ts          site URL, Vercel adapter, sitemap, markdown settings
vercel.json              { "cleanUrls": true }
public/
  Axl-Cabunoc-Resume.pdf served as-is at /Axl-Cabunoc-Resume.pdf
  favicon.svg
src/
  assets/workflows/      n8n canvas screenshots (WebP), one per automation entry
  content/
    work/                Selected work entries (.md)
    automation/          Workflow gallery entries (.md)
  content.config.ts      zod schemas for both collections; bad frontmatter fails the build
  data/
    site.ts              name, tagline, bio, email, links, location, section intros
    experience.ts        roles shown in Experience
    skills.ts            rows shown in Skills
  styles/global.css      the entire stylesheet
  components/
    Layout.astro         <html>, head (meta, Open Graph, JSON-LD, font preload), header, footer
    Header.astro         name and section nav
    Section.astro        <section id><h2> plus optional intro paragraph
    WorkItem.astro       one Selected work entry
    WorkflowItem.astro   one gallery entry, title linked to its page
    Experience.astro     Experience rows from data/experience.ts
    Skills.astro         Skills list from data/skills.ts
    Footer.astro
  pages/
    index.astro          home page
    workflows/[slug].astro  one page per automation entry
    og.png.ts            Open Graph card, rendered at build time with satori
    robots.txt.ts
```

Generated at build time: `sitemap-index.xml`, `robots.txt`, `og.png`, and optimised images with
`srcset` and explicit width/height.

## Adding a workflow entry

1. Drop the screenshot into `src/assets/workflows/`, for example `invoice-parser.webp`.
2. Create `src/content/automation/invoice-parser.md`. The file name becomes the URL:
   `/workflows/invoice-parser`.

```md
---
title: Invoice parser
status: In production          # optional, shows the green pill
subtitle: Version two          # optional, grey line under the title
tools:
  - n8n
  - Claude
  - Google Drive
image: ../../assets/workflows/invoice-parser.webp
alt: "n8n canvas for the invoice parser: Drive trigger, Claude extraction, Sheets append"
order: 14                      # position in the gallery, lowest first
---
One paragraph describing what the workflow does. This is the description shown in the gallery
and on the workflow page, and the first sentence becomes the page's meta description.
```

3. Run `npm run build`. Missing or empty fields, a wrong image path, or a non-integer `order`
   stop the build with a message naming the file.

Selected work entries in `src/content/work/` work the same way with `title`, `subtitle` (required),
optional `status`, `tools`, and `order`, and no image.

## Editing the rest

- Intro copy, links, and section intros: `src/data/site.ts`
- Experience and skills: `src/data/experience.ts`, `src/data/skills.ts`
- Final domain: change `site` in `astro.config.ts`. The sitemap, canonical URLs, Open Graph URLs,
  and robots.txt all derive from it.

## Deploying

Vercel detects Astro and the `@astrojs/vercel` adapter, so no build settings are needed. Clean URLs
with no trailing slash come from `trailingSlash: 'never'` in the Astro config and `cleanUrls` in
`vercel.json`.
