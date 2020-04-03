/* store module */

const config = {
  namespaced: true,
  state: {
    source: { // 取消请求变量
      token: null,
      cancel: null
    },
    httpCancelTokenList: [], // 储存cancel token
    updateRoutesState: false, // 刷新路由(VPC网络)
    messageInstances: [], // 全局消息列表
    systemTopHCSMode: sessionStorage.getItem('topHCSMode') || 2, // 系统模式 : 2:超融合 1: 分布式存储
    maxReplica: 1, // 对整个集群当前最大副本数
    history_uuid: sessionStorage.getItem('history_uuid') || '',
    multipeSelectScollTop: 0, // 多重下拉选择时，弹框滚动条的滚高
    isStartNetworkVirtual: false // 是否拉起网络虚拟机
  }
}
export default {
  namespaced: true, // namespaced must be true in module app.
  state: {
    name: process.env.VUE_APP_NAME,
  },
  mutations: {},
  actions: {},
  modules: {
    config
  }
};
