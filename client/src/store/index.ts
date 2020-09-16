import Vue from 'vue'
import Vuex from 'vuex'
import reports from './reports'
import userInfo from './userInfo'
import reportOne from './reportOne'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reports,
    userInfo,
    reportOne
  }
})


// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     data: {},
//     userInfo: {
//       email: "",
//       fname: "",
//       lname: "",
//       company: "",
//       balance: "",
//     }
//   },
//   mutations: {
//     setReports(state, data) {
//       state.data = data
//     },
//     setUser(state, data) {
//       state.userInfo = data
//     }
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
