module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'prettier'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: [],
    rules: {},
}
