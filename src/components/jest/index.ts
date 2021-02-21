module.exports = {
  plugins: [
    'jest',
  ],
  extends: [
    './best-practices',
    './possible-errors',
  ].map(path => require.resolve(path)),
  // env: {
  //   'jest/globals': true,
  // }, // TODO
};
