import { error } from '@sveltejs/kit'

export async function load({ url }) {
	try {
		const post = await import(`./page.md`)

		return {
			content: post.default
		}
	} catch (e) {
		error(404)
	}
}
