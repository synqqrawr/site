<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	export let data
</script>

<title>{config.title}</title>

<section>
	<ul class="gap-8 grid divide-y [&:not(:last-child)]:pb-8">
		{#each data.posts as post}
			{#if !data.tags || (data.tags && post.categories.some((item) => data.tags?.includes(item)))}
				<li class="post" style="max-inline-size: 60ch;">
					<a href="/notes/{post.slug}" class="text-5xl capitalize">{post.title}</a>
					<p class="text-neutral-400">{formatDate(post.date)}</p>
					<div class="tags">
						{#each post.categories as category}
							<a
								class="dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-100 text-neutral-800"
								href="/notes?tags={category}"
							>
								<span>&num;{category}</span>
							</a>
						{/each}
					</div>
					<p>{post.description}</p>
				</li>
			{/if}
		{/each}
	</ul>
</section>

<style>
	.tags {
		@apply flex gap-4;
	}

	.tags > * {
		@apply py-2 px-4;
		border-radius: 1e5px;
	}
</style>
