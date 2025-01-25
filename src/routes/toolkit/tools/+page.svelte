<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<article class="prose prose-invert max-w-none">
  <!-- Page Title -->
  <h1> {$t('toolkit.tools.title', 'Sacred Geometry Tools')}</h1>
  
  <!-- Introduction Section -->
  <section>
    <h2> {$t('toolkit.tools.intro_title', 'Explore Our Tools')}</h2>
    <p>
       {$t(
        'toolkit.tools.intro_content',
        'Our tools are designed to help you create, explore, and learn about sacred geometry. Dive into pattern generators, interactive design tools, and more.'
      )}
    </p>
  </section>

  <!-- Tools Overview -->
  <section>
    <h2> {$t('toolkit.tools.overview_title', 'Available Tools')}</h2>
    <ul class="mt-6 space-y-6">
      <!-- Tool 1: Flower of Life Generator -->
      <li>
        <h3 class="text-2xl font-bold text-accent-green"> {$t('toolkit.tools.flower_of_life_title', 'Flower of Life Generator')}</h3>
        <p>
           {$t(
            'toolkit.tools.flower_of_life_description',
            'Generate the intricate and beautiful Flower of Life pattern, a foundational element in sacred geometry.'
          )}
        </p>
        <a 
          href="/toolkit/tools/flower-of-life" 
          class="inline-block mt-4 px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
        >
           {$t('toolkit.tools.explore_tool', 'Explore Tool')}
        </a>
      </li>

      <!-- Tool 2: Fibonacci Spiral Generator -->
      <li>
        <h3 class="text-2xl font-bold text-accent-yellow"> {$t('toolkit.tools.fibonacci_title', 'Fibonacci Spiral Generator')}</h3>
        <p>
           {$t(
            'toolkit.tools.fibonacci_description',
            'Create stunning Fibonacci spirals and explore the connection between mathematics and nature.'
          )}
        </p>
        <a 
          href="/toolkit/tools/fibonacci-spiral" 
          class="inline-block mt-4 px-6 py-3 bg-accent-yellow text-white rounded-lg hover:bg-accent-pink transition"
        >
           {$t('toolkit.tools.explore_tool', 'Explore Tool')}
        </a>
      </li>

      <!-- Tool 3: Custom Shapes Tool -->
      <li>
        <h3 class="text-2xl font-bold text-accent-pink"> {$t('toolkit.tools.custom_shapes_title', 'Custom Shapes Tool')}</h3>
        <p>
           {$t(
            'toolkit.tools.custom_shapes_description',
            'Design your own shapes and patterns with this interactive and flexible tool.'
          )}
        </p>
        <a 
          href="/toolkit/tools/custom-shapes" 
          class="inline-block mt-4 px-6 py-3 bg-accent-pink text-white rounded-lg hover:bg-accent-green transition"
        >
           {$t('toolkit.tools.explore_tool', 'Explore Tool')}
        </a>
      </li>

      <!-- Tool 4: Sacred Geometry Tools -->
      <li>
        <h3 class="text-2xl font-bold text-accent-green"> {$t('toolkit.tools.sacred_geometry_title', 'Sacred Geometry Tools')}</h3>
        <p>
           {$t(
            'toolkit.tools.sacred_geometry_description',
            'Tools for exploring sacred geometry: Vesica Piscis, Polygons, Golden Ratio and Sacred Proportions.'
          )}
        </p>
        <a 
          href="/toolkit/tools/custom-shapes" 
          class="inline-block mt-4 px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-green transition"
        >
           {$t('toolkit.tools.explore_tool', 'Explore Tool')}
        </a>
      </li>

    </ul>
  </section>

  <!-- Call-to-Action -->
  <div class="not-prose mt-8">
    <a 
      href="/toolkit/resources" 
      class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
    >
       {$t('toolkit.tools.cta', 'Explore Additional Resources')}
    </a>
  </div>
</article>

