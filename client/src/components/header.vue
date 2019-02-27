<template>
<header class="header">
    <h1>MakerSpace Inventory </h1>
    <nav class="header_nav">
        <ul class="header_navbar">
            <li class="header_item">
                <a href="#" class="header_link">
                    <transition name="slide-fade">
                        <button class="header--btn" 
                        v-if="show" key="on" @click="show = false">
                        <svg viewbox="0 0 24 24" class="header--icon">
                    
                    <title>Close</title>
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19
                    17.59 13.41 12z" />
                        </svg>
                        </button>
                        <button class="header--btn" v-else key="off"
                        @click="show = true">
                        <svg viewbox="0 0 24 24" class="header--icon">
                            <title>NavMenu</title>
                            <path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6
                             4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/>
                        </svg>
                        </button>
                    </transition>
                </a>
                <transition name="dropdown">
                    <div class="header_dropdown-menu" v-bind:class="{ active: show }" v-if="show">
                        <ul class="header_dropdown-menu-nav">
                            <li class="header_dropdown-menu-item">
                                <a href="#" class="header_dropdown-menu-link" title="account">
                                    <div class="header_dropdown-menu-svg">
                                        <svg viewbox="0 0 496 512" class="header--icon">
                                            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm128 421.6c-35.9 26.5-80.1 42.4-128 42.4s-92.1-15.9-128-42.4V416c0-35.3 28.7-64 64-64 11.1 0 27.5 11.4 64 11.4 36.6 0 52.8-11.4 64-11.4 35.3 0 64 28.7 64 64v13.6zm30.6-27.5c-6.8-46.4-46.3-82.1-94.6-82.1-20.5 0-30.4 11.4-64 11.4S204.6 320 184 320c-48.3 0-87.8 35.7-94.6 82.1C53.9 363.6 32 312.4 32 256c0-119.1 96.9-216 216-216s216 96.9 216 216c0 56.4-21.9 107.6-57.4 146.1zM248 120c-48.6 0-88 39.4-
                                            88 88s39.4 88 88 88 88-39.4 88-88-39.4-88-88-88zm0 144c-
                                            30.9 0-56-25.1-56-56s25.1-56 56-56 56 25.1 56 56-25.1 56-56 56z" />

                                        </svg>
                                    </div>
                                    <div class="header_dropdown-menu-text">
                                        account
                                    </div>
                                </a>
                            </li>
                            <li class="header_dropdown-menu-item">
                                <a href="#" class="header_dropdown-menu-link" title="personal info">
                                    <div class="header_dropdown-menu-svg">
                                        <svg viewbox="0 0 576 512" class="header--icon">
                                            <path d="M512 32H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm32 384c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V96c0-17.6 14.4-32 32-32h448c17.6 0 32 14.4 32 32v320zm-72-128H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0-64H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM208 288c44.2 0 80-35.8 80-80s-35.8-80-80-80-80 35.8-80 80 35.8 80 80 80zm0-128c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm46.8 144c-19.5 0-24.4 7-46.8 7s-27.3-7-46.8-7c-21.2 0-41.8 9.4-53.8 27.4C100.2 342.1 96 355 96 368.9V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-23.1c0-7 2.1-13.8 6-19.6 5.6-8.3 15.8-13.2 27.3-13.2 12.4 0 20.8 7 46.8 7 25.9 0 34.3-7 46.8-7 11.5 0 21.7 5 27.3 13.2 3.9 5.8 6 12.6 6 19.6V392c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-
                                            8v-23.1c0-13.9-4.2-26.8-11.4-37.5-12.3-18-32.9-27.4-54-27.4z"/>
                                            </svg>
                                            </div>
                                            <div class="header_dropdown-menu-text">
                                                Personal info
                                            </div>
                                </a>
                            </li>
                             </ul>
                        </div>
          </transition>
        </li>
      </ul>
    </nav>
  </header>

                            
                                    
</template>

<script>
export default {
    name: "header",
    data: {
        show: false
    }
}
</script>

<style lang="scss">

ul {
    margin: 0;
    padding: 0;
}

h1 { margin: 0 }
li { list-style: none; }
a { text-decoration: none; }

hr {
    border: 0;
    height: 0;
    margin: 2rem 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
}

.header {
    background-color: darkorange;
    text-align: center;
    padding: 2rem 5rem 2rem 5rem;
    &__nav {
        position: relative;
    }
    &__navbar {
        display: flex;
        align-items: center;
        flex-direction: row;
        justify-content: flex-end;
    }
    &__item {
        padding: 1rem;
        position: relative;
    }
    &__link {
        .header--icon {
            color: gray;
        }
        .header--btn {
            top: 0;
            right: 0;
            position: absolute;
            &:focus {
                outline: 0;
            }
    }
}
&--icon {
    fill: currentcolor;
    width: 1.65rem;
    height: 1.65rem;
    display: inline-flex;
}
&--btn {
    cursor:pointer;
    padding: 0;
    display: inline-block;
    border: 1px solid transparent;
    background-color: tranparent;
    appearance: none;
    user-select: none;
}
&__dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    height: 20rem;
    overflow-y:auto;
    padding: 2rem 2rem 2rem 0;
    margin-top: 1rem;
    border-radius: 8px;
    background-color: white;
    border: 1px solid #dadce0;
    background-clip: padding-box;
}
&__dropdown-menu-link {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    line-height: 0;
    color: orangered;
    padding: 0.6rem 1.5rem 0.6rem 1.5rem;
    margin-bottom: 0.4rem;
    border-radius: 0 50px 50px 0;
    &:hover {
        background-color: rgba(0, 0, 0, 0.039);
 }
}
&__dropdown-menu-svg {
    padding-right: 16px;
    .header--icoon {
        width: 1.40rem;
        height: 1.40rem;
    }
  }
}

/** animation slide button **/
 .slide-fade-enter-active,
 .slide-fade-leave-active {
     transition: all 0.6s;
 }
 .slide-fade-enter,
 .slide-fade-leave-active {
     opacity: 0;
 }
 .slide-fade-enter {
     transform: translateX(31px);
 }
 .slide-fade-leave-active {
     transform: translateX(-31px);
 }

 /** dropdown animation**/
 .dropdown-enter-active,
 .dropdown-leave-active {
     transition: all 1s;
 }
 .dropdown-enter,
 .dropwdown-leave-to {
     opacity: 0;
     transform: translateY(30px);
 }

 .wrapper {
     height: 70vh;
     display:flex;
     align-items:center;
     flex-direction: column;
     justify-content: center;
     
 }
</style>
