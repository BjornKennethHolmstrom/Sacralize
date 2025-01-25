<!-- src/routes/toolkit/tools/custom-shapes/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import BasicShapeCreator from '$lib/components/BasicShapeCreator.svelte';
</script>

<div class="max-w-6xl mx-auto px-4 py-8">
  <!-- Header Section -->
  <header class="mb-12 text-center">
    <h1 class="text-4xl font-bold text-cosmic-light mb-4">
      {$t('toolkit.tools.custom_shapes.title')}
    </h1>
    <p class="text-lg text-cosmic max-w-2xl mx-auto">
      {$t('toolkit.tools.custom_shapes.description')}
    </p>
  </header>

  <!-- Quick Tips -->
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-green mb-2">
        {$t('toolkit.tools.custom_shapes.tips.basics.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.custom_shapes.tips.basics.description')}
      </p>
    </div>

    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-pink mb-2">
        {$t('toolkit.tools.custom_shapes.tips.layers.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.custom_shapes.tips.layers.description')}
      </p>
    </div>

    <div class="p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-accent-yellow mb-2">
        {$t('toolkit.tools.custom_shapes.tips.shortcuts.title')}
      </h3>
      <p class="text-cosmic-light">
        {$t('toolkit.tools.custom_shapes.tips.shortcuts.description')}
      </p>
    </div>
  </div>

  <!-- Shape Creator Component -->
  <BasicShapeCreator />

  <!-- Educational Content -->
  <section class="mt-12 prose prose-invert max-w-none">
    <h2>{$t('toolkit.tools.custom_shapes.learn_more.title')}</h2>
    <p>{$t('toolkit.tools.custom_shapes.learn_more.description')}</p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mt-6">
      <!-- Geometric Principles -->
      <div>
        <h3 class="text-xl font-semibold text-accent-green mb-4">
          {$t('toolkit.tools.custom_shapes.learn_more.principles.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.custom_shapes.learn_more.principles.points') as point}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{point}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Applications -->
      <div>
        <h3 class="text-xl font-semibold text-accent-pink mb-4">
          {$t('toolkit.tools.custom_shapes.learn_more.applications.title')}
        </h3>
        <ul class="space-y-2">
          {#each $t('toolkit.tools.custom_shapes.learn_more.applications.points') as point}
            <li class="flex items-start">
              <span class="text-accent-pink mr-2">•</span>
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
      href="/toolkit/tools/fibonacci-spiral"
      class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
    >
      {$t('navigation.previous')}
    </a>
    <a 
      href="/toolkit/resources"
      class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
    >
      {$t('navigation.next')}
    </a>
  </div>
</div>
