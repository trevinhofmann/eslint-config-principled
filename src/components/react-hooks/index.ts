module.exports = {
  plugins: [
    'react-hooks',
  ],
  extends: [
    './base',
  ].map(path => require.resolve(path)),
};
