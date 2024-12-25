import globals from "globals";
import pluginJs from "@eslint/js";
//import tseslint from "typescript-eslint";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    parser: tsParser,
    globals: { ...globals.browser, ...globals.node },
  },
  plugins: {
    "@typescript-eslint": tseslint,
  },
};