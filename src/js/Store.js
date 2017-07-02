Vue.use(Vuex)

const state = {
  ui: {
    desc: false,
    info: false,
    list: false,
    detail: false,
  },
}

const getters = {

}

const mutations = {
  setShownDesc(state, isShown) {
    state.ui.desc = isShown === true
  },
  setShownInfo(state, isShown) {
    state.ui.info = isShown === true
  },
  setShownList(state, isShown) {
    state.ui.desc = false
    state.ui.list = isShown === true
  },
  setShownDetail(state, isShown) {
    state.ui.desc = false
    state.ui.detail = isShown === true
  },
}

const actions = {

}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
