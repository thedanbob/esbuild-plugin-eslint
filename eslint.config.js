import { defineConfig } from "eslint/config";
import sweet from "eslint-config-sweet";

sweet.push({
  files: ["./src/index.ts"],
  rules: {
    "no-console": "off",
    "unicorn/no-null": "off",
    "@stylistic/lines-around-comment": [
      "error",
      {
        allowEnumStart: true,
        allowInterfaceStart: true,
        allowModuleStart: true,
        allowTypeStart: true
      }
    ]
  }
}, {
  files: ["./test/cases/warnings.js"],
  rules: {
    "func-style": "warn",
    "no-unused-vars": "warn",
    "no-empty-function": "warn",
    "@stylistic/curly-newline": [
      "warn",
      "always"
    ]
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
})

export default defineConfig(sweet);
