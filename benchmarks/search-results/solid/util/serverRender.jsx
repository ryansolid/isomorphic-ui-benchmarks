const { renderToString } = require("solid-js/dom");

module.exports = function solidRender(App, searchResultsData) {
  return renderToString(() => App({searchResultsData}));
};
