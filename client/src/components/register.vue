<template>
    <div id="reg">
      <h1 id="reg_title">Registrer now!</h1>
      <div id="inputFields">
          <input class="regFields" id="txtFirstName" type="text" name="firstName" placeholder="First name" /> <br>
          <input class="regFields" id="txtLastName" type="text" name="lastName" placeholder="Last name" /> <br> 
          <input class="regFields" id="txtEmail" type="email" name="email" placeholder="Email" /> <br> 
          <input class="regFields" id="numPhone" type="number" name="telephone" placeholder="Telephone number" /> <br> 
          <input class="regFields" id="txtPassword" type="password" name="password" placeholder="Password" /> <br> 
          <input class="regFields" id="txtPasswordRepeat" type="password" name="password" placeholder="Repeat password" /> <br> 
          <b-button type="button" v-on:click="regRequest" variant="outline-warning" id="btnReg">Register</b-button>
      </div>
  </div>
</template>

<style lang="scss">
  #app {
      width: 100%   
  }
  .regFields {
      margin-bottom: 1%
  }
</style>




<script>
import axios from 'axios';
  export default {
    name: "registerPage",
    data() {
    return {
      regResult: []
    }
  },
  methods: {
    regRequest: function () {
      var userEmail = document.getElementById('txtEmail').value
      var userPassword = document.getElementById('txtPassword').value
      var userFirstName = document.getElementById('txtFirstName').value
      var userLastName = document.getElementById('txtLastName').value
      var userPhone = document.getElementById('numPhone').value
      console.log(userEmail);
      console.log(userPassword);
      console.log(userFirstName)
      console.log(userLastName)
      console.log(userPhone)
    
      axios.post('/users/signup', {
      email: userEmail,
      password: userPassword,
      firstName: userFirstName,
      lastName: userLastName,
      phone: userPhone
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
  }
</script>







