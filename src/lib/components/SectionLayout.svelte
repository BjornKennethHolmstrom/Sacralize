<!-- src/lib/components/SectionLayout.svelte -->
<script lang="ts">
  import Breadcrumbs from './Breadcrumbs.svelte';
  import SectionNav from './SectionNav.svelte';
  
  export let title: string;
  export let sections: {
    title: string;
    path: string;
    subsections?: { title: string; path: string; }[];
  }[];
</script>

<div class="max-w-7xl mx-auto px-4 py-8">
  <Breadcrumbs />
  
  <div class="flex gap-8">
    <SectionNav {sections} />
    
    <main class="flex-1 bg-cosmic-dark p-8 rounded-lg">
      <h1 class="text-4xl font-bold text-cosmic-light mb-8">{title}</h1>
      <div class="prose prose-invert max-w-none">
        <slot />
      </div>
    </main>
  </div>
</div>

<style>
  /* Add any additional styles here */
</style>