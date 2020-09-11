<template>
<div> 
  <h2>Авторизация</h2>
  <form v-on:submit.prevent>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" v-on:click="login" class="btn btn-primary mr-2">Войти</button>
    <button type="submit" v-on:click="signIn" class="btn btn-primary ">Регистрация</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
  export default{
    data() {
      return {
        email: "",
        password: ""
      }
      
    },
    methods: {
      async login() {
        const {data} = await axios.post('/api/auth/login', {email: this.email, password: this.password})
        console.log("----user", data)
        localStorage.setItem("userData", JSON.stringify({
          userId: data.userId, token: data.token
        }))
        this.$router.push("/")
      },
      async signIn() {
        const data = await axios.post('/api/auth/register', {email: this.email, password: this.password})
        console.log("data", data)
      }
    }
  }
</script>  