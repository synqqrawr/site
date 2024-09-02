<script lang="ts">
	import '../app.css'

	import Header from './header.svelte'
	import Footer from './footer.svelte'
</script>

<div class="layout h-full grid grid-rows-[auto_1fr_auto] px-4" style="max-inline-size:1440px;">
	<Header />
	<main class="break-words">
		<slot />
	</main>
	<Footer />
</div>
