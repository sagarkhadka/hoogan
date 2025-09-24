import { defineConfig } from 'vite'

export default defineConfig({
	build: {
		lib: {
			entry: 'lang.js',
			formats: ['iife'],
			name: 'LangBundle',
		},
		outDir: './',
		rollupOptions: {
			output: {
				entryFileNames: 'lang.bundle.js',
			},
		},
	},
})
