import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // enforce getter and setter pairs in objects and classes
    // https://eslint.org/docs/rules/accessor-pairs
    // Enabled for Linting Principle 1: Correctness
    'accessor-pairs': ERROR,

    // enforce `return` statements in callbacks of array methods
    // https://eslint.org/docs/rules/array-callback-return
    // Enabled for Linting Principle 1: Correctness
    'array-callback-return': ERROR,

    // enforce the use of variables within the scope they are defined
    // https://eslint.org/docs/rules/block-scoped-var
    // Enabled for Linting Principle 1: Correctness
    'block-scoped-var': ERROR,

    // enforce that class methods utilize `this`
    // https://eslint.org/docs/rules/class-methods-use-this
    // Enabled for Linting Principle 1: Correctness
    'class-methods-use-this': ERROR,

    // enforce a maximum cyclomatic complexity allowed in a program
    // https://eslint.org/docs/rules/complexity
    // Disabled for Linting Principle 3: Flexibility
    'complexity': OFF,

    // require `return` statements to either always or never specify values
    // https://eslint.org/docs/rules/consistent-return
    // Disabled for Linting Principle 3: Flexibility
    'consistent-return': OFF,

    // enforce consistent brace style for all control statements
    // https://eslint.org/docs/rules/curly
    // Enabled for Linting Principle 2: Consistency
    'curly': WARN,

    // require `default` cases in `switch` statements
    // https://eslint.org/docs/rules/default-case
    // Disabled for Linting Principle 3: Flexibility
    'default-case': OFF,

    // enforce default clauses in switch statements to be last
    // https://eslint.org/docs/rules/default-case-last
    // Enabled for Linting Principle 1: Correctness
    'default-case-last': ERROR,

    // enforce default parameters to be last
    // https://eslint.org/docs/rules/default-param-last
    // Enabled for Linting Principle 1: Correctness
    'default-param-last': ERROR,

    // enforce consistent newlines before and after dots
    // https://eslint.org/docs/rules/dot-location
    // Enabled for Linting Principle 2: Consistency
    'dot-location': [WARN, 'property'],

    // enforce dot notation whenever possible
    // https://eslint.org/docs/rules/dot-notation
    // Enabled for Linting Principle 2: Consistency
    'dot-notation': WARN,

    // require the use of `===` and `!==`
    // https://eslint.org/docs/rules/eqeqeq
    // Enabled for Linting Principle 1: Correctness
    'eqeqeq': ERROR,

    // require grouped accessor pairs in object literals and classes
    // https://eslint.org/docs/rules/grouped-accessor-pairs
    // Enabled for Linting Principle 2: Consistency
    'grouped-accessor-pairs': [WARN, 'getBeforeSet'],

    // require `for-in` loops to include an `if` statement
    // https://eslint.org/docs/rules/guard-for-in
    // Enabled for Linting Principle 1: Correctness
    'guard-for-in': ERROR,

    // enforce a maximum number of classes per file
    // https://eslint.org/docs/rules/max-classes-per-file
    // Enabled for Linting Principle 2: Consistency
    'max-classes-per-file': WARN,

    // disallow the use of `alert`, `confirm`, and `prompt`
    // https://eslint.org/docs/rules/no-alert
    // Enabled for Linting Principle 1: Correctness
    'no-alert': ERROR,

    // disallow the use of `arguments.caller` or `arguments.callee`
    // https://eslint.org/docs/rules/no-caller
    // Enabled for Linting Principle 1: Correctness
    'no-caller': ERROR,

    // disallow lexical declarations in case clauses
    // https://eslint.org/docs/rules/no-case-declarations
    // Enabled for Linting Principle 1: Correctness
    'no-case-declarations': ERROR,

    // disallow returning value from constructor
    // https://eslint.org/docs/rules/no-constructor-return
    // Enabled for Linting Principle 1: Correctness
    'no-constructor-return': ERROR,

    // disallow division operators explicitly at the beginning of regular
    // expressions
    // https://eslint.org/docs/rules/no-div-regex
    // Disabled for Linting Principle 3: Flexibility
    'no-div-regex': OFF,

    // disallow `else` blocks after `return` statements in `if` statements
    // https://eslint.org/docs/rules/no-else-return
    // Enabled for Linting Principle 1: Correctness
    'no-else-return': [ERROR, {
      allowElseIf: false,
    }],

    // disallow empty functions
    // https://eslint.org/docs/rules/no-empty-function
    // Enabled for Linting Principle 1: Correctness
    'no-empty-function': ERROR,

    // disallow empty destructuring patterns
    // https://eslint.org/docs/rules/no-empty-pattern
    // Enabled for Linting Principle 1: Correctness
    'no-empty-pattern': ERROR,

    // disallow `null` comparisons without type-checking operators
    // https://eslint.org/docs/rules/no-eq-null
    // Enabled for Linting Principle 1: Correctness
    'no-eq-null': ERROR,

    // disallow the use of `eval()`
    // https://eslint.org/docs/rules/no-eval
    // Enabled for Linting Principle 1: Correctness
    'no-eval': ERROR,

    // disallow extending native types
    // https://eslint.org/docs/rules/no-extend-native
    // Enabled for Linting Principle 1: Correctness
    'no-extend-native': ERROR,

    // disallow unnecessary calls to `.bind()`
    // https://eslint.org/docs/rules/no-extra-bind
    // Enabled for Linting Principle 1: Correctness
    'no-extra-bind': ERROR,

    // disallow unnecessary labels
    // https://eslint.org/docs/rules/no-extra-label
    // Enabled for Linting Principle 1: Correctness
    'no-extra-label': ERROR,

    // disallow fallthrough of `case` statements
    // https://eslint.org/docs/rules/no-fallthrough
    // Enabled for Linting Principle 1: Correctness
    'no-fallthrough': ERROR,

    // disallow leading or trailing decimal points in numeric literals
    // https://eslint.org/docs/rules/no-floating-decimal
    // Enabled for Linting Principle 1: Correctness
    'no-floating-decimal': ERROR,

    // disallow assignments to native objects or read-only global variables
    // https://eslint.org/docs/rules/no-global-assign
    // Enabled for Linting Principle 1: Correctness
    'no-global-assign': ERROR,

    // disallow shorthand type conversions
    // https://eslint.org/docs/rules/no-implicit-coercion
    // Enabled for Linting Principle 2: Consistency
    'no-implicit-coercion': WARN,

    // disallow declarations in the global scope
    // https://eslint.org/docs/rules/no-implicit-globals
    // Enabled for Linting Principle 1: Correctness
    'no-implicit-globals': ERROR,

    // disallow the use of `eval()`-like methods
    // https://eslint.org/docs/rules/no-implied-eval
    // Enabled for Linting Principle 1: Correctness
    'no-implied-eval': ERROR,

    // disallow `this` keywords outside of classes or class-like objects
    // https://eslint.org/docs/rules/no-invalid-this
    // Enabled for Linting Principle 1: Correctness
    'no-invalid-this': ERROR,

    // disallow the use of the `__iterator__` property
    // https://eslint.org/docs/rules/no-iterator
    // Enabled for Linting Principle 1: Correctness
    'no-iterator': ERROR,

    // disallow labeled statements
    // https://eslint.org/docs/rules/no-labels
    // Enabled for Linting Principle 2: Consistency
    'no-labels': WARN,

    // disallow unnecessary nested blocks
    // https://eslint.org/docs/rules/no-lone-blocks
    // Enabled for Linting Principle 1: Correctness
    'no-lone-blocks': ERROR,

    // disallow function declarations that contain unsafe references inside loop
    // statements
    // https://eslint.org/docs/rules/no-loop-func
    // Enabled for Linting Principle 1: Correctness
    'no-loop-func': ERROR,

    // disallow magic numbers
    // https://eslint.org/docs/rules/no-magic-numbers
    // Disabled for Linting Principle 3: Flexibility
    'no-magic-numbers': OFF,

    // disallow multiple spaces
    // https://eslint.org/docs/rules/no-multi-spaces
    // Enabled for Linting Principle 2: Consistency
    'no-multi-spaces': WARN,

    // disallow multiline strings
    // https://eslint.org/docs/rules/no-multi-str
    // Enabled for Linting Principle 2: Consistency
    'no-multi-str': WARN,

    // disallow `new` operators outside of assignments or comparisons
    // https://eslint.org/docs/rules/no-new
    // Enabled for Linting Principle 1: Correctness
    'no-new': ERROR,

    // disallow `new` operators with the `Function` object
    // https://eslint.org/docs/rules/no-new-func
    // Enabled for Linting Principle 1: Correctness
    'no-new-func': ERROR,

    // disallow `new` operators with the `String`, `Number`, and `Boolean`
    // objects
    // https://eslint.org/docs/rules/no-new-wrappers
    // Enabled for Linting Principle 2: Consistency
    'no-new-wrappers': WARN,

    // disallow `\8` and `\9` escape sequences in string literals
    // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
    // Enabled for Linting Principle 1: Correctness
    'no-nonoctal-decimal-escape': ERROR,

    // disallow octal literals
    // https://eslint.org/docs/rules/no-octal
    // Enabled for Linting Principle 2: Consistency
    'no-octal': WARN,

    // disallow octal escape sequences in string literals
    // https://eslint.org/docs/rules/no-octal-escape
    // Enabled for Linting Principle 1: Correctness
    'no-octal-escape': ERROR,

    // disallow reassigning `function` parameters
    // https://eslint.org/docs/rules/no-param-reassign
    // Disabled for Linting Principle 3: Flexibility
    'no-param-reassign': OFF,

    // disallow the use of the `__proto__` property
    // https://eslint.org/docs/rules/no-proto
    // Enabled for Linting Principle 1: Correctness
    'no-proto': ERROR,

    // disallow variable redeclaration
    // https://eslint.org/docs/rules/no-redeclare
    // Enabled for Linting Principle 1: Correctness
    'no-redeclare': ERROR,

    // disallow certain properties on certain objects
    // https://eslint.org/docs/rules/no-restricted-properties
    // Disabled for Linting Principle 3: Flexibility
    'no-restricted-properties': OFF,

    // disallow assignment operators in `return` statements
    // https://eslint.org/docs/rules/no-return-assign
    // Enabled for Linting Principle 1: Correctness
    'no-return-assign': [ERROR, 'always'],

    // disallow unnecessary `return await`
    // https://eslint.org/docs/rules/no-return-await
    // Enabled for Linting Principle 1: Correctness
    'no-return-await': ERROR,

    // disallow `javascript:` urls
    // https://eslint.org/docs/rules/no-script-url
    // Enabled for Linting Principle 1: Correctness
    'no-script-url': ERROR,

    // disallow assignments where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-assign
    // Enabled for Linting Principle 1: Correctness
    'no-self-assign': ERROR,

    // disallow comparisons where both sides are exactly the same
    // https://eslint.org/docs/rules/no-self-compare
    // Enabled for Linting Principle 1: Correctness
    'no-self-compare': ERROR,

    // disallow comma operators
    // https://eslint.org/docs/rules/no-sequences
    // Enabled for Linting Principle 1: Correctness
    'no-sequences': ERROR,

    // disallow throwing literals as exceptions
    // https://eslint.org/docs/rules/no-throw-literal
    // Enabled for Linting Principle 2: Consistency
    'no-throw-literal': WARN,

    // disallow unmodified loop conditions
    // https://eslint.org/docs/rules/no-unmodified-loop-condition
    // Enabled for Linting Principle 1: Correctness
    'no-unmodified-loop-condition': ERROR,

    // disallow unused expressions
    // https://eslint.org/docs/rules/no-unused-expressions
    // Enabled for Linting Principle 1: Correctness
    'no-unused-expressions': ERROR,

    // disallow unused labels
    // https://eslint.org/docs/rules/no-unused-labels
    // Enabled for Linting Principle 1: Correctness
    'no-unused-labels': ERROR,

    // disallow unnecessary calls to `.call()` and `.apply()`
    // https://eslint.org/docs/rules/no-useless-call
    // Enabled for Linting Principle 1: Correctness
    'no-useless-call': ERROR,

    // disallow unnecessary `catch` clauses
    // https://eslint.org/docs/rules/no-useless-catch
    // Enabled for Linting Principle 1: Correctness
    'no-useless-catch': ERROR,

    // disallow unnecessary concatenation of literals or template literals
    // https://eslint.org/docs/rules/no-useless-concat
    // Enabled for Linting Principle 2: Consistency
    'no-useless-concat': WARN,

    // disallow unnecessary escape characters
    // https://eslint.org/docs/rules/no-useless-escape
    // Enabled for Linting Principle 1: Correctness
    'no-useless-escape': ERROR,

    // disallow redundant return statements
    // https://eslint.org/docs/rules/no-useless-return
    // Enabled for Linting Principle 1: Correctness
    'no-useless-return': ERROR,

    // disallow `void` operators
    // https://eslint.org/docs/rules/no-void
    // Enabled for Linting Principle 1: Correctness
    'no-void': ERROR,

    // disallow specified warning terms in comments
    // https://eslint.org/docs/rules/no-warning-comments
    // Disabled for Linting Principle 3: Flexibility
    'no-warning-comments': OFF,

    // disallow `with` statements
    // https://eslint.org/docs/rules/no-with
    // Enabled for Linting Principle 1: Correctness
    'no-with': ERROR,

    // enforce using named capture group in regular expression
    // https://eslint.org/docs/rules/prefer-named-capture-group
    // Disabled for Linting Principle 3: Flexibility
    'prefer-named-capture-group': OFF,

    // require using Error objects as Promise rejection reasons
    // https://eslint.org/docs/rules/prefer-promise-reject-errors
    // Enabled for Linting Principle 2: Consistency
    'prefer-promise-reject-errors': WARN,

    // disallow use of the `RegExp` constructor in favor of regular expression
    // literals
    // https://eslint.org/docs/rules/prefer-regex-literals
    // Enabled for Linting Principle 2: Consistency
    'prefer-regex-literals': [WARN, {
      disallowRedundantWrapping: true,
    }],

    // enforce the consistent use of the radix argument when using `parseInt()`
    // https://eslint.org/docs/rules/radix
    // Enabled for Linting Principle 1: Correctness
    'radix': ERROR,

    // disallow async functions which have no `await` expression
    // https://eslint.org/docs/rules/require-await
    // Enabled for Linting Principle 1: Correctness
    'require-await': ERROR,

    // enforce the use of `u` flag on RegExp
    // https://eslint.org/docs/rules/require-unicode-regexp
    // Enabled for Linting Principle 1: Correctness
    'require-unicode-regexp': ERROR,

    // require `var` declarations be placed at the top of their containing scope
    // https://eslint.org/docs/rules/vars-on-top
    // Disabled for Linting Principle 3: Flexibility
    'vars-on-top': OFF,

    // require parentheses around immediate `function` invocations
    // https://eslint.org/docs/rules/wrap-iife
    // Disabled for Linting Principle 3: Flexibility
    'wrap-iife': OFF,

    // require or disallow "Yoda" conditions
    // https://eslint.org/docs/rules/yoda
    // Enabled for Linting Principle 2: Consistency
    'yoda': WARN,
  },
};
