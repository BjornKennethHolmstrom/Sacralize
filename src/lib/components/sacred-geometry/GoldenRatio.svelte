<!-- src/lib/components/sacred-geometry/GoldenRatio.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import GeometryBase from './GeometryBase.svelte';

  let baseSize = 100;
  let showSpiral = true;
  let showRectangles = true;
  let showRatios = true;
  let iterations = 8;

  // Golden ratio constant
  const PHI = (1 + Math.sqrt(5)) / 2;

  // Generate golden rectangle sequence
  function generateGoldenSequence(size: number, count: number): { width: number; height: number; x: number; y: number }[] {
    const rectangles = [];
    let currentSize = size;
    let x = 0;
    let y = 0;
    let isHorizontal = true;

    for (let i = 0; i < count; i++) {
      const nextSize = currentSize / PHI;
      
      rectangles.push({
        width: isHorizontal ? currentSize : nextSize,
        height: isHorizontal ? nextSize : currentSize,
        x,
        y
      });

      if (isHorizontal) {
        x += nextSize;
      } else {
        y += nextSize;
      }

      currentSize = nextSize;
      isHorizontal = !isHorizontal;
    }

    return rectangles;
  }

  // Generate golden spiral path
  function generateSpiralPath(rectangles: { width: number; height: number; x: number; y: number }[]): string {
    let path = '';
    let isHorizontal = true;

    rectangles.forEach((rect, i) => {
      if (i === 0) {
        path += `M ${rect.x} ${rect.y}`;
      }

      const radius = isHorizontal ? rect.height : rect.width;
      const centerX = rect.x + (isHorizontal ? 0 : rect.width);
      const centerY = rect.y + (isHorizontal ? rect.height : 0);
      
      path += ` A ${radius} ${radius} 0 0 1 ${centerX} ${centerY}`;
      
      isHorizontal = !isHorizontal;
    });

    return path;
  }
</script>

<GeometryBase let:width let:height>
  <div slot="controls" class="space-y-2">
    <!-- Base size -->
    <div>
      <label class="block text-sm font-medium text-cosmic-light">Base Size</label>
      <div class="flex items-center space-x-2">
        <input
          type="range"
          min="50"
          max="200"
          bind:value={baseSize}
          class="w-full"
        />
        <span class="text-sm text-cosmic whitespace-nowrap">{baseSize}px</span>
      </div>
    </div>

    <!-- Iterations -->
    <div>
      <label class="block text-sm font-medium text-cosmic-light">Iterations</label>
      <div class="flex items-center space-x-2">
        <input
          type="range"
          min="3"
          max="12"
          step="1"
          bind:value={iterations}
          class="w-full"
        />
        <span class="text-sm text-cosmic whitespace-nowrap">{iterations}</span>
      </div>
    </div>

    <!-- Display options -->
    <div class="space-y-2">
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          bind:checked={showSpiral}
          class="text-accent-pink"
        />
        <span class="text-sm text-cosmic-light">Show Spiral</span>
      </label>
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          bind:checked={showRectangles}
          class="text-accent-pink"
        />
        <span class="text-sm text-cosmic-light">Show Rectangles</span>
      </label>
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          bind:checked={showRatios}
          class="text-accent-pink"
        />
        <span class="text-sm text-cosmic-light">Show Ratios</span>
      </label>
    </div>
  </div>

  <!-- Golden Ratio Construction -->
  <g transform="translate({width/2 - baseSize}, {height/2 - baseSize/PHI})">
    {#if showRectangles}
      {#each generateGoldenSequence(baseSize, iterations) as rect}
        <rect
          x={rect.x}
          y={rect.y}
          width={rect.width}
          height={rect.height}
          fill="none"
          stroke="#bd93f9"
          stroke-width="1"
        />
      {/each}
    {/if}

    {#if showSpiral}
      <path
        d={generateSpiralPath(generateGoldenSequence(baseSize, iterations))}
        fill="none"
        stroke="#50fa7b"
        stroke-width="2"
      />
    {/if}

    {#if showRatios}
      {#each generateGoldenSequence(baseSize, iterations) as rect, i}
        <text
          x={rect.x + rect.width/2}
          y={rect.y + rect.height/2}
          text-anchor="middle"
          dominant-baseline="middle"
          fill="#f8f8f2"
          font-size="12"
        >
          1:{PHI.toFixed(3)}
        </text>
      {/each}
    {/if}
  </g>
</GeometryBase>
