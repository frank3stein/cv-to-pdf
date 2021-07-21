import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import css from 'rollup-plugin-css-only';
import json from '@rollup/plugin-json';
// import postcss from 'rollup-plugin-postcss';
import sveltePreprocess from 'svelte-preprocess';
import { postcss } from 'svelte-preprocess';
import postCssImport from 'postcss-import';
import cssEnv from 'postcss-preset-env';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let server;

	function toExit() {
		if (server) server.kill(0);
	}

	return {
		writeBundle() {
			if (server) return;
			server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/main.js',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		// postcss({
		// 	plugins: [
		// 		require('postcss-import')({}),
		// 		require('postcss-preset-env')({
		// 			// stage: 0,
		// 			features: {
		// 			"nesting-rules": true,
		// 			"custom-properties": true
		// 			},
		// 			browsers: "last 2 versions"
		// 		}),
		// 		require('cssnano')()
		// 	]
		// }),
		svelte({
			compilerOptions: {
				// enable run-time checks when not in production
				dev: !production
			},

			preprocess: sveltePreprocess({
				sourceMap: !production,
				// postcss: true
				postcss: {
					plugins: [
						require('postcss-import')({}),
						require('postcss-preset-env')({
							// stage: 0,
							features: {
							"nesting-rules": true,
							"custom-properties": true
							},
							browsers: "last 2 versions"
						}),
						require('cssnano')()
					]
				}
			}),


			// preprocess: sveltePreprocess({
			// 	// postcss: true,
			// 	postcss: { plugins: [postCssImport(), cssEnv({
			// 		stage: 0,
			// 		features: {
			// 		  "nesting-rules": true,
			// 		  "custom-properties": true
			// 		},
			// 		browsers: "last 2 versions"
			// 	  })] },
			// 	configFilePath: 'postcss.config.js'
			//   }),

			// working preprocess
			// preprocess: {
			// 	style: ({ content, attributes }) => {
			// 		if (attributes.type !== 'text/postcss') {
			// 			return;
			// 		};
				
			// 		// Plugins List: 
			// 		// https://github.com/postcss/postcss/blob/master/docs/plugins.md
			// 		const plugins = [
			// 			require('postcss-import'),
			// 			require('postcss-preset-env')
			// 		];
			// 		return postcss(plugins)
			// 			.process(content, { 
			// 				from: 'src', 
			// 				map: { inline: false } 
			// 			})
			// 			.then((result) => ({
			// 				code: result.css.toString(),
			// 				map: result.map.toString()
			// 			}));
			// 	}
			// },

			// preprocess:[
			// 	postcss({
			// 		plugins: [
			// 			postCssImport(),
			// 			cssEnv({
			// 				// stage: 0,
			// 				// features: {
			// 				// 	"nesting-rules": true,
			// 				// 	"custom-properties": true
			// 				// },
			// 				// browsers: "last 2 versions"
			// 			}),
			// 			// require('postcss-import')({}),
			// 			// require('postcss-preset-env')({
			// 			// 	// stage: 0,
			// 			// 	features: {
			// 			// 	"nesting-rules": true,
			// 			// 	"custom-properties": true
			// 			// 	},
			// 			// 	browsers: "last 2 versions"
			// 			// }),
			// 			// require('cssnano')()
			// 		].filter( plugin => plugin)
			// 	})
			// ]


		}),


		// we'll extract any component CSS out into
		// a separate file - better for performance
		css({ output: 'bundle.css' }),



		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		json(),

		// In dev mode, call `npm run start` once
		// the bundle has been generated
		!production && serve(),

		// Watch the `public` directory and refresh the
		// browser on changes when not in production
		!production && livereload('public'),

		// If we're building for production (npm run build
		// instead of npm run dev), minify
		production && terser()
	],
	watch: {
		clearScreen: false
	}
};
