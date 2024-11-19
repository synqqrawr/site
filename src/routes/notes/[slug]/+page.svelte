<script lang="ts">
	import { formatDate } from '$lib/utils'

	let { data } = $props()
</script>

<!-- SEO -->
<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
	<!-- Title -->
	<hgroup>
		<h1>{data.meta.title}</h1>
		<p style="margin-top: 1.1rem; margin-bottom: 0.1rem;">
			Published at {formatDate(data.meta.date)}
		</p>
		{#if data.meta.lastUpd}
			<p style="margin-top: 0.1rem; margin-bottom: 1.1rem;">
				Last updated at {formatDate(data.meta.lastUpd)}
			</p>
		{/if}
    tags::{#each data.meta.tags as tag}
      &nbsp<a href="/notes/tags/{tag}">{tag}</a>
    {/each}
	</hgroup>

	<!-- Post -->
	<div class="prose">
		<data.content />
	</div>
</article>

<style>
	h1 {
		text-transform: capitalize;
	}

	hgroup p {
		color: var(--text-2);
	}
</style>
