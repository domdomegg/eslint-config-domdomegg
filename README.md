# eslint-config-domdomegg

Personal preset for ESLint, set up for any JavaScript or TypeScript projects (including support for JSX and React).

## Usage

Install ESLint and this library with:

```
npm install --save-dev eslint eslint-config-domdomegg
```

Enable it by adding a `eslint.config.mjs` file with:

```js
import domdomegg from 'eslint-config-domdomegg';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export default [
  ...domdomegg,
  // optionally add custom rules here
];
```

Generally if an ESLint config exists, I put my personal styles first in the array (so the project-specific rules overwrite it).

You can add a lint script to `package.json` that looks like:

```json
{
  "scripts": {
    "lint": "eslint ."
  }
}
```

And then you can run:
- `npm run lint`
- `npm run lint -- --fix`

## Contributing

Pull requests are welcomed on GitHub! To get started:

1. Install Git and Node.js
2. Clone the repository
3. Install dependencies with `npm install`
4. Run `npm run test` to run tests

## Releases

Versions follow the [semantic versioning spec](https://semver.org/).

To release:

1. Use `npm version <major | minor | patch>` to bump the version
2. Run `git push --follow-tags` to push with tags
3. Wait for GitHub Actions to publish to the NPM registry.
