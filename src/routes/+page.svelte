<script lang="ts">
	import * as config from '$lib/config'
	export let data
</script>

<title>{config.title}</title>

<article>
	<!-- Post -->
	<div>
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: 60ch;
		margin-inline: auto;
	}
</style>
