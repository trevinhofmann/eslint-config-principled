import { ERROR } from '../../constants';

module.exports = {
  rules: {
    // Report any invalid exports, i.e. re-export of the same name
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    // Enabled for Linting Principle 1: Correctness
    'import/export': ERROR,

    // Report use of exported name as identifier of default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-named-as-default': ERROR,

    // Report use of exported name as property of default export
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-named-as-default-member': ERROR,

    // Report imported names marked with `@deprecated` documentation tag
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-deprecated': ERROR,

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-extraneous-dependencies': [ERROR, {
      devDependencies: false,
      optionalDependencies: false,
    }],

    // Forbid the use of mutable exports with `var` or `let`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-mutable-exports': ERROR,

    // Report modules without exports, or exports without matching import in
    // another module
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unused-modules.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-unused-modules': ERROR,
  },
};
