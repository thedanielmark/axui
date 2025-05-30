/* eslint-env node */

module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": "warn",
  },
  overrides: [
    {
      files: ["tailwind.config.js"],
      env: {
        node: true,
      },
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
};
