module.exports = function serverRender(App, input, out) {
  const html = App.render({ colors: input.colors });
  out.beginAsync().end(html);
};
