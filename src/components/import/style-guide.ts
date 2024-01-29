import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // Ensure all imports appear before other statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    // Enabled for Linting Principle 2: Consistency
    'import/first': WARN,

    // Ensure all exports appear after other statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/exports-last.md
    // Disabled for Linting Principle 3: Flexibility
    'import/exports-last': OFF,

    // Report repeated import of the same module in multiple places
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    // Enabled for Linting Principle 1: Correctness
    'no-duplicate-imports': OFF,
    'import/no-duplicates': ERROR,

    // Forbid namespace (a.k.a. "wildcard" `*`) imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-namespace': WARN,

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // Enabled for Linting Principle 2: Consistency
    'import/extensions': [WARN, 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    // Enforce a convention in module import order
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
    // Enabled for Linting Principle 2: Consistency
    'import/order': [WARN, {
      'newlines-between': 'never',
    }],

    // Enforce a newline after import statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    // Enabled for Linting Principle 2: Consistency
    'import/newline-after-import': WARN,

    // Prefer a default export if module exports a single name
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    // Disabled for Linting Principle 3: Flexibility
    'import/prefer-default-export': OFF,

    // Limit the maximum number of dependencies a module can have
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    // Disabled for Linting Principle 3: Flexibility
    'import/max-dependencies': OFF,

    // Forbid unassigned imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-unassigned-import': OFF,

    // Forbid named default exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-named-default': WARN,

    // Forbid default exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-default-export.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-default-export': OFF,

    // Forbid named exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-export.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-named-export': OFF,

    // Forbid anonymous values as default exports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-anonymous-default-export.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-anonymous-default-export': OFF,

    // Prefer named exports to be grouped together in a single export
    // declaration
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/group-exports.md
    // Disabled for Linting Principle 3: Flexibility
    'import/group-exports': OFF,

    // Enforce a leading comment with the webpackChunkName for dynamic imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/dynamic-import-chunkname.md
    // Disabled for Linting Principle 3: Flexibility
    'import/dynamic-import-chunkname': OFF,
  },
};
