import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // Enforce consistent brace style for blocks
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    // Enabled for Linting Principle 2: Consistency
    'brace-style': OFF,
    '@typescript-eslint/brace-style': WARN,

    // Require or disallow trailing comma
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-dangle.md
    // Enabled for Linting Principle 2: Consistency
    'comma-dangle': OFF,
    '@typescript-eslint/comma-dangle': [WARN, 'always-multiline'],

    // Enforces consistent spacing before and after commas
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/comma-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'comma-spacing': OFF,
    '@typescript-eslint/comma-spacing': WARN,

    // Enforce default parameters to be last
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/default-param-last.md
    // Enabled for Linting Principle 1: Correctness
    'default-param-last': OFF,
    '@typescript-eslint/default-param-last': ERROR,

    // enforce dot notation whenever possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/dot-notation.md
    // Enabled for Linting Principle 2: Consistency
    'dot-notation': OFF,
    '@typescript-eslint/dot-notation': WARN,

    // Require or disallow spacing between function identifiers and their
    // invocations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'func-call-spacing': OFF,
    '@typescript-eslint/func-call-spacing': WARN,

    // Enforce consistent indentation
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
    // Enabled for Linting Principle 2: Consistency
    'indent': OFF,
    '@typescript-eslint/indent': [WARN, 2, {
      SwitchCase: 1,
    }],

    // require or disallow initialization in variable declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/init-declarations.md
    // Disabled for Linting Principle 3: Flexibility
    'init-declarations': OFF,
    '@typescript-eslint/init-declarations': OFF,

    // Enforce consistent spacing before and after keywords
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/keyword-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'keyword-spacing': OFF,
    '@typescript-eslint/keyword-spacing': WARN,

    // Require or disallow an empty line between class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/lines-between-class-members.md
    // Enabled for Linting Principle 2: Consistency
    'lines-between-class-members': OFF,
    '@typescript-eslint/lines-between-class-members': WARN,

    // Disallow generic `Array` constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    // Enabled for Linting Principle 2: Consistency
    'no-array-constructor': OFF,
    '@typescript-eslint/no-array-constructor': WARN,

    // Disallow duplicate class members
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dupe-class-members.md
    // Enabled for Linting Principle 1: Correctness
    'no-dupe-class-members': OFF,
    '@typescript-eslint/no-dupe-class-members': ERROR,

    // Disallow empty functions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    // Enabled for Linting Principle 1: Correctness
    'no-empty-function': OFF,
    '@typescript-eslint/no-empty-function': ERROR,

    // Disallow unnecessary parentheses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    // Disabled for Linting Principle 3: Flexibility
    'no-extra-parens': OFF,
    '@typescript-eslint/no-extra-parens': OFF,

    // Disallow unnecessary semicolons
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-semi.md
    // Enabled for Linting Principle 1: Correctness
    'no-extra-semi': OFF,
    '@typescript-eslint/no-extra-semi': ERROR,

    // Disallow the use of `eval()`-like methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implied-eval.md
    // Enabled for Linting Principle 1: Correctness
    'no-implied-eval': OFF,
    '@typescript-eslint/no-implied-eval': ERROR,

    // Disallow `this` keywords outside of classes or class-like objects
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-this.md
    // Enabled for Linting Principle 1: Correctness
    'no-invalid-this': OFF,
    '@typescript-eslint/no-invalid-this': ERROR,

    // Disallow function declarations that contain unsafe references inside loop
    // statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loop-func.md
    // Enabled for Linting Principle 1: Correctness
    'no-loop-func': OFF,
    '@typescript-eslint/no-loop-func': ERROR,

    // Disallow literal numbers that lose precision
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-loss-of-precision.md
    // Enabled for Linting Principle 1: Correctness
    'no-loss-of-precision': OFF,
    '@typescript-eslint/no-loss-of-precision': ERROR,

    // Disallow magic numbers
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    // Disabled for Linting Principle 3: Flexibility
    'no-magic-numbers': OFF,
    '@typescript-eslint/no-magic-numbers': OFF,

    // Disallow variable redeclaration
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-redeclare.md
    // Enabled for Linting Principle 1: Correctness
    'no-redeclare': OFF,
    '@typescript-eslint/no-redeclare': ERROR,

    // Disallow variable declarations from shadowing variables declared in the
    // outer scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
    // Enabled for Linting Principle 1: Correctness
    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': [ERROR, {
      builtinGlobals: true,
      ignoreTypeValueShadow: false,
      ignoreFunctionTypeParameterNameValueShadow: false,
    }],

    // Disallow throwing literals as exceptions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-throw-literal.md
    // Enabled for Linting Principle 2: Consistency
    'no-throw-literal': OFF,
    '@typescript-eslint/no-throw-literal': WARN,

    // Disallow unused expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    // Enabled for Linting Principle 1: Correctness
    'no-unused-expressions': OFF,
    '@typescript-eslint/no-unused-expressions': ERROR,

    // Disallow unused variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    // Enabled for Linting Principle 1: Correctness
    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': ERROR,

    // Disallow the use of variables before they are defined
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    // Enabled for Linting Principle 1: Correctness
    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [ERROR, {
      ignoreTypeReferences: false,
    }],

    // Disallow unnecessary constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md
    // Enabled for Linting Principle 1: Correctness
    'no-useless-constructor': OFF,
    '@typescript-eslint/no-useless-constructor': ERROR,

    // Enforce consistent spacing inside braces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/object-curly-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'object-curly-spacing': OFF,
    '@typescript-eslint/object-curly-spacing': [WARN, 'always'],

    // Enforce the consistent use of either backticks, double, or single quotes
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    // Enabled for Linting Principle 2: Consistency
    'quotes': OFF,
    '@typescript-eslint/quotes': [WARN, 'single', {
      avoidEscape: true,
    }],

    // Disallow async functions which have no `await` expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-await.md
    // Enabled for Linting Principle 1: Correctness
    'require-await': OFF,
    '@typescript-eslint/require-await': ERROR,

    // Enforces consistent returning of awaited values
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/return-await.md
    // Enabled for Linting Principle 1: Correctness
    'return-await': OFF,
    '@typescript-eslint/return-await': ERROR,

    // Require or disallow semicolons instead of ASI
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    // Enabled for Linting Principle 2: Consistency
    'semi': OFF,
    '@typescript-eslint/semi': WARN,

    // Enforces consistent spacing before function parenthesis
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-before-function-paren.md
    // Enabled for Linting Principle 2: Consistency
    'space-before-function-paren': OFF,
    '@typescript-eslint/space-before-function-paren': [WARN, 'never'],

    // This rule is aimed at ensuring there are spaces around infix operators.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/space-infix-ops.md
    // Enabled for Linting Principle 2: Consistency
    'space-infix-ops': OFF,
    '@typescript-eslint/space-infix-ops': WARN,
  },
};
