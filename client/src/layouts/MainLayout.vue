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
import {mapActions} from 'vuex'
export default {
  methods: mapActions(["getReports", "getUser", "geCash"]),
  mounted() {
    this.getUser();    
    this.getReports();    
    this.geCash();    
  },
  components: {
    Navbar
  }
}
</script>  
