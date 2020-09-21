import axios from 'axios'

export default {
    state: {
        cash: []
      },
      mutations: {
       setCash(state: any, data: any) {
        state.cash = data
      },
      },
      actions: {
          async geCash(ctx: any) {
            const responce = await axios.get('/api/cash/getCash', {headers: 
                // @ts-ignore
                {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`}
                })
               
              ctx.commit("setCash", responce.data[0].reports)
          },

          async addCash(ctx: any, data: any) {
            const responce = await axios.post('/api/cash/addCashReport', data, {headers: 
                // @ts-ignore
                {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`}
                })
                
              ctx.commit("setCash", responce.data.reports)
          }

          
      },
      getters: {
        cash(state: any) {
            return state.cash
          }
      }
}