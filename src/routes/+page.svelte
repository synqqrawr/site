<script lang="ts">
	export let data
</script>

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
