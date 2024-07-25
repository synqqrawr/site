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
		<h1 class="text-5xl">{data.meta.title}</h1>
		<p>Published at {formatDate(data.meta.date)}</p>
	</hgroup>

	<!-- Tags -->
	<div class="tags">
		{#each data.meta.categories as category}
			<span class="dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-100 text-neutral-800"
				>&num;{category}</span
			>
		{/each}
	</div>

	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: 60ch;
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}

	h1 + p {
		@apply mt-2;
	}

	.tags {
		@apply flex gap-4 my-4;
	}

	.tags > * {
		@apply py-2 px-4;
		border-radius: 1e5px;
	}
</style>
