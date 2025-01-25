<!-- src/lib/components/FibonacciSpiralGenerator.svelte -->
<script lang="ts">
  import { t } from 'svelte-i18n';

  // Generator settings
  let iterations = 8;
  let showNumbers = true;
  let showGrid = true;
  let animated = true;
  let colorScheme = 'default';
  let rotationAngle = 0;
  let showSequence = true;

  // Comparison settings
  let showGoldenSpiral = false;

  const colorSchemes = {
    default: { 
      fibonacci: '#ff79c6',
      golden: '#50fa7b',
      difference: '#f1fa8c',
      squares: '#bd93f9',
      text: '#f8f8f2',
      grid: '#6272a4'
    },
    nature: {
      fibonacci: '#50fa7b',
      golden: '#ff79c6',
      difference: '#f1fa8c',
      squares: '#8be9fd',
      text: '#f8f8f2',
      grid: '#6272a4'
    },
    golden: {
      fibonacci: '#f1fa8c',
      golden: '#bd93f9',
      difference: '#ff79c6',
      squares: '#ffb86c',
      text: '#f8f8f2',
      grid: '#6272a4'
    }
  };

  // Generate Fibonacci sequence
  function getFibonacciNumbers(count: number): number[] {
    const sequence = [1, 1];
    for (let i = 2; i < count; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  }

  $: fibNumbers = getFibonacciNumbers(iterations);
  $: maxFib = fibNumbers[fibNumbers.length - 1];
  $: baseUnit = 50; // Base unit size for scaling
  $: scale = 1;
  let viewBox: string;

  $: {
    // Calculate the largest square size
    const largestSquareSize = (fibNumbers[fibNumbers.length - 1] / fibNumbers[0]) * baseUnit;
    // Add some padding (20%)
    const padding = largestSquareSize * 0.2;
    const viewBoxSize = largestSquareSize + padding * 2;
    viewBox = `${-viewBoxSize/2} ${-viewBoxSize/2} ${viewBoxSize} ${viewBoxSize}`;
  }

  // Generate squares for the spiral
  function generateSquares() {
    const squares = [];
    let x = -baseUnit * 2; // Start more to the left
    let y = -baseUnit * 2; // Start more to the top
    let direction = 0; // 0: right, 1: down, 2: left, 3: up

    // Calculate initial size for first square
    const initialSize = baseUnit;
    squares.push({ x, y, size: initialSize });
    
    for (let i = 1; i < fibNumbers.length; i++) {
      const size = (fibNumbers[i] / fibNumbers[0]) * baseUnit; // Scale relative to first number
      const prevSize = (fibNumbers[i - 1] / fibNumbers[0]) * baseUnit;
      
      switch (direction) {
        case 0: // Moving right
          x = squares[i - 1].x + prevSize;
          y = squares[i - 1].y;
          break;
        case 1: // Moving down
          x = squares[i - 1].x;
          y = squares[i - 1].y + prevSize;
          break;
        case 2: // Moving left
          x = squares[i - 1].x - size;
          y = squares[i - 1].y;
          break;
        case 3: // Moving up
          x = squares[i - 1].x;
          y = squares[i - 1].y - size;
          break;
      }

      squares.push({ x, y, size });
      direction = (direction + 1) % 4;
    }

    return squares;
  }

  // Generate spiral path
  function generateSpiralPath() {
    const squares = generateSquares();
    let path = '';
    
    for (let i = 1; i < squares.length; i++) {
      const current = squares[i];
      const prev = squares[i - 1];
      
      // Calculate arc center and start/end points
      let startX, startY, endX, endY, centerX, centerY;
      const rotation = prev.rotation % 360;

      switch (rotation) {
        case 0:
          centerX = prev.x;
          centerY = prev.y;
          startX = centerX + prev.size;
          startY = centerY;
          endX = centerX + prev.size;
          endY = centerY + prev.size;
          break;
        // Add other cases for different rotations
        // ...
      }

      if (i === 1) {
        path += `M ${startX} ${startY}`;
      }
      path += ` A ${prev.size} ${prev.size} 0 0 1 ${endX} ${endY}`;
    }

    return path;
  }

  // Generate true golden spiral path
  function generateGoldenSpiralPath() {
    const squares = generateSquares();
    let path = '';
    const PHI = (1 + Math.sqrt(5)) / 2;
    const GROWTH_FACTOR = Math.pow(PHI, 2 / Math.PI);
    
    // Start from the center of the first square
    let centerX = squares[0].x + squares[0].size / 2;
    let centerY = squares[0].y + squares[0].size / 2;
    
    // Create a logarithmic spiral
    for (let angle = 0; angle <= 6 * Math.PI; angle += 0.1) {
      const radius = Math.pow(GROWTH_FACTOR, angle) * (squares[0].size / 2);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      if (angle === 0) {
        path += `M ${x} ${y}`;
      } else {
        path += ` L ${x} ${y}`;
      }
    }
    
    return path;
  }

  // Calculate difference between spirals (for visualization)
  function calculateDifference() {
    // This is a simplified visualization of the difference
    const fibPath = generateSpiralPath();
    const goldenPath = generateGoldenSpiralPath();
    
    // Return both paths for the difference visualization
    return {
      fibonacci: fibPath,
      golden: goldenPath
    };
  }

  function downloadSVG() {
    const svgEl = document.querySelector('#fibonacci-spiral-svg');
    if (svgEl) {
      const svgData = svgEl.outerHTML;
      const blob = new Blob([svgData], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'fibonacci-spiral.svg';
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
    <!-- Iterations Control -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.controls.iterations')}
      </label>
      <input
        type="range"
        min="3"
        max="12"
        bind:value={iterations}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{iterations}</span>
    </div>

    <!-- Rotation Control -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.controls.rotation')}
      </label>
      <input
        type="range"
        min="0"
        max="360"
        bind:value={rotationAngle}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{rotationAngle}°</span>
    </div>

    <!-- Color Scheme -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.controls.color_scheme')}
      </label>
      <select
        bind:value={colorScheme}
        class="w-full bg-cosmic-dark border border-cosmic text-cosmic-light rounded px-2 py-1"
      >
        {#each Object.keys(colorSchemes) as scheme}
          <option value={scheme}>
            {$t(`toolkit.tools.fibonacci_spiral.controls.color_schemes.${scheme}`)}
          </option>
        {/each}
      </select>
    </div>

    <!-- Toggle Controls -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light mb-2">
        {$t('toolkit.tools.fibonacci_spiral.controls.options')}
      </label>
      <div class="space-y-2">
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={showNumbers}
            class="text-accent-pink"
          />
          <span class="text-sm text-cosmic-light">
            {$t('toolkit.tools.fibonacci_spiral.controls.show_numbers')}
          </span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={showGrid}
            class="text-accent-pink"
          />
          <span class="text-sm text-cosmic-light">
            {$t('toolkit.tools.fibonacci_spiral.controls.show_grid')}
          </span>
        </label>
        <label class="flex items-center space-x-2">
          <input
            type="checkbox"
            bind:checked={animated}
            class="text-accent-pink"
          />
          <span class="text-sm text-cosmic-light">
            {$t('toolkit.tools.fibonacci_spiral.controls.animate')}
          </span>
        </label>
      </div>
    </div>
  </div>

  <!-- Add new comparison controls -->
  <div class="mb-4 space-y-2">
    <label class="flex items-center space-x-2">
      <input
        type="checkbox"
        bind:checked={showGoldenSpiral}
        class="text-accent-pink"
      />
      <span class="text-sm text-cosmic-light">
        {$t('toolkit.tools.fibonacci_spiral.controls.show_golden_spiral')}
      </span>
    </label>
  </div>

  <!-- SVG Display -->
  <div class="aspect-square w-full border border-cosmic rounded-lg overflow-hidden bg-cosmic-dark">
    <svg
      id="fibonacci-spiral-svg"
      {viewBox}
      class="w-full h-full"
    >
      <g transform={`rotate(${rotationAngle})`}>
        <!-- Grid -->
        {#if showGrid}
          <g stroke={colorSchemes.default.grid} stroke-width="0.5" opacity="0.3">
            {#each Array(24) as _, i}
              <line 
                x1={-baseUnit * 6}
                y1={-baseUnit * 6 + i * baseUnit}
                x2={baseUnit * 6}
                y2={-baseUnit * 6 + i * baseUnit}
              />
              <line 
                x1={-baseUnit * 6 + i * baseUnit}
                y1={-baseUnit * 6}
                x2={-baseUnit * 6 + i * baseUnit}
                y2={baseUnit * 6}
              />
            {/each}
          </g>
        {/if}

        <!-- Squares -->
        {#each generateSquares() as square, i}
          {@const debugInfo = `Square ${i}: x=${square.x}, y=${square.y}, size=${square.size}`}
          {@const strokeColor = colorSchemes[colorScheme][i === iterations - 1 ? 'fibonacci' : 'squares']}
          
          <!-- Log square info -->
          {console.log(debugInfo)}
          
          <g class={animated ? 'animate-appear' : ''}>
            <rect
              x={square.x}
              y={square.y}
              width={square.size}
              height={square.size}
              fill="none"
              stroke={strokeColor}
              stroke-width="2"
            />
            {#if showNumbers}
              <text
                x={square.x + square.size/2}
                y={square.y + square.size/2}
                fill={colorSchemes[colorScheme].text}
                text-anchor="middle"
                dominant-baseline="middle"
                font-size={Math.max(baseUnit/2, Math.min(square.size/2, baseUnit * 1.5))}
              >
                {fibNumbers[i]}
              </text>
            {/if}
          </g>
        {/each}

        <!-- Spiral -->
        <path
          d={generateSpiralPath()}
          fill="none"
          stroke={colorSchemes.default.spiral}
          stroke-width="2"
          class={animated ? 'animate-draw' : ''}
        />

        <!-- Golden Spiral -->
        {#if showGoldenSpiral}
          <path
            d={generateGoldenSpiralPath()}
            fill="none"
            stroke={colorSchemes[colorScheme].golden}
            stroke-width="2"
            stroke-dasharray="5,5"
            class={animated ? 'animate-draw' : ''}
          />
        {/if}
      </g>

      <!-- Legend -->
      {#if showGoldenSpiral}
        <g transform="translate(20, 20)">
          <g>
            <line x1="0" y1="0" x2="20" y2="0" 
                  stroke={colorSchemes[colorScheme].fibonacci} 
                  stroke-width="3"/>
            <text x="25" y="5" fill={colorSchemes[colorScheme].text} font-size="12">
              Fibonacci Spiral
            </text>
          </g>
          <g transform="translate(0, 20)">
            <line x1="0" y1="0" x2="20" y2="0" 
                  stroke={colorSchemes[colorScheme].golden} 
                  stroke-width="2"
                  stroke-dasharray="5,5"/>
            <text x="25" y="5" fill={colorSchemes[colorScheme].text} font-size="12">
              Golden Spiral
            </text>
          </g>
        </g>
      {/if}

    </svg>
  </div>

  <!-- Fibonacci Sequence Display -->
  <div class="mt-4 p-4 bg-cosmic-dark rounded-lg overflow-x-auto">
    <div class="flex space-x-4 min-w-max">
      {#each fibNumbers as number, i}
        <div class="text-center">
          <div class="text-sm text-cosmic mb-1">n{i + 1}</div>
          <div class="text-cosmic-light">{number}</div>
        </div>
      {/each}
    </div>
  </div>

  <!-- Comparison Info -->
  {#if showGoldenSpiral}
    <div class="mt-4 p-4 bg-cosmic-dark rounded-lg">
      <h3 class="text-lg font-semibold text-cosmic-light mb-2">
        {$t('toolkit.tools.fibonacci_spiral.comparison.title')}
      </h3>
      <p class="text-cosmic mb-2">
        {$t('toolkit.tools.fibonacci_spiral.comparison.description')}
      </p>
      <ul class="list-disc list-inside space-y-1 text-cosmic-light">
        <li>{$t('toolkit.tools.fibonacci_spiral.comparison.differences.construction')}</li>
        <li>{$t('toolkit.tools.fibonacci_spiral.comparison.differences.growth')}</li>
        <li>{$t('toolkit.tools.fibonacci_spiral.comparison.differences.approximation')}</li>
      </ul>
    </div>
  {/if}

  <!-- Download Button -->
  <div class="mt-4 flex justify-end">
    <button
      on:click={downloadSVG}
      class="px-4 py-2 bg-accent-pink text-white rounded hover:bg-accent-green transition-colors"
    >
      {$t('toolkit.tools.fibonacci_spiral.controls.download')}
    </button>
  </div>
</div>

<style>
  :global(.animate-appear) {
    animation: appear 0.5s ease-out forwards;
  }

  :global(.animate-draw) {
    animation: draw 2s ease-out forwards;
    stroke-dasharray: 1000;
    stroke-dashoffset: 1000;
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

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
