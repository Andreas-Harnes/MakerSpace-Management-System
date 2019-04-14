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
          <!-- <b-button type="button" v-on:click="createUserDebug" variant="outline-warning" id="btnReg">debug</b-button> -->

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



/* -------------- registrer ----------------- */

#reg_title {
  font-size: 25px;
  position: relative;
  top: 1em;
  right: 1em;
  color: #2c3e50;
}

#txtFirstName {
  position: relative;
  top: 2em;
  width: 15em;
}

#txtLastName {
  position: relative;
  top: 1.3em;
  width: 15em;
}

#txtEmail {
  position: relative;
  top: 1em;
  left: 0em;
  width: 15em;
}

#numPhone {
  position: relative;
  top: 0.3em;
  width: 15em;
}

#txtPassword {
  position: relative;
  left: 0em;
  width: 15em;
  top: 0em;
}

#txtPasswordRepeat {
  position: relative;
  bottom: 0.7em;
  width: 15em;
}

#btnReg {
  position: relative;
  bottom: 1em;
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
      var userPasswordRepeat = document.getElementById('txtPasswordRepeat').value
      var userFirstName = document.getElementById('txtFirstName').value
      var userLastName = document.getElementById('txtLastName').value
      var userPhone = document.getElementById('numPhone').value
      console.log(userEmail);
      console.log(userPassword);
      console.log(userFirstName)
      console.log(userLastName)
      console.log(userPhone)
    
    if(userEmail == "" || userPassword == "" || userFirstName == "" || userLastName == "" || userPhone == "") {
      alert("Du må fylle inn alle feltene");
    } else {
        if(userPassword === userPasswordRepeat) {
          axios.post('/users/signup', {
          email: userEmail,
          password: userPassword,
          firstName: userFirstName,
          lastName: userLastName,
          phone: userPhone
          })
          .then(function (response) {
            console.log(response);
            alert("Bruker er registrert");
          })
          .catch(function (error) {
            console.log(error.status);
          });
        } else {
          alert("Passordene er ikke like");
        }
    } 
  },
    // createUserDebug: function () {
    //   var userEmail = "andreas@mail.com";
    //   var userPassword = "Andreas10!";
    //   var userFirstName = "Andreas";
    //   var userLastName = "Harnes";
    //   var userPhone = "12312312";

    //   axios.post('/users/signup', {
    //   email: userEmail,
    //   password: userPassword,
    //   firstName: userFirstName,
    //   lastName: userLastName,
    //   phone: userPhone
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //     alert(response.status);
    //   })
    //   .catch(function (error) {
    //     alert(error.status);
    //   });
    // }
  }
  }
</script>







