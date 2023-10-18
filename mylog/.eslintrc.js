module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': ['.js', '.json', '.jsx', '.ts', '.tsx'],
    'react/jsx-filename-extension': {
      extensions: ['.jsx', '.tsx'],
    },
  },
};
