module.exports = {
    extends: ['@evo/eslint-config-ng', 'prettier'],
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                project: ['tsconfig.lib.json'],
                ecmaVersion: 2020,
                sourceType: 'module',
            },
            rules: {
                camelcase: 'off',
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        selector: 'default',
                        format: ['camelCase'],
                    },
                    {
                        selector: 'typeProperty',
                        format: ['camelCase', 'snake_case'],
                    },
                    {
                        selector: 'enumMember',
                        format: ['camelCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'variable',
                        format: ['camelCase', 'UPPER_CASE'],
                    },
                    {
                        selector: 'parameter',
                        format: ['camelCase'],
                        leadingUnderscore: 'allow',
                    },
                    {
                        selector: 'typeLike',
                        format: ['PascalCase'],
                    },
                ],
            },
        },
    ],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
};
