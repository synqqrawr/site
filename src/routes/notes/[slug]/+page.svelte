<script lang="ts">
	import { formatDate } from '$lib/utils'

	export let data
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta name="description" content={data.meta.descritpion} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1 class="text-5xl capitalize">{data.meta.title}</h1>
		<p class="mt-2 text-neutral-400">Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags flex gap-4 mb-4">
		{#each data.meta.categories as category}
			<a
				class="dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-100 text-neutral-800"
				href="/notes/categories/{category}"
			>
				<span>&num;{category}</span>
			</a>
		{/each}
	</div>

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
