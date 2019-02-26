<template>
    <div id="nav">
        <h1>Hello there</h1>
        <router-link class="rLinks" v-bind:to="'/login'">Login</router-link>
        <router-link class="rLinks" v-bind:to="'/register'">Register</router-link>
  </div>
</template>

<style lang="scss">
    .loginField {
    margin-right: 1%
    }

    .rLinks{
        margin-right: 10px
    }

  
</style>

<script>
  export default {
    name: "nav"
  }
</script>