import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex, escapeSvelte } from 'mdsvex'
import { createHighlighter } from 'shiki'

import remarkUnwrapImages from 'remark-unwrap-images'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['one-dark-pro', 'one-light'],
				langs: ['javascript', 'typescript']
			})
			await highlighter.loadLanguage('javascript', 'typescript')
			const html = escapeSvelte(
				highlighter.codeToHtml(code, {
					lang,
					themes: { dark: 'one-dark-pro', light: 'one-light' },
					defaultColor: 'light',
					cssVariablePrefix: '--shiki-',
					defaultColor: false
				})
			)
			return `{@html \`${html}\` }`
		}
	},
	remarkPlugins: [remarkUnwrapImages, [remarkToc, { tight: true }]],
	rehypePlugins: [rehypeSlug],
	layout: {
		_: './src/mdsvex.svelte'
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: {
		adapter: adapter({
			fallback: '404.html',
			precompress: true,
			strict: true
		})
	},
	alias: {
		utils: '$lib/utils',
		components: '$lib/components'
	}
}

export default config
