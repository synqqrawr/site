import { dev } from '$app/environment'

export const title = 'async'
export const description = 'Svelte blog by me'
export const url = dev ? 'https://localhost:5173' : 'https://synqq.pages.dev'
export const links = [
	{
		href: '/'
	},
	{
		href: '/notes'
	},
	{
		href: '/contact'
	},
	{
		href: '/about'
	},
	{
		href: '/rss.xml',
		target: '_blank'
	}
]

export const categories = {
	site: 'Site'
}
