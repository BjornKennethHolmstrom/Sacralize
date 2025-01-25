<!-- src/routes/toolkit/basics/famous-examples/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import PageNavigation from '$lib/components/FamousExamplesNavigation.svelte';

  // Base translation path for this page
  const basePath = 'toolkit.basics.famous_examples';
  let activeSection = 'introduction';
</script>

<div class="relative">
  <!-- Main Content -->
  <article class="prose prose-invert max-w-3xl mx-auto">
    <!-- Introduction Section -->
    <section id="introduction" class="mb-16">
      <h1>{$t(`${basePath}.title`)}</h1>
      <h2>{$t(`${basePath}.introduction.title`)}</h2>
      <p class="lead text-xl text-cosmic-light">
        {$t(`${basePath}.introduction.description`)}
      </p>
    </section>

    <!-- Great Pyramid Section -->
    <section id="great-pyramid" class="mb-16">
      <h2>{$t(`${basePath}.great_pyramid.title`)}</h2>
      <p>{$t(`${basePath}.great_pyramid.description`)}</p>

      <!-- Pyramid SVG -->
      <div class="my-8">
        <img 
          src="/images/sacred-geometry/great-pyramid.svg" 
          alt="Great Pyramid of Giza Geometry"
          class="w-full max-w-2xl mx-auto"
        />
      </div>

      <!-- Features -->
      <div class="mt-8">
        <h3 class="text-accent-green">
          {$t(`${basePath}.great_pyramid.features.title`)}
        </h3>
        <ul class="space-y-2">
          {#each $t(`${basePath}.great_pyramid.features.items`) as feature}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{feature}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Mathematical Significance -->
      <div class="mt-8">
        <h3 class="text-accent-pink">
          {$t(`${basePath}.great_pyramid.significance.title`)}
        </h3>
        <p>{$t(`${basePath}.great_pyramid.significance.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.great_pyramid.significance.measurements`) as measurement}
            <li class="flex items-start">
              <span class="text-accent-pink mr-2">•</span>
              <span>{measurement}</span>
            </li>
          {/each}
        </ul>
      </div>
    </section>

    <!-- Flower of Life Section -->
    <section id="flower-of-life" class="mb-16">
      <h2>{$t(`${basePath}.flower_of_life.title`)}</h2>
      <p>{$t(`${basePath}.flower_of_life.description`)}</p>

      <!-- Flower of Life SVG -->
      <div class="my-8">
        <img 
          src="/images/sacred-geometry/flower-of-life.svg" 
          alt="Flower of Life Pattern Construction"
          class="w-full max-w-2xl mx-auto"
        />
      </div>

      <!-- Construction Steps -->
      <div class="mt-8">
        <h3 class="text-accent-yellow">
          {$t(`${basePath}.flower_of_life.construction.title`)}
        </h3>
        <ul class="space-y-2">
          {#each $t(`${basePath}.flower_of_life.construction.steps`) as step}
            <li class="flex items-start">
              <span class="text-accent-yellow mr-2">•</span>
              <span>{step}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Symbolic Meanings -->
      <div class="mt-8">
        <h3 class="text-accent-green">
          {$t(`${basePath}.flower_of_life.meanings.title`)}
        </h3>
        <ul class="space-y-2">
          {#each $t(`${basePath}.flower_of_life.meanings.items`) as meaning}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{meaning}</span>
            </li>
          {/each}
        </ul>
      </div>
    </section>

    <!-- Parthenon Section -->
    <section id="parthenon" class="mb-16">
      <h2>{$t(`${basePath}.parthenon.title`)}</h2>
      <p>{$t(`${basePath}.parthenon.description`)}</p>

      <!-- Parthenon SVG -->
      <div class="my-8">
        <img 
          src="/images/sacred-geometry/parthenon-proportions.svg" 
          alt="Parthenon Golden Ratio Proportions"
          class="w-full max-w-2xl mx-auto"
        />
      </div>

      <!-- Golden Proportions -->
      <div class="mt-8">
        <h3 class="text-accent-pink">
          {$t(`${basePath}.parthenon.proportions.title`)}
        </h3>
        <p>{$t(`${basePath}.parthenon.proportions.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.parthenon.proportions.examples`) as example}
            <li class="flex items-start">
              <span class="text-accent-pink mr-2">•</span>
              <span>{example}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Architectural Influence -->
      <div class="mt-8">
        <h3 class="text-accent-yellow">
          {$t(`${basePath}.parthenon.influence.title`)}
        </h3>
        <p>{$t(`${basePath}.parthenon.influence.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.parthenon.influence.areas`) as area}
            <li class="flex items-start">
              <span class="text-accent-yellow mr-2">•</span>
              <span>{area}</span>
            </li>
          {/each}
        </ul>
      </div>
    </section>

    <!-- Modern Relevance Section -->
    <section id="modern-relevance" class="mb-16">
      <h2>{$t(`${basePath}.modern_relevance.title`)}</h2>
      <p>{$t(`${basePath}.modern_relevance.description`)}</p>
      <ul class="space-y-2 mt-4">
        {#each $t(`${basePath}.modern_relevance.applications`) as application}
          <li class="flex items-start">
            <span class="text-accent-green mr-2">•</span>
            <span>{application}</span>
          </li>
        {/each}
      </ul>
    </section>

    <!-- Navigation -->
    <div class="not-prose mt-8 flex justify-between">
      <a 
        href="/toolkit/basics/history"
        class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
      >
        {$t('navigation.previous')}
      </a>
      <a 
        href="/toolkit/tools"
        class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
      >
        {$t('navigation.next')}
      </a>
    </div>
  </article>

  <!-- Page Navigation -->
  <PageNavigation bind:activeSection />
</div>

<style>
  /* Ensure main content doesn't overlap with navigation */
  .prose {
    padding-right: 16rem;
  }

  /* Make sure this only applies on larger screens */
  @media (max-width: 1024px) {
    .prose {
      padding-right: 1rem;
    }
  }

  /* Add smooth scrolling to the page */
  :global(html) {
    scroll-behavior: smooth;
  }
</style>
