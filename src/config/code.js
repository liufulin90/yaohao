/*
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
/*
 标签按这个组合查询：
 1. 即将预售 2. 开始报名  =》 最新报名
 3. 现场核验 4. 资料复核 =》 最新核验
 5. 即将摇号 6. 摇号中 7. 摇号结束 =》 最新摇号
 */
export const STATUS_MAPPING = {
  status1: {
    code: 1,
    text: '即将预售'
  },
  status2: {
    code: 2,
    text: '开始报名'
  },
  status3: {
    code: 3,
    text: '即将预售'
  },
  status4: {
    code: 4,
    text: '资料复核'
  },
  status5: {
    code: 5,
    text: '即将摇号'
  },
  status6: {
    code: 6,
    text: '摇号中'
  },
  status7: {
    code: 7,
    text: '摇号结束'
  }
}
export const HOME_STATUS_MAPPING = [
  {
    codes: `${STATUS_MAPPING.status1.code},${STATUS_MAPPING.status2.code}`,
    text: '最新报名'
  },
  {
    codes: `${STATUS_MAPPING.status3.code},${STATUS_MAPPING.status4.code}`,
    text: '最新核验'
  },
  {
    codes: `${STATUS_MAPPING.status5.code},${STATUS_MAPPING.status6.code},${STATUS_MAPPING.status7.code}`,
    text: '最新摇号'
  }
]
export const HOME_ADDR_MAP = ['天府新区', '高新区', '主城区', '郊区']

export const PROJECT_BASE_INFO_KEY = '基础信息'
export const PROJECT_SEVICE_INFO_KEY = '物业信息'
export const PROJECT_SALE_INFO_KEY = '销售信息'
