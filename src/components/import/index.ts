module.exports = {
  plugins: [
    'import',
  ],
  extends: [
    'plugin:import/typescript', // TODO
    ...[
      './helpful-warnings',
      './module-systems',
      './static-analysis',
      './style-guide',
    ].map(path => require.resolve(path)),
  ],
};
