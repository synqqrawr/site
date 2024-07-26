<script lang="ts">
	import * as config from '$lib/config'
	export let data
</script>

<title>{config.title}</title>

<article>
	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>
