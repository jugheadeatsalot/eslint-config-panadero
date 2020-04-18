module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parserOptions: {sourceType: 'module'},
  extends: ['./rules/__errors.js', './rules/__best-practices.js', './rules/__strict.js', './rules/__variables.js', './rules/__node.js', './rules/__styles.js', './rules/__es6.js', './rules/__imports.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '.*.ts', '.*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
    },
  ],
};
