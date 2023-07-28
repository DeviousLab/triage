import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
		}),
		tailwind(),
	],
});
