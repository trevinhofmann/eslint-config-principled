import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // require braces around arrow function bodies
    // https://eslint.org/docs/rules/arrow-body-style
    // Enabled for Linting Principle 2: Consistency
    'arrow-body-style': WARN,

    // require parentheses around arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    // Enabled for Linting Principle 2: Consistency
    'arrow-parens': [WARN, 'as-needed', {
      requireForBlockBody: true,
    }],

    // enforce consistent spacing before and after the arrow in arrow functions
    // https://eslint.org/docs/rules/arrow-spacing
    // Enabled for Linting Principle 2: Consistency
    'arrow-spacing': WARN,

    // require `super()` calls in constructors
    // https://eslint.org/docs/rules/constructor-super
    // Enabled for Linting Principle 1: Correctness
    'constructor-super': ERROR,

    // enforce consistent spacing around `*` operators in generator functions
    // https://eslint.org/docs/rules/generator-star-spacing
    // Enabled for Linting Principle 2: Consistency
    'generator-star-spacing': [WARN, 'after'],

    // disallow reassigning class members
    // https://eslint.org/docs/rules/no-class-assign
    // Enabled for Linting Principle 1: Correctness
    'no-class-assign': ERROR,

    // disallow arrow functions where they could be confused with comparisons
    // https://eslint.org/docs/rules/no-confusing-arrow
    // Enabled for Linting Principle 1: Correctness
    'no-confusing-arrow': ERROR,

    // disallow reassigning `const` variables
    // https://eslint.org/docs/rules/no-const-assign
    // Enabled for Linting Principle 1: Correctness
    'no-const-assign': ERROR,

    // disallow duplicate class members
    // https://eslint.org/docs/rules/no-dupe-class-members
    // Enabled for Linting Principle 1: Correctness
    'no-dupe-class-members': ERROR,

    // disallow duplicate module imports
    // https://eslint.org/docs/rules/no-duplicate-imports
    // Enabled for Linting Principle 1: Correctness
    'no-duplicate-imports': ERROR,

    // disallow `new` operators with the `Symbol` object
    // https://eslint.org/docs/rules/no-new-symbol
    // Enabled for Linting Principle 1: Correctness
    'no-new-symbol': ERROR,

    // disallow specified names in exports
    // https://eslint.org/docs/rules/no-restricted-exports
    // Disabled for Linting Principle 3: Flexibility
    'no-restricted-exports': OFF,

    // disallow specified modules when loaded by `import`
    // https://eslint.org/docs/rules/no-restricted-imports
    // Disabled for Linting Principle 3: Flexibility
    'no-restricted-imports': OFF,

    // disallow `this`/`super` before calling `super()` in constructors
    // https://eslint.org/docs/rules/no-this-before-super
    // Enabled for Linting Principle 1: Correctness
    'no-this-before-super': ERROR,

    // disallow unnecessary computed property keys in objects and classes
    // https://eslint.org/docs/rules/no-useless-computed-key
    // Enabled for Linting Principle 2: Consistency
    'no-useless-computed-key': [WARN, {
      enforceForClassMembers: true,
    }],

    // disallow unnecessary constructors
    // https://eslint.org/docs/rules/no-useless-constructor
    // Enabled for Linting Principle 1: Correctness
    'no-useless-constructor': ERROR,

    // disallow renaming import, export, and destructured assignments to the
    // same name
    // https://eslint.org/docs/rules/no-useless-rename
    // Enabled for Linting Principle 1: Correctness
    'no-useless-rename': ERROR,

    // require `let` or `const` instead of `var`
    // https://eslint.org/docs/rules/no-var
    // Enabled for Linting Principle 2: Consistency
    'no-var': WARN,

    // require or disallow method and property shorthand syntax for object
    // literals
    // https://eslint.org/docs/rules/object-shorthand
    // Enabled for Linting Principle 2: Consistency
    'object-shorthand': [WARN, 'properties', {
      avoidQuotes: true,
    }],

    // require using arrow functions for callbacks
    // https://eslint.org/docs/rules/prefer-arrow-callback
    // Enabled for Linting Principle 2: Consistency
    'prefer-arrow-callback': [WARN, {
      allowUnboundThis: false,
    }],

    // require `const` declarations for variables that are never reassigned
    // after declared
    // https://eslint.org/docs/rules/prefer-const
    // Enabled for Linting Principle 1: Correctness
    'prefer-const': ERROR,

    // require destructuring from arrays and/or objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // Enabled for Linting Principle 2: Consistency
    'prefer-destructuring': [WARN, {
      array: false,
      object: true,
    }, {
      enforceForRenamedProperties: false,
    }],

    // disallow `parseInt()` and `Number.parseInt()` in favor of binary, octal,
    // and hexadecimal literals
    // https://eslint.org/docs/rules/prefer-numeric-literals
    // Enabled for Linting Principle 2: Consistency
    'prefer-numeric-literals': WARN,

    // require rest parameters instead of `arguments`
    // https://eslint.org/docs/rules/prefer-rest-params
    // Enabled for Linting Principle 2: Consistency
    'prefer-rest-params': WARN,

    // require spread operators instead of `.apply()`
    // https://eslint.org/docs/rules/prefer-spread
    // Enabled for Linting Principle 2: Consistency
    'prefer-spread': WARN,

    // require template literals instead of string concatenation
    // https://eslint.org/docs/rules/prefer-template
    // Enabled for Linting Principle 2: Consistency
    'prefer-template': WARN,

    // require generator functions to contain `yield`
    // https://eslint.org/docs/rules/require-yield
    // Enabled for Linting Principle 1: Correctness
    'require-yield': ERROR,

    // enforce spacing between rest and spread operators and their expressions
    // https://eslint.org/docs/rules/rest-spread-spacing
    // Enabled for Linting Principle 2: Consistency
    'rest-spread-spacing': WARN,

    // enforce sorted import declarations within modules
    // https://eslint.org/docs/rules/sort-imports
    // Disabled for Linting Principle 3: Flexibility
    'sort-imports': OFF,

    // require symbol descriptions
    // https://eslint.org/docs/rules/symbol-description
    // Disabled for Linting Principle 3: Flexibility
    'symbol-description': OFF,

    // require or disallow spacing around embedded expressions of template
    // strings
    // https://eslint.org/docs/rules/template-curly-spacing
    // Enabled for Linting Principle 2: Consistency
    'template-curly-spacing': WARN,

    // require or disallow spacing around the `*` in `yield*` expressions
    // https://eslint.org/docs/rules/yield-star-spacing
    // Enabled for Linting Principle 2: Consistency
    'yield-star-spacing': WARN,
  },
};
