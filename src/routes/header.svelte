<script lang="ts">
	import * as config from '$lib/config'
</script>

<nav>
	<a
		href="/"
		aria-label="Go back home."
		style="gap: 0.25rem; display: flex; padding-bottom: 1rem; font-size: 1.3rem;"
	>
		<b>{config.title} ._.</b>
	</a>

	<ul class="links" aria-label="List of pages to navigate to.">
		{#each config.links as link}
			<li><a href={link.href} target={link.target ?? '_self'}>{link.label ?? link.href}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		padding-block: 1rem;
		border-bottom: 1px solid var(--border);
	}

	.links {
		margin-block: 3rem;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	.links {
		display: flex;
		gap: 3rem;
		margin-block: 0;
	}
</style>
