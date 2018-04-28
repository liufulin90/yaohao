/*
 *
 * 楼盘相关store
 */
import InformationService from '../../services/InformationService'
export const INFO_LIST = 'INFO_LIST' // 楼盘列表
export const INFO_DETAIL = 'INFO_DETAIL' // 楼盘详情

export default {
  state: {},
  mutations: {
    /**
     * 获取列表 mutation
     * @param state
     * @param payload
     */
    [INFO_LIST] (state, payload) {
      Object.assign(state, payload)
    },
    [INFO_DETAIL] (state, payload) {
      Object.assign(state, payload)
    }
  },
  actions: {
    /**
     * 获取列表 action
     * @param commit
     * @param payload
     */
    [INFO_LIST] ({commit}, payload) {
      return InformationService.infoList(payload).then((res) => {
        commit(INFO_LIST, payload)
        return res
      })
    },
    [INFO_DETAIL] ({commit}, payload) {
      return InformationService.infoDetail(payload).then((res) => {
        commit(INFO_DETAIL, payload)
        return res
      })
    }
  }
}
