import App from "./components/App.svelte";

var mountNode = document.getElementById("mount");

if (window.colors) {
  mountNode.innerHTML = "";

  var colors = window.colors;
  new App({
    target: mountNode,
    props: { colors }
  });

  console.log("Re-rendering on client completed");
}

window.addBench("svelte", function(el, colors) {
  var selectedColorIndex = 0;

  var widget = new App({
    target: el,
    props: { colors }
  });

  return function(done) {
    widget.set({
      selectedColorIndex: ++selectedColorIndex % colors.length
    });
    done();
  };
});
