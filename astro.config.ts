import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

// TODO: replace with the final custom domain once it is live.
const site = 'https://axl-portfolio-site.vercel.app';

export default defineConfig({
  site,
  output: 'static',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  // No trailing slash, so /workflows/instagram-lead-scraper matches the
  // cleanUrls behaviour of the original static deployment.
  trailingSlash: 'never',
  markdown: {
    // Keep straight quotes and hyphens exactly as written in the .md files.
    processor: satteri({ features: { smartPunctuation: false } }),
  },
  integrations: [
    sitemap({
      // The OG image and robots.txt are endpoints, not pages.
      filter: (page) => !page.endsWith('/og.png') && !page.endsWith('/robots.txt'),
    }),
  ],
});
