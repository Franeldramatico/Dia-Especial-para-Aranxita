// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://franeldramatico.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Dia-Especial-para-Aranxita/' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});