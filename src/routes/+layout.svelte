<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<Header />
<main data-sveltekit-preload-data="hover">
	{@render children?.()}
</main>
<Footer />
