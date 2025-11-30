import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
	root: 'src',
	plugins: [
		createHtmlPlugin({
			minify: {
				collapseWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				useShortDoctype: true,
				minifyCSS: true,
				minifyJS: true,
			},
		}),
	],
	build: {
		outDir: '../dist',
		emptyOutDir: true,
		minify: 'terser',
		sourcemap: false,
		rollupOptions: {
			output: {
				manualChunks: undefined, // Single JS file
				assetFileNames: 'assets/[name].[hash][extname]',
				entryFileNames: 'assets/[name].[hash].js',
			},
		},
	},
});
