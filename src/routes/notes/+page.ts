import type { Posts } from '$lib/types'

export async function load({ fetch }) {
	const response = await fetch('notes/api/posts')
	const posts: Posts[] = await response.json()

	return { posts }
}
