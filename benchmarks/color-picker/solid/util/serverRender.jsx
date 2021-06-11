const { renderToString } = require("solid-js/web");

module.exports = function solidRender(App, colors) {
  return renderToString(() => App({colors}));
};
