<!-- src/routes/toolkit/tools/fibonacci-spiral/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import FibonacciSpiralGenerator from '$lib/components/FibonacciSpiralGenerator.svelte';
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
  <!-- Header Section -->
  <header class="mb-12 text-center">
    <h1 class="text-4xl font-bold text-cosmic-light mb-4">
      {$t('toolkit.tools.fibonacci_spiral.title')}
    </h1>
    <p class="text-lg text-cosmic max-w-2xl mx-auto">
      {$t('toolkit.tools.fibonacci_spiral.description')}
    </p>
  </header>

  <!-- Quick Tips -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-green mb-2">
        {$t('toolkit.tools.fibonacci_spiral.tips.iterations.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.tips.iterations.description')}
      </p>
    </div>

    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-pink mb-2">
        {$t('toolkit.tools.fibonacci_spiral.tips.visualization.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.tips.visualization.description')}
      </p>
    </div>

    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-yellow mb-2">
        {$t('toolkit.tools.fibonacci_spiral.tips.interaction.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.tips.interaction.description')}
      </p>
    </div>
  </div>

  <!-- Generator Component -->
  <FibonacciSpiralGenerator />

  <!-- Educational Content -->
  <section class="mt-12 prose prose-invert max-w-none">
    <h2>{$t('toolkit.tools.fibonacci_spiral.learn_more.title')}</h2>
    <p>{$t('toolkit.tools.fibonacci_spiral.learn_more.description')}</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-6">
      <!-- Mathematical Properties -->
      <div>
        <h3 class="text-xl font-semibold text-accent-green mb-4">
          {$t('toolkit.tools.fibonacci_spiral.learn_more.mathematical.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.fibonacci_spiral.learn_more.mathematical.points') as point}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Natural Occurrences -->
      <div>
        <h3 class="text-xl font-semibold text-accent-pink mb-4">
          {$t('toolkit.tools.fibonacci_spiral.learn_more.natural.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.fibonacci_spiral.learn_more.natural.points') as point}
            <li class="flex items-start">
              <span class="text-accent-pink mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Golden Ratio Connection -->
      <div class="md:col-span-2">
        <h3 class="text-xl font-semibold text-accent-yellow mb-4">
          {$t('toolkit.tools.fibonacci_spiral.learn_more.golden_ratio.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.fibonacci_spiral.learn_more.golden_ratio.points') as point}
            <li class="flex items-start">
              <span class="text-accent-yellow mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>

  <!-- Navigation -->
  <div class="mt-12 flex justify-between">
    <a 
      href="/toolkit/tools/flower-of-life"
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
