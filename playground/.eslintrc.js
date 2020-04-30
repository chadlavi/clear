module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    'react': {
      'createClass': 'createReactClass', 
      'pragma': 'React',
      'version': 'detect',
    },
  },
  rules: {
    'arrow-spacing': 'error',
    'comma-dangle': ['error', 'only-multiline'],
    complexity: 'error',
    eqeqeq: ['error', 'always', {'null': 'ignore'}],
    indent: ['error', 2],
    'max-len': ['error', { 'code': 120 }],
    'prefer-const': 'error',
    'prefer-template': 'error',
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'sort-imports': ['error', {
      'memberSyntaxSortOrder': ['none', 'all', 'single', 'multiple',],
    }],
    'react/no-unescaped-entities': 'off',
    'radix': 'warn',
    'no-console': 'error',
    'no-shadow': 'error',
    'no-trailing-spaces': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      multiline: {
        delimiter: 'none',
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',
        requireLast: false,
      },
    }],
    'yoda': ['error', 'never', { 'exceptRange': true }]
  }
}
