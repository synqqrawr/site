<script lang="ts">
	import Header from './header.svelte'
	import Footer from './footer.svelte'

	import '../app.css'
</script>

<div class="layout h-full grid grid-rows-[auto_1fr_auto] px-4">
	<Header />
	<main class="break-words p-8">
		<slot />
	</main>
	<Footer />
</div>
