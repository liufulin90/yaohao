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
   * 获取当前登录用户资料
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  userInfo (data) {
    let url = apiUrlConfig().userInfo
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  userIdinfoAdd (data) {
    let url = apiUrlConfig().userIdinfoAdd
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  userIdinfoDelete (data) {
    let url = apiUrlConfig().userIdinfoDelete
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  userIdinfoList (data) {
    let url = apiUrlConfig().userIdinfoList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  userIdinfoUpdate (data) {
    let url = apiUrlConfig().userIdinfoUpdate
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  feedbackAdd (data) {
    let url = apiUrlConfig().feedbackAdd
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
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
