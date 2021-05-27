<template>
  <div id="app">
    <Navbar route1="Inicio" route2="About" route3="Contact" route4="LogIn" route5="Agregar nuevo" route6="Dashboard" route7="cerrar sesion"/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar/Navbar.vue'
import Footer from './components/Home/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

