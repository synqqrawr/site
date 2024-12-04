<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<div data-sveltekit-preload-data="hover">
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>
