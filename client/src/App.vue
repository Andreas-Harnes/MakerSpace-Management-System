<template>
  <div id="app">
    <header id="header">temp header</header>
    <router-view id="routeView"></router-view>
  </div>
</template>

<style lang="scss">
  $primary-color: #FAA418;

  html, body {
    background-color: orange;
  }

  #header {
    position: fixed;
    width:100%;
    top:0;
    height: 15%;
    background: white;
    left: 0%;
    margin-bottom: 60%;
  }

  #routeView {
    
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