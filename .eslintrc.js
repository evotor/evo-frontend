module.exports = {
    root: true,
    overrides: [
        {
            files: ['projects/**/*.ts'],
            parser: '@typescript-eslint/parser',
            env: {
                es6: true,
                browser: true,
                node: true,
            },
            parserOptions: {
                project: ["tsconfig.lib.json"],
                ecmaVersion: 2020,
                sourceType: 'module',
                createDefaultProgram: true,
            },
            extends: ['@evo/eslint-config-ng', 'plugin:storybook/recommended', 'prettier'],
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {
                '@angular-eslint/template/no-negated-async': 'warn',
                '@angular-eslint/template/eqeqeq': 'warn',
            },
        },
    ],
};
