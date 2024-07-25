import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'light' | 'dark'

// create the store
export const theme = writable(
	browser &&
		((localStorage.getItem('color-scheme') ??
		window.matchMedia('(prefers-color-scheme: dark)').matches)
			? 'dark'
			: 'light')
)

if (browser) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => {
		if (!localStorage.getItem('color-scheme')) {
			const isDarkMode = evt.matches
			theme.update(() => {
				const newTheme = isDarkMode ? 'dark' : 'light'

				document.documentElement.setAttribute('data-mode', newTheme)

				return newTheme
			})
		}
	})
}

// update the theme
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

		document.documentElement.setAttribute('data-mode', newTheme)
		localStorage.setItem('color-scheme', newTheme)

		return newTheme
	})
}

// set the theme
export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}
