/*
 * Copyright (C) 2017 QIANKUN HANLIN Corporation Limited
 *
 * 服务器返回所有的状态码定义文件
 */
export const SUCCESS = 200

/**
 * 登录
 */
export const PASSWORD_ERROR = 40101 // 失败，密码错误
export const CODE_ERROR_NOT_REGIST = 40105 // 该账号未注册
export const NO_MANAGE_PERMISION = 40300// 失败，无管理权限

export const NOT_LOGIN_CODE = 40100 // 未登录
export const NOT_LOGIN_STATUS = 401// 未登录

// 1 即将预售； 2 正在报名； 3 报名结束； 4 已复核； 5 正在摇号； 6 已摇号
export const STATUS_1 = 1
export const STATUS_1_TEXT = '即将预售'

export const STATUS_2 = 2
export const STATUS_2_TEXT = '正在报名'

export const STATUS_3 = 3
export const STATUS_3_TEXT = '报名结束'

export const STATUS_4 = 4
export const STATUS_4_TEXT = '已复核'

export const STATUS_5 = 5
export const STATUS_5_TEXT = '正在摇号'

export const STATUS_6 = 6
export const STATUS_6_TEXT = '已摇号'

export const PROJECT_BASE_INFO_KEY = '基础信息'
export const PROJECT_SEVICE_INFO_KEY = '物业信息'
export const PROJECT_SALE_INFO_KEY = '销售信息'
