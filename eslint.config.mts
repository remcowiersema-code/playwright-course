import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import playwright from "eslint-plugin-playwright";
import globals from "globals";

export default [
  {
    files: ["**/*.{ts,tsx,js,mjs,cjs}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      playwright
    },

    // ⭐ Hier worden automatisch alle recommended rules geladen
    rules: {
      // TypeScript recommended rules
      ...tsPlugin.configs.recommended.rules,

      // Playwright recommended rules
      ...playwright.configs["playwright-test"].rules,

      // Unused vars → geel lijntje
      "@typescript-eslint/no-unused-vars": "warn",

      // Optioneel maar sterk aanbevolen:
      // Fouten op vergeten await bij Promises
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/require-await": "error",
      // "@typescript-eslint/no-misused-promises": "error"
    }
  }
];
