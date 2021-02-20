import { OFF, WARN, ERROR } from '../../constants';

module.exports = {
  rules: {
    // Enforces consistent naming for boolean props
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/boolean-prop-naming.md
    // Disabled for Linting Principle 3: Flexibility
    'react/boolean-prop-naming': OFF,

    // Enforce consistent usage of destructuring assignment of props, state, and
    // context
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/destructuring-assignment.md
    // Enabled for Linting Principle 2: Consistency
    'react/destructuring-assignment': WARN,

    // Standardize the way function component get defined
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md
    // Enabled for Linting Principle 2: Consistency
    'react/function-component-definition': [WARN, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    }],

    // Enforce boolean attributes notation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-boolean-value.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-boolean-value': WARN,

    // Ensures inline tags are not rendered without spaces between them
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-child-element-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-child-element-spacing': WARN,

    // Validate closing bracket location in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-bracket-location.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-closing-bracket-location': WARN,

    // Validate closing tag location for multiline JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-closing-tag-location.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-closing-tag-location': WARN,

    // Disallow unnecessary JSX expressions when literals alone are sufficient
    // or enfore JSX expressions on literals in JSX children or attributes
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-brace-presence.md
    //
    'react/jsx-curly-brace-presence': [WARN, 'never'],

    // Enforce or disallow spaces inside of curly braces in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-curly-spacing': WARN,

    // Enforce consistent line breaks inside jsx curly
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-curly-newline.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-curly-newline': [WARN],

    // Disallow or enforce spaces around equal signs in JSX attributes
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-equals-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-equals-spacing': WARN,

    // Restrict file extensions that may contain JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-filename-extension': [WARN, {
      allow: 'as-needed',
      extensions: ['.jsx', '.tsx'],
    }],

    // Ensure proper position of the first property in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-first-prop-new-line.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-first-prop-new-line': WARN,

    // Enforce event handler naming conventions in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-handler-names': OFF,

    // Validate JSX indentation
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-indent': [WARN, 2, {
      indentLogicalExpressions: true,
    }],

    // Validate props indentation in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-indent-props.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-indent-props': [WARN, 2],

    // Validate JSX maximum depth
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-depth.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-max-depth': OFF,

    // Limit maximum of props on a single line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-max-props-per-line.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-max-props-per-line': OFF,

    // Enforce a new line after jsx elements and expressions
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-newline.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-newline': OFF,

    // Prevent using string literals in React component definition
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-literals.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-no-literals': OFF,

    // Limit to one expression per line in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-one-expression-per-line.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-one-expression-per-line': [WARN, {
      allow: 'single-child',
    }],

    // Enforce PascalCase for user-defined JSX components
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-pascal-case.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-pascal-case': [WARN, {
      allowAllCaps: true,
    }],

    // Enforce shorthand or standard form for React fragments
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-fragments.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-fragments': [WARN, 'element'],

    // Disallow multiple spaces between inline JSX props
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-multi-spaces.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-props-no-multi-spaces': WARN,

    // Enforce default props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-default-props.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-sort-default-props': OFF,

    // Enforce props alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-sort-props.md
    // Disabled for Linting Principle 3: Flexibility
    'react/jsx-sort-props': OFF,

    // Validate whitespace in and around the JSX opening and closing brackets
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-tag-spacing.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-tag-spacing': WARN,

    // Prevent missing parentheses around multilines JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-wrap-multilines.md
    // Enabled for Linting Principle 2: Consistency
    'react/jsx-wrap-multilines': [WARN, {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    }],

    // Prevent multiple component definition per file
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-multi-comp.md
    // Disabled for Linting Principle 3: Flexibility
    'react/no-multi-comp': OFF,

    // Prevent usage of setState
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-set-state.md
    // Disabled for Linting Principle 3: Flexibility
    'react/no-set-state': OFF,

    // Prevent common typos
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-typos.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-typos': ERROR,

    // Enforce ES5 or ES6 class for React Components
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-es6-class.md
    // Enabled for Linting Principle 2: Consistency
    'react/prefer-es6-class': WARN,

    // Require read-only props.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-read-only-props.md
    // Disabled for Linting Principle 3: Flexibility
    'react/prefer-read-only-props': OFF,

    // Enforce stateless components to be written as a pure function
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md
    // Enabled for Linting Principle 2: Consistency
    'react/prefer-stateless-function': WARN,

    // Prevent extra closing tags for components without children
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/self-closing-comp.md
    // Enabled for Linting Principle 2: Consistency
    'react/self-closing-comp': WARN,

    // Enforce component methods order
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-comp.md
    // Enabled for Linting Principle 2: Consistency
    'react/sort-comp': [WARN, {
      order: [
        'static-variables',
        'instance-variables',
        'getters',
        'setters',
        'static-methods',
        'instance-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: {
        rendering: [
          '/^render.+$/',
          'render',
        ],
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
      },
    }],

    // Enforce propTypes declarations alphabetical sorting
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/sort-prop-types.md
    // Disabled for Linting Principle 3: Flexibility
    'react/sort-prop-types': OFF,

    // State initialization in an ES6 class component should be in a constructor
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/state-in-constructor.md
    // Enabled for Linting Principle 2: Consistency
    'react/state-in-constructor': [WARN, 'never'],

    // Defines where React component static properties should be positioned.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md
    // Enabled for Linting Principle 2: Consistency
    'react/static-property-placement': [WARN, 'static public field'],
  },
};
