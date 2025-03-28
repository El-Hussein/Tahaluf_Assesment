module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'react', 'react-hooks'],
  extends: [
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:react/recommended',
    'eslint:recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    '@typescript-eslint/no-explicit-any': 'warn',
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        arrow: true,
        return: true,
        declaration: true,
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'no-unused-vars': 'off',
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx', '.jsx'],
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'no-plusplus': 'off',
    'no-return-await': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'react/require-default-props': 'off',
    camelcase: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-alert': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-prototype-builtins': 'off',
    'no-undef': 'off',
    'no-new-wrappers': 'off',
    'consistent-return': 'off',
    'no-console': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'no-restricted-globals': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/aria-role': 'off',
    'max-lines-per-function': [
      'warn',
      {
        max: 150,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines': [
      'warn',
      {
        max: 200,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    complexity: ['error', 10],
    'max-params': ['error', 4],
    'no-await-in-loop': 'error',
    'require-atomic-updates': ['error'],
    'max-depth': ['error', 3],
    'import/order': [
      'warn',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          'parent',
          ['sibling', 'index'],
          'object',
        ],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-eq-null': 'warn',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'array-callback-return': 'off',
    'arrow-body-style': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
