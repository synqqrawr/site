<script lang="ts">
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import PageTransition from './transition.svelte'

	import '../app.css'

	export let data
</script>

<div class="layout h-full grid grid-rows-[auto_1fr_auto] px-4">
	<Header />
	<main class="break-words p-8">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
