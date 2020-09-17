import axios from 'axios'

export default {
    state: {
        data: {},
      },
      mutations: {
        setReports(state: any, data: any) {
          state.data = data
        },
        removeReport(state: any, id: string) {
          state.data = state.data.filter((item: any) => item["_id"] !== id)
          console.log(state.data)
        },
      },
      actions: {
          async getReports(ctx: any) {
            const responce = await axios.get('/api/table/', {headers: 
                // @ts-ignore
                {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`
              }})

              ctx.commit("setReports", responce.data)
          },

          delReport(ctx:any, id:string) {
            ctx.commit("removeReport", id)
          }

          
      },
      getters: {
          allReports(state: any){
              return state.data
          }
      }
}