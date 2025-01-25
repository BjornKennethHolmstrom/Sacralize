<!-- src/lib/components/FamousExamplesNavigation.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';

  // Props
  export let activeSection: string = '';

  // Sections structure
  const sections = [
    { 
      id: 'introduction',
      label: 'introduction.title'
    },
    {
      id: 'great-pyramid',
      label: 'great_pyramid.title',
      subsections: [
        { id: 'pyramid-features', label: 'great_pyramid.features.title' },
        { id: 'pyramid-significance', label: 'great_pyramid.significance.title' }
      ]
    },
    {
      id: 'flower-of-life',
      label: 'flower_of_life.title',
      subsections: [
        { id: 'flower-construction', label: 'flower_of_life.construction.title' },
        { id: 'flower-meanings', label: 'flower_of_life.meanings.title' }
      ]
    },
    {
      id: 'parthenon',
      label: 'parthenon.title',
      subsections: [
        { id: 'parthenon-proportions', label: 'parthenon.proportions.title' },
        { id: 'parthenon-influence', label: 'parthenon.influence.title' }
      ]
    },
    {
      id: 'modern-relevance',
      label: 'modern_relevance.title'
    }
  ];

  // Handle smooth scrolling
  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Update active section based on scroll position
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target.id;
          }
        });
      },
      {
        rootMargin: '-20% 0px -80% 0px'
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
      
      section.subsections?.forEach((subsection) => {
        const subElement = document.getElementById(subsection.id);
        if (subElement) observer.observe(subElement);
      });
    });

    return () => observer.disconnect();
  });
</script>

<nav class="hidden lg:block fixed right-8 top-32 w-48 bg-cosmic-dark bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
  <div class="text-sm space-y-4">
    {#each sections as section}
      <div class="space-y-2">
        <a
          href="#{section.id}"
          class="block text-accent-green hover:text-accent-pink transition-colors {activeSection === section.id ? 'text-accent-pink' : ''}"
          on:click|preventDefault={() => scrollToSection(section.id)}
        >
          {$t(`toolkit.basics.famous_examples.${section.label}`)}
        </a>
        
        {#if section.subsections}
          <div class="pl-4 space-y-2">
            {#each section.subsections as subsection}
              <a
                href="#{subsection.id}"
                class="block text-cosmic-light hover:text-accent-pink transition-colors text-xs {activeSection === subsection.id ? 'text-accent-pink' : ''}"
                on:click|preventDefault={() => scrollToSection(subsection.id)}
              >
                {$t(`toolkit.basics.famous_examples.${subsection.label}`)}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</nav>
