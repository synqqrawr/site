<script lang="ts">
	export let data
</script>

<article>
	<!-- Post -->
	<div class="prose">
		<svelte:component this={data.content} />
	</div>
</article>

<style>
	article {
		max-inline-size: 60ch;
		margin-inline: auto;
	}

	h1 {
		text-transform: capitalize;
	}

	@media (min-width: 1440px) {
		.layout {
			padding-inline: 0;
		}
	}

	h1 + p {
		@apply mt-2;
	}
</style>
