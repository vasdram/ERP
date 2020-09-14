<template>
<div>
<div v-if="!isSignIn"> 
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
    <a href="#" v-on:click.prevent="checkisSignInHandler">Зарегистрироваться</a>
  </form>
</div>
<div v-if="isSignIn"> 
  <h2>Регистрация</h2>
  <form v-on:submit.prevent>
    <div class="form-group">
      <label for="exampleInputEmail1">Имя</label>
      <input type="text" v-model="fname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Фамилия</label>
      <input type="text" v-model="lname" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Компания</label>
      <input type="text" v-model="company" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1">Email</label>
      <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
    </div>
    <button type="submit" v-on:click="signIn" class="btn btn-primary mr-2">Регистрация</button>
    <a href="#" v-on:click.prevent="checkisSignInHandler">Войти</a>
  </form>
</div>
</div>
</template>

<script>
import axios from 'axios'
  export default{
    data() {
      return {
        isSignIn: false,
        email: "",
        fname: "",
        lname: "",
        company: "",
        password: ""
      }
      
    },
    methods: {
      checkisSignInHandler() {
          this.isSignIn = !this.isSignIn 
      },
      async login() {
        const {data} = await axios.post('/api/auth/login', {email: this.email, password: this.password})
        localStorage.setItem("userData", JSON.stringify({
          userId: data.userId, token: data.token
        }))

        const res = await axios.post('/api/user/getUserInfo', {email: this.email})
        this.$store.commit('setUser', res.data.user)
        this.$router.push("/")
      },
      async signIn() {
        const responceReg = await axios.post('/api/auth/register', {
          email: this.email, 
          lname: this.lname, 
          fname: this.fname, 
          company: this.company, 
          password: this.password})

          this.isSignIn = false
      }
    }
  }
</script>  