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
export default {
  components: {
    Navbar
  }
}
</script>  
