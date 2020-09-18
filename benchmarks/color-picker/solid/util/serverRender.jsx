const { renderToString } = require("solid-js/dom");

module.exports = function solidRender(App, colors) {
  return renderToString(() => App({colors}));
};
