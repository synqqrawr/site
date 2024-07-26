import type { Post } from '$lib/types'

export async function load({ params, url, fetch }) {
	const response = await fetch('notes/api/posts')
	const posts: Post[] = await response.json()
	const tags = url.searchParams.get('tags')

	return { posts, tags }
}

// export async function load({ params, url }) {
//     let lang = url.searchParams.get('lang');
//     let q = url.searchParams.get('q');
//     return { lang, q };
// }
