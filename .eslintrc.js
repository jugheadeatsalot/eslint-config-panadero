module.exports = {
  extends: ['./index.js'],
  overrides: [
    {
      files: ['index.js', 'typescript.js', '.*.js', '__*.js'],
      rules: {indent: ['error', 2]},
    },
  ],
};
