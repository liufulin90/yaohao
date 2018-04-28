/*
 * 插件的集合
 */
import createLogger from 'vuex/dist/logger'

/**
 * Vuex 自带一个日志插件用于一般的调试
 * 日志插件还可以直接通过 <script> 标签引入，它会提供全局方法 createVuexLogger。
 * 要注意，logger 插件会生成状态快照，所以仅在开发环境使用。
 * @type {Plugin<S>}
 */
const logger = createLogger({
  collapsed: false, // 自动展开记录的 mutation
  transformer (state) {
    // 在开始记录之前转换状态
    // 例如，只返回指定的子树
    return state.subTree
  },
  mutationTransformer (mutation) {
    // mutation 按照 { type, payload } 格式记录
    // 我们可以按任意方式格式化
    return mutation.type
  }
})

/**
 * 生成 State 快照
 * 有时候插件需要获得状态的『快照』，比较改变的前后状态。想要实现这项功能，你需要对状态对象进行深拷贝：
 */
const myPluginWithSnapshot = store => {
  // let preState = _.cloneDeep(store.state)
  store.subscribe((mutation, state) => {
    // let nextState = _.cloneDeep(state)
    // 比较 prevState 和 nextState...

    // 保存状态，用于下一次 mutation
    // preState = nextState
  })
}

// Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：
const myPlugin = store => {
  // 当store初始化后调用
  store.subscribe((mutation, state) => {
    // 每次mutation之后调用
    // mutation的格式为{type, payload}
  })
}

export {
  myPluginWithSnapshot,
  myPlugin,
  logger
}
