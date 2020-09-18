<script>
  export let colors = [];
  let selectedColorIndex = 0;
  $: selectedColor = colors[selectedColorIndex];
</script>

<div class="colors">
  <h1>Choose your favorite color:</h1>
  <div class="colors">
    {#if colors.length}
      <ul>
        {#each colors as color, i}
          <li
            class="color {i === selectedColorIndex ? 'selected' : ''}"
            style="background-color: {color.hex}"
            on:click={() => (selectedColorIndex = i)}>
            {color.name}
          </li>
        {/each}
      </ul>
    {:else}
      <div>No colors!</div>
    {/if}
  </div>
  <div>
    You chose:
    <div class="chosen-color">{selectedColor.name}</div>
  </div>
</div>
