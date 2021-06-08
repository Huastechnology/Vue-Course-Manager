<template>
  <div>
    <div class="cuadro">
      <div class="card-group border-dark mb-3">
        <div class="p-1" style="width: 350px;" v-for="(course, index) in courses" :key="index">
          <div class="card-body text-uppercase" style="border-style: groove;">
            <h4 class="card-title">{{ course.courseName }}</h4>
            <table class="table">
              <ul>
                <tr>
                  <th>HORA</th>
                  <th>DIAS</th>
                </tr>
                <tr v-for="(course_schedule, index_schedule) in course.schedule" :key="index_schedule">
                  <td class="ayuda" v-if="index_schedule > 0">
                    <span>{{ course.schedule[0] }}</span>
                  </td>
                  <td v-if="index_schedule > 0">
                    <span>{{ course.schedule[index_schedule] }}</span>
                  </td>
                </tr>
              </ul> 
            </table>  
            <div class="bg-transparent border-dark" style="">Maestro: {{ course.teacher.completeName }}</div>
          </div>                   
        </div>        
      </div>      
    </div>
    <router-link to="/courses" class="btn btn-outline-dark cursos">Ir a Cursos</router-link> 
  </div>
</template>

<script>
import CourseService from '../../services/course.service'
export default {
  name: "Schedule",
  data: () => ({
    courses: [],
    course: ''
  }),
  mounted(){
      CourseService.getCourse(this.course).then(Response=>{
        if(this.$store.state.auth.user.rol === 'teacher') {
          for(let i = 0; i < Response.data.matchCourse.length; i++) {
            if(Response.data.matchCourse[i].teacher.email === this.$store.state.auth.user.email) {
              this.courses.push(Response.data.matchCourse[i])
            }
          }
        } else {
          this.courses = Response.data.matchCourse
        }
      },
      (error) => {
            this.$swal("Error!", 
              (error.response && error.response.data) ||
              error.message ||
              error.toString(), 'error')
      })
  }
}
</script>

<style scoped>
  .cuadro {
    margin: 5%;    
    text-align: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }
  .ayuda {
    width: 200px; 
  }
  
  .cursos{
    display: flex;
    font-size: 25px;
    width: 150px;
    height: 50px;
    margin: auto auto 2%;
  }
</style>