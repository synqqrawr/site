<script lang="ts">
	import * as config from '$lib/config'
	let { data } = $props()
</script>

<title>{config.title}</title>

<svelte:head>
	<meta name="description" content={config.description} />
</svelte:head>

<!-- Posts -->
<section>
	<ul class="posts">
		{#each data.tags as tags}
			<li class="post">
				<h1><a href="tags/{tags}">{tags}</a></h1>
			</li>
		{/each}
	</ul>
</section>

<style>
	.posts {
		display: grid;
		gap: 2rem;
	}

	.post:not(:global(:last-child)) {
		border-bottom: 1px solid var(--border);
		padding-bottom: 3rem;
	}
</style>
