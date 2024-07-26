<script lang="ts">
	export let data
</script>

<article>
	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
