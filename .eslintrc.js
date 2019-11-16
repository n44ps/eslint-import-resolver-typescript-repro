module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "import"
    ],
    "extends": [
        "airbnb"
    ],
    "settings": {
        "import/extensions": [
            ".ts",
            ".tsx"
        ],
        "import/parsers": {
            "@typescript-eslint/parser": [
                ".ts",
                ".tsx"
            ]
        },
        "import/resolver": {
            "node": {
                "extensions": [
                    ".ts",
                    ".tsx"
                ]
            },
            "typescript": {
                "directory": ["packages/*/tsconfig.json", "tsconfig.json"]
            }
        }
    },
    "rules": {
        "import/no-unresolved": "error",
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [
                    ".ts",
                    ".tsx"
                ]
            }
        ]
    }
}