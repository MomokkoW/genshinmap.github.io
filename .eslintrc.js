module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'prettier', 'mui-unused-classes'],
  extends: [
    'eslint:recommended',
    //    'airbnb',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /**
     * Set up basic formatting rules with the Prettier plugin.
     * This helps maintain a consistent code style.
     */
    'prettier/prettier': ['warn'],

    /**
     * Add a warning for unused variables, except if they start with '_'.
     * This flags the variable as 'unused, but potentially used in future'.
     */
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: '_.*', // Prefix variables you know will be unused with an underscore.
        argsIgnorePattern: '_.*', // Prefix arguments you know will be unused with an underscore.
      },
    ],

    /**
     * NextJS defaults.
     */
    'react/react-in-jsx-scope': ['off'],
    'react/display-name': ['off'],
    'react/prop-types': ['off'],
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/explicit-member-accessibility': ['off'],
    '@typescript-eslint/indent': ['off'],
    '@typescript-eslint/member-delimiter-style': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-use-before-define': ['off'],

    /**
     * Enable TypeScript checking.
     */
    '@typescript-eslint/explicit-module-boundary-types': ['warn'],

    /**
     * Allow use of console commands at specific log levels.
     * Instances of console.log and console.info should be stripped.
     */
    'no-console': ['warn', { allow: ['warn', 'error', 'debug'] }],

    /**
     * Make less severe/important issues throw warnings instead of breaking the program.
     * Don't add stuff here if it can be autofixed.
     */
    'mui-unused-classes/unused-classes': ['warn'],
    'react/self-closing-comp': ['warn'],
    'object-shorthand': ['warn'],
    'react/jsx-boolean-value': ['warn'],

    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/1204c789776cb01fbaf3e9f032e7e2ba85a44137/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    'react-hooks/exhaustive-deps': 'error',

    /**
     * Turn off rules I don't like, or that annoy me.
     */
    'react/jsx-filename-extension': ['off'], // Tried to turn this on but babel-plugin-root-import complains.
    'no-underscore-dangle': ['off'], // Allow dangling underscores in identifier names.
    'no-case-declarations': ['off'], // Allow variables to be declared in case blocks.
    'import/prefer-default-export': ['off'], // Allow single exports in files. They may get more later.
    'import/no-dynamic-require': ['off'], // Dynamic requires are used to reference images.
    'global-require': ['off'], // Local requires are used to reference images.
    'react/jsx-props-no-spreading': ['off'], // I don't mind passing spread properties using {...other} in JSX.
    'max-classes-per-file': ['off'], // I don't mind having multiple classes in one file, to keep them organized.
  },
};
