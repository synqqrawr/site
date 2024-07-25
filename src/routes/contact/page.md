<script lang="ts">
  import PhRedditLogoFill from '~icons/ph/reddit-logo-fill';
  import FlowbiteDiscordSolid from '~icons/flowbite/discord-solid';
  import MdiGithub from '~icons/mdi/github';
  import SimpleIconsLemmy from '~icons/simple-icons/lemmy';
  import MdiMastodon from '~icons/mdi/mastodon';

  type Social = {
    [key: string]: {
      url: string;
      icon: any;
    }
  }

  const socials: Social = {
    'Reddit': {
      url: "https://reddit.com/u/asynqq",
    },
    'Discord': {
      url: 'https://discord.com/users/797422750321999943',
    },
    'Github': {
      url: 'https://github.com/synqqrawr',
    },
    'Sh.itjust.works (Lemmy)': {
      url: 'https://sh.itjust.works/u/synqqrawr',
    },
    'Mastodon': {
      url: 'https://mas.to/@synqqrawr',
    }
  }
</script>

<ul>
  {#each Object.entries(socials) as [name, data]}
    <li>
      <a href={data.url} class="flex flex-row">
        <b>{name}</b>
      </a>
    </li>
  {/each}
</ul>
