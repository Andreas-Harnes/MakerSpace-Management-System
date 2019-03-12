<template>
    <div id="reg">
      <h1>MakerSpace Management System</h1>
      <div id="inputFields">
          <input class="regFields" type="text" name="firstName" placeholder="First name" /> <br>
          <input class="regFields" type="text" name="lastName" placeholder="Last name" /> <br> 
          <input class="regFields" type="text" name="email" placeholder="Email" /> <br> 
          <input class="regFields" type="text" name="telephone" placeholder="Telephone number" /> <br> 
          <input class="regFields" type="text" name="password" placeholder="Password" /> <br> 
          <input class="regFields" type="text" name="password" placeholder="Repeat password" /> <br> 
          <button type="button">Register</button>
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

    h1 {
    font-size: 50px;
  }

  #txtTitle {
    height: 5%;
    margin-bottom: 8;
  }

  .regFields {
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
  export default {
    name: "registerPage"
  }
</script>







