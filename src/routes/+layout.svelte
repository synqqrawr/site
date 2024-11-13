<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
	interface Props {
		children?: import('svelte').Snippet
	}

	let { children }: Props = $props()
</script>

<div class="layout" data-sveltekit-preload-data="hover" data-sveltekit-preload-code="hover">
	<Header />
	<main>
		{@render children?.()}
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1440px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		padding-inline: 1rem;
	}
</style>
