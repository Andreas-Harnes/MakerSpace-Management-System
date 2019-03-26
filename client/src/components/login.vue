<template>
    <div id="login">
      <div id="txtTitle"><h1>MakerSpace Management System</h1></div>
      <input class="loginField" id="txtEmail" type="text" name="email" placeholder="Email" /> <br>
      <input class="loginField" id="txtPassword" type="password" name="password" placeholder="Password" /> <br>
      <button type="button" id="btnLogin" v-on:click="loginRequest">Login</button>
      <button type="button" id="btnSignout" v-on:click="signoutRequest">Sign out</button>
      <button type="button" id="btnReqpassword">Forgotten password?</button>


  </div>
</template>

<style lang="scss">
  #txtTitle h1 {
    font-size: 50px;
    height: 5%;
    margin-bottom: 75px;
  }

  .loginField {
    margin-right: 1%;
    width: 25%;
    margin: auto;
    margin-bottom: 1%;
    border: none;
    border-bottom: solid;
    border-width: 1px;
    border-color: grey;
    border-radius: 15px;
    text-align: center; 
  }

  #btnLogin {
    width: 25%;
    height: 30px;
    margin-bottom: 5%;
    position: bottom;
    border-radius: 15px;
  }

  #login {
    box-sizing: border-box;
    width: 30%;
    border-style: dotted;
    background-color: white;
    
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
