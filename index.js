module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    './rules/__errors.js',
    './rules/__best-practices.js',
    './rules/__strict.js',
    './rules/__variables.js',
    './rules/__node.js',
    './rules/__styles.js',
    './rules/__es6.js',
    './rules/__imports.js',
  ],
  overrides: [
    {
      files: ['.*.js', '__*.js'],
      rules: {
        indent: ['error', 2],
      },
    },
  ],
};
