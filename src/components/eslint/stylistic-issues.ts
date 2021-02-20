import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // enforce linebreaks after opening and before closing array brackets
    // https://eslint.org/docs/rules/array-bracket-newline
    // Enabled for Linting Principle 2: Consistency
    'array-bracket-newline': [WARN, 'consistent'],

    // enforce consistent spacing inside array brackets
    // https://eslint.org/docs/rules/array-bracket-spacing
    // Enabled for Linting Principle 2: Consistency
    'array-bracket-spacing': WARN,

    // enforce line breaks after each array element
    // https://eslint.org/docs/rules/array-element-newline
    // Enabled for Linting Principle 2: Consistency
    'array-element-newline': [WARN, 'consistent'],

    // disallow or enforce spaces inside of blocks after opening block and
    // before closing block
    // https://eslint.org/docs/rules/block-spacing
    // Enabled for Linting Principle 2: Consistency
    'block-spacing': WARN,

    // enforce consistent brace style for blocks
    // https://eslint.org/docs/rules/brace-style
    // Enabled for Linting Principle 2: Consistency
    'brace-style': WARN,

    // enforce camelcase naming convention
    // https://eslint.org/docs/rules/camelcase
    // Enabled for Linting Principle 2: Consistency
    'camelcase': WARN,

    // enforce or disallow capitalization of the first letter of a comment
    // https://eslint.org/docs/rules/capitalized-comments
    // Disabled for Linting Principle 3: Flexibility
    'capitalized-comments': OFF,

    // require or disallow trailing commas
    // https://eslint.org/docs/rules/comma-dangle
    // Enabled for Linting Principle 2: Consistency
    'comma-dangle': [WARN, 'always-multiline'],

    // enforce consistent spacing before and after commas
    // https://eslint.org/docs/rules/comma-spacing
    // Enabled for Linting Principle 2: Consistency
    'comma-spacing': WARN,

    // enforce consistent comma style
    // https://eslint.org/docs/rules/comma-style
    // Enabled for Linting Principle 2: Consistency
    'comma-style': WARN,

    // enforce consistent spacing inside computed property brackets
    // https://eslint.org/docs/rules/computed-property-spacing
    // Enabled for Linting Principle 2: Consistency
    'computed-property-spacing': WARN,

    // enforce consistent naming when capturing the current execution context
    // https://eslint.org/docs/rules/consistent-this
    // Enabled for Linting Principle 2: Consistency
    'consistent-this': WARN,

    // require or disallow newline at the end of files
    // https://eslint.org/docs/rules/eol-last
    // Enabled for Linting Principle 2: Consistency
    'eol-last': WARN,

    // require or disallow spacing between function identifiers and their
    // invocations
    // https://eslint.org/docs/rules/func-call-spacing
    // Enabled for Linting Principle 2: Consistency
    'func-call-spacing': WARN,

    // require function names to match the name of the variable or property to
    // which they are assigned
    // https://eslint.org/docs/rules/func-name-matching
    // Enabled for Linting Principle 2: Consistency
    'func-name-matching': WARN,

    // require or disallow named `function` expressions
    // https://eslint.org/docs/rules/func-names
    // Disabled for Linting Principle 3: Flexibility
    'func-names': OFF,

    // enforce the consistent use of either `function` declarations or
    // expressions
    // https://eslint.org/docs/rules/func-style
    // Enabled for Linting Principle 2: Consistency
    'func-style': [WARN, 'declaration', {
      allowArrowFunctions: true,
    }],

    // enforce line breaks between arguments of a function call
    // https://eslint.org/docs/rules/function-call-argument-newline
    // Enabled for Linting Principle 2: Consistency
    'function-call-argument-newline': [WARN, 'consistent'],

    // enforce consistent line breaks inside function parentheses
    // https://eslint.org/docs/rules/function-paren-newline
    // Enabled for Linting Principle 2: Consistency
    'function-paren-newline': [WARN, 'multiline'],

    // disallow specified identifiers
    // https://eslint.org/docs/rules/id-denylist
    // Disabled for Linting Principle 3: Flexibility
    'id-denylist': OFF,

    // enforce minimum and maximum identifier lengths
    // https://eslint.org/docs/rules/id-length
    // Disabled for Linting Principle 3: Flexibility
    'id-length': OFF,

    // require identifiers to match a specified regular expression
    // https://eslint.org/docs/rules/id-match
    // Disabled for Linting Principle 3: Flexibility
    'id-match': OFF,

    // enforce the location of arrow function bodies
    // https://eslint.org/docs/rules/implicit-arrow-linebreak
    // Enabled for Linting Principle 2: Consistency
    'implicit-arrow-linebreak': WARN,

    // enforce consistent indentation
    // https://eslint.org/docs/rules/indent
    // Enabled for Linting Principle 2: Consistency
    'indent': [WARN, 2, {
      SwitchCase: 1,
    }],

    // enforce the consistent use of either double or single quotes in JSX
    // attributes
    // https://eslint.org/docs/rules/jsx-quotes
    // Enabled for Linting Principle 2: Consistency
    'jsx-quotes': WARN,

    // enforce consistent spacing between keys and values in object literal
    // properties
    // https://eslint.org/docs/rules/key-spacing
    // Enabled for Linting Principle 2: Consistency
    'key-spacing': WARN,

    // enforce consistent spacing before and after keywords
    // https://eslint.org/docs/rules/keyword-spacing
    // Enabled for Linting Principle 2: Consistency
    'keyword-spacing': WARN,

    // enforce position of line comments
    // https://eslint.org/docs/rules/line-comment-position
    // Disabled for Linting Principle 3: Flexibility
    'line-comment-position': OFF,

    // enforce consistent linebreak style
    // https://eslint.org/docs/rules/linebreak-style
    // Enabled for Linting Principle 2: Consistency
    'linebreak-style': WARN,

    // require empty lines around comments
    // https://eslint.org/docs/rules/lines-around-comment
    // Disabled for Linting Principle 3: Flexibility
    'lines-around-comment': OFF,

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // Enabled for Linting Principle 2: Consistency
    'lines-between-class-members': WARN,

    // enforce a maximum depth that blocks can be nested
    // https://eslint.org/docs/rules/max-depth
    // Disabled for Linting Principle 3: Flexibility
    'max-depth': OFF,

    // enforce a maximum line length
    // https://eslint.org/docs/rules/max-len
    // Enabled for Linting Principle 2: Consistency
    'max-len': [WARN, {
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // enforce a maximum number of lines per file
    // https://eslint.org/docs/rules/max-lines
    // Disabled for Linting Principle 3: Flexibility
    'max-lines': OFF,

    // enforce a maximum number of line of code in a function
    // https://eslint.org/docs/rules/max-lines-per-function
    // Disabled for Linting Principle 3: Flexibility
    'max-lines-per-function': OFF,

    // enforce a maximum depth that callbacks can be nested
    // https://eslint.org/docs/rules/max-nested-callbacks
    // Disabled for Linting Principle 3: Flexibility
    'max-nested-callbacks': OFF,

    // enforce a maximum number of parameters in function definitions
    // https://eslint.org/docs/rules/max-params
    // Disabled for Linting Principle 3: Flexibility
    'max-params': OFF,

    // enforce a maximum number of statements allowed in function blocks
    // https://eslint.org/docs/rules/max-statements
    // Disabled for Linting Principle 3: Flexibility
    'max-statements': OFF,

    // enforce a maximum number of statements allowed per line
    // https://eslint.org/docs/rules/max-statements-per-line
    // Enabled for Linting Principle 2: Consistency
    'max-statements-per-line': WARN,

    // enforce a particular style for multiline comments
    // https://eslint.org/docs/rules/multiline-comment-style
    // Disabled for Linting Principle 3: Flexibility
    'multiline-comment-style': OFF,

    // enforce newlines between operands of ternary expressions
    // https://eslint.org/docs/rules/multiline-ternary
    // Enabled for Linting Principle 2: Consistency
    'multiline-ternary': [WARN, 'always-multiline'],

    // require constructor names to begin with a capital letter
    // https://eslint.org/docs/rules/new-cap
    // Enabled for Linting Principle 2: Consistency
    'new-cap': WARN,

    // enforce or disallow parentheses when invoking a constructor with no
    // arguments
    // https://eslint.org/docs/rules/new-parens
    // Enabled for Linting Principle 2: Consistency
    'new-parens': WARN,

    // require a newline after each call in a method chain
    // https://eslint.org/docs/rules/newline-per-chained-call
    // Enabled for Linting Principle 2: Consistency
    'newline-per-chained-call': [WARN, {
      ignoreChainWithDepth: 3,
    }],

    // disallow `Array` constructors
    // https://eslint.org/docs/rules/no-array-constructor
    // Enabled for Linting Principle 2: Consistency
    'no-array-constructor': WARN,

    // disallow bitwise operators
    // https://eslint.org/docs/rules/no-bitwise
    // Enabled for Linting Principle 1: Correctness
    'no-bitwise': ERROR,

    // disallow `continue` statements
    // https://eslint.org/docs/rules/no-continue
    // Enabled for Linting Principle 2: Consistency
    'no-continue': WARN,

    // disallow inline comments after code
    // https://eslint.org/docs/rules/no-inline-comments
    // Disabled for Linting Principle 3: Flexibility
    'no-inline-comments': OFF,

    // disallow `if` statements as the only statement in `else` blocks
    // https://eslint.org/docs/rules/no-lonely-if
    // Enabled for Linting Principle 2: Consistency
    'no-lonely-if': WARN,

    // disallow mixed binary operators
    // https://eslint.org/docs/rules/no-mixed-operators
    // Enabled for Linting Principle 2: Consistency
    'no-mixed-operators': WARN,

    // disallow mixed spaces and tabs for indentation
    // https://eslint.org/docs/rules/no-mixed-spaces-and-tabs
    // Enabled for Linting Principle 2: Consistency
    'no-mixed-spaces-and-tabs': WARN,

    // disallow use of chained assignment expressions
    // https://eslint.org/docs/rules/no-multi-assign
    // Enabled for Linting Principle 2: Consistency
    'no-multi-assign': WARN,

    // disallow multiple empty lines
    // https://eslint.org/docs/rules/no-multiple-empty-lines
    // Enabled for Linting Principle 2: Consistency
    'no-multiple-empty-lines': [WARN, {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],

    // disallow negated conditions
    // https://eslint.org/docs/rules/no-negated-condition
    // Enabled for Linting Principle 2: Consistency
    'no-negated-condition': WARN,

    // disallow nested ternary expressions
    // https://eslint.org/docs/rules/no-nested-ternary
    // Enabled for Linting Principle 2: Consistency
    'no-nested-ternary': WARN,

    // disallow `Object` constructors
    // https://eslint.org/docs/rules/no-new-object
    // Enabled for Linting Principle 2: Consistency
    'no-new-object': WARN,

    // disallow the unary operators `++` and `--`
    // https://eslint.org/docs/rules/no-plusplus
    // Enabled for Linting Principle 2: Consistency
    'no-plusplus': [WARN, {
      allowForLoopAfterthoughts: true,
    }],

    // disallow specified syntax
    // https://eslint.org/docs/rules/no-restricted-syntax
    // Enabled for Linting Principle 2: Consistency
    'no-restricted-syntax': [WARN, 'ForInStatement', 'WithStatement'],

    // disallow all tabs
    // https://eslint.org/docs/rules/no-tabs
    // Enabled for Linting Principle 2: Consistency
    'no-tabs': WARN,

    // disallow ternary operators
    // https://eslint.org/docs/rules/no-ternary
    // Disabled for Linting Principle 3: Flexibility
    'no-ternary': OFF,

    // disallow trailing whitespace at the end of lines
    // https://eslint.org/docs/rules/no-trailing-spaces
    // Enabled for Linting Principle 2: Consistency
    'no-trailing-spaces': WARN,

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    // Enabled for Linting Principle 2: Consistency
    'no-underscore-dangle': WARN,

    // disallow ternary operators when simpler alternatives exist
    // https://eslint.org/docs/rules/no-unneeded-ternary
    // Enabled for Linting Principle 2: Consistency
    'no-unneeded-ternary': [WARN, {
      defaultAssignment: false,
    }],

    // disallow whitespace before properties
    // https://eslint.org/docs/rules/no-whitespace-before-property
    // Enabled for Linting Principle 2: Consistency
    'no-whitespace-before-property': WARN,

    // enforce the location of single-line statements
    // https://eslint.org/docs/rules/nonblock-statement-body-position
    // Enabled for Linting Principle 2: Consistency
    'nonblock-statement-body-position': WARN,

    // enforce consistent line breaks inside braces
    // https://eslint.org/docs/rules/object-curly-newline
    // Enabled for Linting Principle 2: Consistency
    'object-curly-newline': [WARN, {
      consistent: true,
    }],

    // enforce consistent spacing inside braces
    // https://eslint.org/docs/rules/object-curly-spacing
    // Enabled for Linting Principle 2: Consistency
    'object-curly-spacing': [WARN, 'always'],

    // enforce placing object properties on separate lines
    // https://eslint.org/docs/rules/object-property-newline
    // Enabled for Linting Principle 2: Consistency
    'object-property-newline': [WARN, {
      allowAllPropertiesOnSameLine: true,
    }],

    // enforce variables to be declared either together or separately in
    // functions
    // https://eslint.org/docs/rules/one-var
    // Enabled for Linting Principle 2: Consistency
    'one-var': [WARN, 'never'],

    // require or disallow newlines around variable declarations
    // https://eslint.org/docs/rules/one-var-declaration-per-line
    // Disabled for Linting Principle 3: Flexibility
    'one-var-declaration-per-line': OFF,

    // require or disallow assignment operator shorthand where possible
    // https://eslint.org/docs/rules/operator-assignment
    // Enabled for Linting Principle 2: Consistency
    'operator-assignment': WARN,

    // enforce consistent linebreak style for operators
    // https://eslint.org/docs/rules/operator-linebreak
    // Enabled for Linting Principle 2: Consistency
    'operator-linebreak': [WARN, 'before'],

    // require or disallow padding within blocks
    // https://eslint.org/docs/rules/padded-blocks
    // Enabled for Linting Principle 2: Consistency
    'padded-blocks': [WARN, 'never'],

    // require or disallow padding lines between statements
    // https://eslint.org/docs/rules/padding-line-between-statements
    // Disabled for Linting Principle 3: Flexibility
    'padding-line-between-statements': OFF,

    // disallow the use of `Math.pow` in favor of the `**` operator
    // https://eslint.org/docs/rules/prefer-exponentiation-operator
    // Enabled for Linting Principle 2: Consistency
    'prefer-exponentiation-operator': WARN,

    // disallow using Object.assign with an object literal as the first argument
    // and prefer the use of object spread instead.
    // https://eslint.org/docs/rules/prefer-object-spread
    // Enabled for Linting Principle 2: Consistency
    'prefer-object-spread': WARN,

    // require quotes around object literal property names
    // https://eslint.org/docs/rules/quote-props
    // Enabled for Linting Principle 2: Consistency
    'quote-props': [WARN, 'consistent-as-needed'],

    // enforce the consistent use of either backticks, double, or single quotes
    // https://eslint.org/docs/rules/quotes
    // Enabled for Linting Principle 2: Consistency
    'quotes': [WARN, 'single', {
      avoidEscape: true,
    }],

    // require or disallow semicolons instead of ASI
    // https://eslint.org/docs/rules/semi
    // Enabled for Linting Principle 2: Consistency
    'semi': WARN,

    // enforce consistent spacing before and after semicolons
    // https://eslint.org/docs/rules/semi-spacing
    // Enabled for Linting Principle 2: Consistency
    'semi-spacing': WARN,

    // enforce location of semicolons
    // https://eslint.org/docs/rules/semi-style
    // Enabled for Linting Principle 2: Consistency
    'semi-style': WARN,

    // require object keys to be sorted
    // https://eslint.org/docs/rules/sort-keys
    // Disabled for Linting Principle 3: Flexibility
    'sort-keys': OFF,

    // require variables within the same declaration block to be sorted
    // https://eslint.org/docs/rules/sort-vars
    // Disabled for Linting Principle 3: Flexibility
    'sort-vars': OFF,

    // enforce consistent spacing before blocks
    // https://eslint.org/docs/rules/space-before-blocks
    // Enabled for Linting Principle 2: Consistency
    'space-before-blocks': WARN,

    // enforce consistent spacing before `function` definition opening
    // parenthesis
    // https://eslint.org/docs/rules/space-before-function-paren
    // Enabled for Linting Principle 2: Consistency
    'space-before-function-paren': [WARN, 'never'],

    // enforce consistent spacing inside parentheses
    // https://eslint.org/docs/rules/space-in-parens
    // Enabled for Linting Principle 2: Consistency
    'space-in-parens': WARN,

    // require spacing around infix operators
    // https://eslint.org/docs/rules/space-infix-ops
    // Enabled for Linting Principle 2: Consistency
    'space-infix-ops': WARN,

    // enforce consistent spacing before or after unary operators
    // https://eslint.org/docs/rules/space-unary-ops
    // Enabled for Linting Principle 2: Consistency
    'space-unary-ops': WARN,

    // enforce consistent spacing after the `//` or `/*` in a comment
    // https://eslint.org/docs/rules/spaced-comment
    // Enabled for Linting Principle 2: Consistency
    'spaced-comment': WARN,

    // enforce spacing around colons of switch statements
    // https://eslint.org/docs/rules/switch-colon-spacing
    // Enabled for Linting Principle 2: Consistency
    'switch-colon-spacing': WARN,

    // require or disallow spacing between template tags and their literals
    // https://eslint.org/docs/rules/template-tag-spacing
    // Enabled for Linting Principle 2: Consistency
    'template-tag-spacing': WARN,

    // require or disallow Unicode byte order mark (BOM)
    // https://eslint.org/docs/rules/unicode-bom
    // Enabled for Linting Principle 2: Consistency
    'unicode-bom': WARN,

    // require parenthesis around regex literals
    // https://eslint.org/docs/rules/wrap-regex
    // Enabled for Linting Principle 2: Consistency
    'wrap-regex': WARN,
  },
};
