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
				<a href="/notes/{post.slug}" class="text-5xl capitalize">{post.title}</a>
				<p class="text-neutral-400">{formatDate(post.date)}</p>
				<p class="mt-4">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>
