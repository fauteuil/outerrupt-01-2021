module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'react-app',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks', 'import', '@typescript-eslint'],
  rules: {
    // 0 - off, 1 - warn, 2 - error

    // Google Typescript Style Guide: https://github.com/google/gts/blob/main/.eslintrc.json
    'block-scoped-var': 'error',
    'eol-last': 'error',
    eqeqeq: 'error',
    'no-var': 'error',
    'no-trailing-spaces': 'warn', // Enable "error" after fixing
    'no-restricted-properties': [
      'error',
      {
        object: 'describe',
        property: 'only',
      },
      {
        object: 'it',
        property: 'only',
      },
    ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',

    // error
    'comma-dangle': [1, 'always-multiline'], // prettier?
    'react-hooks/exhaustive-deps': 2,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-uses-react': 2,
    semi: [1, 'always'],

    // TODO: currently warning, eventually switch to error
    '@typescript-eslint/naming-convention': [
      1,
      {
        selector: 'default',
        format: ['camelCase'],
      },
      // PascalCase can be used for exported components,
      // e.g. to convert `export default memo(connect(MyComponent));`
      // to a named constant  `export const MyComponent = memo(connect(...;`
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
      },
      // Uppercase can be used for 3rd party `property` accessors,
      // e.g. `react-table` column definitions ("Cell", "Header").
      {
        "selector": "property",
        "format": ["camelCase", "PascalCase"],
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
      },
      {
        selector: 'typeLike', // matches the same as class, interface, typeAlias, enum, typeParameter.
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/triple-slash-reference': 1,
    '@typescript-eslint/quotes': ['warn', 'single', { avoidEscape: true }],
    'max-lines': [1, { max: 499 }],
    'max-len': [
      1,
      {
        // prettier?
        code: 120,
        comments: 120,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
      },
    ],
    'no-console': 1,
    'no-mixed-spaces-and-tabs': 1, // prettier?
    'sort-imports': [1, { allowSeparatedGroups: true, ignoreCase: true }],

    // warning
    '@typescript-eslint/no-inferrable-types': 1,
    'react/no-unescaped-entities': 1,
    'react/prop-types': 1,

    // off
    '@typescript-eslint/camelcase': 0, // disabled to avoid conflict with "@typescript-eslint/naming-convention"
    '@typescript-eslint/class-name-casing': 0, // disabled to avoid redundency with "@typescript-eslint/naming-convention"
    '@typescript-eslint/explicit-function-return-type': 0,
    'no-case-declarations': 0,
    'no-prototype-builtins': 0,
    'react/display-name': 0,
    quotes: 0, // disabled to avoid conflict with "@typescript-eslint/quotes"
  },
};
