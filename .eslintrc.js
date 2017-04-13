// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': { // 规则
    // allow paren-less arrow functions--允许箭头函数前面不写空格
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 不允许在生产环境使用debug
    'semi': ['error', 'always'], // 结尾强制有分号
    'indent': 0,
    'space-before-function-paren': 0 // 可以xx(){} 原来 xx () {}
  }
}
