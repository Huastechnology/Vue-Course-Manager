<template>
  <div>
    <HeaderAbout/>
    <About/>
  </div>
</template>

<script>
import HeaderAbout from '../components/About/Header.vue'
import About from '../components/About/about.vue'
export default {
  components: {
    HeaderAbout,
    About
  }
}
</script>