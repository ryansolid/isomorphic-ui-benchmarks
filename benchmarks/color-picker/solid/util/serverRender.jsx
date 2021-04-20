const { renderToString } = require("solid-js/web");

module.exports = function solidRender(App, colors) {
  const { html } = renderToString(() => App({colors}));
  return html;
};
