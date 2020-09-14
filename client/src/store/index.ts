import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reports: [],
    userInfo: {
      email: "",
      fname: "",
      lname: "",
      company: "",
      balance: "",
    }
  },
  mutations: {
    setReports(state, data) {
      state.reports = data
    },
    setUser(state, data) {
      state.userInfo = data
    }
  },
  actions: {
  },
  modules: {
  }
})
