module.exports = {
  root: true,
  extends: '@react-native/eslint-config',
  rules: {
    'prettier/prettier': 0,
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': ['error', { 'vars': 'all', 'args': 'after-used', 'ignoreRestSiblings': false }],
  },
};
