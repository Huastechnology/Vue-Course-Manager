<template>
  <div>
    <Searchbar/>
    <Student/>
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