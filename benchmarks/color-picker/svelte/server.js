require("svelte/register");

var App = require("./components/App.svelte").default;

module.exports = function(colors) {
  return function benchFn(done) {
    const html = App.render({ colors });
    done();
    return html;
  };
};
