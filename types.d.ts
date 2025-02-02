/* eslint-disable @typescript-eslint/consistent-type-imports */

declare module 'eslint-config-xo-typescript' {
	const config: import('eslint').Linter.Config[];
	export default config;
}

declare module 'eslint-plugin-react-hooks' {
	const plugin: import('eslint').ESLint.Plugin & {configs: {recommended: import('eslint').Linter.Config}};
	export default plugin;
}

declare module 'eslint-plugin-jsx-a11y' {
	const plugin: import('eslint').ESLint.Plugin;
	export default plugin;
}
