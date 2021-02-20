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
    extends: [
      './best-practices',
      './possible-errors',
      './stylistic-issues',
    ].map(path => require.resolve(path)),
  }
