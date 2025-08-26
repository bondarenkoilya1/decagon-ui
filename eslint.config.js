import importPlugin from "eslint-plugin-import";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginSimpleImportSort from "eslint-plugin-simple-import-sort";

import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

const ignoredFiles = [
    "**/dist/*",
    "**/node_modules/*",
    "**/.vite/*",
    "**/public/*",
    "**/.idea/*",
    "**/.vscode/*",
    "tsconfig.json",
    "jsconfig.json",
    "**/*.min.js",
    "**/*.map.js",
    "**/*.spec.ts",
    "**/.env*"
];

const importSortGroups = [
    // React libraries and external packages
    ["^react", "^\\w"],
    // Absolute aliases, e.g. @something
    ["^@"],
    // Core app layers
    ["^src/app(/.*|$)"],
    ["^src/pages(/.*|$)"],
    ["^src/modules(/.*|$)"],
    // Shared folders (constants, schemes, ui, utils, styles)
    ["^src/shared/constants(/.*|$)"],
    ["^src/shared/schemes(/.*|$)"],
    ["^src/shared/ui(/.*|$)"],
    ["^src/shared/utils(/.*|$)"],
    ["^src/shared/styles(/.*|$)"],
    ["^src/shared/lib(/.*|$)"],
    // Themes
    ["^src/themes(/.*|$)"],
    // Type imports
    [
        "^src/shared/types(/.*|$)",
        "^src/types(/.*|$)",
        "^src/shared/types",
        "^\\.\\./types",
        "^\\./types"
    ],
    // Styles (CSS files)
    ["^.+\\.?(css)$"],
    // Relative imports
    ["^\\u0000"],
    ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
    ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"]
];

export default [
    {
        ignores: ignoredFiles
    },
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parser: tsParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            globals: {
                google: "readonly"
            }
        },
        plugins: {
            react: eslintPluginReact,
            prettier: eslintPluginPrettier,
            "simple-import-sort": eslintPluginSimpleImportSort,
            import: importPlugin,
            "react-hooks": eslintPluginReactHooks,
            "@typescript-eslint": eslintPluginTs
        },
        settings: {
            react: {
                version: "detect"
            }
        },
        rules: {
            // ===== React & Hooks =====
            "react/react-in-jsx-scope": "off",
            "react-hooks/rules-of-hooks": "error",
            "react-hooks/exhaustive-deps": "warn",

            // ===== Imports =====
            "simple-import-sort/imports": [
                "error",
                {
                    groups: importSortGroups
                }
            ],
            "import/extensions": [
                "error",
                "never",
                {
                    ts: "never",
                    tsx: "never",
                    js: "never",
                    jsx: "never"
                }
            ],

            // ===== Prettier =====
            "prettier/prettier": ["error", { endOfLine: "auto" }],

            // ===== TypeScript =====
            "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
            "@typescript-eslint/no-explicit-any": "warn",
            "@typescript-eslint/consistent-type-imports": "error",
            "@typescript-eslint/no-non-null-assertion": "warn",
            "@typescript-eslint/explicit-function-return-type": [
                "error",
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true
                }
            ],

            // ===== General Code Quality =====
            eqeqeq: ["error", "always"],
            "no-console": ["warn", { allow: ["warn", "error"] }],
            "no-debugger": "error",
            "default-case": "warn",
            curly: ["error", "all"]
        }
    }
];
