import App from "./components/App.svelte";

var mountNode = document.getElementById("searchResultsMount");

if (mountNode) {
  mountNode.innerHTML = "";

  new App({
    target: mountNode,
    props: { searchResultsData: window.searchResultsData }
  });

  console.log(`window.searchResultsData`, window.searchResultsData);

  console.log("Re-rendering on client completed");
}

window.addBench("svelte", function(el, getNextSearchResults) {
  var widget = new App({
    target: el,
    props: { searchResultsData: getNextSearchResults() }
  });

  return function(done) {
    widget.set({
      searchResultsData: getNextSearchResults()
    });
    done();
  };
});
