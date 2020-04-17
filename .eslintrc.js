module.exports = {
  extends: ['./index.js'],
  overrides: [
    {
      files: ['index.js', '.*.js', '__*.js'],
      rules: {indent: ['error', 2]},
    },
  ],
};
