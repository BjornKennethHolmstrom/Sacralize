<!-- src/routes/toolkit/tools/flower-of-life/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import FlowerOfLifeGenerator from '$lib/components/FlowerOfLifeGenerator.svelte';
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
  <!-- Header Section -->
  <header class="mb-12 text-center">
    <h1 class="text-4xl font-bold text-cosmic-light mb-4">
      {$t('toolkit.tools.flower_of_life.title')}
    </h1>
    <p class="text-lg text-cosmic max-w-2xl mx-auto">
      {$t('toolkit.tools.flower_of_life.description')}
    </p>
  </header>

  <!-- Tool Tips -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-green mb-2">
        {$t('toolkit.tools.flower_of_life.tips.customize.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.tips.customize.description')}
      </p>
    </div>

    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-pink mb-2">
        {$t('toolkit.tools.flower_of_life.tips.experiment.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.tips.experiment.description')}
      </p>
    </div>

    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-yellow mb-2">
        {$t('toolkit.tools.flower_of_life.tips.save.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.tips.save.description')}
      </p>
    </div>
  </div>

  <!-- Generator Component -->
  <FlowerOfLifeGenerator />

  <!-- Additional Information -->
  <section class="mt-12 prose prose-invert max-w-none">
    <h2>{$t('toolkit.tools.flower_of_life.learn_more.title')}</h2>
    <p>{$t('toolkit.tools.flower_of_life.learn_more.description')}</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-6">
      <div>
        <h3 class="text-xl font-semibold text-accent-green mb-4">
          {$t('toolkit.tools.flower_of_life.learn_more.symbolism.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.flower_of_life.learn_more.symbolism.points') as point}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-accent-pink mb-4">
          {$t('toolkit.tools.flower_of_life.learn_more.applications.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.flower_of_life.learn_more.applications.points') as point}
            <li class="flex items-start">
              <span class="text-accent-pink mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </section>
</div>

<style>
  /* Add any additional styles here */
  :global(.animate-spin-slow) {
    animation: spin 60s linear infinite;
  }

  :global(.animate-appear) {
    animation: appear 0.5s ease-out forwards;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
