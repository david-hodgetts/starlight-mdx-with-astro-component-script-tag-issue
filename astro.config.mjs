import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'issue repro project',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
		}),
	],
});
