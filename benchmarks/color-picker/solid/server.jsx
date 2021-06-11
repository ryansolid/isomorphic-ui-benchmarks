import { renderToString } from "solid-js/web";
import App from "./components/App";

export default function(colors) {
  return function benchFn() {
    return renderToString(() => App({colors}), { noScript: true });
  };
};
