module.exports = {
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  globals: {
    test: false,
    expect: false
  },
  env: {
    node: true,
    browser: true
  },
  rules: {
    "no-extra-semi": 2
  }
};
