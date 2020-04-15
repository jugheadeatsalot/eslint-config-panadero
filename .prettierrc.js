module.exports = {
  arrowParens: 'always',
  bracketSpacing: false,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'es5',
  useTabs: false,
  overrides: [
    {
      files: ['*.json', '*.yaml', '*.yml', '.*.js', '__*.js'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
