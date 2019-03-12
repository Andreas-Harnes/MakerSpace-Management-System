<template>
    <div id="login">
      <div id="txtTitle"><h1>MakerSpace Management System</h1></div>
      <input class="loginField" type="text" name="email" placeholder="Email" /> <br>
      <input class="loginField" type="password" name="password" placeholder="Password" /> <br>
      <button type="button" id="btnLogin" v-on:click="loginRequest">Login</button>
  </div>
</template>

<style lang="scss">
  h1 {
    font-size: 50px;
  }

  #txtTitle {
    height: 5%;
    margin-bottom: 8;
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
      // Replace with POST request and the right URL
      // Log in API
      // http://localhost:3000/users/signin     
      // axios.post('/user', {
      // firstName: 'Fred',
      // lastName: 'Flintstone'
      // })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });




      axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(response => {
         this.loginRequest = response.data;
         console.log(this.loginRequest)
    })
    .catch(error => {
      console.log(error)
    })
    }
  }
}
</script>
