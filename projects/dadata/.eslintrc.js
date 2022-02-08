module.exports = {
    "extends": ['../../.eslintrc.js'],
    "overrides": [{
        "files": ["*.ts"],
        "parser": '@typescript-eslint/parser',
        "parserOptions": {
            "project": ["tsconfig.json"],
            "ecmaVersion": 2020,
            "sourceType": "module"
        },
        "rules": {
            // dadata has another naming conventions
            // naming conventions
            "camelcase": "off",
            "@typescript-eslint/naming-convention": [
                "error",
                {
                    "selector": "default",
                    "format": ["camelCase"]
                },
                {
                    "selector": "typeProperty",
                    "format": ["camelCase", "snake_case"]
                },
                {
                    "selector": "enumMember",
                    "format": ["camelCase", "UPPER_CASE"]
                },
                {
                    "selector": "variable",
                    "format": ["camelCase", "UPPER_CASE"]
                },
                {
                    "selector": "parameter",
                    "format": ["camelCase"],
                    "leadingUnderscore": "allow"
                },
                {
                    "selector": "typeLike",
                    "format": ["PascalCase"]
                }
            ],
        },
    }],
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
};
