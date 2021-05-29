<template>
    <div class="cuadro">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-left: 14%;">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase mb-0">Manage courses</h5>
            </div>
            <div class="table-responsive table-div">
              <table class="table no-wrap user-table mb-0"> 
                  <ul>
                    <tr>
                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Course</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Teacher</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Capacity</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Schedule</th>
                  </tr>
                  <tr v-if="courses.length === 0">No hay cursos</tr>
                    <tr v-for="(course, index) in courses" :key="index">
                      <th> {{index + 1 }} </th>
                      <td> {{course.courseName}}  </td> 
                      <td> {{course.teacher.completeName}} </td>
                      <td style="text-align:center;"> {{course.capacity}} </td>
                      <td v-for="(course_schedule, course_index) in course.schedule" :key="course_index"> {{course_schedule}} </td>
                      <td>
                      <button
                        class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                        id="show-btn"
                        v-on:click="getId(course._id)"
                        @click="$bvModal.show('bv-modal-example')"
                      >
                        <i class="fa fa-trash"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                      >
                        <i class="fa fa-upload"></i>
                      </button>

                      <div>
                        <b-modal id="bv-modal-example" hide-footer>
                            <template #modal-title>
                              Eliminar el curso
                            </template>
                            <div class="d-block text-center">
                              <h3>¿Deseas Eliminar el curso?</h3>
                            </div>
                            <b-button
                              class="mt-3"
                              variant="success"
                              block
                              @click="deleteCourse()"
                              v-on:click="$bvModal.hide('bv-modal-example')"
                              >Confirmar</b-button
                            >
                            <b-button
                              class="mt-3"
                              variant="danger"
                              block
                              @click="$bvModal.hide('bv-modal-example')"
                              >Cancelar</b-button
                            >
                          </b-modal>
                        </div>
                      </td>
                    </tr>
                  </ul>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CourseService from '../../services/course.service'

export default {
  name: "Course",
  
  data: ()=> ({
    course: '',
    courses : [],
    course_id: '',
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },
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
            alert( 
              (error.response && error.response.data) ||
              error.message ||
              error.toString())
          })
  },
  methods: {
    getId(id) {
      this.course_id = id
    },
    deleteCourse() {
      CourseService.deleteCourse(this.course_id)
        .then((response) => {
          console.log(response.data.message)
        }, error => {
          console.log(error.response.data.message)
        })
    }
  }
}
</script>


<style scoped>
.cuadro {
  padding: 0% 5%;
}

body{
    background: #edf1f5;
    margin-top:20px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: 0;
}
.btn-circle.btn-lg, .btn-group-lg>.btn-circle.btn {
    width: 50px;
    height: 50px;
    padding: 14px 15px;
    font-size: 18px;
    line-height: 23px;
}
.text-muted {
    color: #8898aa!important;
}
[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
    cursor: pointer;
}
.btn-circle {
    border-radius: 100%;
    width: 40px;
    height: 40px;
    padding: 10px;
}
.user-table tbody tr .category-select {
    max-width: 150px;
    border-radius: 20px;
}
.table-div {
  margin-top: 5%;
  margin-bottom: 5%;
}
</style>