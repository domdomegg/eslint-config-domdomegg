import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import xoConfig from 'eslint-config-xo-typescript';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.RulesRecord} */
const rules = {
	// Unnecessary, always targeting ES5+
	radix: 'off',

	// Better validated by TypeScript
	'no-use-before-define': 'off',
	'@typescript-eslint/no-use-before-define': 'off',
	'react/prop-types': 'off',
	'react/require-default-props': 'off',

	// Personal preferences
	'prefer-template': 'error',
	'arrow-body-style': 'off',
	'@stylistic/arrow-parens': ['error', 'always'],
	'max-len': 'off',
	'react/jsx-one-expression-per-line': 'off',
	'react/jsx-props-no-spreading': 'off',
	'no-plusplus': ['error', {allowForLoopAfterthoughts: true}],
	'react/function-component-definition': ['error', {
		namedComponents: 'arrow-function',
		unnamedComponents: 'arrow-function',
	}],
	'@typescript-eslint/no-unused-vars': 'error',
	'@typescript-eslint/array-type': ['error', {default: 'array'}],

	// Reduce entities that need escaping
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
		assert: 'either',
	}],
};

export default tseslint.config(
	// Base config for all files
	{
		plugins: {
			react: reactPlugin,
			'jsx-a11y': jsxA11y,
			'@typescript-eslint': tseslint.plugin,
		},
	},

	eslint.configs.recommended,

	// @ts-expect-error https://github.com/jsx-eslint/eslint-plugin-react/issues/3878
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat['jsx-runtime'],
	{
		plugins: {
			'react-hooks': reactHooksPlugin,
		},
		rules: {...reactHooksPlugin.configs.recommended.rules},
	},

	xoConfig.map((c) => {
		if (c.plugins?.['@typescript-eslint']) {
			c.files = ['*.ts', '*.tsx', '*.mts', '*.cts'];
			c.languageOptions ??= {};
			c.languageOptions.parserOptions ??= {};
			c.languageOptions.parserOptions.projectService = false;
			c.languageOptions.parserOptions.project = [
				'?(tsconfig.eslint.json)',
				'?(tsconfig.json)',
			];
		}

		return c;
	}),

	// Custom rules
	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		rules: {
			...rules,
		},
	},
);
