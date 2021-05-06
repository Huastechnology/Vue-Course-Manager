<template>
  <div>
    <!-- <Searchbar type="course" title="Cursos" colum="#" colum2="Curso" colum3="Maestro" colum4="Descripción" colum5="Capacidad"/> -->
    <Course/>
  </div>
</template>

<script>
import Course from '../components/Course/Course'
// import Searchbar from '../components/searchbar/searchbar.vue'

export default {
  components: {
    // Searchbar,
    Course
  }
}
</script>