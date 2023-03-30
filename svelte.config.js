//import adapter from '@sveltejs/adapter-auto';
//import { vitePreprocess } from '@sveltejs/kit/vite';
//import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : '',
		},
		prerender: {

			handleMissingId: "warn",
		}
	}
};

export default config;
