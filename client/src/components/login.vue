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
      var userEmail = document.getElementById('txtEmail2').value
      var userPassword = document.getElementById('txtPassword2').value
 
      if(userEmail == "" || userPassword == ""){
        if(userEmail == "" && userPassword == ""){
          alert("Du må fylle inn begge felter");
        } else if(userEmail == ""){
          alert("Du må fylle inn email");
        } else {
          alert("Du må fylle inn passord");
        }
      }
      axios.post('/users/signin', {
      email: userEmail,
      password: userPassword
      })
      .then(function (response) {
        if(response.status == "200"){
          alert("Logget inn");
        }
        // console.log(response);
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
