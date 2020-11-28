module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  plugins: ["testing-library", "jest"],
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:jest/all", "airbnb"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
  },
};
