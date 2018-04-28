/*
 * Copyright (C) 2017 QIANKUN HANLIN Corporation Limited
 *
 * 开发环境定义文件
 */
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
