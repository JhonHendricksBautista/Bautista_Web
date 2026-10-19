// @ts-check
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User site vs project page: this repo is a GitHub *project* page, so it is
// served from https://<user>.github.io/<repo>/. The base path must match the
// repo name or all asset URLs break once deployed.
export default defineConfig({
  site: 'https://jhonhendricksbautista.github.io',
  base: '/Bautista_Web',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      // Mirrors the "@/*" alias in tsconfig.json.
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
