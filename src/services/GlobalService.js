/*
 * 应用全局 service
 */
import Ajax from '../utils/ajax'
import {apiUrlConfig} from '../config/ApiConfig'

class GlobalService {
  /**
   * @returns {Promise.<TResult>|*}
   */
  getContentCategorys () {
    let url = apiUrlConfig().login
    return Ajax({url: url}).then(response => response)
  }
}

// 实例化后再导出
export default new GlobalService()
