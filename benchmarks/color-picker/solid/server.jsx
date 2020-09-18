import { renderToString } from "solid-js/dom";
import App from "./components/App";

export default function(colors) {
  return function benchFn() {
    return renderToString(() => App({colors}));
  };
};
