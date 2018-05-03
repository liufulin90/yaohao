/*
 *
 * 全局store
 */
import {TOAST_SHOW_TIME} from '../config/'
export const CHANGE_PENDING = 'CHANGE_PENDING' // 全局改变pending的状态
export const CHANGE_TOAST = 'CHANGE_TOAST' // 全局改变TAOST的状态
let toastTimer = null
export default {
  state: {
    pending: false,
    loadingText: '',
    toast: false,
    toastText: '',
    uploadtoken: null
  },
  mutations: {
    /**
     * 改变pending状态的mutation
     * @param commit
     * @param value ture：loading， false：close
     */
    [CHANGE_PENDING] (state, value) {
      Object.assign(state, {pending: value})
    },
    /**
     * toast
     * @param state
     * @param payload
     */
    [CHANGE_TOAST] (state, payload) {
      clearTimeout(toastTimer)
      if (payload === false) {
        Object.assign(state, {toast: false})
      } else {
        Object.assign(state, {toastText: payload, toast: true})
        toastTimer = setTimeout(function () {
          Object.assign(state, {toast: false})
        }, TOAST_SHOW_TIME)
      }
    }
  },
  actions: {
    /**
     * 改变pending状态的action
     * @param commit
     * @param value ture：loading， false：close
     */
    [CHANGE_PENDING] ({commit}, value) {
      commit(CHANGE_PENDING, value)
    },
    [CHANGE_TOAST] ({commit}, payload) {
      commit(CHANGE_TOAST, payload)
    }
  }
}
