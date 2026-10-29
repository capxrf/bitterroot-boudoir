import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static output for Cloudflare Pages
export default defineConfig({
  site: 'https://bitterrootboudoir.com',
  output: 'static',
  compressHTML: true,
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
});
