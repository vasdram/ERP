import axios from 'axios'

export default {
    state: {
        data: {},
      },
      mutations: {
        setReports(state: any, data: any) {
          state.data = data
        },
      },
      actions: {
          async getReports(ctx: any) {
            const responce = await axios.get('/api/table/', {headers: 
                // @ts-ignore
                {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`
              }})

              ctx.commit("setReports", responce.data)
          }

          
      },
      getters: {
          allReports(state: any){
              return state.data
          }
      }
}