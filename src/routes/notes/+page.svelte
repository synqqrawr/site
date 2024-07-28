<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	export let data
</script>

<title>{config.title}</title>

<section>
	<ul class="gap-8 grid divide-y [&:not(:last-child)]:pb-8">
		{#each data.posts as post}
			<li class="post" style="max-inline-size: 60ch;">
				<hgroup>
					<h1 class="text-5xl capitalize"><a href="/notes/{post.slug}">{post.title}</a></h1>
					<p class="mt-2 text-neutral-700 dark:text-neutral-100">{formatDate(post.date)}</p>
				</hgroup>
				<div class="tags flex gap-4 mb-4">
					{#each post.categories as category}
						<a
							class="dark:bg-neutral-800 dark:text-neutral-50 bg-neutral-100 text-neutral-800"
							href="/notes/categories/{category}"
						>
							<span>&num;{category}</span>
						</a>
					{/each}
				</div>
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
