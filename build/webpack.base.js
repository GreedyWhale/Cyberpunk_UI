/*
 * @Author: MADAO
 * @Date: 2020-06-16 14:35:05
 * @LastEditors: MADAO
 * @LastEditTime: 2020-06-24 15:51:56
 * @Description: webpack 基本配置
 */
const { resolve } = require("path")

module.exports = {
  entry: {
    index: resolve("src/lib/index.tsx"),
  },
  output: {
    filename: '[name].js',
    path: resolve("dist"),
    library: "CP_UI",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  }
};
