<script lang="ts">
	import * as config from '$lib/config'

	export let data
</script>

<title>{config.title}</title>

<svelte:head>
	<meta name="description" content={config.description} />
</svelte:head>

<article>
	<!-- Post -->
	<div class="prose dark:prose-invert">
		<h2>Welcome Aboard! 🚀</h2>
		<p>
			Hey there, and welcome to my little corner of the internet! Feel free to take a look around.
			Here are some links to the pages of this site:
		</p>
		<ul>
			{#each config.links as link}
				<li><a href={link.href} target={link.target ?? '_self'}>{link.name ?? link.href}</a></li>
			{/each}
		</ul>
	</div>
</article>
