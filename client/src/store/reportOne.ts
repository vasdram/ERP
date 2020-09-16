import axios from 'axios'

export default {
    state: {
        reportOne: {},
      },
      mutations: {
        setReportOne(state: any, data: any) {
          state.reportOne = data
        },
      },
      actions: {},
      getters: {
          reportOne(state: any){
              return state.reportOne
          }
      }
}