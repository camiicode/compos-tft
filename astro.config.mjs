// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  base: '/compos-tft',
  build: {
    assets: 'assets',
  },
  vite: {
    build: {
      assetsDir: 'assets',
      cssCodeSplit: false,
    }
  }
});
