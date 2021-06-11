import { renderToString } from "solid-js/web";
import App from "./components/App";

export default function(getNextSearchResults) {
  return function benchFn() {
    const res = getNextSearchResults();
    return renderToString(() => <App searchResultsData={res} />), { noScript: true };
  };
};
