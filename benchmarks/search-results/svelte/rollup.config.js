import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import sveltePlugin from "rollup-plugin-svelte";
import path from "path";

export default {
  input: path.join(__dirname, "client.js"),
  plugins: [nodeResolvePlugin(), sveltePlugin()],
  output: {
    name: "app",
    format: "iife",
    file: path.join(process.env.BUNDLES_DIR, "svelte.js")
  }
};
