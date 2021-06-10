<template>
  <div>
    <Searchbar type="teacher" title="Maestros" colum="#" colum2="Nombre" colum3="Correo" colum4="Teléfono" colum5="Gestión"/>
    <Teacher/>
  </div>
</template>

<script>
import Teacher from '../components/Teacher/Teacher.vue'
import Searchbar from '../components/searchbar/searchbar.vue'

export default {
  components: {
    Searchbar,
    Teacher
  }
}
</script>