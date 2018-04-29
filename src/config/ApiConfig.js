/*
 * 所有外部接口配置路径
 */
const apiUrlConfig = () => {
  let __DEV__ = process.env.NODE_ENV === 'production'
  var apiHost, apiRoot
  if (!__DEV__) {
    // 开发
    apiHost = ''
    apiRoot = `${apiHost}/api/v1`
  } else {
    // 产品
    apiHost = ''
    apiRoot = `${apiHost}/api/v1`
  }
  return {
    bannerList: `${apiRoot}/banner/list`, // 获取首页banner列表
    /**
     参数 是否必须 说明
     pid 是 楼盘项目id
     type 否 相册类型, house_type  楼盘户型; outdoor_scene  楼盘实景; surrounding  楼盘周边
     */
    projectPhotoList: `${apiRoot}/project/photo/list`, // 获取首页banner列表
    /**
     参数 是否必须 说明
     page 否 页码，默认1
     status 否 状态
     kw 否 楼盘搜索关键词
     */
    projectList: `${apiRoot}/project/list`, // 楼盘列表
    /**
     参数 是否必须 说明
     pid 是 楼盘ID
     */
    projectInfo: `${apiRoot}/project/get`, // 楼盘详情
    /**
     参数 是否必须 说明
     pid 是 楼盘项目id
     page 否 页码，默认1
     */
    applyList: `${apiRoot}/project/apply/list`, // 查询楼盘摇号报名列表（复核名单）
    /**
     参数 是否必须 说明
     pid 否 楼盘项目id，pid和kw必须至少传一个
     kw 否 搜索，可以是姓名或身份证，如果没有传pid将在整个系统中搜索
     page 否 页码，默认1
     */
    resultList: `${apiRoot}/project/apply/result/list`, // 查询楼盘摇号结果（含搜索）
    /**
     参数 是否必须 说明
     type 否 资讯分类，如果是楼盘动态，这里传楼盘id，不传时返回所有
     page 否 页码，默认1
     type定义
     policy  房市政策
     announcement    公示公告
     如果需要获取楼盘动态，这里传楼盘id
     */
    infoList: `${apiRoot}/article/list`, // 获取资讯动态列表
    /**
     参数 是否必须 说明
     id  是  资讯动态ID
     */
    infoDetail: `${apiRoot}/article/get`, // 获取资讯动态详情
    login: `${apiRoot}/user/login`, // 登录
    logout: `${apiRoot}/user/logout` // 退出
  }
}

export {
  apiUrlConfig
}
