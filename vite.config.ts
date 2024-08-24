import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { enhancedImages } from '@sveltejs/enhanced-img'
import Icons from 'unplugin-icons/vite'
import lightningcss from 'vite-plugin-lightningcss'

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit(),
		Icons({
			compiler: 'svelte'
		}),
		lightningcss({
			browserslist: '>= 0.25%'
		})
	]
})
