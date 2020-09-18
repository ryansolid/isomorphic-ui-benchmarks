module.exports = function serverRender(App, searchResultsData, out) {
  const html = App.render({ searchResultsData });
  out.beginAsync().end(html);
};
