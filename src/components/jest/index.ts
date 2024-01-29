module.exports = {
  plugins: [
    'jest',
  ],
  extends: [
    './base',
  ].map(path => require.resolve(path)),
  // env: {
  //   'jest/globals': true,
  // }, // TODO
};
