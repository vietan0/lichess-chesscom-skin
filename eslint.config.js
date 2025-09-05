import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'warn',
    'unused-imports/no-unused-vars': 'warn',
    'style/padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: ['return', 'export'] },
      { blankLine: 'never', prev: 'export', next: 'export' },
      {
        blankLine: 'always',
        prev: 'import',
        next: ['const', 'let', 'function', 'block-like', 'interface'],
      },
      {
        blankLine: 'always',
        prev: [
          'multiline-expression',
          'multiline-block-like',
          'multiline-const',
          'interface',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'multiline-expression',
          'multiline-block-like',
          'multiline-const',
          'interface',
        ],
      },
      {
        blankLine: 'never',
        prev: ['singleline-const', 'singleline-let', 'singleline-var'],
        next: ['singleline-const', 'singleline-let', 'singleline-var'],
      },
    ],
  },
  formatters: {
    css: true,
  },
});
