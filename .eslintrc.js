module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/airbnb',
        'plugin:vue/strongly-recommended',
        'plugin:vue/recommended',
        'eslint:recommended',
        'airbnb-base'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    plugins: ['vue'],
    // 自訂規則
    rules: {
    /* common */
        indent: [2, 4, { SwitchCase: 1 }],
        'no-unused-vars': 1,
        'comma-dangle': [2, 'never'],
        'arrow-body-style': 2,
        'global-require': 0,
        'max-len': 0,
        'no-alert': 0,
        'no-console': 0,
        'object-curly-newline': 0,
        'no-restricted-globals': 0,
        'no-param-reassign': ["error", { "props": false }],
        camelcase: 0,
        /* import */
        'import/newline-after-import': 2,
        'import/prefer-default-export': 1,
        'import/extensions': ['off', 'always', {
            js: 'never',
            vue: 'never'
        }],
        'import/no-dynamic-require': 0,
        'import/no-extraneous-dependencies': [2, {
            optionalDependencies: ['test/unit/index.js']
        }],
        /* vue plugin */
        'vue/no-v-html': 0,
        'vue/html-indent': [1, 4],
        'vue/attribute-hyphenation': [2, 'never'],
        "vue/max-attributes-per-line": ["error", {
            "singleline": 2,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],
        'vue/html-self-closing': [2, { html: { void: 'always' } }],
        'vue/singleline-html-element-content-newline': 0
    }
};
