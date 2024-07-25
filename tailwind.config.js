/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
		fontFamily: {
			sans: ['Manrope', 'sans-serif'],
			monospace: ['JetBrains Mono', 'monospace']
		}
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: ['selector', "[data-mode='dark']"]
}
