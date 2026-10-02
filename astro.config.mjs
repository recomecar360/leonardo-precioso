// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://leonardoprecioso.com.br',
	trailingSlash: 'never',
	integrations: [sitemap()],
	build: {
		// Explicitly enable automatic inlining of critical stylesheets
		inlineStylesheets: 'auto',
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
