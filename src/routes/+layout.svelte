<!-- src/routes/+layout.svelte -->
<script>
  import '../app.css';
  import { isLoading } from '$lib/i18n';
  import { t } from 'svelte-i18n';
  import LanguageSelector from '$lib/components/LanguageSelector.svelte';
</script>

{#if $isLoading}
  <div class="flex items-center justify-center min-h-screen bg-cosmic-dark text-white">
    <p>Loading...</p>
  </div>
{:else}
  <main class="min-h-screen flex flex-col bg-cosmic-dark text-white font-sans">
    <!-- Header -->
    <header class="w-full flex items-center justify-between bg-black bg-opacity-70 backdrop-blur p-4">
      <!-- Left: Logo -->
      <div class="flex items-center space-x-4">
        <img src="/images/logo.svg" alt="Sacralize Logo" class="w-10 h-10" />
        <h1 class="text-2xl font-bold text-cosmic-light">Sacralize</h1>
      </div>

      <!-- Center: Navigation Menu -->
      <nav class="flex space-x-6">
        <a href="/" class="text-accent-green hover:text-accent-pink">{$t('menu.home')}</a>
        <a href="/guides" class="text-accent-green hover:text-accent-pink">{$t('menu.guides')}</a>
        <a href="/toolkit" class="text-accent-green hover:text-accent-pink">{$t('menu.toolkit')}</a>
        <a href="/community" class="text-accent-green hover:text-accent-pink">{$t('menu.community')}</a>
        <a href="/about" class="text-accent-green hover:text-accent-pink">{$t('menu.about')}</a>
      </nav>

      <!-- Right: Language Selector -->
      <div class="flex items-center space-x-2">
        <LanguageSelector />
      </div>
    </header>

    <!-- Page Content -->
    <div class="flex-grow w-full flex flex-col items-center justify-center">
      <slot />
    </div>

    <!-- Footer -->
    <footer class="w-full bg-cosmic-dark py-4 text-center">
      <p class="text-sm text-cosmic">&copy; {new Date().getFullYear()} Sacralize | {$t('footer')}</p>
    </footer>
  </main>
{/if}


<style>
  /* Adjust header spacing */
  header {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /* Basic Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #282a36, #44475a);
    color: #f8f8f2;
    line-height: 1.6;
  }

  header {
    text-align: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
  }

  header h1 {
    font-size: 2.5rem;
    color: #bd93f9;
  }

  nav a {
    margin: 0 1rem;
    text-decoration: none;
    color: #50fa7b;
    transition: color 0.3s;
  }

  nav a:hover {
    color: #ff79c6;
  }

  .content {
    padding: 2rem;
    text-align: center;
  }

  footer {
    text-align: center;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.7);
    font-size: 0.9rem;
    color: #6272a4;
  }
</style>


