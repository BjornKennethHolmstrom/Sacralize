<!-- src/lib/components/LanguageSelector.svelte -->
<script lang="ts">
  import { locale, isLoading } from '$lib/i18n';
  import { browser } from '$app/environment';

  export let languages = [
    { code: 'en', label: 'English' },
    { code: 'sv', label: 'Svenska' }
  ];

  // Handle language change
  function handleLanguageChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    $locale = select.value;
    if (browser) {
      localStorage.setItem('preferredLocale', select.value);
    }
  }
</script>

<select
  bind:value={$locale}
  on:change={handleLanguageChange}
  disabled={$isLoading}
  class="w-28 bg-cosmic-dark text-white border border-cosmic-light rounded px-2 py-1 {$isLoading ? 'opacity-50' : ''}"
>
  {#if $isLoading}
    <option value="">...</option>
  {:else}
    {#each languages as { code, label }}
      <option value={code}>{label}</option>
    {/each}
  {/if}
</select>
