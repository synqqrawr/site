<script lang="ts">
	import * as config from '$lib/config'
	// import Links from './links.svelte'
	import MingcuteUfo2Fill from '~icons/mingcute/ufo-2-fill'
</script>

<nav class="flex justify-between w-full items-center py-5">
	<a href="/" aria-label="Go back home." class="flex gap-1">
		<MingcuteUfo2Fill />
		<b>{config.title}.</b>
	</a>

	<ul class="mx-8 sm:flex hidden sm:gap-8 links" aria-label="List of pages to navigate to.">
		{#each config.links as link}
			<li><a href={link.href} target={link.target ?? '_self'}>{link.name ?? link.href}</a></li>
		{/each}
	</ul>

	<div class="flex">
		<div class="sm:hidden">
			<!-- <Links /> -->
		</div>
	</div>
</nav>

<style class="postcss">
	.links a {
		@apply text-inherit no-underline;
	}
</style>
