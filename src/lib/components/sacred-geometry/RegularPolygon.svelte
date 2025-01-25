<!-- src/lib/components/sacred-geometry/RegularPolygon.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';
  import GeometryBase from './GeometryBase.svelte';

  let sides = 3;
  let radius = 100;
  let rotation = 0;
  let showInscribedCircle = true;
  let showCircumscribedCircle = true;

  // Generate polygon points
  function generatePolygonPoints(n: number, r: number, rot: number): string {
    const points: [number, number][] = [];
    const angleStep = (2 * Math.PI) / n;
    
    for (let i = 0; i < n; i++) {
      const angle = i * angleStep + (rot * Math.PI) / 180;
      points.push([
        r * Math.cos(angle),
        r * Math.sin(angle)
      ]);
    }

    return points.map(([x, y]) => `${x},${y}`).join(' ');
  }
</script>

<GeometryBase let:width let:height>
  <div slot="controls" class="space-y-2">
    <!-- Number of sides -->
    <div>
      <label class="block text-sm font-medium text-cosmic-light">Number of Sides</label>
      <div class="flex items-center space-x-2">
        <input
          type="range"
          min="3"
          max="12"
          step="1"
          bind:value={sides}
          class="w-full"
        />
        <span class="text-sm text-cosmic whitespace-nowrap">{sides}</span>
      </div>
    </div>

    <!-- Radius -->
    <div>
      <label class="block text-sm font-medium text-cosmic-light">Radius</label>
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
    </div>

    <!-- Rotation -->
    <div>
      <label class="block text-sm font-medium text-cosmic-light">Rotation</label>
      <div class="flex items-center space-x-2">
        <input
          type="range"
          min="0"
          max="360"
          bind:value={rotation}
          class="w-full"
        />
        <span class="text-sm text-cosmic whitespace-nowrap">{rotation}°</span>
      </div>
    </div>

    <!-- Show circles -->
    <div class="space-y-2">
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          bind:checked={showInscribedCircle}
          class="text-accent-pink"
        />
        <span class="text-sm text-cosmic-light">Show Inscribed Circle</span>
      </label>
      <label class="flex items-center space-x-2">
        <input
          type="checkbox"
          bind:checked={showCircumscribedCircle}
          class="text-accent-pink"
        />
        <span class="text-sm text-cosmic-light">Show Circumscribed Circle</span>
      </label>
    </div>
  </div>

  <!-- Polygon Construction -->
  <g transform="translate({width/2}, {height/2})">
    <!-- Circumscribed circle -->
    {#if showCircumscribedCircle}
      <circle
        cx="0"
        cy="0"
        r={radius}
        fill="none"
        stroke="#bd93f9"
        stroke-width="1"
        stroke-dasharray="4 4"
      />
    {/if}

    <!-- Inscribed circle -->
    {#if showInscribedCircle}
      <circle
        cx="0"
        cy="0"
        r={radius * Math.cos(Math.PI / sides)}
        fill="none"
        stroke="#ff79c6"
        stroke-width="1"
        stroke-dasharray="4 4"
      />
    {/if}

    <!-- Polygon -->
    <polygon
      points={generatePolygonPoints(sides, radius, rotation)}
      fill="#6272a4"
      fill-opacity="0.2"
      stroke="#50fa7b"
      stroke-width="2"
    />

    <!-- Center point -->
    <circle
      cx="0"
      cy="0"
      r="2"
      fill="#f8f8f2"
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
      {sides}-sided polygon, radius: {radius}px
    </text>
  </g>
</GeometryBase>
