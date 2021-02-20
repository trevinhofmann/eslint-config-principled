import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // require or disallow initialization in variable declarations
    // https://eslint.org/docs/rules/init-declarations
    // Disabled for Linting Principle 3: Flexibility
    'init-declarations': OFF,

    // disallow deleting variables
    // https://eslint.org/docs/rules/no-delete-var
    // Enabled for Linting Principle 1: Correctness
    'no-delete-var': ERROR,

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    // Enabled for Linting Principle 1: Correctness
    'no-label-var': ERROR,

    // disallow specified global variables
    // https://eslint.org/docs/rules/no-restricted-globals
    // Disabled for Linting Principle 3: Flexibility
    'no-restricted-globals': OFF,

    // disallow variable declarations from shadowing variables declared in the
    // outer scope
    // https://eslint.org/docs/rules/no-shadow
    // Enabled for Linting Principle 1: Correctness
    'no-shadow': [ERROR, {
      builtinGlobals: true,
    }],

    // disallow identifiers from shadowing restricted names
    // https://eslint.org/docs/rules/no-shadow-restricted-names
    // Enabled for Linting Principle 1: Correctness
    'no-shadow-restricted-names': ERROR,

    // disallow the use of undeclared variables unless mentioned in
    // `/*global */` comments
    // https://eslint.org/docs/rules/no-undef
    // Enabled for Linting Principle 1: Correctness
    'no-undef': ERROR,

    // disallow initializing variables to `undefined`
    // https://eslint.org/docs/rules/no-undef-init
    // Enabled for Linting Principle 2: Consistency
    'no-undef-init': WARN,

    // disallow the use of `undefined` as an identifier
    // https://eslint.org/docs/rules/no-undefined
    // Disabled for Linting Principle 3: Flexibility
    'no-undefined': OFF,

    // disallow unused variables
    // https://eslint.org/docs/rules/no-unused-vars
    // Enabled for Linting Principle 1: Correctness
    'no-unused-vars': ERROR,

    // disallow the use of variables before they are defined
    // https://eslint.org/docs/rules/no-use-before-define
    // Enabled for Linting Principle 1: Correctness
    'no-use-before-define': ERROR,
  },
};
