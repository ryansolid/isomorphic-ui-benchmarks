<script>
  import SearchResultsItem from "./SearchResultsItem.svelte";
  import Footer from "./Footer.svelte";
  export let searchResultsData;
</script>

<div class="search-results">
  <div>
    {#each searchResultsData.items as item, i}
      <SearchResultsItem {item} />
    {/each}
  </div>
  <Footer />
</div>
