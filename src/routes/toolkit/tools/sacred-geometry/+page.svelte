<!-- src/routes/toolkit/tools/sacred-geometry/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import VesicaPiscis from '$lib/components/sacred-geometry/VesicaPiscis.svelte';
  import RegularPolygon from '$lib/components/sacred-geometry/RegularPolygon.svelte';
  import GoldenRatio from '$lib/components/sacred-geometry/GoldenRatio.svelte';
  import SacredProportions from '$lib/components/sacred-geometry/SacredProportions.svelte';

  let selectedTool: 'vesica' | 'polygon' | 'golden' | 'proportions' = 'vesica';
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
  <!-- Header -->
  <header class="mb-12 text-center">
    <h1 class="text-4xl font-bold text-cosmic-light mb-4">
      {$t('toolkit.tools.sacred_geometry.title')}
    </h1>
    <p class="text-lg text-cosmic max-w-2xl mx-auto">
      {$t('toolkit.tools.sacred_geometry.description')}
    </p>
  </header>

  <!-- Tool Selection -->
  <div class="mb-8">
    <nav class="flex space-x-2 border-b border-cosmic">
      <button
        class="px-4 py-2 {selectedTool === 'vesica' ? 'text-accent-pink border-b-2 border-accent-pink' : 'text-cosmic hover:text-accent-green'}"
        on:click={() => selectedTool = 'vesica'}
      >
        {$t('toolkit.tools.sacred_geometry.tools.vesica')}
      </button>
      <button
        class="px-4 py-2 {selectedTool === 'polygon' ? 'text-accent-pink border-b-2 border-accent-pink' : 'text-cosmic hover:text-accent-green'}"
        on:click={() => selectedTool = 'polygon'}
      >
        {$t('toolkit.tools.sacred_geometry.tools.polygon')}
      </button>
      <button
        class="px-4 py-2 {selectedTool === 'golden' ? 'text-accent-pink border-b-2 border-accent-pink' : 'text-cosmic hover:text-accent-green'}"
        on:click={() => selectedTool = 'golden'}
      >
        {$t('toolkit.tools.sacred_geometry.tools.golden_ratio')}
      </button>
      <button
        class="px-4 py-2 {selectedTool === 'proportions' ? 'text-accent-pink border-b-2 border-accent-pink' : 'text-cosmic hover:text-accent-green'}"
        on:click={() => selectedTool = 'proportions'}
      >
        {$t('toolkit.tools.sacred_geometry.tools.proportions')}
      </button>
    </nav>
  </div>

  <!-- Tool Display -->
  <div class="mt-8">
    {#if selectedTool === 'vesica'}
      <VesicaPiscis />
    {:else if selectedTool === 'polygon'}
      <RegularPolygon />
    {:else if selectedTool === 'golden'}
      <GoldenRatio />
    {:else if selectedTool === 'proportions'}
      <SacredProportions />
    {/if}
  </div>

  <!-- Navigation -->
  <div class="mt-12 flex justify-between">
    <a 
      href="/toolkit/tools/fibonacci-spiral"
      class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
    >
      {$t('navigation.previous')}
    </a>
    <a 
      href="/toolkit/tools/custom-shapes"
      class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
    >
      {$t('navigation.next')}
    </a>
  </div>
</div>
