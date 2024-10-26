<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	export let data
</script>

<title>{config.title}</title>

<svelte:head>
	<meta name="description" content={config.description} />
</svelte:head>

<section>
	<ul class="gap-8 grid [&:not(:last-child)]:pb-8">
		{#each data.posts as post}
			<li class="post py-3" style="max-inline-size: 60ch;">
				<hgroup>
					<h1 class="text-5xl capitalize"><a href="/notes/{post.slug}">{post.title}</a></h1>
					<p class="mt-2 text-neutral-700 dark:text-neutral-400">{formatDate(post.date)}</p>
					{#if post.lastUpd}
						<p class="mb-2 text-neutral-700 dark:text-neutral-400">Updated on {formatDate(post.lastUpd)}</p>
					{/if}
				</hgroup>
				<div class="tags flex gap-4 mb-4"></div>
				<p>{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.tags > * {
		@apply py-2 px-4;
		border-radius: 1e5px;
	}
</style>
