module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard", "plugin:cypress/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    semi: ["error", "always"],
    quotes: "off",
    "comma-dangle": ["error", "always-multiline"],
    "cypress/no-unnecessary-waiting": "warn",
    "spaced-comment": ["error", "never"],
    "eol-last": "off",
    eqeqeq: ["error", "smart"],
    "n/handle-callback-err": "warn",
  },
  ignorePatterns: [
    "node_modules/",
    ".eslintrc.js",
    ".husky/pre-commit",
    "convert.js",
    "jsontoxls.js",
    "cypress/reports/",
    "cypress/results/",
  ],
};
