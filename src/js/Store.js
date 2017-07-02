Vue.use(Vuex)

const state = {
  ui: {
    desc: false,
    list: false,
    detail: false,
  },
}

const getters = {

}

const mutations = {
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
