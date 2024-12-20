import { fontFamily } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)'
			},
			fontFamily: {
				sans: [
					'Inter Variable',
					'-apple-system',
					'BlinkMacSystemFont',
					'avenir next',
					'avenir',
					'segoe ui',
					'helvetica neue',
					'helvetica',
					'Ubuntu',
					'roboto',
					'noto',
					'arial',
					'sans-serif',
					...fontFamily.sans
				]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}

export default config
