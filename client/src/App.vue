<template>
  <div id="app">
    <header id="header">temp header</header>
    <router-view id="routeView"></router-view>
  </div>
</template>

<style lang="scss">
  $primary-color: #f9a31d;

  html, body {
    // background-color: $primary-color;
  }

  #header {
    position: fixed;
    width:100%;
    top:0;
    left: 0%;
    z-index: 999;
    height: 15%;
    background: white;
    margin-bottom: 60%;
  }

  #app {
    position: absolute;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 15%;
    height: 75%;
  }
</style>