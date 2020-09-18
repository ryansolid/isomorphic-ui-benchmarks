<script>
  export let item;
  let purchased = false;
</script>

<div
  className="search-results-item"
  style="background-color: {purchased ? '#f1c40f' : ''}">
  <h2>{item.title}</h2>

  <div className="lvpic pic img left">
    <div className="lvpicinner full-width picW">
      <a href="/buy/{item.id}" className="img imgWr2">
        <img src={item.image} alt={item.title} />
      </a>
    </div>
  </div>

  <span className="price">{item.price}</span>

  {#if purchased}
    <div className="purchased">Purchased!</div>
  {:else}
    <button
      className="buy-now"
      type="button"
      on:click={() => (purchased = true)}>
      Buy now!
    </button>
  {/if}
</div>
