require("svelte/register");

var App = require("./components/App.svelte").default;

module.exports = function(getNextSearchResults) {
  return function benchFn(done) {
    const html = App.render({ searchResultsData: getNextSearchResults() });
    done();
    return html;
  };
};
