const { renderToString } = require("solid-js/web");

module.exports = function solidRender(App, searchResultsData) {
  return renderToString(() => App({searchResultsData}));
};
