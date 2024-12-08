import { dev } from '$app/environment'

export const title = "async's blog"
export const description = 'Svelte blog by me'
export const url = dev ? 'https://localhost:5173' : 'https://synqq.pages.dev'
export const tags = ['site'] as const
export const links = [
	{
		href: '/',
    label: '/'
	},
	{
		href: '/notes',
		label: '/n/'
	},
	{
		href: '/rss.xml',
		target: '_blank',
		label: '/rss/'
	}
]
