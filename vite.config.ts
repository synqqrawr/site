import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import lightningcss from 'vite-plugin-lightningcss'

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		lightningcss({
			browserslist: '>= 0.25%'
		})
	]
})
