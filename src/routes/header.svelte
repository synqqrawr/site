<script lang="ts">
	import * as config from '$lib/config'
	import Toggle from './toggle.svelte'
</script>

<nav class="flex justify-between w-full items-center py-5">
	<a href="/" aria-label="Go back home.">
		<b>{config.title}</b>
	</a>

	<ul class="mx-8 sm:flex hidden sm:gap-8 links" aria-label="List of pages to navigate to.">
		<li><a href="/blog">/blog</a></li>
		<li><a href="/about">/about</a></li>
		<li><a href="/contact">/contact</a></li>
		<li><a href="/rss.xml" target="_blank">/rss.xml</a></li>
	</ul>

	<Toggle />
</nav>

<style class="postcss">
	.links a {
		@apply text-inherit no-underline;
	}
</style>
