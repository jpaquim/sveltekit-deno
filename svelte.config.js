// import adapter from 'npm:@sveltejs/adapter-auto';
import adapter from 'npm:svelte-adapter-deno';
import { vitePreprocess } from 'npm:@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter()
	}
};

export default config;
