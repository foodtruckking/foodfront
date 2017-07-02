Vue.use(Vuex)

const state = {
  ui: {
    sideBar: false,
    description: false,
  },
}

const getters = {

}

const mutations = {
  setShownSideBar(state, isShown) {
    state.ui.sideBar = isShown === true
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
