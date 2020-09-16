import axios from 'axios'

export default {
    state: {
        userInfo: {
            email: "",
            fname: "",
            lname: "",
            company: "",
            balance: "",
        }
      },
      mutations: {
        setUser(state: any, data: any) {
          state.userInfo = data
        },
      },
      actions: {
          async getUser(ctx: any) {
            const user = await axios.get('/api/user/getUserInfo', {headers: 
                // @ts-ignore
                {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`}
                })
                
              ctx.commit("setUser", user.data.user)
          }

          
      },
      getters: {
          userInfo(state: any){
              return state.userInfo
          }
      }
}