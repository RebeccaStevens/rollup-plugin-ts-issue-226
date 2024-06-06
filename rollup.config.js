import rollupPluginTs from "rollup-plugin-ts";

export default {
  input: "src/index.ts",
  output: {
    file: "build-rollup/index.js",
    format: "cjs",
  },
  plugins: [rollupPluginTs()],
};