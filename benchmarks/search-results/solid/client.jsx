import { hydrate, render } from "solid-js/dom";
import App from "./components/App";

var mountNode = document.getElementById("searchResultsMount");

if (mountNode) {
  hydrate(() =>
    <App searchResultsData={window.searchResultsData} />,
    mountNode
  );

  console.log("Re-rendering on client completed");
}

window.addBench("solid", function(el, getNextSearchResults) {
  const res = getNextSearchResults();
  let setSearchResultsData;
  render(() => <App searchResultsData={res} onMount={_set => (setSearchResultsData = _set)} />, el);

  return function(done) {
    setSearchResultsData(getNextSearchResults())
    done();
  };
});

