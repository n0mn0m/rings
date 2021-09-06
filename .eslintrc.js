module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jest',
        'react-hooks'

    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'


    ],
    rules: {
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/ban-ts-comment': 'off'
    },
    settings: {
        'react': {
            'pragma': 'React',
            'version': 'detect'
        }
    }
};