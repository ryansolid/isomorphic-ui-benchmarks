var app = require("./components/app").default;

module.exports = function(getNextSearchResults) {
  return function benchFn() {
    var html = app.renderToString(getNextSearchResults());
    return html;
  };
};
