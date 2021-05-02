<template>
  <div>
    <Searchbar/>
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