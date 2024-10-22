<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content="${data.meta.descritpion}" />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1 class="text-5xl capitalize">{data.meta.title}</h1>
		<p class="mt-2 text-neutral-400">Published at {formatDate(data.meta.date)}</p>
		{#if data.meta.lastUpd}
			<p class="text-neutral-400">Updated on {formatDate(data.meta.lastUpd)}</p>
		{/if}
	</hgroup>

	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	.tags > * {
		@apply py-2 px-4;
		border-radius: 1e5px;
	}
</style>
