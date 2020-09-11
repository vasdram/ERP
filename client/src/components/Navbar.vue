<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link
            to="/"
            class="nav-item"
            active-class="active"
          >
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
        <ul class="navbar-nav">
          <router-link
            to="reports"
            tag="li"
            class="nav-item"
            active-class="active"
          >
            <a class="nav-link" href="#">
              Отчеты
            </a>
          </router-link>
          
            
          
          <li class="nav-item" >
            <a class="nav-link" v-on:click.prevent="logout" href="#">Выйти</a>
          </li>
        </ul>
      </div>
    </header>
</template>

<script>
  export default {
    methods: {
      logout() {
        localStorage.removeItem("userData");
        this.$router.push("/auths")
      }
    }
  }
</script>  