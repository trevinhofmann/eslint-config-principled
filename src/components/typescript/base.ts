import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // Require that member overloads be consecutive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/adjacent-overload-signatures.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/adjacent-overload-signatures': WARN,

    // Requires using either `T[]` or `Array<T>` for arrays
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/array-type.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/array-type': WARN,

    // Disallows awaiting a value that is not a Thenable
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/await-thenable.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/await-thenable': ERROR,

    // Bans `@ts-<directive>` comments from being used or requires descriptions
    // after directive
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-comment.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/ban-ts-comment': [ERROR, {
      'ts-expect-error': true,
      'ts-ignore': true,
      'ts-nocheck': true,
      'ts-check': true,
    }],

    // Bans `// tslint:<rule-flag>` comments from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-tslint-comment.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/ban-tslint-comment': ERROR,

    // Bans specific types from being used
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/ban-types': ERROR,

    // Ensures that literals on classes are exposed in a consistent style
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/class-literal-property-style.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/class-literal-property-style': WARN,

    // Enforce or disallow the use of the record type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-indexed-object-style.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/consistent-indexed-object-style': WARN,

    // Enforces consistent usage of type assertions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-assertions.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/consistent-type-assertions': [WARN, {
      assertionStyle: 'never',
    }],

    // Consistent with type definition either `interface` or `type`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-definitions.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/consistent-type-definitions': OFF,

    // Enforces consistent usage of type imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/consistent-type-imports': WARN,

    // Require explicit return types on functions and class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/explicit-function-return-type': ERROR,

    // Require explicit accessibility modifiers on class properties and methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/explicit-member-accessibility': ERROR,

    // Require explicit return and argument types on exported functions' and
    // classes' public class methods
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-module-boundary-types.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/explicit-module-boundary-types': OFF,

    // Require a specific member delimiter style for interfaces and type
    // literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/member-delimiter-style': WARN,

    // Require a consistent member declaration order
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/member-ordering': WARN,

    // Enforces using a particular method signature syntax.
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/method-signature-style.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/method-signature-style': WARN,

    // Enforces naming conventions for everything across a codebase
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/naming-convention': OFF,

    // Requires that `.toString()` is only called on objects which provide
    // useful information when stringified
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-base-to-string.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-base-to-string': ERROR,

    // Disallow non-null assertion in locations that may be confusing
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-non-null-assertion.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/no-confusing-non-null-assertion': OFF,

    // Requires expressions of type void to appear in statement position
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-confusing-void-expression.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-confusing-void-expression': [ERROR, {
      ignoreArrowShorthand: true,
    }],

    // Disallow the delete operator with computed key expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-dynamic-delete.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-dynamic-delete': ERROR,

    // Disallow the declaration of empty interfaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-empty-interface': ERROR,

    // Disallow usage of the `any` type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-explicit-any': ERROR,

    // Disallow extra non-null assertion
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-non-null-assertion.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-extra-non-null-assertion': ERROR,

    // Forbids the use of classes as namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extraneous-class.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-extraneous-class': ERROR,

    // Requires Promise-like values to be handled appropriately
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-floating-promises.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-floating-promises': ERROR,

    // Disallow iterating over an array with a for-in loop
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-for-in-array.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-for-in-array': ERROR,

    // Disallow usage of the implicit `any` type in catch clauses
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-implicit-any-catch.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-implicit-any-catch': ERROR,

    // Disallows explicit type declarations for variables or parameters
    // initialized to a number, string, or boolean
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/no-inferrable-types': OFF,

    // Disallows usage of `void` type outside of generic or return types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-invalid-void-type.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-invalid-void-type': ERROR,

    // Enforce valid definition of `new` and `constructor`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-new.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-misused-new': ERROR,

    // Avoid using promises in places not designed to handle them
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-misused-promises.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-misused-promises': ERROR,

    // Disallow the use of custom TypeScript modules and namespaces
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-namespace.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-namespace': [ERROR, {
      allowDefinitionFiles: false,
    }],

    // Disallows using a non-null assertion after an optional chain expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-asserted-optional-chain.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,

    // Disallows non-null assertions using the `!` postfix operator
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-non-null-assertion.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-non-null-assertion': ERROR,

    // Disallow the use of parameter properties in class constructors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-parameter-properties.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/no-parameter-properties': OFF,

    // Disallows invocation of `require()`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-require-imports.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-require-imports': ERROR,

    // Disallow aliasing `this`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-this-alias.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-this-alias': ERROR,

    // Disallow the use of type aliases
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-type-alias.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/no-type-alias': OFF,

    // Flags unnecessary equality comparisons against boolean literals
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-boolean-literal-compare.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': WARN,

    // Prevents conditionals where the type is always truthy or always falsy
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-condition.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-unnecessary-condition': ERROR,

    // Warns when a namespace qualifier is unnecessary
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-qualifier.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/no-unnecessary-qualifier': WARN,

    // Enforces that type arguments will not be used if not required
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-arguments.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/no-unnecessary-type-arguments': WARN,

    // Warns if a type assertion does not change the type of an expression
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-assertion.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-unnecessary-type-assertion': ERROR,

    // Disallows unnecessary constraints on generic types
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unnecessary-type-constraint.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/no-unnecessary-type-constraint': ERROR,

    // Disallows assigning any to variables and properties
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-assignment.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-unsafe-assignment': ERROR,

    // Disallows calling an any type value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-call.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-unsafe-call': ERROR,

    // Disallows member access on any typed variables
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-member-access.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-unsafe-member-access': ERROR,

    // Disallows returning any from a function
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unsafe-return.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/no-unsafe-return': ERROR,

    // Disallows the use of require statements except in import statements
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-var-requires.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/no-var-requires': WARN,

    // Prefers a non-null assertion over explicit type cast when possible
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/non-nullable-type-assertion-style.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/non-nullable-type-assertion-style': WARN,

    // Prefer usage of `as const` over literal type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-as-const.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-as-const': WARN,

    // Prefer initializing each enums member value
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-enum-initializers.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/prefer-enum-initializers': ERROR,

    // Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only
    // used to access the array being iterated
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-for-of.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-for-of': WARN,

    // Use function types instead of interfaces with call signatures
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-function-type.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/prefer-function-type': OFF,

    // Enforce `includes` method over `indexOf` method
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-includes.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-includes': WARN,

    // Require that all enum members be literal values to prevent unintended
    // enum member name shadow issues
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-literal-enum-member.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/prefer-literal-enum-member': ERROR,

    // Require the use of the `namespace` keyword instead of the `module`
    // keyword to declare custom TypeScript modules
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-namespace-keyword.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-namespace-keyword': WARN,

    // Enforce the usage of the nullish coalescing operator instead of logical
    // chaining
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-nullish-coalescing.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-nullish-coalescing': WARN,

    // Prefer using concise optional chain expressions instead of chained
    // logical ands
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-optional-chain': WARN,

    // Requires that private members are marked as `readonly` if they're never
    // modified outside of the constructor
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-readonly': WARN,

    // Requires that function parameters are typed as readonly to prevent
    // accidental mutation of inputs
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-readonly-parameter-types.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/prefer-readonly-parameter-types': OFF,

    // Prefer using type parameter when calling `Array#reduce` instead of
    // casting
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-reduce-type-parameter.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-reduce-type-parameter': WARN,

    // Enforce that `RegExp#exec` is used instead of `String#match` if no global
    // flag is provided
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-regexp-exec.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-regexp-exec': WARN,

    // Enforce the use of `String#startsWith` and `String#endsWith` instead of
    // other equivalent methods of checking substrings
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-string-starts-ends-with.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/prefer-string-starts-ends-with': WARN,

    // Recommends using `@ts-expect-error` over `@ts-ignore`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-ts-expect-error.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/prefer-ts-expect-error': ERROR,

    // Requires any function or method that returns a Promise to be marked async
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/promise-function-async.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/promise-function-async': WARN,

    // Requires `Array#sort` calls to always provide a `compareFunction`
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/require-array-sort-compare.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/require-array-sort-compare': [ERROR, {
      ignoreStringArrays: true,
    }],

    // When adding two variables, operands must both be of type number or of
    // type string
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-plus-operands.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/restrict-plus-operands': ERROR,

    // Enforce template literal expressions to be of string type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/restrict-template-expressions.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/restrict-template-expressions': ERROR,

    // Enforces that members of a type union/intersection are sorted
    // alphabetically
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/sort-type-union-intersection-members.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/sort-type-union-intersection-members': OFF,

    // Restricts the types allowed in boolean expressions
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/strict-boolean-expressions': [ERROR, {
      allowString: false,
      allowNumber: false,
      allowNullableObject: false,
    }],

    // Exhaustiveness checking in switch with union type
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/switch-exhaustiveness-check.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,

    // Sets preference level for triple slash directives versus ES6-style import
    // declarations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/triple-slash-reference.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/triple-slash-reference': WARN,

    // Require consistent spacing around type annotations
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/type-annotation-spacing.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/type-annotation-spacing': WARN,

    // Requires type annotations to exist
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/typedef.md
    // Disabled for Linting Principle 3: Flexibility
    '@typescript-eslint/typedef': OFF,

    // Enforces unbound methods are called with their expected scope
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unbound-method.md
    // Enabled for Linting Principle 1: Correctness
    '@typescript-eslint/unbound-method': [ERROR, {
      ignoreStatic: true,
    }],

    // Warns for any two overloads that could be unified into one by using a
    // union or an optional/rest parameter
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/unified-signatures.md
    // Enabled for Linting Principle 2: Consistency
    '@typescript-eslint/unified-signatures': WARN,
  },
};
