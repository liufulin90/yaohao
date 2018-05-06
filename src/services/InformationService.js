/*
 * 楼盘信息service
 */
import Ajax from '../utils/ajax'
import {apiUrlConfig} from '../config/ApiConfig'

class InformationService {
  /**
   * 资讯列表
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  infoList (data) {
    let url = apiUrlConfig().infoList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  /**
   * 资讯信息
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  infoDetail (data) {
    let url = apiUrlConfig().infoDetail
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
}

// 实例化后再导出
export default new InformationService()
