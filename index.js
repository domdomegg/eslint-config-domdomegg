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
  'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
  'max-len': 'off',
};

module.exports = {
  env: {},
  extends: [
    'eslint:recommended',
    'airbnb',
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
        project: 'tsconfig.json',
      },
      rules,
    },
  ],
};
