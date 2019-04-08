<template>
  <header class="header">
    <div>
      <img id="makerspace-logo" src="../assets/facebook-logo.png" v-bind:to="'/'" alt="MakerSpaceLogo" width="9%"  height="9%" />
    </div>
    <h2>MakerSpace Management System</h2>
    <div id="dropdownID">
      <b-dropdown id="ddown-aria" offset="-60px" text="Dropdown Button" variant="link" size="sm" ref="ddown" class="m-2" no-caret>
        <template slot="button-content">
          <span class="material-icons">Face</span>
        </template>
        <div role="group" aria-labelledby="header1">
          <b-dropdown-item-button aria-describedby="header1">
            <router-link to="/">
              <a class="" href="">Hjem</a>
            </router-link>
          </b-dropdown-item-button>
          <b-dropdown-divider>
          </b-dropdown-divider>
          <b-button id="signIn" v-bind:to="'/login'" variant="primary" size="sm" @click="onClick">Login</b-button>
          <b-dropdown-item-button>
            <router-link to="/register">
              <a href="#">Registrer deg her!</a>
            </router-link>
          </b-dropdown-item-button>
          <b-dropdown-item-button>
            <router-link to="/">
              <a class="" href="">Glemt passord?</a>
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
<style scoped>
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
    padding: bottom 5px;
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
</style>
