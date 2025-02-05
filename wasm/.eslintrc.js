module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    env: {
        es6: true,
        browser: true,
    },
    globals: {
        debug: 'writable',
        emscriptenRuntimeInitialized: 'writable',
        DEBUGGING: 'readonly',
        VW: 'readonly',
        SharedArrayBuffer: 'readonly',
        Atomics: 'readonly',
        Module: 'readonly',
        UTF8ToString: 'readonly',
        autoAddDeps: 'readonly',
        mergeInto: 'readonly',
        LibraryManager: 'readonly',
        FS: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'security'],
    rules: {
        // Disabled
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'off', // Since it is checked by TypeScript compiler
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/camelcase': 'off', // Due to vimwasm_* C APIs
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'security/detect-non-literal-fs-filename': 'off',
        'security/detect-object-injection': 'off', // false positive at array index accesses

        // Enabled
        'no-console': 'error',

        // Configured
        '@typescript-eslint/array-type': ['error', 'array-simple'],
    },
    overrides: [
        {
            files: ['main.ts', 'common.d.ts'],
            parserOptions: {
                project: './tsconfig.main.json',
            },
        },
        {
            files: ['runtime.ts', 'pre.ts', 'lib.d.ts'],
            parserOptions: {
                project: './tsconfig.main.json',
            },
        },
    ],
};
