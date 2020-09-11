<template>
  <div id="app" class="app">
    <component :is="layout">
      <router-view/>
    </component>
    
  </div>
</template>

<style lang="scss">
  @import url("https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css");
  @import url("./assets/styles/index.scss");

  .app{
    height: 100%;
  }
</style>

<script>
import AuthLayout from "./layouts/AuthLayout"
import MainLayout from "./layouts/MainLayout"
export default {
  computed: {
    layout () {
      console.log(this.$route.meta)
      return `${this.$route.meta.layout}-layout`
    }
  },
  components: {
    MainLayout, AuthLayout
  }
}
</script>
