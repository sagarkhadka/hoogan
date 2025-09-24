import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: './js/lang.js',
			formats: ['iife'],
			name: 'LangBundle',
		},
		outDir: './dist',
		rollupOptions: {
			output: {
				entryFileNames: 'lang.bundle.js',
			},
		},
	},
})
