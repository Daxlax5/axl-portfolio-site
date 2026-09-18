import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the final custom domain once it is live.
const site = 'https://axl-portfolio-site.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  adapter: vercel(),
  // No trailing slash, so /workflows/ig-scraper matches the cleanUrls behaviour
  // of the original static deployment.
  trailingSlash: 'never',
  integrations: [
    sitemap({
      // The OG image is an endpoint, not a page, and never belongs in the sitemap.
      filter: (page) => !page.endsWith('/og.png'),
    }),
  ],
});
