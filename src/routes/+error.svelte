<script>
	import { page } from '$app/stores'
</script>

<div class="prose">
	<h1>{$page.status} | {$page.error?.message}</h1>
	{#if $page.status === 404}
		<p>
			Greetings, young traveler. It seems you might be lost. Why not return to the comfort of <a
				href="/">home</a
			>?
		</p>
	{:else}
		<p>Hmm... Something is wrong here.</p>
	{/if}
</div>
