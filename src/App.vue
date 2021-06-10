<template>
  <div id="app">
    <Navbar route1="Inicio" route2="Conócenos" route3="Contact" route4="Iniciar sesión" route5="Agregar docente" route6="Perfil" route7="Cerrar sesion"/>
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

