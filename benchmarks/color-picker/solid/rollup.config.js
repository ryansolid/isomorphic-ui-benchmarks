import nodeResolvePlugin from "@rollup/plugin-node-resolve";
import babelPlugin from "@rollup/plugin-babel";
import path from "path";

export default [
  {
    input: path.join(__dirname, "client.jsx"),
    plugins: [
      nodeResolvePlugin({
        extensions: [".js", ".jsx"]
      }),
      babelPlugin({
        babelrc: false,
        babelHelpers: "bundled",
        presets: [["solid", { generate: "dom", hydratable: true }]]
      })
    ],
    output: {
      name: "app",
      format: "iife",
      file: path.join(process.env.BUNDLES_DIR, "solid.js")
    }
  },
  {
    input: path.join(__dirname, "server.jsx"),
    plugins: [
      nodeResolvePlugin({
        exportConditions: ["solid", "node"],
        extensions: [".js", ".jsx"]
      }),
      babelPlugin({
        babelrc: false,
        babelHelpers: "bundled",
        presets: [["solid", { generate: "ssr", hydratable: false }]]
      })
    ],
    external: ["stream"],
    output: {
      name: "server",
      format: "cjs",
      exports: "auto",
      file: path.join(__dirname, "server.js")
    }
  },
  {
    input: path.join(__dirname, "components/App.jsx"),
    plugins: [
      nodeResolvePlugin({
        exportConditions: ["solid", "node"],
        extensions: [".js", ".jsx"]
      }),
      babelPlugin({
        babelrc: false,
        babelHelpers: "bundled",
        presets: [["solid", { generate: "ssr", hydratable: true }]]
      })
    ],
    external: ["stream"],
    output: {
      name: "server-hydrate",
      format: "cjs",
      exports: "auto",
      file: path.join(__dirname, "util/App.js")
    }
  }
];
