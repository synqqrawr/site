<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js'
	import DropdownMenuItem from '$lib/components/ui/dropdown-menu/dropdown-menu-item.svelte'
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js'

	import { Link } from 'lucide-svelte'
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button builders={[builder]} variant="outline" size="icon"><Link /></Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-56">
		<a href="/"><DropdownMenuItem>/</DropdownMenuItem></a>
		<a href="/blog"><DropdownMenuItem>/blog</DropdownMenuItem></a>
		<a href="/about"><DropdownMenuItem>/about</DropdownMenuItem></a>
		<a href="/contact"><DropdownMenuItem>/contact</DropdownMenuItem></a>
		<a href="/rss.xml"><DropdownMenuItem>/rss.xml</DropdownMenuItem></a>
	</DropdownMenu.Content>
</DropdownMenu.Root>
