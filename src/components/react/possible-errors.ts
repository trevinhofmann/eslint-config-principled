import { ERROR } from '../../constants';

module.exports = {
  rules: {
    // Forbid "button" element without an explicit "type" attribute
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/button-has-type.md

    'react/button-has-type': ERROR,

    // Report missing `key` props in iterators/collection literals
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-key.md

    'react/jsx-key': [ERROR, {
      checkFragmentShorthand: true,
    }],

    // Comments inside children section of tag should be placed inside braces
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-comment-textnodes.md

    'react/jsx-no-comment-textnodes': ERROR,

    // Enforce no duplicate props
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-duplicate-props.md

    'react/jsx-no-duplicate-props': ERROR,

    // Disallow unnecessary fragments
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md

    'react/jsx-no-useless-fragment': ERROR,

    // Disallow undeclared variables in JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-undef.md

    'react/jsx-no-undef': ERROR,

    // Reports when this.state is accessed within setState
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-access-state-in-setstate.md

    'react/no-access-state-in-setstate': ERROR,

    // Report when a DOM element is using both children and
    // dangerouslySetInnerHTML
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-danger-with-children.md

    'react/no-danger-with-children': ERROR,

    // Prevent direct mutation of this.state
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-direct-mutation-state.md

    'react/no-direct-mutation-state': ERROR,

    // Flag shouldComponentUpdate when extending PureComponent
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-redundant-should-component-update.md

    'react/no-redundant-should-component-update': ERROR,

    // Report "this" being used in stateless components
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-this-in-sfc.md

    'react/no-this-in-sfc': ERROR,

    // Detect unescaped HTML entities, which might represent malformed tags
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md

    'react/no-unescaped-entities': ERROR,

    // Prevent usage of unknown DOM property
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unknown-property.md

    'react/no-unknown-property': ERROR,

    // Prevent missing React when using JSX
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/react-in-jsx-scope.md

    'react/react-in-jsx-scope': ERROR,

    // Enforce ES5, or ES6, class for returning value in render function
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/require-render-return.md

    'react/require-render-return': ERROR,

    // Enforce style prop value is an object
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/style-prop-object.md

    'react/style-prop-object': ERROR,
  },
};
