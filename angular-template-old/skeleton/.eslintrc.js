module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
      project: "tsconfig.json",
      sourceType: "module",
      createDefaultProgram: true,
  },
  plugins: [
    '@typescript-eslint',
    '@angular-eslint',
  ],
  overrides: [
    {
      files: ['*.ts'],
      excludedFiles: [
        "*.decorator.ts",
        "src/**/*.spec.ts",
        "src/test.ts"
      ],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@angular-eslint/recommended",
        "airbnb-typescript/base",
        "plugin:import/errors",
        "plugin:import/warnings",
        "plugin:import/typescript",
      ],
      plugins: ["simple-import-sort"],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'class-methods-use-this': 'off',
        'lines-between-class-members': 'off',
        '@typescript-eslint/unbound-method': [
          'error',
          {
            ignoreStatic: true,
          }
        ],
        // "sort-imports": "off",
        "import/first": "error",
        "import/newline-after-import": "error",
        "import/no-duplicates": "error",
        "import/order": ["error", {
          "pathGroups": [
            {
              "pattern": "@app/**",
              "group": "internal"
            },
            {
              "pattern": "@core/**",
              "group": "internal"
            },
            {
              "pattern": "@share/**",
              "group": "internal"
            },
            {
              "pattern": "@environment",
              "group": "internal"
            },
            {
              "pattern": "@single-spa-local",
              "group": "internal"
            }
          ]
        }]
      },
    },
    {
      files: ["*.component.html"],
      extends: ["plugin:@angular-eslint/template/recommended"],
      rules: {
        "max-len": ["error", { "code": 140 }]
      }
    },
    {
      files: ['*.component.ts'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
    {
      files: [
        'src/**/*.spec.ts',
        'src/**/*.d.ts'
      ],
      extends: ['plugin:jasmine/recommended'],
      plugins: ['jasmine'],
      env: { jasmine: true },
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
