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
  'react/jsx-props-no-spreading': 'off',
  'react/function-component-definition': ['error', {
    'namedComponents': 'arrow-function',
    'unnamedComponents': 'arrow-function',
  }],
  'react/no-unescaped-entities': ['error', {
    forbid: [{
      char: '>',
      alternatives: ['&gt;'],
    }, {
      char: '}',
      alternatives: ['&#125;'],
    }],
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
