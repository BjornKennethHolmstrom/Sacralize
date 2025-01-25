<script lang="ts">
  import { t } from 'svelte-i18n';
</script>

<article class="prose prose-invert max-w-none">
  <!-- Page Title -->
  <h1> {$t('toolkit.basics.title', 'Basics of Sacred Geometry')}</h1>
  
  <!-- Introduction Section -->
  <section>
    <h2> {$t('toolkit.basics.intro_title', 'Introduction')}</h2>
    <p>
       {$t(
        'toolkit.basics.intro_content',
        'Sacred geometry explores the universal patterns and shapes that form the foundation of existence. Dive into its origins, key concepts, and famous examples to understand how these principles connect art, nature, and spirituality.'
      )}
    </p>
  </section>

  <!-- Basics Overview -->
  <section>
    <h2> {$t('toolkit.basics.overview_title', 'Explore the Basics')}</h2>
    <ul class="mt-6 space-y-6">
      <!-- Basics 1: What is Sacred Geometry? -->
      <li>
        <h3 class="text-2xl font-bold text-accent-green"> {$t('toolkit.basics.what_is_title', 'What is Sacred Geometry?')}</h3>
        <p>
           {$t(
            'toolkit.basics.what_is_description',
            'Learn about the foundational principles of sacred geometry and its significance in understanding the interconnectedness of all things.'
          )}
        </p>
        <a 
          href="/toolkit/basics/what-is-sacred-geometry" 
          class="inline-block mt-4 px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
        >
           {$t('toolkit.basics.explore', 'Explore')}
        </a>
      </li>

      <!-- Basics 2: History of Sacred Geometry -->
      <li>
        <h3 class="text-2xl font-bold text-accent-yellow"> {$t('toolkit.basics.history_title', 'History of Sacred Geometry')}</h3>
        <p>
           {$t(
            'toolkit.basics.history_description',
            'Delve into the origins of sacred geometry and its influence across cultures, from ancient civilizations to modern times.'
          )}
        </p>
        <a 
          href="/toolkit/basics/history" 
          class="inline-block mt-4 px-6 py-3 bg-accent-yellow text-white rounded-lg hover:bg-accent-pink transition"
        >
           {$t('toolkit.basics.explore', 'Explore')}
        </a>
      </li>

      <!-- Basics 3: Famous Examples -->
      <li>
        <h3 class="text-2xl font-bold text-accent-pink"> {$t('toolkit.basics.examples_title', 'Famous Examples')}</h3>
        <p>
           {$t(
            'toolkit.basics.examples_description',
            'Discover famous examples of sacred geometry, including the Flower of Life, the Great Pyramid of Giza, and more.'
          )}
        </p>
        <a 
          href="/toolkit/basics/famous-examples" 
          class="inline-block mt-4 px-6 py-3 bg-accent-pink text-white rounded-lg hover:bg-accent-green transition"
        >
           {$t('toolkit.basics.explore', 'Explore')}
        </a>
      </li>
    </ul>
  </section>

  <!-- Call-to-Action -->
  <div class="not-prose mt-8">
    <a 
      href="/toolkit/tools" 
      class="inline-block px-6 py-3 bg-accent-green text-white rounded-lg hover:bg-accent-pink transition"
    >
       {$t('toolkit.basics.cta', 'Move on to Tools')}
    </a>
  </div>
</article>

