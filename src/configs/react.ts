module.exports = {
  extends: [
    '../components/react',
    '../components/react-hooks',
  ].map(path => require.resolve(path)),
};
