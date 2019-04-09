<template>
    <div id="login">
      <div id="txtTitle"><h1 id="login_txt">Log in</h1></div>
      <input class="loginField" id="txtEmail2" type="text" name="email" placeholder="Email" /> <br>
      <input class="loginField" id="txtPassword2" type="password" name="password" placeholder="Password" /> <br>
      <b-button type="button" id="btnLogin" v-on:click="loginRequest" variant="outline-warning">Login</b-button>
      <a href="url" id="forgot_password">Forgotten password?</a>

  </div> 
</template>

<style lang="scss">
 
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
      var userEmail = document.getElementById('txtEmail').value
      var userPassword = document.getElementById('txtPassword').value
      console.log(userEmail);
      console.log(userPassword);
      // Replace with POST request and the right URL
      // Log in API
      // http://localhost:3000/users/signin     
      axios.post('/users/signin', {
      email: userEmail,
      password: userPassword
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    signoutRequest: function () {
      axios.get('/users/signout')
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      console.log('Complete')
    });
      
    }
  }
}
</script>
