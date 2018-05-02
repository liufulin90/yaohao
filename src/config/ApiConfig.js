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
    /**
     * 获取首页banner列表
     */
    bannerList: `${apiRoot}/banner/list`,
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
    /**
     参数 是否必须 说明
     pid 是 楼盘项目id
     */
    salemanList: `${apiRoot}/project/saleman/list`, // 查询楼盘销售顾问
    /**
     参数 是否必须 说明
     pid 否 楼盘项目id，不传时将返回所有和我所有身份信息相关的摇号信息
     */
    projectUserResultList: `${apiRoot}/project/user/result/list`, // 查询我的摇号信息

    userInfo: `${apiRoot}/user/info`, // 获取当前登录用户资料
    /**
     参数 是否必须 说明
     name 是 姓名
     phone 是 手机号码
     id_no 是 身份证号码
     */
    userIdinfoAdd: `${apiRoot}/user/idinfo/add`, // 增加用户身份信息
    userIdinfoList: `${apiRoot}/user/idinfo/list`, // 查询用户身份信息
    /**
     参数 是否必须 说明
     id 是 身份信息id
     */
    userIdinfoDelete: `${apiRoot}/user/idinfo/delete`, // 删除用户身份信息
    /**
     参数 是否必须 说明
     id 是 身份信息ID
     name 是 姓名
     phone 是 手机号码
     id_no 是 身份证号码
     */
    userIdinfoUpdate: `${apiRoot}/user/idinfo/update`, // 修改用户身份信息
    /**
     参数 是否必须 说明
     type 是 反馈分类，填写具体的分类中文即可
     contact 是 联系方式，手机、邮箱等
     content 是 反馈内容
     */
    feedbackAdd: `${apiRoot}/feedback/add`, // 添加意见反馈

    login: `${apiRoot}/user/login`, // 登录
    logout: `${apiRoot}/user/logout` // 退出
  }
}

export {
  apiUrlConfig
}
