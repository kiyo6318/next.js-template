module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/warnings',
  ],
  rules: {
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
};
