import { ERROR } from '../../constants';

module.exports = {
  rules: {
    // Enforce valid `describe()` callback
    // https://github.com/jest-community/eslint-plugin-jest/blob/master/docs/rules/valid-describe.md
    // Enabled for Linting Principle 1: Correctness
    'jest/valid-describe': ERROR,
  },
};
