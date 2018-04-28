/*
 * Copyright (C) 2017 QIANKUN HANLIN Corporation Limited
 *
 * 开发时使用webpack针对client热加载
 */
/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
