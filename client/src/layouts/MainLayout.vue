<template>
  <div class="layout-main">
    <Navbar />  
    <router-view />
  </div>
</template>    

<style scoped>
  .layout-main{
    min-height: 100%;
    background: linear-gradient(180deg, rgb(0, 90, 160), rgb(147, 162, 217));
  }
</style>

<script>
import Navbar from "../components/Navbar"
import axios from "axios"
export default {
  async mounted() {
    const res = await axios.post('/api/user/getUserInfo', {headers: 
        {Authorization: `Bearer ${JSON.parse(localStorage.getItem("userData")).token}`
      }})
    this.$store.commit('setUser', res.data.user)
  },
  components: {
    Navbar
  }
}
</script>  
