<!-- src/lib/components/SectionNav.svelte -->
<script lang="ts">
  import { page } from '$app/stores';
  import { t } from 'svelte-i18n';

  export let sections: {
    title: string;
    path: string;
    subsections?: { title: string; path: string; }[];
  }[];

  $: currentPath = $page.url.pathname;
</script>

<nav class="w-64 min-w-64 bg-cosmic-dark p-4 rounded-lg">
  <ul class="space-y-4">
    {#each sections as section}
      <li>
        <a
          href={section.path}
          class="block text-lg font-semibold {currentPath === section.path ? 'text-accent-pink' : 'text-accent-green hover:text-accent-pink'}"
        >
          {section.title}
        </a>
        {#if section.subsections}
          <ul class="ml-4 mt-2 space-y-2">
            {#each section.subsections as subsection}
              <li>
                <a
                  href={subsection.path}
                  class="block text-sm {currentPath === subsection.path ? 'text-accent-pink' : 'text-cosmic-light hover:text-accent-pink'}"
                >
                  {subsection.title}
                </a>
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
  </ul>
</nav>