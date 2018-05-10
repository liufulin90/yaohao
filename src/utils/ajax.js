/*
 *
 * 网络请求封装工具
 */
import * as $ from 'jquery'
import * as CODE from '../config/code'
import { REDIRECT_URL_KEY } from '../config/'
import { globalErrorPrint } from './index'

/**
 * 网络请求
 * @param url 请求地址
 * @param method 请求方式 默认POST，可传入GET
 * @param data 请求参数值，可以是对象
 * @param timeout 超时时间，默认20秒
 * @param async 是否异步，默认是
 * @param dataType
 * @param isFile 是否是上传文件，true是，false否
 * @param onprogress 文件上传中的回调，进度条控制
 * @returns {*}
 * @constructor
 */
const Ajax = ({url, method = 'POST', data = '', timeout = 20000, async = true, dataType = 'json', isFile = false, onprogress = null}) => {
  const defer = $.Deferred()
  let options = {
    url: url,
    type: method,
    async: async,
    crossDomain: false, // 默认： 同域请求为false
    timeout: timeout,
    dataType: dataType
  }
  if (isFile) {
    // 如果是文件
    Object.assign(options, {
      contentType: false,
      processData: false,
      data: data,
      xhr: function () {
        let xhr = $.ajaxSettings.xhr()
        if (onprogress && xhr.upload) {
          // 文件上传进度回调
          // 侦查附件上传情况,这个方法大概0.05-0.1秒执行一次
          xhr.upload.addEventListener('progress', onprogress, false)
          return xhr
        }
      }
    })
  } else if (typeof data === 'object') {
    Object.assign(options, {
      contentType: 'application/json; charset=utf-8',
      // data: JSON.stringify(data)
      data: data
    })
  }
  $.ajax(options)
    .done(defer.resolve)
    .fail(function (res) {
      // 没有登录则跳转到登录页面
      if (res.status === CODE.NOT_LOGIN_STATUS || res && res.responseJSON && res.responseJSON.code === CODE.NOT_LOGIN_CODE) {
        globalErrorPrint(res)
        localStorage.setItem(REDIRECT_URL_KEY, location.href)
        location.href = '/api/v1/wechat/oauth'
      } else {
        defer.resolve(res)
      }
    })

  return defer.promise()
}

export default Ajax
