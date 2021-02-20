import { OFF, WARN, ERROR } from '../../constants';

// Enabled for Linting Principle 1: Correctness
// Enabled for Linting Principle 2,: Consistency

module.exports = {
  rules: {
    // Enforce all defaultProps are defined and not "required" in propTypes.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/default-props-match-prop-types.md
    // Enabled for Linting Principle 1: Correctness
    'react/default-props-match-prop-types': ERROR,

    // Prevent missing displayName in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/display-name.md
    // Disabled for Linting Principle 3,: Flexibility
    'react/display-name': OFF,

    // Forbid certain props on components
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-component-props.md
    // Disabled for Linting Principle 3,: Flexibility
    'react/forbid-component-props': OFF,

    // Forbid certain props on DOM Nodes
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md
    // Disabled for Linting Principle 3,: Flexibility
    'react/forbid-dom-props': OFF,

    // Forbid certain elements
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-elements.md
    // Disabled for Linting Principle 3,: Flexibility
    'react/forbid-elements': OFF,

    // Forbid using another component's propTypes
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-foreign-prop-types.md
    // Disabled for Linting Principle 3,: Flexibility
    'react/forbid-foreign-prop-types': OFF,

    // Forbid certain propTypes
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/forbid-prop-types.md
    // Enabled for Linting Principle 2,: Consistency
    'react/forbid-prop-types': [WARN, {
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],

    // Prevents usage of Function.prototype.bind and arrow functions in React
    // component props
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-bind.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-no-bind': ERROR,

    // Prevents JSX context provider values from taking values that will cause
    // needless rerenders.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-constructed-context-values.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-no-constructed-context-values': ERROR,

    // Forbid `javascript:` URLs
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-script-url.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-no-script-url': [ERROR, [{
      name: 'Link',
      props: ['to'],
    }]],

    // Forbid `target="_blank"` attribute without `rel="noreferrer"`
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-target-blank.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-no-target-blank': ERROR,

    // Prevent JSX prop spreading
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-props-no-spreading.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-props-no-spreading': ERROR,

    // Prevent React to be marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-react.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-uses-react': ERROR,

    // Prevent variables used in JSX to be marked as unused
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-uses-vars.md
    // Enabled for Linting Principle 1: Correctness
    'react/jsx-uses-vars': ERROR,

    // Prevent adjacent inline elements not separated by whitespace.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-adjacent-inline-elements.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-adjacent-inline-elements': ERROR,

    // Prevent usage of Array index in keys
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-array-index-key.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-array-index-key': ERROR,

    // Prevent passing of children as props.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-children-prop.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-children-prop': ERROR,

    // Prevent usage of dangerous JSX props
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-danger': ERROR,

    // Prevent usage of deprecated methods
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-deprecated.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-deprecated': ERROR,

    // Prevent usage of setState in componentDidMount
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-did-mount-set-state.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-did-mount-set-state': [ERROR, 'disallow-in-func'],

    // Prevent usage of setState in componentDidUpdate
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-did-update-set-state.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-did-update-set-state': [ERROR, 'disallow-in-func'],

    // Prevent usage of findDOMNode
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-find-dom-node.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-find-dom-node': ERROR,

    // Prevent usage of isMounted
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-is-mounted.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-is-mounted': ERROR,

    // Prevent string definitions for references and prevent referencing
    // this.refs
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-string-refs.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-string-refs': [ERROR, {
      noTemplateLiterals: true,
    }],

    // Prevent usage of the return value of React.render
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-render-return-value.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-render-return-value': ERROR,

    // Prevent usage of unsafe lifecycle methods
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unsafe.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-unsafe': [ERROR, {
      checkAliases: true,
    }],

    // Prevent definitions of unused prop types
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-prop-types.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-unused-prop-types': ERROR,

    // Prevent definition of unused state fields
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unused-state.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-unused-state': ERROR,

    // Prevent usage of setState in componentWillUpdate
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-will-update-set-state.md
    // Enabled for Linting Principle 1: Correctness
    'react/no-will-update-set-state': [ERROR, 'disallow-in-func'],

    // Prevent missing props validation in a React component definition
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md
    // Enabled for Linting Principle 1: Correctness
    'react/prop-types': ERROR,

    // Enforce a defaultProps definition for every prop that is not a required
    // prop.
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-default-props.md
    // Enabled for Linting Principle 1: Correctness
    'react/require-default-props': [ERROR, {
      forbidDefaultForRequired: true,
      ignoreFunctionalComponents: true,
    }],

    // Enforce React components to have a shouldComponentUpdate method
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-optimization.md
    // Disabled for Linting Principle 3,: Flexibility
    'react/require-optimization': OFF,

    // Prevent passing of children to void DOM elements (e.g. `<br />`).
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/void-dom-elements-no-children.md
    // Enabled for Linting Principle 1: Correctness
    'react/void-dom-elements-no-children': ERROR,
  },
};
