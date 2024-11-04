<script>
	/**
	 * @typedef {Object} Props
	 * @property {import('svelte').Snippet} [children]
	 */

	/** @type {Props} */
	let { children } = $props()
</script>

<div class="prose dark:prose-invert">
	{@render children?.()}
</div>
