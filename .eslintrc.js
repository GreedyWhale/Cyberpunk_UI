/*
 * @Author: MADAO
 * @Date: 2020-06-28 15:39:31
 * @LastEditors: MADAO
 * @LastEditTime: 2020-06-28 15:42:35
 * @Description: eslint 配置文件
 */
module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: [
    'react',
    '@typescript-eslint'
  ],
  rules: {
  }
}
