const prettierPlugin = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
    {
        ignores: ['node_modules/**', 'public/**'],
    },
    {
        plugins: {
            prettier: prettierPlugin,
        },
        rules: {
            ...prettierConfig.rules,
            'prettier/prettier': 'error',
        },
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
        },
    },
];
