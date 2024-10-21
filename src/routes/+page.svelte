<script lang="ts">
	import * as config from '$lib/config'

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

<article>
	<!-- Post -->
	<div class="prose dark:prose-invert">
		<h1>Welcome Aboard! 🚀</h1>
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
		<h3>Contact me</h3>
		<ul>
			<li>
				<a href="https://reddit.com/u/asynqq">Reddit</a>
			</li>
			<li>
				<a href="https://discord.com/users/797422750321999943">Discord</a>
			</li>
			<li>
				<a href="https://github.com/synqqrawr">Github</a>
			</li>
			<li>
				<a href="https://sh.itjust.works/u/synqqrawr">Lemmy (sh.itjust.works)</a>
			</li>
			<li>
				<a href="https://fosstodon.org/@synqqrawr">Matsodon (fosstodon.org)</a>
			</li>
      <li>
        <a href="https://matrix.to/#/@synqqrawr:matrix.org">Matrix</a>
      </li>
      <li>
        <a href="mailto:contact.carbon479@passfwd.com">contact.carbon479@passfwd.com</a> |&nbsp;<a target="_blank" href="/gpg.txt">./gpg.txt</a>
        </li>
		</ul>
	</div>
</article>
