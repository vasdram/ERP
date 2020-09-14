<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to="/" class="nav-item" active-class="active">
      <a class="navbar-brand" href="#">ERP</a>
    </router-link>

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <router-link to="reports" tag="li" class="nav-item" active-class="active">
          <a class="nav-link" href="#">Отчеты</a>
        </router-link>
        <li class="nav-item">
          <a class="nav-link" v-on:click.prevent="logout" href="#">Выйти</a>
        </li>
      </ul>
      <div class="navbar-info">
       <div class="navbar-info-item mr-3">Баланс: <span>{{userInfo.balance}}</span></div>
        <div class="navbar-info-item mr-3">Компания: <span >{{userInfo.company}}</span></div>
        <div class="navbar-info-item mr-3">Пользователь: <span >{{userInfo.fname}} {{userInfo.lname}}</span></div>
        <div class="navbar-info-item mr-3">Email: <span >{{userInfo.email}} </span></div>
      </div>
    </div>
  </header>
</template>
<style >
.navbar-info{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.navbar-info-item{
  font-size: 12px;
}

.navbar-info-item span{
  display: block;
  font-size: 14px;
  font-weight: 700;
}
</style>
<script>
export default {
  computed: {
        userInfo() {
            return this.$store.state.userInfo
        } 
    },
  methods: {
    logout() {
      localStorage.removeItem("userData");
      this.$router.push("/auths");
    },
  },
};
</script>  