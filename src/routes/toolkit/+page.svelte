<script>
  import { t } from 'svelte-i18n'; // Assuming translations are set up
</script>

<section class="w-full max-w-6xl mx-auto py-16 px-4">
  <!-- Overview -->
  <div class="mb-12">
    <h1 class="text-4xl font-bold text-cosmic-light">{$t('toolkit.title', 'Toolkits')}</h1>
    <p class="mt-4 text-lg text-accent-green">
      {$t('toolkit.overview', 'Explore our available tools to unlock the potential of sacred geometry.')}
    </p>
  </div>

  <!-- Sacred Geometry Basics -->
  <div class="mb-12">
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('toolkit.basics_title', 'Sacred Geometry Basics')}</h2>
    <ul class="mt-6 space-y-4">
      <li class="text-lg text-accent-yellow">
        <a href="#definitions" class="hover:text-accent-pink">{$t('toolkit.definitions', 'Definitions: What is sacred geometry?')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#history" class="hover:text-accent-pink">{$t('toolkit.history', 'History: Origins and cultural significance')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#examples" class="hover:text-accent-pink">{$t('toolkit.examples', 'Examples: Famous sacred geometry structures')}</a>
      </li>
    </ul>
  </div>

  <!-- Tools List -->
  <div class="mb-12">
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('toolkit.tools_title', 'Tools List')}</h2>
    <ul class="mt-6 space-y-4">
      <!-- Pattern Generators -->
      <li>
        <h3 class="text-2xl font-bold text-accent-green">{$t('toolkit.pattern_generators', 'Pattern Generators')}</h3>
        <ul class="mt-4 pl-6 list-disc">
          <li class="text-lg text-accent-yellow">
            <a href="#flower-of-life" class="hover:text-accent-pink">{$t('toolkit.flower_of_life', 'Flower of Life Generator')}</a>
          </li>
          <li class="text-lg text-accent-yellow">
            <a href="#fibonacci-spiral" class="hover:text-accent-pink">{$t('toolkit.fibonacci_spiral', 'Fibonacci Spiral Generator')}</a>
          </li>
          <li class="text-lg text-accent-yellow">
            <a href="#custom-shapes" class="hover:text-accent-pink">{$t('toolkit.custom_shapes', 'Custom Shapes Tool')}</a>
          </li>
        </ul>
      </li>

      <!-- Layout Design Tool -->
      <li>
        <h3 class="text-2xl font-bold text-accent-green">{$t('toolkit.layout_tool', 'Layout Design Tool')}</h3>
        <p class="text-lg text-cosmic">
          {$t('toolkit.layout_tool_desc', 'An interactive canvas for designing your own sacred geometry layouts.')}
        </p>
      </li>

      <!-- Export Feature -->
      <li>
        <h3 class="text-2xl font-bold text-accent-green">{$t('toolkit.export_feature', 'Export Feature')}</h3>
        <p class="text-lg text-cosmic">
          {$t('toolkit.export_desc', 'Download your patterns and designs as high-quality images.')}
        </p>
      </li>
    </ul>
  </div>

  <!-- Resources -->
  <div>
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('toolkit.resources_title', 'Resources')}</h2>
    <ul class="mt-6 space-y-4">
      <li class="text-lg text-accent-yellow">
        <a href="#external-links" class="hover:text-accent-pink">{$t('toolkit.external_links', 'External links')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#books" class="hover:text-accent-pink">{$t('toolkit.books', 'Recommended books')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#research-papers" class="hover:text-accent-pink">{$t('toolkit.research_papers', 'Research papers')}</a>
      </li>
    </ul>
  </div>
</section>

