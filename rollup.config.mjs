import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/main.ts",
  output: {
    // file: "main.js",
    format: "cjs",
    dir: "dist",
  },
  plugins: [typescript(), babel({ babelHelpers: "runtime" })],
};
