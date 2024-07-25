<script lang="ts">
	import { Moon, Sun } from 'lucide-svelte'
	import { toggleTheme } from '$lib/theme'
</script>

<button
	class="p-0 font-[inherit] bg-none border-none shadow-none overflow-hidden"
	on:click={toggleTheme}
	aria-label="Toggle theme"
>
	<div class="dark:block hidden">
		<Sun />
	</div>
	<div class="dark:hidden block">
		<Moon />
	</div>
</button>
