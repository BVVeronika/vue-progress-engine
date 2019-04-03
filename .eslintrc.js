module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'vue/html-closing-bracket-spacing': ['error', {
      'startTag': 'never',
      'endTag': 'never',
      'selfClosingTag': 'always'
    }],
    'vue/html-indent': ['error', 'number', {
      'attribute': 2,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-quotes': ['error', 'single'],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      }
    }],
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    'vue/mustache-interpolation-spacing': ['error', 'always'],
    'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-multi-spaces': ['error', {
      'ignoreProperties': false
    }],
    'vue/no-spaces-around-equal-signs-in-attribute': ['error'],
    'no-template-shadow': true,
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/v-bind-style': ['error', 'shorthand'],
    'vue/v-on-style': ['error', 'shorthand'],
    'vue/attributes-order': ['error', {
      'order': [
        'GLOBAL',
        'DEFINITION',
        'LIST_RENDERING',
        'CONDITIONALS',
        'RENDER_MODIFIERS',
        'UNIQUE',
        'TWO_WAY_BINDING',
        'OTHER_DIRECTIVES',
        'OTHER_ATTR',
        'EVENTS',
        'CONTENT'
      ]
    }],
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'data',
        ['props', 'propsData'],
        'parent',
        'functional',
        ['delimiters', 'comments'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        'watch',
        'computed',
        'LIFECYCLE_HOOKS',
        'methods',
        ['components', 'directives', 'filters'],
        ['template', 'render'],
        'renderError'
      ]
    }],
    'vue/this-in-template': ['error', 'never'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case', {
      'registeredComponentsOnly': true,
      'ignores': []
    }],
    'vue/v-on-function-call': ['error', 'never'],
    'vue/singleline-html-element-content-newline': 'off',
    'semi': ['error', 'always'],
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'never'
    }],
    'no-useless-escape': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
