<template>
  <div>
    <Searchbar 
      type="student" 
      title="Estudiantes" 
      colum="#" 
      colum2="Nombre" 
      colum3="Email" 
      colum4="Curso" 
      colum6="Nombre del tutor"  
      colum7="Telefono del tutor" 
      colum5="Gestion"
    />
    <Student 
      mainTitle="Eliminar Estudiante" 
      msgconfirm="¿Estas seguro de eliminar este estudiante?"
    />
  </div>
</template>

<script>
import Student from '../components/Student/Student.vue'
import Searchbar from '../components/searchbar/searchbar.vue'
export default {
  components: {
    Searchbar,
    Student
  }
}
</script>