<!-- src/lib/components/FlowerOfLifeGenerator.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';

  // Generator settings with reactive declarations
  let rings = 2;
  let radius = 40; // renamed from circleSize to be more clear
  let strokeWidth = 1;
  let showGuides = false;
  let animated = true;
  let colorScheme = 'default';

  // Color schemes
  const colorSchemes = {
    default: { stroke: '#bd93f9', guide: '#6272a4' },
    rainbow: { stroke: '#ff79c6', guide: '#50fa7b' },
    golden: { stroke: '#f1fa8c', guide: '#ffb86c' }
  };

  // Calculate the size of the SVG viewBox based on the number of rings and circle radius
  $: size = (rings * 2 + 1) * radius;
  $: viewBox = `${-size} ${-size} ${size * 2} ${size * 2}`;

  // Generate circle positions
  function generateCircles() {
    const circles = [];
    const centerX = 0;
    const centerY = 0;

    // Add center circle
    circles.push({ cx: centerX, cy: centerY });

    // Add circles for each ring
    for (let ring = 1; ring <= rings; ring++) {
      const numCircles = 6 * ring; // Each ring has 6 more circles than the previous

      for (let i = 0; i < numCircles; i++) {
        const angle = (i * 2 * Math.PI) / numCircles; // Angle for the current circle
        // Calculate position based on the radius and ring number
        const x = centerX + ring * radius * Math.cos(angle);
        const y = centerY + ring * radius * Math.sin(angle);
        circles.push({ cx: x, cy: y });
      }
    }

    return circles;
  }

  // Handle SVG download
  function downloadSVG() {
    const svgEl = document.querySelector('#flower-of-life-svg');
    if (svgEl) {
      const svgData = svgEl.outerHTML;
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'flower-of-life.svg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }
</script>

<div class="w-full max-w-4xl mx-auto p-4">
  <!-- Controls -->
  <div class="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <!-- Rings Control -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.controls.rings')}
      </label>
      <input
        type="range"
        min="1"
        max="6"
        bind:value={rings}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{rings}</span>
    </div>

    <!-- Circle Radius Control 
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.controls.circle_size')}
      </label>
      <input
        type="range"
        min="20"
        max="60"
        bind:value={radius}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{radius}px</span>
    </div> -->

    <!-- Stroke Width Control -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.controls.line_width')}
      </label>
      <input
        type="range"
        min="0.5"
        max="3"
        step="0.5"
        bind:value={strokeWidth}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{strokeWidth}px</span>
    </div>

    <!-- Color Scheme Selector -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.flower_of_life.controls.color_scheme')}
      </label>
      <select
        bind:value={colorScheme}
        class="w-full bg-cosmic-dark border border-cosmic text-cosmic-light rounded px-2 py-1"
      >
        {#each Object.entries(colorSchemes) as [key, _]}
          <option value={key}>
            {$t(`toolkit.tools.flower_of_life.controls.color_schemes.${key}`)}
          </option>
        {/each}
      </select>
    </div>

    <!-- Toggle Controls -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light mb-2">
        {$t('toolkit.tools.flower_of_life.controls.options')}
      </label>
      <div class="space-y-2">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={showGuides}
            class="text-accent-pink"
          />
          <span class="text-sm text-cosmic-light">
            {$t('toolkit.tools.flower_of_life.controls.show_guides')}
          </span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={animated}
            class="text-accent-pink"
          />
          <span class="text-sm text-cosmic-light">
            {$t('toolkit.tools.flower_of_life.controls.animate')}
          </span>
        </label>
      </div>
    </div>
  </div>

  <!-- SVG Display -->
  <div class="aspect-square w-full border border-cosmic rounded-lg overflow-hidden bg-cosmic-dark">
    <svg
      id="flower-of-life-svg"
      {viewBox}
      class="w-full h-full {animated ? 'animate-spin-slow' : ''}"
    >
      <!-- Guide Grid -->
      {#if showGuides}
        <g stroke={colorSchemes[colorScheme].guide} stroke-width="0.5">
          <line x1={-size} y1="0" x2={size} y2="0" />
          <line x1="0" y1={-size} x2="0" y2={size} />
          <circle cx="0" cy="0" r={radius} stroke-dasharray="5,5" fill="none" />
        </g>
      {/if}

      <!-- Flower of Life Pattern -->
      <g>
        {#each generateCircles() as circle, i}
          <circle
            {...circle}
            r={radius}
            fill="none"
            stroke={colorSchemes[colorScheme].stroke}
            stroke-width={strokeWidth}
            class={animated ? 'animate-appear' : ''}
            style="animation-delay: {i * 100}ms"
          />
        {/each}
      </g>
    </svg>
  </div>

  <!-- Download Button -->
  <div class="mt-4 flex justify-end">
    <button
      on:click={downloadSVG}
      class="px-4 py-2 bg-accent-pink text-white rounded hover:bg-accent-green transition-colors"
    >
      {$t('toolkit.tools.flower_of_life.controls.download')}
    </button>
  </div>
</div>

<style>
  /* Add any additional styles here */
  :global(.animate-spin-slow) {
    animation: spin 60s linear infinite;
  }

  :global(.animate-appear) {
    animation: appear 0.5s ease-out forwards;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
</style>
