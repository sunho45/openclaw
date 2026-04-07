const globals = require("globals");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    rules: {
      "no-undef": "error"
    }
  }
];
