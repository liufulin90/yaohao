/*
 * Copyright (C) 2017 QIANKUN HANLIN Corporation Limited
 *
 * 测试环境的定义
 */
var merge = require('webpack-merge')
var devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
