import js from '@eslint/js';
import svelteParser from 'svelte-eslint-parser';

export default [
	js.configs.recommended,
	{
		ignores: ['.svelte-kit/**']
	},
	{
		files: ['**/*.svelte', '*.svelte'],
		languageOptions: {
			parser: svelteParser
		}
	}
];
