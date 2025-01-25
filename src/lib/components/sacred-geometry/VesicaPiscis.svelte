<!-- src/lib/components/sacred-geometry/VesicaPiscis.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import GeometryBase from './GeometryBase.svelte';

  let radius = 100;
  let showConstructionSteps = true;
  let currentStep = 1;
  let animateConstruction = false;
</script>

<GeometryBase let:width let:height>
  <div slot="controls" class="space-y-2">
    <label class="block text-sm font-medium text-cosmic-light">
      {$t('toolkit.tools.sacred_geometry.vesica.controls.radius')}
    </label>
    <div class="flex items-center space-x-2">
      <input
        type="range"
        min="50"
        max="200"
        bind:value={radius}
        class="w-full"
      />
      <span class="text-sm text-cosmic whitespace-nowrap">{radius}px</span>
    </div>

    <label class="flex items-center space-x-2">
      <input
        type="checkbox"
        bind:checked={showConstructionSteps}
        class="text-accent-pink"
      />
      <span class="text-sm text-cosmic-light">
        {$t('toolkit.tools.sacred_geometry.vesica.controls.show_steps')}
      </span>
    </label>
  </div>

  <!-- Vesica Piscis Construction -->
  <g transform="translate({width/2}, {height/2})">
    <!-- Base circles -->
    <circle
      cx={-radius/2}
      cy="0"
      r={radius}
      fill="none"
      stroke="#bd93f9"
      stroke-width="2"
      class="transition-opacity duration-500"
      opacity={currentStep >= 1 ? "1" : "0"}
    />
    <circle
      cx={radius/2}
      cy="0"
      r={radius}
      fill="none"
      stroke="#bd93f9"
      stroke-width="2"
      class="transition-opacity duration-500"
      opacity={currentStep >= 2 ? "1" : "0"}
    />

    <!-- Construction lines -->
    {#if showConstructionSteps}
      <line
        x1={-radius/2}
        y1="0"
        x2={radius/2}
        y2="0"
        stroke="#ff79c6"
        stroke-width="1"
        stroke-dasharray="4 4"
        class="transition-opacity duration-500"
        opacity={currentStep >= 3 ? "1" : "0"}
      />
    {/if}

    <!-- Vesica shape -->
    <path
      d={`M ${-radius/2} 0 A ${radius} ${radius} 0 0 1 ${radius/2} 0 A ${radius} ${radius} 0 0 1 ${-radius/2} 0`}
      fill="#6272a4"
      fill-opacity="0.2"
      stroke="#50fa7b"
      stroke-width="2"
      class="transition-opacity duration-500"
      opacity={currentStep >= 4 ? "1" : "0"}
    />
  </g>

  <!-- Measurements -->
  <g slot="measurements" transform="translate({width/2}, {height/2})">
    <text
      x="0"
      y={-radius - 10}
      text-anchor="middle"
      fill="#f8f8f2"
      font-size="12"
    >
      Radius: {radius}px
    </text>
  </g>

  <div slot="below-canvas" class="mt-4">
    {#if showConstructionSteps}
      <div class="flex justify-center space-x-4">
        <button
          class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
          on:click={() => currentStep = Math.max(1, currentStep - 1)}
        >
          Previous Step
        </button>
        <button
          class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
          on:click={() => currentStep = Math.min(4, currentStep + 1)}
        >
          Next Step
        </button>
      </div>
    {/if}
  </div>
</GeometryBase>
