module.exports = {
  extends: 'next',
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    next: {
      rootDir: 'packages/*/'
    }
  },
  rules: {
    'no-unused-vars': 'error',
    eqeqeq: 'error',
    indent: ['error', 2],
    'max-len': ['error', { code: 80 }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-trailing-spaces': 'error'
  },
};
