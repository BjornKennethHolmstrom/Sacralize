<script>
  import { t } from 'svelte-i18n'; // Assuming translation setup
</script>

<section class="w-full max-w-6xl mx-auto py-16 px-4">
  <!-- Page Title -->
  <div class="mb-12">
    <h1 class="text-4xl font-bold text-cosmic-light">{$t('guides.title', 'Interactive Guides')}</h1>
    <p class="mt-4 text-lg text-accent-green">
      {$t('guides.overview', 'Explore step-by-step guides and advanced applications to deepen your understanding of sacred geometry.')}
    </p>
  </div>

  <!-- Beginner's Guide -->
  <div class="mb-12">
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('guides.beginners_title', 'Beginner’s Guide')}</h2>
    <ul class="mt-6 space-y-4">
      <li class="text-lg text-accent-yellow">
        <a href="#understanding-patterns" class="hover:text-accent-pink">{$t('guides.understanding_patterns', 'Understanding Patterns: Basics of sacred geometry')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#visual-tutorials" class="hover:text-accent-pink">{$t('guides.visual_tutorials', 'Visual Tutorials: Step-by-step graphics')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#interactive-quizzes" class="hover:text-accent-pink">{$t('guides.interactive_quizzes', 'Interactive Quizzes: Test your knowledge')}</a>
      </li>
    </ul>
  </div>

  <!-- Advanced Applications -->
  <div class="mb-12">
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('guides.advanced_title', 'Advanced Applications')}</h2>
    <ul class="mt-6 space-y-4">
      <li class="text-lg text-accent-yellow">
        <a href="#art" class="hover:text-accent-pink">{$t('guides.using_in_art', 'Using Sacred Geometry in Art')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#architecture" class="hover:text-accent-pink">{$t('guides.urban_design', 'Urban and Architectural Design')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#philosophy" class="hover:text-accent-pink">{$t('guides.philosophical_connections', 'Philosophical Connections')}</a>
      </li>
    </ul>
  </div>

  <!-- Video Tutorials -->
<!--  <div>
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('guides.videos_title', 'Video Tutorials')}</h2>
    <p class="mt-6 text-lg text-cosmic">
      {$t('guides.videos_desc', 'Watch embedded videos to learn visually. These tutorials include examples, step-by-step instructions, and practical applications of sacred geometry.')}
    </p>
    <ul class="mt-6 space-y-4">
      <li class="text-lg text-accent-yellow">
        <a href="#introduction-video" class="hover:text-accent-pink">{$t('guides.video_introduction', 'Introduction to Sacred Geometry')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#pattern-tutorials-video" class="hover:text-accent-pink">{$t('guides.video_patterns', 'Tutorials on Patterns')}</a>
      </li>
      <li class="text-lg text-accent-yellow">
        <a href="#real-world-video" class="hover:text-accent-pink">{$t('guides.video_real_world', 'Sacred Geometry in the Real World')}</a>
      </li>
    </ul>
  </div> -->
</section>

