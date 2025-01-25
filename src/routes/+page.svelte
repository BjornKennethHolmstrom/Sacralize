<!-- src/routes/+page.svelte -->
<script>
  import { t } from 'svelte-i18n';
</script>

<section class="w-full flex flex-col items-center text-center py-16">
  <div class="w-full bg-sacred-pattern py-16">
    <!-- Added logo section -->
    <div class="mb-8">
      <img 
        src="/images/logo.svg" 
        alt="Sacralize Logo" 
        class="w-32 h-32 mx-auto animate-appear"
      />
    </div>
    
    <h1 class="text-6xl font-bold text-cosmic-light">{$t('title')}</h1>
    <p class="mt-4 text-xl text-accent-green">{$t('tagline')}</p>
    <div class="mt-8">
      <a 
        href="/toolkit" 
        class="px-8 py-4 bg-accent-pink text-white rounded-lg text-lg hover:bg-accent-yellow transition"
      >
        {$t('cta')}
      </a>
    </div>
  </div>

  <div class="max-w-4xl px-4 py-16">
    <h2 class="text-4xl font-semibold text-cosmic-light">{$t('about_title')}</h2>
    <p class="mt-6 text-lg">{$t('about_text')}</p>
  </div>

  <!-- Features Section -->
  <div class="max-w-5xl px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div class="p-6 bg-cosmic-dark rounded-lg shadow-md text-center">
      <h3 class="text-2xl font-bold text-accent-green">{$t('feature_1')}</h3>
      <p class="mt-4">{$t('feature_1_desc')}</p>
    </div>
    <div class="p-6 bg-cosmic-dark rounded-lg shadow-md text-center">
      <h3 class="text-2xl font-bold text-accent-yellow">{$t('feature_2')}</h3>
      <p class="mt-4">{$t('feature_2_desc')}</p>
    </div>
    <div class="p-6 bg-cosmic-dark rounded-lg shadow-md text-center">
      <h3 class="text-2xl font-bold text-accent-pink">{$t('feature_3')}</h3>
      <p class="mt-4">{$t('feature_3_desc')}</p>
    </div>
  </div>

  <!-- Call-to-Action Section -->
  <div class="py-16 bg-gradient-to-r from-cosmic-dark to-cosmic text-center">
    <h2 class="text-4xl font-semibold text-white">{$t('cta_title')}</h2>
    <p class="mt-4 text-lg">{$t('cta_text')}</p>
    <a 
      href="/toolkit" 
      class="mt-6 inline-block px-8 py-4 bg-accent-green text-white rounded-lg text-lg hover:bg-accent-pink transition"
    >
      {$t('cta')}
    </a>
  </div>
</section>

<style>
  .bg-sacred-pattern {
    background-image: url('/images/sacred-pattern.svg');
    background-repeat: repeat;
    position: relative;
  }

  .bg-sacred-pattern::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(40, 42, 54, 0.9), rgba(98, 114, 164, 0.8));
    z-index: 1;
  }

  .bg-sacred-pattern > * {
    position: relative;
    z-index: 2;
  }

  /* Add a subtle appearance animation for the logo */
  @keyframes appear {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-appear {
    animation: appear 1s ease-out;
  }
</style>
