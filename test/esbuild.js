import { build } from "esbuild";
import eslint from "../dist/index.mjs";

await build({
  entryPoints: [
    "./test/cases"
  ],
  plugins: [
    eslint()
  ],
  bundle: true,
  write: false
});
