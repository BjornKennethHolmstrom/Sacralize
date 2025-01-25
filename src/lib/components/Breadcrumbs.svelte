<!-- src/lib/components/Breadcrumbs.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { t } from 'svelte-i18n';

  // Generate breadcrumbs from current path
  $: path = $page.url.pathname;
  $: breadcrumbs = path.split('/').filter(Boolean).map((part, index, array) => {
    const url = '/' + array.slice(0, index + 1).join('/');
    return {
      text: $t(`navigation.${part}`, { default: part.charAt(0).toUpperCase() + part.slice(1) }),
      url
    };
  });
</script>

<nav aria-label="Breadcrumb" class="text-sm mb-6">
  <ol class="flex flex-wrap items-center space-x-2">
    <li>
      <a href="/" class="text-accent-green hover:text-accent-pink">{$t('menu.home')}</a>
    </li>
    {#each breadcrumbs as { text, url }, i}
      <li class="flex items-center space-x-2">
        <span class="text-cosmic">/</span>
        {#if i === breadcrumbs.length - 1}
          <span class="text-cosmic-light">{text}</span>
        {:else}
          <a href={url} class="text-accent-green hover:text-accent-pink">{text}</a>
        {/if}
      </li>
    {/each}
  </ol>
</nav>