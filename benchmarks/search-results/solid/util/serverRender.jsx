const { renderToString } = require("solid-js/web");

module.exports = function solidRender(App, searchResultsData) {
  const { html } = renderToString(() => App({searchResultsData}));
  return html;
};
