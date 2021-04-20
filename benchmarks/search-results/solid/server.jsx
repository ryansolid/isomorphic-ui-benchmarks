import { renderToString } from "solid-js/web";
import App from "./components/App";

export default function(getNextSearchResults) {
  return function benchFn() {
    const res = getNextSearchResults();
    const { html } = renderToString(() => <App searchResultsData={res} />);
    return html;
  };
};
