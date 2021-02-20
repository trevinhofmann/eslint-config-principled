import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // Ensure imports point to a file/module that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-unresolved': ERROR,

    // Ensure named imports correspond to a named export in the remote file
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md
    // Enabled for Linting Principle 1: Correctness
    'import/named': ERROR,

    // Ensure a default export is present, given a default import
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md
    // Enabled for Linting Principle 1: Correctness
    'import/default': ERROR,

    // Ensure imported namespaces contain dereferenced properties as they are
    // dereferenced
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    // Enabled for Linting Principle 1: Correctness
    'import/namespace': ERROR,

    // Restrict which files can be imported in a given folder
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-restricted-paths': OFF,

    // Forbid import of modules using absolute paths
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-absolute-path': WARN,

    // Forbid `require()` calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-dynamic-require': WARN,

    // Prevent importing the submodules of other modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-internal-modules': OFF,

    // Forbid webpack loader syntax in imports
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-webpack-loader-syntax': WARN,

    // Forbid a module from importing itself
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-self-import.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-self-import': ERROR,

    // Forbid a module from importing a module with a dependency path back to
    // itself
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-cycle.md
    // Enabled for Linting Principle 1: Correctness
    'import/no-cycle': ERROR,

    // Prevent unnecessary path segments in import and require statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-useless-path-segments': WARN,

    // Forbid importing modules from parent directories
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-relative-parent-imports.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-relative-parent-imports': OFF,
  },
};
