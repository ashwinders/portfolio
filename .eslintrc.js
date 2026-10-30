module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ["eslint:recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // add or tweak rules as you like
    "no-unused-vars": "warn",
    "no-console": "off",
  },
};
