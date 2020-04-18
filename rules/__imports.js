module.exports = {
  env: {es6: true},
  parserOptions: {sourceType: 'module'},
  plugins: ['import'],
  settings: {
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
  },
  extends: [
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/react',
    'plugin:import/typescript',
  ],
};
