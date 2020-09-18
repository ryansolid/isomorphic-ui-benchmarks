import commonjsPlugin from "@rollup/plugin-commonjs";
import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import babelPlugin from "@rollup/plugin-babel";
import path from "path";

export default {
  input: path.join(__dirname, "client.jsx"),
  plugins: [
    babelPlugin({ babelHelpers: "bundled" }),
    replace({ "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV) }),
    nodeResolvePlugin({
      mainFields: ["browser", "module", "jsnext", "main"],
      preferBuiltins: false,
      extensions: [".js", ".jsx"]
    }),
    commonjsPlugin({
      extensions: [".js", ".jsx"]
    })
  ],
  output: {
    name: "app",
    format: "iife",
    file: path.join(process.env.BUNDLES_DIR, "inferno.js")
  }
};
