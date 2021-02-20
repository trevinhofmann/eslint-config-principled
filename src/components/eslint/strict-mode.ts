import { ERROR } from '../../constants';

module.exports = {
  rules: {
    // require or disallow strict mode directives
    // https://eslint.org/docs/rules/strict
    // Enabled for Linting Principle 1: Correctness
    strict: [ERROR, 'never'],
  },
};
