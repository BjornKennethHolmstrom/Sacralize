<!-- src/lib/components/sacred-geometry/GeometryBase.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';

  // Common props
  export let showGrid = true;
  export let gridSize = 20;
  export let showMeasurements = true;

  // Canvas state
  let canvas: SVGSVGElement;
  let canvasWidth = 800;
  let canvasHeight = 600;

  // Handle resize
  function handleResize() {
    const container = canvas?.parentElement;
    if (container) {
      canvasWidth = container.clientWidth;
      canvasHeight = container.clientHeight;
    }
  }

  onMount(() => {
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    
    if (canvas?.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => resizeObserver.disconnect();
  });
</script>

<div class="w-full max-w-6xl mx-auto">
  <!-- Common Controls -->
  <div class="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Grid Options</label>
      <div class="space-y-2">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={showGrid}
            class="text-accent-pink"
          />
          <span class="text-sm text-cosmic-light">Show Grid</span>
        </label>
        <div class="flex items-center space-x-2">
          <input
            type="range"
            min="10"
            max="50"
            step="5"
            bind:value={gridSize}
            class="w-full"
            disabled={!showGrid}
          />
          <span class="text-sm text-cosmic whitespace-nowrap">{gridSize}px</span>
        </div>
      </div>
    </div>

    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Measurements</label>
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          bind:checked={showMeasurements}
          class="text-accent-pink"
        />
        <span class="text-sm text-cosmic-light">Show Measurements</span>
      </label>
    </div>

    <!-- Slot for additional controls -->
    <slot name="controls" />
  </div>

  <!-- Canvas -->
  <div class="aspect-square w-full border border-cosmic rounded-lg overflow-hidden bg-cosmic-dark">
    <svg
      bind:this={canvas}
      width={canvasWidth}
      height={canvasHeight}
      viewBox="0 0 {canvasWidth} {canvasHeight}"
      class="w-full h-full"
    >
      <!-- Grid -->
      {#if showGrid}
        <g stroke={showGrid ? '#6272a4' : 'none'} stroke-width="0.5" opacity="0.3">
          {#each Array(Math.ceil(canvasWidth / gridSize)) as _, i}
            <line x1={i * gridSize} y1="0" x2={i * gridSize} y2={canvasHeight} />
          {/each}
          {#each Array(Math.ceil(canvasHeight / gridSize)) as _, i}
            <line x1="0" y1={i * gridSize} x2={canvasWidth} y2={i * gridSize} />
          {/each}
        </g>
      {/if}

      <!-- Slot for geometry content -->
      <slot />

      <!-- Slot for measurements -->
      {#if showMeasurements}
        <slot name="measurements" />
      {/if}
    </svg>
  </div>

  <!-- Slot for additional content below canvas -->
  <slot name="below-canvas" />
</div>

<style>
  :global(input[type="range"]) {
    @apply bg-cosmic-dark;
  }
</style>
