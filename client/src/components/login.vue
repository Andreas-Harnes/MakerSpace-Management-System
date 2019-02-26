<template>
    <div id="login">
      <h1>MakerSpace Management System</h1>
      <input class="loginField" type="text" name="email" placeholder="Email" />
      <input class="loginField" type="password" name="password" placeholder="Password" />
      <button type="button" v-on:click="loginRequest">Login</button>
  </div>
</template>

<style lang="scss">
  .loginField {
    margin-right: 1%
  }
</style>

<script>
import axios from 'axios';

export default {
  name: 'login',
  data() {
    return {
      loginResult: []
    }
  },
  methods: {
    loginRequest: function () {
      // Replace with POST request and the right URL
      axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(response => {
         this.loginRequest = response.data;
         console.log(this.loginRequest)
    })
    .catch(error => {
      console.log(error);
    })
    }
  }
}
</script>
