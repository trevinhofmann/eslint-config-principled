module.exports = {
  extends: [
    './base',
    '../components/typescript',
  ].map(path => require.resolve(path)),
};
