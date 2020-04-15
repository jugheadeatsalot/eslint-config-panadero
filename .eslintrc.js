module.exports = {
  extends: ['./index.js'],
  overrides: [
    {
      files: ['index.js', 'typescript.js'],
      rules: {
        indent: ['error', 2],
      },
    },
  ],
};
