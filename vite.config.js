import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: { 
		sourcemap: true,
		rollupOptions: {
			external: ['react-modal']
		}
	},
	resolve: {
		alias: {
			components: '/src/components',
			styles: '/src/styles',
			pages: '/src/pages',
			api: '/src/api',
			hooks: '/src/hooks',
			routes: '/src/routes',
			constants: '/src/constants',
		}
	}
});





