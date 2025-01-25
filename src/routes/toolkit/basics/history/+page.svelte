<!-- src/routes/toolkit/basics/history/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import HistoryPageNavigation from '$lib/components/HistoryNavigation.svelte';

  // Base translation path for this page
  const basePath = 'toolkit.basics.history';
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
      <p class="text-cosmic">
        {$t(`${basePath}.introduction.significance`)}
      </p>
    </section>

    <!-- Timeline Section -->
    <section id="timeline" class="mb-16">
      <h2>{$t(`${basePath}.timeline.title`)}</h2>
      
      <!-- Timeline SVG -->
      <div class="my-8">
        <img 
          src="/images/sacred-geometry/timeline.svg" 
          alt="Sacred Geometry Timeline"
          class="w-full max-w-2xl mx-auto"
        />
      </div>

      <!-- Ancient Egypt -->
      <div id="ancient-egypt" class="mb-8">
        <h3 class="text-accent-green">{$t(`${basePath}.timeline.ancient_egypt.title`)}</h3>
        <p>{$t(`${basePath}.timeline.ancient_egypt.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.timeline.ancient_egypt.achievements`) as achievement}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{achievement}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Ancient Greece -->
      <div id="ancient-greece" class="mb-8">
        <h3 class="text-accent-pink">{$t(`${basePath}.timeline.ancient_greece.title`)}</h3>
        <p>{$t(`${basePath}.timeline.ancient_greece.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.timeline.ancient_greece.achievements`) as achievement}
            <li class="flex items-start">
              <span class="text-accent-pink mr-2">•</span>
              <span>{achievement}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Islamic Golden Age -->
      <div id="islamic-golden-age" class="mb-8">
        <h3 class="text-accent-yellow">{$t(`${basePath}.timeline.islamic_golden_age.title`)}</h3>
        <p>{$t(`${basePath}.timeline.islamic_golden_age.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.timeline.islamic_golden_age.achievements`) as achievement}
            <li class="flex items-start">
              <span class="text-accent-yellow mr-2">•</span>
              <span>{achievement}</span>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Renaissance -->
      <div id="renaissance" class="mb-8">
        <h3 class="text-accent-green">{$t(`${basePath}.timeline.renaissance.title`)}</h3>
        <p>{$t(`${basePath}.timeline.renaissance.description`)}</p>
        <ul class="space-y-2">
          {#each $t(`${basePath}.timeline.renaissance.achievements`) as achievement}
            <li class="flex items-start">
              <span class="text-accent-green mr-2">•</span>
              <span>{achievement}</span>
            </li>
          {/each}
        </ul>
      </div>
    </section>

    <!-- Cultural Expressions Section -->
    <section id="cultural-expressions" class="mb-16">
      <h2>{$t(`${basePath}.cultural_expressions.title`)}</h2>
      <p>{$t(`${basePath}.cultural_expressions.description`)}</p>
      
      <!-- Cultural Expressions SVG -->
      <div class="my-8">
        <img 
          src="/images/sacred-geometry/cultural-expressions.svg" 
          alt="Cultural Expressions of Sacred Geometry"
          class="w-full max-w-2xl mx-auto"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Egyptian Expression -->
        <div id="egyptian-expression">
          <h3 class="text-accent-green">{$t(`${basePath}.cultural_expressions.egyptian.title`)}</h3>
          <p>{$t(`${basePath}.cultural_expressions.egyptian.description`)}</p>
        </div>

        <!-- Islamic Expression -->
        <div id="islamic-expression">
          <h3 class="text-accent-pink">{$t(`${basePath}.cultural_expressions.islamic.title`)}</h3>
          <p>{$t(`${basePath}.cultural_expressions.islamic.description`)}</p>
        </div>

        <!-- Hindu/Buddhist Expression -->
        <div id="hindu-buddhist-expression">
          <h3 class="text-accent-yellow">
            {$t(`${basePath}.cultural_expressions.hindu_buddhist.title`)}
          </h3>
          <p>{$t(`${basePath}.cultural_expressions.hindu_buddhist.description`)}</p>
        </div>
      </div>
    </section>

    <!-- Modern Understanding Section -->
    <section id="modern-understanding" class="mb-16">
      <h2>{$t(`${basePath}.modern_understanding.title`)}</h2>
      <p>{$t(`${basePath}.modern_understanding.description`)}</p>

      <ul class="space-y-2 mt-4">
        {#each $t(`${basePath}.modern_understanding.aspects`) as aspect}
          <li class="flex items-start">
            <span class="text-accent-pink mr-2">•</span>
            <span>{aspect}</span>
          </li>
        {/each}
      </ul>

      <p class="mt-4 text-cosmic-light">
        {$t(`${basePath}.modern_understanding.significance`)}
      </p>
    </section>

    <!-- Navigation -->
    <div class="not-prose mt-8 flex justify-between">
      <a 
        href="/toolkit/basics/what-is-sacred-geometry"
        class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
      >
        {$t('navigation.previous')}
      </a>
      <a 
        href="/toolkit/basics/famous-examples"
        class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
      >
        {$t('navigation.next')}
      </a>
    </div>
  </article>

  <!-- Page Navigation -->
  <HistoryPageNavigation bind:activeSection />
</div>

<style>
  /* Ensure main content doesn't overlap with navigation */
  .prose {
    padding-right: 16rem; /* Adjust based on your navigation width */
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
