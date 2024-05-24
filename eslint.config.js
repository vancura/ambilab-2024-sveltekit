import svelte from 'eslint-plugin-svelte';

export default [
	{
		files: ['**/*.svelte'],
		processor: 'svelte/svelte',
		languageOptions: {
			ecmaVersion: 2022,
			sourceType: 'module'
		},
		plugins: {
			svelte: svelte
		},
		rules: {},
		ignores: []
	}
];
