module.exports = {
  extends: [
    '../components/jest',
  ].map(path => require.resolve(path)),
};
