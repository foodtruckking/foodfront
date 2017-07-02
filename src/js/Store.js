Vue.use(Vuex)

const state = {
  ui: {
    description: false,
    sideBar: false,
    detailView: false,
  },
}

const getters = {

}

const mutations = {
  setShownSideBar(state, isShown) {
    state.ui.description = false
    state.ui.sideBar = isShown === true
  },
  setShownDetailView(state, isShown) {
    state.ui.description = false
    state.ui.detailView = isShown === true
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
