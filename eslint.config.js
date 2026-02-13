import js from "@eslint/js"
import tseslint from "typescript-eslint"

export default [
  js.configs.recommended,
  {
    ignores: ["dist", "node_modules"],
  },
  {
    files: ["./src/*"],
    extends: [...tseslint.configs.recommended],
    rules: {
      indent: ["error", 2],
      "linebreak-style": ["error", "unix"],
      quotes: ["warn", "double", { "avoidEscape": true }],
      semi: ["warn", "never"],
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
  },
  {
    files: ["./test/cases/warnings.js"],
    rules: {
      "func-style": "warn",
      "no-unused-vars": "warn",
      "no-empty-function": "warn",
    },
    languageOptions: {
      globals: {
        document: "readable"
      }
    }
  },
  {
    files: ["./test/cases/nothing.js"],
    languageOptions: {
      globals: {
        document: "readable"
      }
    }
  }
]
