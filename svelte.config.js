
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
 // Consult https://github.com/sveltejs/svelte-preprocess
 // for more information about preprocessors
 preprocess: preprocess(),

 kit: {
  adapter: adapter({
	paths: {
		base: dev ? '' : '/aapolaivm.github.io/src/app.html'
	},
    pages: 'build',
    assets: 'build',
    fallback: null
  })
 }
};

export default config;
