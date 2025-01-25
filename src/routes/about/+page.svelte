<!-- src/routes/about/+page.svelte -->
<script>
  import { t } from 'svelte-i18n'; // Assuming translation setup
</script>

<section class="w-full max-w-4xl mx-auto py-16 px-4 text-center">
  <!-- Why Sacralize Exists -->
  <div class="mb-12">
    <h1 class="text-4xl font-bold text-cosmic-light">{$t('about.title', 'About Sacralize')}</h1>
    <p class="mt-4 text-lg text-accent-green">
      {$t('about.mission', 'To make people aware of the beauty and interconnectedness of existence and to empower them to use these principles for the benefit of all.')}
    </p>
  </div>

  <!-- The Team -->
  <div class="mb-12">
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('about.team_title', 'The Team')}</h2>
    <p class="mt-4 text-lg">
      {$t('about.team_description', 'Sacralize is brought to you by Björn Kenneth Holmström, with the assistance of ChatGPT 4o and Claude 3.5 Sonnet.')}
    </p>
  </div>

  <!-- The Vision -->
  <div class="mb-12">
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('about.vision_title', 'The Vision')}</h2>
    <p class="mt-4 text-lg">
      {$t('about.vision_description', 'We don’t have a detailed vision yet, but we are looking forward to a prosperous future.')}
    </p>
  </div>

  <!-- FAQs -->
  <div>
    <h2 class="text-3xl font-semibold text-cosmic-light">{$t('about.faqs_title', 'Frequently Asked Questions')}</h2>
    <p class="mt-4 text-lg text-gray-400">
      {$t('about.faqs_placeholder', 'We are currently compiling common questions. Stay tuned!')}
    </p>
  </div>
</section>

