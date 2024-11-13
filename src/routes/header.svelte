<script lang="ts">
	import * as config from '$lib/config'
	import { page } from '$app/stores'
</script>

<header style="padding-top: 1rem">
	<a
		href="/"
		aria-label="Go back home."
		style="gap: 0.25rem; display: flex; padding-bottom: 1rem; font-size: 1.3rem;"
	>
		<b>{config.title} ._.</b>
	</a>
</header>
<nav style="padding-bottom: 1rem; border-bottom: 1px solid var(--border);">
	<ul class="links" aria-label="List of pages to navigate to.">
		{#each config.links as link}
			<li>
				<a
					href={link.href}
					target={link.target ?? '_self'}
					style="color: var(--text-1); {link.href == $page.url.pathname
						? 'text-decoration: underline;'
						: ''}"
					class:unactive={!(link.href == $page.url.pathname)}>{link.label ?? link.href}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style>
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

	.unactive {
		transition: opacity 0.3s;
		&:not(:hover) {
			opacity: 0.75;
		}
	}
</style>
