/*
 * 基本配置
 */
export const PAGE_SIZE = 20 // 分页大小 pageSize

export const TINY_PAGE_SIZE = 5 // 小分页大小 pageSize（用于推送条件查询的弹出层和推送内容查询的弹出层）

export const USER_LOCALSTORAGE_KEY = 'yaohaoUser' // 用户登录本地存储的key

export const USER_INFO_KEY = 'yaohao_user_info' // 存储个人中心的用户信息
export const REDIRECT_URL_KEY = 'redirectUrlKey' // 重定向url key

export const USERNAME_PATTERN = /^(?:\d|[a-zA-Z]|[!@$%^&*]){6,16}$/ // 用户名验证正则

export const PASSWORD_PATTERN = /^(?![a-zA-z]+$)(?![0-9]+$)(?![!@$_%^&*]+$)[a-zA-Z0-9!@$_%^&*]{6,16}$/ // 密码验证正则

export const PHONENO_PATTERN = /^1[34578]\d{9}$/ // 手机号码验证正则

export const IMAGES_PATTERN = /^image\/(jpg|jpeg|png|gif)/ // 图片格式验证正则

export const VIDEO_PATTERN = /^video\/(mp4)/ // 视频格式验证正则

export const TOAST_SHOW_TIME = 3000 // toast显示时间

// 底部导航page和路由名称的映射
export const PATH_PAGE_MAPPING = {
  'index': 1,
  'myShake': 2,
  'info': 3,
  'mine': 4
}
