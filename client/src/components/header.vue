<template>
  <header id="header-test" class="header">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <div>
      <img id="makerspace-logo" src="../assets/facebook-logo.png" v-bind:to="'/'" alt="MakerSpaceLogo" width="9%"  height="9%" />
    </div>
    <h2>MakerSpace Management System</h2>
    <div id="dropdownID">
      <b-dropdown id="ddown-aria" offset="-60px" text="Dropdown Button" variant="link" size="sm" ref="ddown" class="m-2" no-caret>
        <template slot="button-content">
          <i class="material-icons" id="dropdown_test">dehaze</i>
        </template>
        <div role="group" aria-labelledby="header1">
          <b-dropdown-item-button aria-describedby="header1">
            <router-link to="/">
              <a class="" href="">Home</a>
            </router-link>
          </b-dropdown-item-button>
          <b-dropdown-divider>
          </b-dropdown-divider>
          <b-button id="signIn" v-bind:to="'/login'" variant="primary" size="sm" @click="onClick">Log in</b-button>
          <b-dropdown-item-button>
            <router-link to="/register">
              <a href="#">Register now</a>
            </router-link>
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <router-link to="/">
              <a class="" href="">Forgotten password?</a>
            </router-link>
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <router-link to="/test">
              <a class="" href="">Test</a>
            </router-link>
          </b-dropdown-item-button>
        </div>
      </b-dropdown>
    </div>
    <nav class="manger-nav">
      <a href="myFavorites">My Favorites</a>
      <a href="manageItems">Manage Items</a>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'header',
  methods: {
    onClick () {
      this.$refs.ddown.hide(true)
    }
  }
}
</script>
<style>
  .header {
    /* Endre color til variabel */
    background-color: #f9a31d;
    text-align: center;
    padding: 2rem 5rem 2rem 5rem;
    position: relative;
  }

  #makerspace-logo {
    float: left;
    padding: 0 45px 45px 0;
  }

  #dropdownID {
    float: right;
    position: relative;
    bottom: 40px;
  }

  #signIn {
    float: right;
    position: relative;
    right: 4.5em;
  }

  header h2 {
    width: 50%;
    position: relative;
    right: 4px;
  }
  /* ----------------- Dropdown ------------------ */

#dropdown_test {
  position: relative;
  color:#2c3e50;
}
</style>
