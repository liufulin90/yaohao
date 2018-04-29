/*
 * 楼盘信息service
 */
import Ajax from '../utils/ajax'
import {apiUrlConfig} from '../config/ApiConfig'

class ProjectService {
  /**
   * banner列表
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  bannerList (data) {
    let url = apiUrlConfig().bannerList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  /**
   * 楼盘列表
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  projectList (data) {
    let url = apiUrlConfig().projectList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  /**
   * 楼盘基本信息
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  projectInfo (data) {
    let url = apiUrlConfig().projectInfo
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  /**
   * 楼盘相册
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  projectPhotoList (data) {
    let url = apiUrlConfig().projectPhotoList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  /**
   * 查询楼盘摇号报名列表（复核名单）
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  applyList (data) {
    let url = apiUrlConfig().applyList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
  /**
   * 查询楼盘摇号结果（含搜索）
   * @param data
   * @returns {Promise.<TResult>|*}
   */
  resultList (data) {
    let url = apiUrlConfig().resultList
    return Ajax({url: url, data: data, method: 'GET'}).then(response => response)
  }
}

// 实例化后再导出
export default new ProjectService()
