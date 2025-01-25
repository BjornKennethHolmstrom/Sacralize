<!-- src/routes/toolkit/basics/what-is-sacred-geometry/PageNavigation.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';

  // Define section type
  interface Section {
    id: string;
    label: string;
    subsections?: Array<{
      id: string;
      label: string;
    }>;
  }

  // Props
  export let activeSection: string = '';

  // Sections structure with translation keys
  const sections: Section[] = [
    { id: 'introduction', label: 'intro.title' },
    { 
      id: 'patterns-in-nature', 
      label: 'patterns.title',
      subsections: [
        { id: 'hexagonal', label: 'patterns.hexagonal.title' },
        { id: 'golden-spiral', label: 'patterns.golden_spiral.title' },
        { id: 'fractals', label: 'patterns.fractals.title' }
      ]
    },
    { id: 'ancient-understanding', label: 'ancient.title' },
    { 
      id: 'key-concepts', 
      label: 'key_concepts.title',
      subsections: [
        { id: 'unity', label: 'key_concepts.fundamental_principles.unity.title' },
        { id: 'duality', label: 'key_concepts.fundamental_principles.duality.title' },
        { id: 'trinity', label: 'key_concepts.fundamental_principles.trinity.title' }
      ]
    },
    { 
      id: 'golden-ratio', 
      label: 'key_concepts.golden_ratio.title',
      subsections: [
        { id: 'examples', label: 'key_concepts.golden_ratio.examples.title' },
        { id: 'applications', label: 'key_concepts.golden_ratio.applications.title' }
      ]
    },
    {
      id: 'practical-applications',
      label: 'practical_applications.title',
      subsections: [
        { id: 'architecture', label: 'practical_applications.architecture.title' },
        { id: 'digital-design', label: 'practical_applications.digital_design.title' },
        { id: 'art-music', label: 'practical_applications.art_music.title' },
        { id: 'product-design', label: 'practical_applications.product_design.title' }
      ]
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
          {$t(`toolkit.basics.what_is_sacred_geometry.${section.label}`)}
        </a>
        
        {#if section.subsections}
          <div class="pl-4 space-y-2">
            {#each section.subsections as subsection}
              <a
                href="#{subsection.id}"
                class="block text-cosmic-light hover:text-accent-pink transition-colors text-xs {activeSection === subsection.id ? 'text-accent-pink' : ''}"
                on:click|preventDefault={() => scrollToSection(subsection.id)}
              >
                {$t(`toolkit.basics.what_is_sacred_geometry.${subsection.label}`)}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    {/each}
  </div>
</nav>
