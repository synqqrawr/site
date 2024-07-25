<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	export let data
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<section>
	<ul class="gap-8 grid divide-y [&:not(:last-child)]:pb-8">
		{#each data.posts as post}
			<li class="post" style="max-inline-size: 60ch;">
				<a href="/blog/{post.slug}" class="text-[clamp(2rem,9vw,3.5rem)] capitalize">{post.title}</a
				>
				<p class="text-neutral-400">{formatDate(post.date)}</p>
				<p class="mt-4">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
