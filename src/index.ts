import type { OnLoadArgs, Plugin } from "esbuild"
import { ESLint } from "eslint"

interface Options {
  filter?: RegExp
  throwOnWarning?: boolean
  throwOnError?: boolean
  eslint?: ESLint.Options
}

export default ({
  filter = /\.(?:jsx?|tsx?|mts|cts|mjs|cjs|vue|svelte)$/,
  throwOnWarning = false,
  throwOnError = false,
  eslint: eslintOptions = {}
}: Options = {}): Plugin => ({
  name: "eslint",
  setup: async ({ onStart, onLoad, onEnd }) => {
    const eslint = new ESLint(eslintOptions)
    const formatter = await eslint.loadFormatter()
    const filesToLint: OnLoadArgs["path"][] = []

    onStart(() => {
      // Clear list of files from previous run in watch mode
      filesToLint.splice(0)
    })

    onLoad({ filter }, ({ path }): undefined => {
      if (!path.includes("node_modules")) {
        filesToLint.push(path)
      }
    })

    onEnd(async () => {
      const results = await eslint.lintFiles(filesToLint)
      const output = await formatter.format(results)

      if (eslintOptions.fix) {
        await ESLint.outputFixes(results)
      }

      if (output.length > 0) {
        console.log(output)
      }

      const errors = []
      const warningCount = results.reduce((sum, result) => sum + result.warningCount, 0)
      const errorCount = results.reduce((sum, result) => sum + result.errorCount, 0)

      if (throwOnWarning && warningCount > 0) {
        errors.push({ text: `${warningCount} warnings were found by eslint!` })
      }

      if (throwOnError && errorCount > 0) {
        errors.push({ text: `${errorCount} errors were found by eslint!` })
      }

      return errors.length > 0 ? { errors } : {}
    })
  }
})
