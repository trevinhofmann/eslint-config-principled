# `eslint-config-principled`

A principle-based ESLint configuration for projects supporting TypeScript, React, and Jest

## Linting Principles

### 1. Correctness

The linter should treat all (likely) logical mistakes as errors.

### 2. Consistency

When the readability of different styling options is not situational, the linter should use warnings to enforce one style for consistency.

### 3. Flexibility

When the readability of different styling options is situational, the linter should not enforce any style in order to give the developer freedom to choose which style is best for the particular situation.

## Using `eslint-config-principled`

First, install the package and its peer dependencies:

```bash
npx install-peerdeps eslint-config-principled --dev
```

For JavaScript projects, extend `principled` in your local `.eslintrc.json` configuration file:

```json
{
  "extends": [
    "principled"
  ]
}
```

For TypeScript projects, extend `principled/typescript` instead:

```json
{
  "extends": [
    "principled/typescript"
  ]
}
```

To add support for React projects, add `principled/react`:

```json
{
  "extends": [
    "principled/typescript",
    "principled/react"
  ]
}
```

To add support for Jest tests, add `principled/jest`:

```json
{
  "extends": [
    "principled/typescript",
    "principled/jest"
  ]
}
```

You can also use React in your Jest tests:

```json
{
  "extends": [
    "principled/typescript",
    "principled/react",
    "principled/jest"
  ]
}
```

## Versioning

This project adheres to [Semantic Versioning](https://semver.org/).

## API

This project conforms to the specifications of an [ESLint Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs).

## Contributing

This project is open for pull requests. Please refer to [CONTRIBUTING.md](https://github.com/trevinhofmann/eslint-config-principled/blob/master/CONTRIBUTING.md) for information about developing `eslint-config-principled` and submitting changes.

## Issues

Please feel welcome to [submit an issue](https://github.com/trevinhofmann/eslint-config-principled/issues/new) for any problems or suggestions you may have regarding `eslint-config-principled`.

## License

This project is licensed under the [Unlicense](https://unlicense.org). For the full license text, please see [LICENSE](https://github.com/trevinhofmann/eslint-config-principled/blob/master/LICENSE).
