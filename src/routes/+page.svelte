<script lang="ts">
	import * as config from '$lib/config'

	import Neko from '$lib/Neko.svelte'
	import BasilRedditSolid from '~icons/basil/reddit-solid'
	import MageDiscord from '~icons/mage/discord'
	import MdiGithub from '~icons/mdi/github'
	import SimpleIconsLemmy from '~icons/simple-icons/lemmy'
	import MdiMastodon from '~icons/mdi/mastodon'
</script>

<title>{config.title}</title>

<svelte:head>
	<meta name="description" content={config.description} />
</svelte:head>

<Neko />
<article>
	<!-- Post -->
	<div class="prose dark:prose-invert">
		<h2>Welcome Aboard! 🚀</h2>
		<p>
			Hey there, and welcome to my little corner of the internet! Feel free to take a look around.
			Here are some links to the pages of this site:
		</p>
		<ul>
			{#each config.links as link}
				<li><a href={link.href} target={link.target ?? '_self'}>{link.name ?? link.href}</a></li>
			{/each}
		</ul>
		<h2>~> /bin/whoami</h2>
		I'm&nbsp<b>[anon]</b> from Japan. I go by a few different aliases, including:
		<ul>
			<li>async</li>
			<li>asyncedd</li>
			<li>asynqq</li>
			<li>asynqqboo</li>
			<li>sink</li>
			<li>synqqrawr</li>
		</ul>
		<h3>Some of my accounts:</h3>
		&nbsp
	</div>
	<ul class="flex gap-3">
		<li>
			<a href="https://reddit.com/asynqq"
				><BasilRedditSolid class="w-7 h-full" />
				<p class="sr-only">Reddit profile</p></a
			>
		</li>
		<li>
			<a href="https://discord.com/users/797422750321999943"
				><MageDiscord class="w-7 h-full" />
				<p class="sr-only">Discord profile</p></a
			>
		</li>
		<li>
			<a href="https://github.com/synqqrawr"
				><MdiGithub class="w-7 h-full" />
				<p class="sr-only">Github profile</p></a
			>
		</li>
		<li>
			<a href="https://sh.itjust.works/u/synqqrawr"
				><SimpleIconsLemmy class="w-7 h-full" />
				<p class="sr-only">Lemmy (sh.itjust.works) profile</p></a
			>
		</li>
		<li>
			<a href="https://mas.to/@synqqrawr"
				><MdiMastodon class="w-7 h-full" />
				<p class="sr-only">Matsodon (mas.to) profile</p></a
			>
		</li>
	</ul>
</article>
