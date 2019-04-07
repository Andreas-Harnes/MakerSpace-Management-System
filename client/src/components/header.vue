<template>
    <header class="header">
    <!-- <h2>MakerSpace: sett logo her istedenfor?</h2> -->
    <div>
        <img id="makerspace-logo" src="../assets/facebook-logo.png" v-bind:to="'/'" alt="MakerSpaceLogo" width="9%"  height="9%" />
    </div>
    <h2>MakerSpace Management System</h2>
    <div id="dropdownID">
        <b-dropdown id="ddown-aria" text="Dropdown Button" variant="link" size="sm" ref="ddown" class="m-2" no-caret>
            <template slot="button-content">&#x1f50d;<span class="sr-only">ByttBilde</span></template>
            <div role="group" aria-labelledby="header1">
            <b-dropdown-item-button aria-describedby="header1" href="#">Hjem</b-dropdown-item-button>
            <b-dropdown-item-button aria-describedby="header1" href="#">Ting2</b-dropdown-item-button>
            <b-dropdown-divider>
            </b-dropdown-divider>
            <b-button id="signIn" variant="primary" size="sm" @click="onClick">Sign In</b-button>
            <b-dropdown-divider>
            </b-dropdown-divider>
            <b-dropdown-item-button>Registrer deg her</b-dropdown-item-button>
            <b-dropdown-item-button>Glemt passord?</b-dropdown-item-button>
            </div>
        </b-dropdown>
    </div>    

    <nav class="manger-nav">
        <a href="myFavorites">My Favorites</a>
        <a href="mangaerItems">Manage Items</a>
    </nav>

    </header>
</template>

<script>
export default {
    
    name: "header",
    methods: {
        onClick() {
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
        float: right
        
    }

    header h2 {
        width: 50%    
    }

</style>
