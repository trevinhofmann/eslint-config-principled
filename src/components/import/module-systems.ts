import { OFF, WARN } from '../../constants';

module.exports = {
  rules: {
    // Report potentially ambiguous parse goal (`script` vs. `module`)
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md
    // Disabled for Linting Principle 3: Flexibility
    'import/unambiguous': OFF,

    // Report CommonJS `require` calls and `module.exports` or `exports.*`
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-commonjs': OFF,

    // Report AMD `require` and `define` calls
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    // Enabled for Linting Principle 2: Consistency
    'import/no-amd': WARN,

    // No Node.js builtin modules
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md
    // Disabled for Linting Principle 3: Flexibility
    'import/no-nodejs-modules': OFF,
  },
};
