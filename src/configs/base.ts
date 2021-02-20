module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  extends: [
    '../components/import',
    '../components/eslint',
  ].map(path => require.resolve(path)),
};
