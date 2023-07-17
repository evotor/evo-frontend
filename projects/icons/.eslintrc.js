module.exports = {
    extends: ['@evo/eslint-config-ng', 'prettier'],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['./tsconfig.lib.json'],
                ecmaVersion: 2020,
                sourceType: 'module',
            },
        },
    ],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
};
