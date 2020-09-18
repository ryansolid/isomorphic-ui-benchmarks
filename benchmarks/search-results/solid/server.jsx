import { renderToString } from "solid-js/dom";
import App from "./components/App";

export default function(getNextSearchResults) {
  return function benchFn() {
    const res = getNextSearchResults();
    return renderToString(() => <App searchResultsData={res} />);
  };
};
