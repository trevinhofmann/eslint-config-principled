module.exports = {
  plugins: [
    'react',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    linkComponents: [
      { name: 'Link', linkAttribute: 'to' },
    ],
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    './best-practices',
    './possible-errors',
    './stylistic-issues',
  ].map(path => require.resolve(path)),
};
