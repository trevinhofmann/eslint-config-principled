import { OFF, ERROR } from '../../constants';

module.exports = {
  rules: {
    // enforce "for" loop update clause moving the counter in the right
    // direction.
    // https://eslint.org/docs/rules/for-direction
    // Enabled for Linting Principle 1: Correctness
    'for-direction': ERROR,

    // enforce `return` statements in getters
    // https://eslint.org/docs/rules/getter-return
    // Enabled for Linting Principle 1: Correctness
    'getter-return': ERROR,

    // disallow using an async function as a Promise executor
    // https://eslint.org/docs/rules/no-async-promise-executor
    // Enabled for Linting Principle 1: Correctness
    'no-async-promise-executor': ERROR,

    // disallow `await` inside of loops
    // https://eslint.org/docs/rules/no-await-in-loop
    // Enabled for Linting Principle 1: Correctness
    'no-await-in-loop': ERROR,

    // disallow comparing against -0
    // https://eslint.org/docs/rules/no-compare-neg-zero
    // Enabled for Linting Principle 1: Correctness
    'no-compare-neg-zero': ERROR,

    // disallow assignment operators in conditional expressions
    // https://eslint.org/docs/rules/no-cond-assign
    // Enabled for Linting Principle 1: Correctness
    'no-cond-assign': [ERROR, 'always'],

    // disallow the use of `console`
    // https://eslint.org/docs/rules/no-console
    // Enabled for Linting Principle 1: Correctness
    'no-console': ERROR,

    // disallow constant expressions in conditions
    // https://eslint.org/docs/rules/no-constant-condition
    // Enabled for Linting Principle 1: Correctness
    'no-constant-condition': ERROR,

    // disallow control characters in regular expressions
    // https://eslint.org/docs/rules/no-control-regex
    // Enabled for Linting Principle 1: Correctness
    'no-control-regex': ERROR,

    // disallow the use of `debugger`
    // https://eslint.org/docs/rules/no-debugger
    // Enabled for Linting Principle 1: Correctness
    'no-debugger': ERROR,

    // disallow duplicate arguments in `function` definitions
    // https://eslint.org/docs/rules/no-dupe-args
    // Enabled for Linting Principle 1: Correctness
    'no-dupe-args': ERROR,

    // disallow duplicate conditions in if-else-if chains
    // https://eslint.org/docs/rules/no-dupe-else-if
    // Enabled for Linting Principle 1: Correctness
    'no-dupe-else-if': ERROR,

    // disallow duplicate keys in object literals
    // https://eslint.org/docs/rules/no-dupe-keys
    // Enabled for Linting Principle 1: Correctness
    'no-dupe-keys': ERROR,

    // disallow duplicate case labels
    // https://eslint.org/docs/rules/no-duplicate-case
    // Enabled for Linting Principle 1: Correctness
    'no-duplicate-case': ERROR,

    // disallow empty block statements
    // https://eslint.org/docs/rules/no-empty
    // Enabled for Linting Principle 1: Correctness
    'no-empty': ERROR,

    // disallow empty character classes in regular expressions
    // https://eslint.org/docs/rules/no-empty-character-class
    // Enabled for Linting Principle 1: Correctness
    'no-empty-character-class': ERROR,

    // disallow reassigning exceptions in `catch` clauses
    // https://eslint.org/docs/rules/no-ex-assign
    // Enabled for Linting Principle 1: Correctness
    'no-ex-assign': ERROR,

    // disallow unnecessary boolean casts
    // https://eslint.org/docs/rules/no-extra-boolean-cast
    // Enabled for Linting Principle 1: Correctness
    'no-extra-boolean-cast': ERROR,

    // disallow unnecessary parentheses
    // https://eslint.org/docs/rules/no-extra-parens
    // Disabled for Linting Principle 3: Flexibility
    'no-extra-parens': OFF,

    // disallow unnecessary semicolons
    // https://eslint.org/docs/rules/no-extra-semi
    // Enabled for Linting Principle 1: Correctness
    'no-extra-semi': ERROR,

    // disallow reassigning `function` declarations
    // https://eslint.org/docs/rules/no-func-assign
    // Enabled for Linting Principle 1: Correctness
    'no-func-assign': ERROR,

    // disallow assigning to imported bindings
    // https://eslint.org/docs/rules/no-import-assign
    // Enabled for Linting Principle 1: Correctness
    'no-import-assign': ERROR,

    // disallow variable or `function` declarations in nested blocks
    // https://eslint.org/docs/rules/no-inner-declarations
    // Enabled for Linting Principle 1: Correctness
    'no-inner-declarations': ERROR,

    // disallow invalid regular expression strings in `RegExp` constructors
    // https://eslint.org/docs/rules/no-invalid-regexp
    // Enabled for Linting Principle 1: Correctness
    'no-invalid-regexp': ERROR,

    // disallow irregular whitespace
    // https://eslint.org/docs/rules/no-irregular-whitespace
    // Enabled for Linting Principle 1: Correctness
    'no-irregular-whitespace': ERROR,

    // disallow literal numbers that lose precision
    // https://eslint.org/docs/rules/no-loss-of-precision
    // Enabled for Linting Principle 1: Correctness
    'no-loss-of-precision': ERROR,

    // disallow characters which are made with multiple code points in character
    // class syntax
    // https://eslint.org/docs/rules/no-misleading-character-class
    // Enabled for Linting Principle 1: Correctness
    'no-misleading-character-class': ERROR,

    // disallow calling global object properties as functions
    // https://eslint.org/docs/rules/no-obj-calls
    // Enabled for Linting Principle 1: Correctness
    'no-obj-calls': ERROR,

    // disallow returning values from Promise executor functions
    // https://eslint.org/docs/rules/no-promise-executor-return
    // Enabled for Linting Principle 1: Correctness
    'no-promise-executor-return': ERROR,

    // disallow calling some `Object.prototype` methods directly on objects
    // https://eslint.org/docs/rules/no-prototype-builtins
    // Enabled for Linting Principle 1: Correctness
    'no-prototype-builtins': ERROR,

    // disallow multiple spaces in regular expressions
    // https://eslint.org/docs/rules/no-regex-spaces
    // Enabled for Linting Principle 1: Correctness
    'no-regex-spaces': ERROR,

    // disallow returning values from setters
    // https://eslint.org/docs/rules/no-setter-return
    // Enabled for Linting Principle 1: Correctness
    'no-setter-return': ERROR,

    // disallow sparse arrays
    // https://eslint.org/docs/rules/no-sparse-arrays
    // Enabled for Linting Principle 1: Correctness
    'no-sparse-arrays': ERROR,

    // disallow template literal placeholder syntax in regular strings
    // https://eslint.org/docs/rules/no-template-curly-in-string
    // Enabled for Linting Principle 1: Correctness
    'no-template-curly-in-string': ERROR,

    // disallow confusing multiline expressions
    // https://eslint.org/docs/rules/no-unexpected-multiline
    // Enabled for Linting Principle 1: Correctness
    'no-unexpected-multiline': ERROR,

    // disallow unreachable code after `return`, `throw`, `continue`, and
    // `break` statements
    // https://eslint.org/docs/rules/no-unreachable
    // Enabled for Linting Principle 1: Correctness
    'no-unreachable': ERROR,

    // disallow loops with a body that allows only one iteration
    // https://eslint.org/docs/rules/no-unreachable-loop
    // Enabled for Linting Principle 1: Correctness
    'no-unreachable-loop': ERROR,

    // disallow control flow statements in `finally` blocks
    // https://eslint.org/docs/rules/no-unsafe-finally
    // Enabled for Linting Principle 1: Correctness
    'no-unsafe-finally': ERROR,

    // disallow negating the left operand of relational operators
    // https://eslint.org/docs/rules/no-unsafe-negation
    // Enabled for Linting Principle 1: Correctness
    'no-unsafe-negation': ERROR,

    // disallow use of optional chaining in contexts where the `undefined` value
    // is not allowed
    // https://eslint.org/docs/rules/no-unsafe-optional-chaining
    // Enabled for Linting Principle 1: Correctness
    'no-unsafe-optional-chaining': [ERROR, {
      disallowArithmeticOperators: true,
    }],

    // disallow useless backreferences in regular expressions
    // https://eslint.org/docs/rules/no-useless-backreference
    // Enabled for Linting Principle 1: Correctness
    'no-useless-backreference': ERROR,

    // disallow assignments that can lead to race conditions due to usage of
    // `await` or `yield`
    // https://eslint.org/docs/rules/require-atomic-updates
    // Enabled for Linting Principle 1: Correctness
    'require-atomic-updates': ERROR,

    // require calls to `isNaN()` when checking for `NaN`
    // https://eslint.org/docs/rules/use-isnan
    // Enabled for Linting Principle 1: Correctness
    'use-isnan': ERROR,

    // enforce comparing `typeof` expressions against valid strings
    // https://eslint.org/docs/rules/valid-typeof
    // Enabled for Linting Principle 1: Correctness
    'valid-typeof': [ERROR, {
      requireStringLiterals: true,
    }],
  },
};
