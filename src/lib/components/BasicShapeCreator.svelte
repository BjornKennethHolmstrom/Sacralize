<!-- src/lib/components/BasicShapeCreator.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { t } from 'svelte-i18n';

  // Types
  type Shape = 'circle' | 'square' | 'triangle' | 'hexagon';
  type ShapeData = {
    id: string;
    type: Shape;
    x: number;
    y: number;
    size: number;
    rotation: number;
    fill: string;
    stroke: string;
    strokeWidth: number;
    layer: number;
    isSelected: boolean;
  };

  // Props
  export let gridSize = 20;
  export let showGrid = true;

  // State
  let selectedShape: Shape = 'circle';
  let shapes: ShapeData[] = [];
  let isDragging = false;
  let draggedShape: string | null = null;
  let selectedShapes = new Set<string>();
  let isShiftPressed = false;
  let highestLayer = 0;
  let canvas: SVGSVGElement;
  let canvasWidth = 800;
  let canvasHeight = 800;
  let startX = 0;
  let startY = 0;

  // Shape settings
  let shapeSize = 50;
  let rotation = 0;
  let fillColor = '#6272a4';
  let strokeColor = '#bd93f9';
  let strokeWidth = 2;

  // Generate SVG path for different shapes
  function getShapePath(shape: ShapeData): string {
    const halfSize = shape.size / 2;
    
    switch (shape.type) {
      case 'circle':
        return '';
      case 'square':
        return `M${-halfSize},${-halfSize} h${shape.size} v${shape.size} h${-shape.size} Z`;
      case 'triangle': {
        const height = shape.size * Math.sqrt(3) / 2;
        return `M0,${-height/2} L${halfSize},${height/2} L${-halfSize},${height/2} Z`;
      }
      case 'hexagon': {
        const points = [];
        for (let i = 0; i < 6; i++) {
          const angle = (i * 60 - 30) * Math.PI / 180;
          points.push(`${halfSize * Math.cos(angle)},${halfSize * Math.sin(angle)}`);
        }
        return 'M' + points.join(' L') + ' Z';
      }
      default:
        return '';
    }
  }

  // Delete selected shapes
  function deleteSelectedShapes() {
    shapes = shapes.filter(shape => !selectedShapes.has(shape.id));
    selectedShapes.clear();
  }

  // Duplicate selected shapes
  function duplicateSelectedShapes() {
    const newShapes = shapes
      .filter(shape => selectedShapes.has(shape.id))
      .map(shape => ({
        ...shape,
        id: crypto.randomUUID(),
        x: shape.x + gridSize,
        y: shape.y + gridSize,
        layer: ++highestLayer,
        isSelected: true
      }));
    
    selectedShapes.clear();
    newShapes.forEach(shape => selectedShapes.add(shape.id));
    shapes = [...shapes, ...newShapes];
  }

  // Layer management
  function moveLayer(direction: 'up' | 'down') {
    const selectedShapesList = shapes.filter(shape => selectedShapes.has(shape.id));
    if (selectedShapesList.length === 0) return;

    const otherShapes = shapes.filter(shape => !selectedShapes.has(shape.id));
    
    if (direction === 'up') {
      selectedShapesList.forEach(shape => {
        shape.layer = ++highestLayer;
      });
    } else {
      const lowestLayer = Math.min(...otherShapes.map(s => s.layer));
      selectedShapesList.forEach(shape => {
        shape.layer = lowestLayer - 1;
      });
    }

    shapes = [...otherShapes, ...selectedShapesList].sort((a, b) => a.layer - b.layer);
  }

  // Selection management
  function selectShape(shapeId: string, addToSelection = false) {
    if (!addToSelection) {
      selectedShapes.clear();
    }
    selectedShapes.add(shapeId);
    shapes = shapes.map(s => ({
      ...s,
      isSelected: selectedShapes.has(s.id)
    }));
  }

  function handleMouseDown(evt: MouseEvent) {
    if (evt.button !== 0) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;
    
    const clickedShape = shapes.find(shape => {
      const dx = x - shape.x;
      const dy = y - shape.y;
      return Math.sqrt(dx * dx + dy * dy) < shape.size / 2;
    });

    if (clickedShape) {
      isDragging = true;
      draggedShape = clickedShape.id;
      startX = x - clickedShape.x;
      startY = y - clickedShape.y;
      selectShape(clickedShape.id, isShiftPressed);
    } else {
      if (!isShiftPressed) {
        selectedShapes.clear();
      }
      const newShape: ShapeData = {
        id: crypto.randomUUID(),
        type: selectedShape,
        x,
        y,
        size: shapeSize,
        rotation,
        fill: fillColor,
        stroke: strokeColor,
        strokeWidth,
        layer: ++highestLayer,
        isSelected: true
      };
      shapes = [...shapes, newShape];
      selectShape(newShape.id, isShiftPressed);
    }
  }

  function handleMouseMove(evt: MouseEvent) {
    if (!isDragging || !draggedShape) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = evt.clientX - rect.left - startX;
    const y = evt.clientY - rect.top - startY;
    
    const index = shapes.findIndex(s => s.id === draggedShape);
    if (index >= 0) {
      shapes[index] = { ...shapes[index], x, y };
      shapes = shapes;
    }
  }

  function handleMouseUp() {
    isDragging = false;
    draggedShape = null;
  }

  // Keyboard event handlers
  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      isShiftPressed = true;
    } else if (event.key === 'Delete' || event.key === 'Backspace') {
      deleteSelectedShapes();
    } else if (event.key === 'd' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      duplicateSelectedShapes();
    }
  }

  function handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'Shift') {
      isShiftPressed = false;
    }
  }

  // Clear canvas
  function clearCanvas() {
    if (shapes.length === 0) return;
    
    const confirmed = window.confirm('Are you sure you want to clear the canvas? This action cannot be undone.');
    if (confirmed) {
      shapes = [];
      selectedShapes.clear();
      highestLayer = 0;
    }
  }

  // Handle canvas background click (deselection)
  function handleCanvasClick(evt: MouseEvent) {
    if (evt.target === canvas) {
      selectedShapes.clear();
      shapes = shapes.map(s => ({ ...s, isSelected: false }));
    }
  }

  // Edit shape properties
  function editShape(shape: ShapeData) {
    selectedShape = shape.type;
    shapeSize = shape.size;
    rotation = shape.rotation;
    fillColor = shape.fill;
    strokeColor = shape.stroke;
    strokeWidth = shape.strokeWidth;
  }

  onMount(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (const entry of entries) {
        canvasWidth = entry.contentRect.width;
        canvasHeight = entry.contentRect.height;
      }
    });

    if (canvas?.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

</script>

<div class="w-full max-w-6xl mx-auto p-4">
  <!-- Controls -->
  <div class="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    <!-- Shape Selection -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Shape Type</label>
      <select
        bind:value={selectedShape}
        class="w-full bg-cosmic-dark border border-cosmic text-cosmic-light rounded px-2 py-1"
      >
        <option value="circle">Circle</option>
        <option value="square">Square</option>
        <option value="triangle">Triangle</option>
        <option value="hexagon">Hexagon</option>
      </select>
    </div>

    <!-- Size Control -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Size</label>
      <input
        type="range"
        min="20"
        max="200"
        bind:value={shapeSize}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{shapeSize}px</span>
    </div>

    <!-- Rotation Control -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Rotation</label>
      <input
        type="range"
        min="0"
        max="360"
        bind:value={rotation}
        class="w-full"
      />
      <span class="text-sm text-cosmic">{rotation}°</span>
    </div>

    <!-- Grid Controls -->
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

    <!-- Color Controls -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Fill Color</label>
      <input
        type="color"
        bind:value={fillColor}
        class="w-full h-8 bg-cosmic-dark rounded"
      />
    </div>

    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Stroke Color</label>
      <input
        type="color"
        bind:value={strokeColor}
        class="w-full h-8 bg-cosmic-dark rounded"
      />
    </div>

    <!-- Layer Controls -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Layer Controls</label>
      <div class="grid grid-cols-2 gap-2">
        <button
          on:click={() => moveLayer('up')}
          class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
          disabled={selectedShapes.size === 0}
        >
          Up
        </button>
        <button
          on:click={() => moveLayer('down')}
          class="px-4 py-2 bg-accent-green text-white rounded hover:bg-accent-pink transition-colors"
          disabled={selectedShapes.size === 0}
        >
          Down
        </button>
      </div>
    </div>

    <!-- Shape Operations -->
    <div class="space-y-2">
      <label class="block text-sm font-medium text-cosmic-light">Operations</label>
      <div class="grid grid-cols-2 gap-2">
        <button
          on:click={duplicateSelectedShapes}
          class="px-4 py-2 bg-accent-pink text-white rounded hover:bg-accent-yellow transition-colors"
          disabled={selectedShapes.size === 0}
        >
          Duplicate
        </button>
        <button
          on:click={deleteSelectedShapes}
          class="px-4 py-2 bg-accent-pink text-white rounded hover:bg-accent-yellow transition-colors"
          disabled={selectedShapes.size === 0}
        >
          Delete
        </button>
      </div>
    </div>
  </div>

  <!-- Canvas -->
  <div class="aspect-square w-full border border-cosmic rounded-lg overflow-hidden bg-cosmic-dark">
    <svg
      bind:this={canvas}
      width={canvasWidth}
      height={canvasHeight}
      viewBox="0 0 {canvasWidth} {canvasHeight}"
      class="w-full h-full"
      on:mousedown={handleMouseDown}
      on:mousemove={handleMouseMove}
      on:mouseup={handleMouseUp}
      on:mouseleave={handleMouseUp}
      on:click={handleCanvasClick}
    >
      <!-- Grid -->
      {#if showGrid}
        <g stroke={strokeColor} stroke-width="0.5" opacity="0.3">
          {#each Array(Math.ceil(canvasWidth / gridSize)) as _, i}
            <line x1={i * gridSize} y1="0" x2={i * gridSize} y2={canvasHeight} />
          {/each}
          {#each Array(Math.ceil(canvasHeight / gridSize)) as _, i}
            <line x1="0" y1={i * gridSize} x2={canvasWidth} y2={i * gridSize} />
          {/each}
        </g>
      {/if}

      <!-- Shapes -->
      {#each shapes as shape (shape.id)}
        <g transform="translate({shape.x},{shape.y}) rotate({shape.rotation})">
          {#if shape.type === 'circle'}
            <circle
              r={shape.size / 2}
              fill={shape.fill}
              stroke={shape.stroke}
              stroke-width={shape.strokeWidth}
            />
          {:else}
            <path
              d={getShapePath(shape)}
              fill={shape.fill}
              stroke={shape.stroke}
              stroke-width={shape.strokeWidth}
            />
          {/if}
          {#if shape.isSelected}
            <rect
              x={-shape.size / 2}
              y={-shape.size / 2}
              width={shape.size}
              height={shape.size}
              fill="none"
              stroke="#ff79c6"
              stroke-width="1"
              stroke-dasharray="4 4"
              class="pointer-events-none"
            />
          {/if}
        </g>
      {/each}
    </svg>
  </div>
</div>
