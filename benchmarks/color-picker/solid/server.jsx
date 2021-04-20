import { renderToString } from "solid-js/web";
import App from "./components/App";

export default function(colors) {
  return function benchFn() {
    const { html } = renderToString(() => App({colors}));
    return html;
  };
};
