<template>
    <div class="cuadro">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-left: 14%;">
          <div class="card">
            <div class="card-body">
              <Addcourse/>
              <h5 class="card-title card-top-tittle text-uppercase mb-0">Manage courses</h5>
            </div>
            <div class="table-responsive  table-div">
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
                      <td> 
                        <span v-if="update && update_index === index + 1">
                          <input v-model="course.courseName" class="form-control" />
                        </span>
                        <span v-else>
                          {{course.courseName}}
                        </span>
                      </td> 
                      <td> 
                        <span v-if="update && update_index === index + 1 && currentUser.rol === 'admin'">
                          <select v-model="course.teacher">
                            <option
                              v-for="(teacher, teacherindex) in teachers"
                              :key="teacherindex"
                              :value="teacher._id"
                            >
                              {{ teacher.completeName }}
                            </option>
                          </select>
                        </span>
                        <span v-else>
                          {{course.teacher.completeName}}
                        </span>
                      </td>
                      <td style="text-align:center;"> 
                        <span v-if="update && update_index === index + 1">
                          <input v-model="course.capacity" class="form-control" />
                        </span>
                        <span v-else>
                          {{course.capacity}}
                        </span>
                      <td v-if="!update">
                        <span v-for="(course_schedule, course_index) in course.schedule" :key="course_index">
                          {{course_schedule}} 
                        </span>
                      </td>
                      <td v-if="update && update_index === index + 1">
                        <b-form-group
                          label="Using options array:"
                          v-slot="{ ariaDescribedby }"
                        >
                          <b-form-checkbox-group
                            id="checkbox-group-1"
                            v-model="course.schedule"
                            :aria-describedby="ariaDescribedby"
                            name="flavour-1"
                          >
                            <b-form-checkbox value="7:00-10:00">7:00-10:00</b-form-checkbox>
                            <b-form-checkbox value="Lunes">Lunes</b-form-checkbox>
                            <b-form-checkbox value="Martes">Martes</b-form-checkbox>
                            <b-form-checkbox value="Miercoles">Miercoles</b-form-checkbox>
                            <b-form-checkbox value="Jueves">Jueves</b-form-checkbox>
                            <b-form-checkbox value="Viernes">Viernes</b-form-checkbox>
                          </b-form-checkbox-group>
                        </b-form-group>
                      </td>
                      <td>
                      <span v-if="update && update_index == index + 1">
                        <button
                          type="button"
                          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          @click="updateCourse(course,course._id)"
                        >
                          <i class="fa fa-check-circle"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          @click="update=false, getCourses()"
                          >
                            <i class="fa fa-ban"></i>
                        </button>
                      </span>
                      <span v-else>
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
                          v-on:click="editCourse(index+1)"
                        >
                          <i class="fa fa-edit"></i>
                        </button>
                      </span>
                      
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
import Addcourse from '../Course/Addcourse.vue'
import TeacherService from "../../services/teacher.service";

export default {
  name: "Course",
  components:{Addcourse},
  data: ()=> ({
    course: '',
    courses : [],
    course_id: '',
    teachers: [],
    update: false,
    update_index: -1,
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },
  beforeMount() {
    TeacherService.getAll().then(
      (Response) => {
        if (this.$store.state.auth.user.rol === "admin") {
          this.teachers = Response.data.msg;
        }
      },
      (error) => {
        this.$swal("Error!", (error.response && error.response.data) || error.message || 
        error.toString(), 'error')
      }
    );
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
            this.$swal("Error!", 
              (error.response && error.response.data) ||
              error.message ||
              error.toString(), 'error')
      })
  },
  methods: {
    getCourses() {
      this.courses = []
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
    },
    getId(id) {
      this.course_id = id
    },
    deleteCourse() {
      CourseService.deleteCourse(this.course_id)
        .then((response) => {
          this.$swal("Successfully!",response.data.message, 'success')
          this.getCourses()
        }, error => {
          this.$swal("Error!", error.response.data.message, 'error')
        })
    },
    editCourse(index){
      this.update_index = index
      this.update= true;
    },
    updateCourse(course, id) {
      CourseService.updateCourse(course, id).then(Response => {
        this.$swal("Successfully!", Response.data.msg, 'success')
        this.update = false
      },(error)=>{
        this.$swal("Error!", error.response.data.message, 'error')
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
    margin-top: 7%;
    
}
.card-top-tittle{
  margin-top: 2%;
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