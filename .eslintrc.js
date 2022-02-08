module.exports = {
  "root": true,
  "extends": ["@evo/eslint-config-ng", "@evo/eslint-config-ng-templates", "plugin:storybook/recommended"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module"
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  }
};