/*
 *
 * 用户相关信息service
 */
import Ajax from '../utils/ajax'
import {apiUrlConfig} from '../config/ApiConfig'

class UserService {
  /**
   * 登录
   * @param user
   * @returns {Promise.<TResult>|*}
   */
  login (user) {
    let url = apiUrlConfig().login
    return Ajax({url: url, data: user}).then(response => response)
  }

  /**
   * 退出
   * @returns {*|Promise.<TResult>}
   */
  logout () {
    let url = apiUrlConfig().logout
    return Ajax({url: url}).then(response => response)
  }

}

// 实例化后再导出
export default new UserService()
