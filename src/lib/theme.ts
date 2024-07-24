import { writable } from 'svelte/store'
import { browser } from '$app/environment'

type Theme = 'light' | 'dark'

// we set the theme in `app.html` to prevent flashing
const userTheme = browser && localStorage.getItem('color-scheme')

// create the store
const darkMode = browser && window.matchMedia('(prefers-color-scheme: dark)')
export const theme = writable((userTheme ?? darkMode.matches) ? 'dark' : 'light')

if (browser) {
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (evt) => {
		if (!userTheme) {
			const isDarkMode = darkMode.matches
			theme.update((currentTheme) => {
				const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

				document.documentElement.setAttribute('data-color-scheme', newTheme)
			})
		}
	})
}

// update the theme
export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark'

		document.documentElement.setAttribute('data-color-scheme', newTheme)
		localStorage.setItem('color-scheme', newTheme)

		return newTheme
	})
}

// set the theme
export function setTheme(newTheme: Theme) {
	theme.set(newTheme)
}
