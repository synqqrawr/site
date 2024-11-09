<script lang="ts">
	import * as config from '$lib/config'
	import { formatDate } from '$lib/utils'
	let { data } = $props()
</script>

<title>{config.title}</title>

<svelte:head>
	<meta name="description" content={config.description} />
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<h2><a href="/notes/{post.slug}">{post.title}</a></h2>
				<p class="date">{formatDate(post.date)}</p>
				<p class="description">{post.description}</p>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post {
		max-inline-size: 60ch;
	}

	.post:not(:global(:last-child)) {
		border-bottom: 1px solid var(--border);
		padding-bottom: 3rem;
	}
	.date {
		color: var(--text-2);
	}

	.description {
		margin-top: 1.25rem;
	}
</style>
