<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js'
	import DropdownMenuItem from '$lib/components/ui/dropdown-menu/dropdown-menu-item.svelte'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'
	import * as config from '$lib/config'

  import LucideLink from '~icons/lucide/link';
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon"
			><LucideLink /> <span class="sr-only">Open link</span>
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		{#each config.links as link}
			<a href={link.href} target={link.target ?? '_self'}
				><DropdownMenuItem>{link.name ?? link.href}</DropdownMenuItem></a
			>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
