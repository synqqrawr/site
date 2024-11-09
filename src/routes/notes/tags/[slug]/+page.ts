import type { Post } from '$lib/types'

export async function load({ fetch, params }) { // `tag` parameter is of type `tags`
	const response = await fetch('/notes/api/posts')
  console.log(params.slug)
	const posts: Post[] = await response.json()

	// Filter posts to only include those that contain the specified tag
	const filteredPosts = posts.filter(post => post.tags.includes(params.slug))

	return { posts: filteredPosts }
}
