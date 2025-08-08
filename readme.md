# `esbuild-plugin-eslint`

> Lint your [`esbuild`](https://github.com/evanw/esbuild) bundles with [`eslint`](https://github.com/eslint/eslint). 🧐

Nicely integrates the most recent version of [`eslint`](https://github.com/eslint/eslint) into an [`esbuild`](https://github.com/evanw/esbuild) plugin.

## How

```bash
npm i esbuild-plugin-eslint eslint --save-dev
```

```js
import { build } from 'esbuild';
import eslint from 'esbuild-plugin-eslint';

await build({
  // ...
  plugins: [
    eslint({ /* config */ })
  ]
});
```

```bash
node esbuild.config.js
```

## Config

This plugin respects your [ESLint configuration](https://eslint.org/docs/user-guide/configuring) as per default. It also takes a configuration object intended for the [ESLint constructor](https://eslint.org/docs/latest/developer-guide/nodejs-api#parameters) with the addition of a `filter`, `throwOnError`, and `throwOnWarning` property. The most important options are:

### `filter`

Type: `RegExp`<br>
Default: `/\.(?:jsx?|tsx?|mts|cts|mjs|cjs|vue|svelte)$/`<br>
Used by: [`esbuild`](https://github.com/evanw/esbuild)<br>
Reference: [esbuild.github.io](https://esbuild.github.io/plugins/#on-load-options)

Tells esbuild what files to look at. Only files matching this pattern will be handled by the plugin.

### `throwOnError`

Type: `boolean`<br>
Default: `false`<br>
Used by: [The plugin itself](https://github.com/thedanbob/esbuild-plugin-eslint)<br>

Instructs the plugin to forward errors found by ESLint to esbuild and throw an error.

### `throwOnWarning`

Type: `boolean`<br>
Default: `false`<br>
Used by: [The plugin itself](https://github.com/thedanbob/esbuild-plugin-eslint)<br>

Instructs the plugin to forward warnings found by ESLint to esbuild and throw an error.

### `fix`

Type: `boolean`<br>
Default: `false`<br>
Used by: [`eslint`](https://github.com/eslint/eslint)<br>
Reference: [eslint.org (`options.fix`)](https://eslint.org/docs/latest/developer-guide/nodejs-api#parameters)<br>

Controls whether to enable or disable the autofix feature of ESLint.

### `useEslintrc`

Type: `boolean`<br>
Default: `true`<br>
Used by: [`eslint`](https://github.com/eslint/eslint)<br>
Reference: [eslint.org (`options.useEslintrc`)](https://eslint.org/docs/latest/developer-guide/nodejs-api#parameters)<br>

If set to `false`, ESLint will not respect any configuration files it finds.

## Attribution

Forked from the [original plugin](https://github.com/robinloeffel/esbuild-plugin-eslint) by Robin Löffel.

## License

MIT
