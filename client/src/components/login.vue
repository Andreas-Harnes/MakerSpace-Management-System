<template>
    <div id="login">
      <div id="txtTitle"><h1 id="login_txt">Log in</h1></div>
      <input class="loginField" id="txtEmail2" type="text" name="email" placeholder="Email" /> <br>
      <input class="loginField" id="txtPassword2" type="password" name="password" placeholder="Password" /> <br>
      <b-button type="button" id="btnLogin" class="test-log" v-on:click="loginRequest" variant="outline-warning">Login</b-button>
      <a href="url" id="forgot_password">Forgotten password?</a>

  </div> 
</template>

<style lang="scss">
/* --------------- login ---------------- */
#login_txt {
  font-size: 25px;
  position: relative;
  top: 1em;
  color: #2c3e50;
  right: 1.5em;
}

#login {
  position: relative;
  
}

#btnLogin {
  position: relative;
  top: 2em;
  left: 4em;
  width: 8em;
  
}

#txtEmail2 {
  position: relative;
  margin: 10px;
  right: 1em;
  top: 1em;
  width: 15em;
}

#txtPassword2 {
  position: relative;
  right: 0.6em;
  top: 0.8em;
  width: 15em;
}

#btnSignout {
  position: relative;
  top: 10em;
}

#btnReqpassword {
  position: relative;
  
}

#forgot_password {
  position: relative;
  top: 6em;
  right: 4.5em;
  top: 5em;
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
