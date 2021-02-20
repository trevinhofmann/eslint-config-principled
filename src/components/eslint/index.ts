module.exports =   {
    extends: [
      './best-practices',
      './ecmascript-6',
      './possible-errors',
      './strict-mode',
      './stylistic-issues',
      './variables'
    ].map(path => require.resolve(path)),
  }
