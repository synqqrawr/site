import type { Post } from '$lib/types'
import { error } from '@sveltejs/kit'
import * as config from '$lib/config'

export async function load({ fetch, params }) {
	const response = await fetch('/notes/api/posts')
	const posts: Post[] = await response.json()

	if (!config.categories[params.category]) {
		error(404, 'Category does not exist')
	}

	return { posts: posts.filter((obj) => obj.categories.includes(params.category)) }
}
