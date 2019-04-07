<template>
    <div>
        <h2 id="loginStatus">something</h2>
    </div>
</template>

<style lang="scss">

</style>

<script>
import {testLoginFunction} from '@/functions'

  export default {
    name: "test",
    mounted: function () {
        console.log(document.cookie)
        console.log('mor di')
    }
  }
</script>