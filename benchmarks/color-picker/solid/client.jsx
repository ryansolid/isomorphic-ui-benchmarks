import { hydrate, render } from "solid-js/web";
import App from "./components/App";

const mountNode = document.getElementById("mount");

if (window.colors) {
  hydrate(() => <App colors={window.colors} />, mountNode);

  console.log("Re-rendering on client completed");
}

window.addBench("solid", function(el, colors) {
  let setSelectedColorIndex;
  let selectedColorIndex = 0;

  render(
    () => <App colors={colors} onMount={_set => (setSelectedColorIndex = _set)} />,
    el
  );

  return done => {
    setSelectedColorIndex(++selectedColorIndex % colors.length);
    done();
  };
});
