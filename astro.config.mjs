import { defineConfig } from 'astro/config';

// Static output for Cloudflare Pages
export default defineConfig({
  site: 'https://bitterrootboudoir.com',
  output: 'static',
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});
