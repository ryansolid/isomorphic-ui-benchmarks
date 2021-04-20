var app = require("./components/app").default;

module.exports = function(colors) {
  return function benchFn() {
    var html = app.renderToString({
      colors: colors
    });

    return html;
  };
};
