export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module"
    },
    env: {
      node: true,
      jest: true
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
