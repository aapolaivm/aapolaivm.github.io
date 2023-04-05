
import preprocess from 'svelte-preprocess';
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
			entries: ['/lexmain/52hTouko', '/lexmain/52hJape', '/lexmain/52hTero', '/lexmain/52hAapo', '/lexmain/tyhja' ],
			handleMissingId: "warn",
		}
	}
};


export default config;
