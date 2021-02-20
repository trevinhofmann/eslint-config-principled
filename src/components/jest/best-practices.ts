import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // Have control over `test` and `it` usages
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/consistent-test-it.md
    // Enabled for Linting Principle 2: Consistency
    'jest/consistent-test-it': WARN,

    // Enforce assertion to be made in a test body
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/expect-expect.md
    // Enabled for Linting Principle 1: Correctness
    'jest/expect-expect': ERROR,

    // Enforce lowercase test names
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/lowercase-name.md
    // Enabled for Linting Principle 1: Correctness
    'jest/lowercase-name': [ERROR, {
      ignoreTopLevelDescribe: true,
    }],

    // Disallow alias methods
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-alias-methods.md
    // Enabled for Linting Principle 3: Flexibility
    'jest/no-alias-methods': OFF,

    // Disallow commented out tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-commented-out-tests.md
    // Enabled for Linting Principle 3: Flexibility
    'jest/no-commented-out-tests': OFF,

    // Prevent calling `expect` conditionally
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-conditional-expect.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-conditional-expect': ERROR,

    // Disallow use of deprecated functions
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-deprecated-functions.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-deprecated-functions': ERROR,

    // Disallow disabled tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-disabled-tests.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-disabled-tests': ERROR,

    // Avoid using a callback in asynchronous tests and hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-done-callback.md
    // Enabled for Linting Principle 2: Consistency
    'jest/no-done-callback': WARN,

    // Disallow duplicate setup and teardown hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-duplicate-hooks.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-duplicate-hooks': ERROR,

    // Disallow using `exports` in files containing tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-export.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-export': ERROR,

    // Disallow focused tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-focused-tests.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-focused-tests': ERROR,

    // Disallow setup and teardown hooks
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-hooks.md
    // Enabled for Linting Principle 3: Flexibility
    'jest/no-hooks': OFF,

    // Disallow identical titles
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-identical-title.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-identical-title': ERROR,

    // Disallow conditional logic
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-if.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-if': ERROR,

    // Disallow string interpolation inside snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-interpolation-in-snapshots.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-interpolation-in-snapshots': ERROR,

    // Disallow Jasmine globals
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jasmine-globals.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-jasmine-globals': ERROR,

    // Disallow importing Jest
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-jest-import.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-jest-import': ERROR,

    // disallow large snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-large-snapshots.md
    // Enabled for Linting Principle 3: Flexibility
    'jest/no-large-snapshots': OFF,

    // Disallow manually importing from `__mocks__`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-mocks-import.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-mocks-import': ERROR,

    // Disallow specific matchers & modifiers
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-restricted-matchers.md
    // Enabled for Linting Principle 2: Consistency
    'jest/no-restricted-matchers': [WARN, {
      resolves: 'Use `expect(await promise)` instead.',
    }],

    // Disallow using `expect` outside of `it` or `test` blocks
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-standalone-expect.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-standalone-expect': ERROR,

    // Use `.only` and `.skip` over `f` and `x`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-prefixes.md
    // Enabled for Linting Principle 2: Consistency
    'jest/no-test-prefixes': WARN,

    // Disallow explicitly returning from tests
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-test-return-statement.md
    // Enabled for Linting Principle 1: Correctness
    'jest/no-test-return-statement': ERROR,

    // Disallow using `toBeTruthy()` & `toBeFalsy()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/no-truthy-falsy.md
    // Enabled for Linting Principle 2: Consistency
    'jest/no-truthy-falsy': WARN,

    // Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-called-with.md
    // Enabled for Linting Principle 1: Correctness
    'jest/prefer-called-with': ERROR,

    // Suggest using `expect.assertions()` OR `expect.hasAssertions()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-expect-assertions.md
    // Enabled for Linting Principle 3: Flexibility
    'jest/prefer-expect-assertions': OFF,

    // Suggest having hooks before any test cases
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-hooks-on-top.md
    // Enabled for Linting Principle 2: Consistency
    'jest/prefer-hooks-on-top': WARN,

    // Suggest using inline snapshots
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-inline-snapshots.md
    // Enabled for Linting Principle 3: Flexibility
    'jest/prefer-inline-snapshots': OFF,

    // Suggest using `jest.spyOn()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-spy-on.md
    // Enabled for Linting Principle 1: Correctness
    'jest/prefer-spy-on': ERROR,

    // Suggest using `toStrictEqual()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-strict-equal.md
    // Enabled for Linting Principle 1: Correctness
    'jest/prefer-strict-equal': ERROR,

    // Suggest using `toBeNull()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-null.md
    // Enabled for Linting Principle 2: Consistency
    'jest/prefer-to-be-null': WARN,

    // Suggest using `toBeUndefined()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-be-undefined.md
    // Enabled for Linting Principle 2: Consistency
    'jest/prefer-to-be-undefined': WARN,

    // Suggest using `toContain()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-contain.md
    // Enabled for Linting Principle 2: Consistency
    'jest/prefer-to-contain': WARN,

    // Suggest using `toHaveLength()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-to-have-length.md
    // Enabled for Linting Principle 2: Consistency
    'jest/prefer-to-have-length': WARN,

    // Suggest using `test.todo`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/prefer-todo.md
    // Enabled for Linting Principle 1: Correctness
    'jest/prefer-todo': ERROR,

    // Require a message for `toThrow()`
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-to-throw-message.md
    // Enabled for Linting Principle 1: Correctness
    'jest/require-to-throw-message': ERROR,

    // Require test cases and hooks to be inside a `describe` block
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/require-top-level-describe.md
    // Enabled for Linting Principle 2: Consistency
    'jest/require-top-level-describe': WARN,

    // Enforce valid `expect()` usage
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect.md
    // Enabled for Linting Principle 1: Correctness
    'jest/valid-expect': [ERROR, {
      alwaysAwait: true,
    }],

    // Enforce having return statement when testing with promises
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-expect-in-promise.md
    // Enabled for Linting Principle 1: Correctness
    'jest/valid-expect-in-promise': ERROR,

    // Enforce valid titles
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-title.md
    // Enabled for Linting Principle 2: Consistency
    'jest/valid-title': WARN,
  },
};
