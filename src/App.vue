<template>
  <div id="app">
    <Navbar route1="Home" route2="About" route3="Contact" route4="LogIn" route5="SignUp" route6="HelloWorld"/>
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

