import { minify } from 'html-minifier'
import { building } from '$app/environment'
import type { Handle } from '@sveltejs/kit'

const minification_options = {
	collapseBooleanAttributes: true,
	collapseWhitespace: true,
	conservativeCollapse: true,
	decodeEntities: true,
	html5: true,
	ignoreCustomComments: [/^#/],
	minifyCSS: true,
	minifyJS: true,
	removeAttributeQuotes: true,
	removeComments: false, // some hydration code needs comments, so leave them in
	removeOptionalTags: true,
	removeRedundantAttributes: true,
	removeScriptTypeAttributes: true,
	removeStyleLinkTypeAttributes: true,
	sortAttributes: true,
	sortClassName: true
}

export const handle: Handle = async ({ event, resolve }) => {
	let page = ''

	const response = await resolve(event, {
		preload: ({ type }) => type === 'font' || type === 'js' || type === 'css',

		transformPageChunk: ({ html, done }) => {
			page += html
			if (done) {
				return building ? minify(page, minification_options) : page
			}
		}
	})

	return response
}
