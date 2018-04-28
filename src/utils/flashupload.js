/*
 * Copyright (C) 2017 QIANKUN HANLIN Corporation Limited
 *
 * flash 上传
 */
var FlashUploadFile = function () {
  var uploader = null // Uploader 对象
  /**
   * 初始化上传控件
   * @param type 上传文件类型：1图片， 2视频
   * @param url 服务器地址
   * @param pickerId 控件ID
   * @param token
   */
  this.init = function (type, url, pickerId, token) {
    var accept = { // 只允许选择图片文件
      title: 'image',
      extensions: 'gif,jpg,jpeg,png',
      mimeTypes: 'image/png,image/gif,image/jpeg'
    }
    var fileSizeLimit = 2 * 1024 * 1024 // 图片限制为2M
    if (type == 2) {
      accept = {
        title: 'video',
        extensions: 'mp4',
        mimeTypes: 'video/mp4'
      }
      fileSizeLimit = 5 * 1024 * 1024 // 文件限制为5M
    }
    uploader = new window.WebUploader.Uploader({
      auto: true, // 选完文件后，是否自动上传
      swf: '/static/webuploader/Uploader.swf', // swf文件路径
      server: url, // 文件接收服务端地址
      pick: {
        id: '#' + pickerId,
        multiple: false // 不支持选择多个文件
      },
      accept: accept, // 支持的文件类型
//      runtimeOrder : 'flash', // 强制上传方式为flash，也可以为html5
//       fileSizeLimit: fileSizeLimit, // 文件上传限制大小
      fileSingleSizeLimit: fileSizeLimit, // 限制上传单个文件大小
      duplicate: true
    })
    uploader.option('formData', {
      'token': token
    })
  }

  /**
   * flash上传
   * @param type 上传文件类型：1图片， 2视频
   * @param url 上传服务器地址
   * @param filePickerId 控件ID
   * @param token
   * @param selecterrfn 选择文件限制失败回调函数
   * @param startfn 开始上传前回调函数
   * @param onprogress 上传中回调函数
   * @param successfn 上传成功回调函数
   * @param errorfn 上传失败回调函数
   */
  this.startUpload = function (type, url, filePickerId, token, selecterrfn, startfn, onprogress, successfn, errorfn) {
    try {
      this.init(type, url, filePickerId, token) // 初始化上传配置
    } catch (e) {
      // 如果没有安装flash时将报错
      selecterrfn(type, true)
      return
    }
    // 上传事件监听
    this.createEvent(type, selecterrfn, startfn, onprogress, successfn, errorfn)
  }

  /**
   * 上传事件监听
   * @param type 上传文件类型：1图片， 2视频
   * @param selecterrfn 选择文件限制失败回调函数
   * @param startfn 开始上传前回调函数
   * @param onprogress 上传中进度
   * @param successfn 上传成功回调函数
   * @param errorfn 上传失败回调函数
   */
  this.createEvent = function (type, selecterrfn, startfn, onprogress, successfn, errorfn) {
    // type 错误类型
    uploader.on('error', function () {
      selecterrfn(type)
    })
    // file
    uploader.on('uploadStart', function (file) {
      if (file.name) {
        file.name = file.name.toLowerCase()
      }
      if (startfn(type, file, uploader)) {
        return
      }
      // file, percentage
      uploader.on('uploadProgress', onprogress)
    })
    // file, response
    uploader.on('uploadSuccess', function (file, res) {
      successfn(type, file, res)
    })
    // file, response
    uploader.on('uploadError', errorfn)
  }
}

export {
  FlashUploadFile
}
