<!-- src/routes/toolkit/basics/what-is-sacred-geometry/+page.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import PageNavigation from '$lib/components/WhatIsNavigation.svelte';

  // Base translation path for this page
  const basePath = 'toolkit.basics.what_is_sacred_geometry';
  let activeSection = 'introduction';
</script>

<div class="relative">
  <article class="prose prose-invert max-w-none">
    <!-- Page Title -->
    <h1>{$t('toolkit.basics.what_is_sacred_geometry.title')}</h1>
    
    <!-- Introduction Section -->
    <section id="introduction">
      <h2>{$t(`${basePath}.intro.title`)}</h2>
      <p>{$t(`${basePath}.intro.description`)}</p>

      <!-- Example Patterns SVG -->
      <div class="my-8">
        <!-- Insert the SVG component here -->
        <img src="/images/sacred-geometry/sacred-geometry-principles.svg" alt="Sacred Geometry Principles" class="w-full max-w-2xl mx-auto"/>
      </div>    

      <!-- Patterns in Nature -->
      <section id="patterns-in-nature" class="mt-12">
        <h3>{$t(`${basePath}.patterns.title`)}</h3>
        <p>{$t(`${basePath}.patterns.description`)}</p>
        <div class="space-y-4">
          <div>
            <h4 class="text-accent-green">{$t(`${basePath}.patterns.hexagonal.title`)}</h4>
            <p>{$t(`${basePath}.patterns.hexagonal.description`)}</p>
          </div>
          <div>
            <h4 class="text-accent-pink">{$t(`${basePath}.patterns.golden_spiral.title`)}</h4>
            <p>{$t(`${basePath}.patterns.golden_spiral.description`)}</p>
          </div>
          <div>
            <h4 class="text-accent-yellow">{$t(`${basePath}.patterns.fractals.title`)}</h4>
            <p>{$t(`${basePath}.patterns.fractals.description`)}</p>
          </div>
        </div>
        <!-- Natural Patterns SVG -->
        <div class="my-8">
          <!-- Insert the SVG component here -->
          <img src="/images/sacred-geometry/natural-patterns.svg" alt="Natural Sacred Geometry Patterns" class="w-full max-w-2xl mx-auto"/>
        </div>
      </section>

      <!-- Ancient Understanding -->
      <section id="ancient-understanding" class="mt-12">
        <h3>{$t(`${basePath}.ancient.title`)}</h3>
        <p>{$t(`${basePath}.ancient.description`)}</p>
        <ul>
          <li>{$t(`${basePath}.ancient.examples.egyptian`)}</li>
          <li>{$t(`${basePath}.ancient.examples.greek`)}</li>
          <li>{$t(`${basePath}.ancient.examples.islamic`)}</li>
          <li>{$t(`${basePath}.ancient.examples.eastern`)}</li>
        </ul>

        <!-- Modern Applications -->
        <h3>{$t(`${basePath}.modern.title`)}</h3>
        <p>{$t(`${basePath}.modern.description`)}</p>
        <ul>
          <li>{$t(`${basePath}.modern.examples.architecture`)}</li>
          <li>{$t(`${basePath}.modern.examples.graphics`)}</li>
          <li>{$t(`${basePath}.modern.examples.product`)}</li>
          <li>{$t(`${basePath}.modern.examples.urban`)}</li>
          <li>{$t(`${basePath}.modern.examples.spiritual`)}</li>
        </ul>
        <p class="mt-4">{$t(`${basePath}.modern.conclusion`)}</p>
      </section>
    </section>

    <!-- Key Concepts Section -->
    <section id="key-concepts" class="mt-12">
      <h2>{$t(`${basePath}.key_concepts.title`)}</h2>
      <p class="lead">{$t(`${basePath}.key_concepts.description`)}</p>

      <!-- Fundamental Principles -->
      <div class="my-8">
        <h3>{$t(`${basePath}.key_concepts.fundamental_principles.title`)}</h3>
        
        <!-- Principles SVG -->
        <div class="my-6">
          <img src="/images/sacred-geometry/geometric-principles.svg" alt="Sacred Geometry Principles" class="w-full max-w-2xl mx-auto"/>
        </div>
        
        <!-- Unity -->
        <div class="mb-6">
          <h4 class="text-accent-green">{$t(`${basePath}.key_concepts.fundamental_principles.unity.title`)}</h4>
          <p>{$t(`${basePath}.key_concepts.fundamental_principles.unity.description`)}</p>
          <p class="text-cosmic-light mt-2">{$t(`${basePath}.key_concepts.fundamental_principles.unity.examples`)}</p>
          <p class="text-sm text-cosmic mt-1">{$t(`${basePath}.key_concepts.fundamental_principles.unity.mathematical`)}</p>
        </div>

        <!-- Duality -->
        <div class="mb-6">
          <h4 class="text-accent-pink">{$t(`${basePath}.key_concepts.fundamental_principles.duality.title`)}</h4>
          <p>{$t(`${basePath}.key_concepts.fundamental_principles.duality.description`)}</p>
          <p class="text-cosmic-light mt-2">{$t(`${basePath}.key_concepts.fundamental_principles.duality.examples`)}</p>
          <p class="text-sm text-cosmic mt-1">{$t(`${basePath}.key_concepts.fundamental_principles.duality.mathematical`)}</p>
        </div>

        <!-- Trinity -->
        <div class="mb-6">
          <h4 class="text-accent-yellow">{$t(`${basePath}.key_concepts.fundamental_principles.trinity.title`)}</h4>
          <p>{$t(`${basePath}.key_concepts.fundamental_principles.trinity.description`)}</p>
          <p class="text-cosmic-light mt-2">{$t(`${basePath}.key_concepts.fundamental_principles.trinity.examples`)}</p>
          <p class="text-sm text-cosmic mt-1">{$t(`${basePath}.key_concepts.fundamental_principles.trinity.mathematical`)}</p>
        </div>
      </div>

      <!-- Golden Ratio -->
      <div class="my-8" id="golden-ratio">
        <h3>{$t(`${basePath}.key_concepts.golden_ratio.title`)}</h3>
        <p>{$t(`${basePath}.key_concepts.golden_ratio.description`)}</p>
        <p class="text-cosmic-light mt-2">{$t(`${basePath}.key_concepts.golden_ratio.significance`)}</p>
        
        <!-- Golden Ratio SVG -->
        <div class="my-6">
          <img src="/images/sacred-geometry/golden-ratio.svg" alt="Golden Ratio and Sacred Proportions" class="w-full max-w-2xl mx-auto"/>
        </div>

        <!-- Examples and Applications -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div>
            <h4 class="text-accent-green">{$t(`${basePath}.key_concepts.golden_ratio.examples.title`)}</h4>
            <ul class="list-disc list-inside text-cosmic-light">
              {#each $t(`${basePath}.key_concepts.golden_ratio.examples.list`) as example}
                <li>{example}</li>
              {/each}
            </ul>
          </div>
          <div>
            <h4 class="text-accent-pink">{$t(`${basePath}.key_concepts.golden_ratio.applications.title`)}</h4>
            <ul class="list-disc list-inside text-cosmic-light">
              {#each $t(`${basePath}.key_concepts.golden_ratio.applications.list`) as application}
                <li>{application}</li>
              {/each}
            </ul>
          </div>
        </div>
      </div>

      <!-- Sacred Ratios and Proportions -->
      <div class="my-8">
        <h3>{$t(`${basePath}.key_concepts.ratios_proportions.title`)}</h3>
        <p>{$t(`${basePath}.key_concepts.ratios_proportions.description`)}</p>
        
        <div class="space-y-6 mt-4">
          <!-- Square Root Proportions -->
          <div>
            <h4 class="text-accent-green">{$t(`${basePath}.key_concepts.ratios_proportions.types.square_root.title`)}</h4>
            <p>{$t(`${basePath}.key_concepts.ratios_proportions.types.square_root.description`)}</p>
          </div>

          <!-- Musical Ratios -->
          <div>
            <h4 class="text-accent-pink">{$t(`${basePath}.key_concepts.ratios_proportions.types.musical.title`)}</h4>
            <p>{$t(`${basePath}.key_concepts.ratios_proportions.types.musical.description`)}</p>
          </div>

          <!-- Fibonacci Sequence -->
          <div>
            <h4 class="text-accent-yellow">{$t(`${basePath}.key_concepts.ratios_proportions.types.fibonacci.title`)}</h4>
            <p>{$t(`${basePath}.key_concepts.ratios_proportions.types.fibonacci.description`)}</p>
          </div>
        </div>

        <p class="mt-4">{$t(`${basePath}.key_concepts.ratios_proportions.significance`)}</p>
        <p class="mt-2">{$t(`${basePath}.key_concepts.ratios_proportions.modern_use`)}</p>
      </div>
    </section>

    <!-- Practical Applications Section -->
    <section id="practical-applications" class="mt-12">
      <h2>{$t(`${basePath}.practical_applications.title`)}</h2>
      <p class="lead">{$t(`${basePath}.practical_applications.description`)}</p>

      <!-- Applications SVG -->
      <div class="my-8">
        <img src="/images/sacred-geometry/practical-applications.svg" alt="Practical Applications of Sacred Geometry" class="w-full max-w-3xl mx-auto"/>
      </div>

      <!-- Application Categories -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Architecture -->
        <div id="architecture">
          <h3 class="text-accent-green">{$t(`${basePath}.practical_applications.architecture.title`)}</h3>
          <p>{$t(`${basePath}.practical_applications.architecture.description`)}</p>
          <ul class="mt-4 space-y-2">
            {#each $t(`${basePath}.practical_applications.architecture.examples`) as example}
              <li class="flex items-start">
                <span class="text-accent-green mr-2">•</span>
                <span>{example}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Digital Design -->
        <div id="digital-design">
          <h3 class="text-accent-pink">{$t(`${basePath}.practical_applications.digital_design.title`)}</h3>
          <p>{$t(`${basePath}.practical_applications.digital_design.description`)}</p>
          <ul class="mt-4 space-y-2">
            {#each $t(`${basePath}.practical_applications.digital_design.examples`) as example}
              <li class="flex items-start">
                <span class="text-accent-pink mr-2">•</span>
                <span>{example}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Art & Music -->
        <div id="art-music">
          <h3 class="text-accent-yellow">{$t(`${basePath}.practical_applications.art_music.title`)}</h3>
          <p>{$t(`${basePath}.practical_applications.art_music.description`)}</p>
          <ul class="mt-4 space-y-2">
            {#each $t(`${basePath}.practical_applications.art_music.examples`) as example}
              <li class="flex items-start">
                <span class="text-accent-yellow mr-2">•</span>
                <span>{example}</span>
              </li>
            {/each}
          </ul>
        </div>

        <!-- Product Design -->
        <div id="product-design">
          <h3 class="text-accent-green">{$t(`${basePath}.practical_applications.product_design.title`)}</h3>
          <p>{$t(`${basePath}.practical_applications.product_design.description`)}</p>
          <ul class="mt-4 space-y-2">
            {#each $t(`${basePath}.practical_applications.product_design.examples`) as example}
              <li class="flex items-start">
                <span class="text-accent-green mr-2">•</span>
                <span>{example}</span>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- Conclusion -->
      <div class="mt-12">
        <h3>{$t(`${basePath}.practical_applications.conclusion.title`)}</h3>
        <p>{$t(`${basePath}.practical_applications.conclusion.description`)}</p>
      </div>
    </section>

    <!-- Navigation -->
    <div class="not-prose mt-8 flex justify-between">
      <a 
        href="/toolkit/basics"
        class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
      >
        {$t('navigation.back')}
      </a>
      <a 
        href="/toolkit/basics/history"
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
    padding-right: 16rem; /* Adjust based on your navigation width */
  }

  /* Make sure this only applies on larger screens */
  @media (max-width: 1024px) {
    .prose {
      padding-right: 1rem;
    }
  }
</style>
