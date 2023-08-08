/* eslint-disable quote-props */

// @ts-ignore
require('@rushstack/eslint-patch/modern-module-resolution');

const rules = {
  // Unnecessary, always targeting ES5+
  'radix': 'off',

  // Better validated by TypeScript
  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': 'off',
  'react/prop-types': 'off',
  'react/require-default-props': 'off',

  // Personal preferences
  'arrow-body-style': 'off',
  'max-len': 'off',
  'react/jsx-one-expression-per-line': 'off',
  'import/prefer-default-export': 'off',
  'react/jsx-props-no-spreading': 'off',
  'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  'react/function-component-definition': ['error', {
    'namedComponents': 'arrow-function',
    'unnamedComponents': 'arrow-function',
  }],

  // Reduce entities that need escaping.
  // Other errors will usually result in a TypeScript failure of some kind or be more obviously noticeable.
  // These two are much easier to accidentally make while refactoring code, and are symbols that are less used.
  'react/no-unescaped-entities': ['error', {
    forbid: [{
      char: '>',
      alternatives: ['&gt;'],
    }, {
      char: '}',
      alternatives: ['&#125;'],
    }],
  }],

  // Tune accessibility settings
  'jsx-a11y/label-has-associated-control': ['error', {
    // Allows either nesting input in label, or matching with id
    // (default from airbnb is to only allow when both nested and matched by id)
    assert: 'either',
  }],
};

module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  rules,
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [
          '?(tsconfig.eslint.json)',
          '?(tsconfig.json)',
        ],
      },
      rules,
    },
  ],
  ignorePatterns: ['node_modules', 'dist', 'build', 'out'],
};
