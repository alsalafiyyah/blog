import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alsalafiyyah.github.io',
  base: '/blog',
  trailingSlash: 'always', 
  build: {
    format: 'directory' 
  }
});