# eslint-config-domdomegg

Personal preset for ESLint, set up for any JavaScript or TypeScript projects (including support for JSX and React).

## Usage

Install ESLint and this library with:

```
npm install --save-dev eslint eslint-config-domdomegg
```

Enable it by adding a `.eslintrc.js` file with:

```js
module.exports = {
  extends: ['eslint-config-domdomegg'],
  rules: {
    // optionally add custom rules here
  },
};
```

Generally if an ESLint config exists, I put my personal styles first (so the project-specific 'extends' rules overwrite it).

You can add a lint script to `package.json` that looks like:

```json
{
  "scripts": {
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ."
  }
}
```

And then you can run:
- `npm run lint`
- `npm run lint -- --fix`
