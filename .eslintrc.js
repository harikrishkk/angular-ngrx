module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["@typescript-eslint", "ngrx"],
  extends: ["plugin:@typescript-eslint/recommended", "plugin:ngrx/recommended"],
  rules: {
    // Customize ESLint rules as needed
  },
};

// npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-ngrx
