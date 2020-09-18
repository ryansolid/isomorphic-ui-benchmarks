import { createSignal, createEffect } from "solid-js";
import SearchResultsItem from "./SearchResultsItem";
import Footer from "./Footer";

export default function App(props) {
  const [searchResultsData, setSearchResultsData] = createSignal(
    props.searchResultsData
  );
  createEffect(() => {
    if (props.onMount) props.onMount(setSearchResultsData);
    globalThis.onMount && globalThis.onMount();
  });
  return (
    <div class="search-results">
      <div>
        <Index each={searchResultsData().items}>
          {(item) => <SearchResultsItem item={item} />}
        </Index>
      </div>
      <Footer />
    </div>
  );
}
