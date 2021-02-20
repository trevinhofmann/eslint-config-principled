import { ERROR } from '../../constants';

module.exports = {
  rules: {
    // Enforces the Rules of Hooks
    // https://reactjs.org/docs/hooks-rules.html
    // Enabled for Linting Principle 1: Correctness
    'react-hooks/rules-of-hooks': ERROR,

    // Verifies the list of dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/issues/14920
    // Enabled for Linting Principle 1: Correctness
    'react-hooks/exhaustive-deps': ERROR,
  },
};
