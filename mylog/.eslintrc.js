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
  rules: {
    'react/jsx-filename-extension': [
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    ],
  },
};
