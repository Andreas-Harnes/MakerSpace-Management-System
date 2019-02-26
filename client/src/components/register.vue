<template>
    <div id="reg">
      <h1>MakerSpace Management System</h1>
      <div id="inputFields">
          <input class="regFields" type="text" name="firstName" placeholder="First name" /> <br>
          <input class="regFields" type="text" name="lastName" placeholder="Last name" /> <br> 
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
</style>




<script>
  export default {
    name: "registerPage"
  }
</script>







