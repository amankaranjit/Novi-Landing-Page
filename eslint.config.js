import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import react from 'eslint-plugin-react';
import unusedImports from 'eslint-plugin-unused-imports';
import globals from 'globals';
export default defineConfig(
  {
    ignores: [
      'dist',
      'build',
      'coverage',
      'node_modules',
      'public',
      'storybook-static',
    ],
  },
  [
    {
      files: ['**/*.{js,ts,jsx,tsx}'],

      languageOptions: {
        parser,

        parserOptions: {
          ecmaVersion: 'latest',
          sourceType: 'module',

          ecmaFeatures: {
            jsx: true,
          },
        },

        globals: {
          ...globals.browser,
          ...globals.node,
        },
      },

      plugins: {
        '@typescript-eslint': tseslint,
        react,
        'unused-imports': unusedImports,
        import: eslintPluginImport,
      },

      rules: {
        ...js.configs.recommended.rules,
        ...tseslint.configs.recommended.rules,
        ...react.configs.recommended.rules,

        // React 17+ / JSX transform
        'react/react-in-jsx-scope': 'off',

        // Console
        'no-console': [
          'error',
          {
            allow: ['table', 'error', 'debug', 'info'],
          },
        ],

        // Unused variables
        'no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
            ignoreRestSiblings: false,
            reportUsedIgnorePattern: false,
          },
        ],

        // var
        'no-var': 'error',

        // Use base ESLint rule for unused variables
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-vars': 'off',

        // Automatically detect unused imports
        'unused-imports/no-unused-imports': 'error',

        // TypeScript comments
        '@typescript-eslint/ban-ts-comment': [
          'error',
          {
            'ts-ignore': true,
          },
        ],

        // Don't allow any
        '@typescript-eslint/no-explicit-any': 'error',

        // Import ordering
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],

            pathGroups: [
              {
                pattern: 'react',
                group: 'external',
                position: 'before',
              },
            ],

            pathGroupsExcludedImportTypes: ['react'],

            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },

            'newlines-between': 'always',
          },
        ],
      },

      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
  prettierConfig
);