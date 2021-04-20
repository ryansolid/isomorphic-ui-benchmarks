<script>
  export let item;
  let purchased = false;
</script>

<div
  class="search-results-item"
  style="background-color: {purchased ? '#f1c40f' : ''}">
  <h2>{item.title}</h2>

  <div class="lvpic pic img left">
    <div class="lvpicinner full-width picW">
      <a href="/buy/{item.id}" class="img imgWr2">
        <img src={item.image} alt={item.title} />
      </a>
    </div>
  </div>

  <span class="price">{item.price}</span>

  {#if purchased}
    <div class="purchased">Purchased!</div>
  {:else}
    <button
      class="buy-now"
      type="button"
      on:click={() => (purchased = true)}>
      Buy now!
    </button>
  {/if}
</div>
