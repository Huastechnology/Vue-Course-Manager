<template>
  <div class="cuadro">
    <div class="container">
      <div class="row">
        <div class="col-md-12" style="margin-left: 14%;">
          <div class="card">
            <div class="card-body">
              <Addnew/>
              <h5 class="card-title text-uppercase mb-0">Manage Students</h5>
            </div>
            <div class="table-responsive">
              <table class="table no-wrap user-table mb-0"> 
                  <ul>
                    <tr>
                    <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Course</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Tutor Name</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Tutor Phone</th>
                    <th scope="col" class="border-0 text-uppercase font-medium">Manage</th>
                  </tr>
                    <tr v-for="(student, index) in students" :key="index">
                      <th> {{index + 1 }} </th>
                      <!-- <td>{{student.name}}</td> -->
                      <td> <!-- {{student.name}} -->  
                        <span v-if="actualizar && actualizarid == index+1">
                          <input v-model="student.name" class="form-control">
                        </span>
                        <span v-else>
                           {{ student.name }}
                        </span>
                      </td> 
                      <td> <!-- {{student.email}} --> 
                        <span v-if="actualizar && actualizarid == index+1">
                          <input v-model="student.email"  class="form-control">
                        </span>
                        <span v-else>
                           {{ student.email }}
                        </span>
                      </td>
                      <!-- <td  v-if="student.course.length === 0"> No hay cursos </td> -->
                      <!-- <td v-for="(course, course_index) in student.course " :key="course_index"> {{course}} </td> -->
                      <td><!-- {{student.course.courseName}} -->
                        <span v-if="actualizar && actualizarid == index+1">
                         
                         <select v-model="selected">
                            <option disabled value="">{{ student.course.courseName }}</option>
                            <option v-for="(course, courseindex) in courses" :key="courseindex" :value="course._id">
                              {{ course.courseName }}
                            </option>
                          </select>
                        
                        </span>
                        <span v-else>
                           {{ student.course.courseName }}
                        </span>
                      </td>
                      <td> <!-- {{student.tutorName}} --> 
                        <span v-if="actualizar && actualizarid == index+1">
                          <input v-model="student.tutorName" class="form-control">
                        </span>
                        <span v-else>
                           {{ student.tutorName }}
                        </span>
                      </td> 
                      <td> <!-- {{student.tutorPhone}} --> 
                        <span v-if="actualizar && actualizarid == index+1">
                          <input v-model="student.tutorPhone" class="form-control">
                        </span>
                        <span v-else>
                           {{ student.tutorPhone}}
                        </span>
                      </td>
                      <td>
                        <span v-if="actualizar && actualizarid == index+1">
                            <button
                              type="button"
                              class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                              @click="updatingStudent(student,student._id)"
                              >
                              <i class="fas fa-check-circle"></i>
                            </button>
                        </span>
                          <span v-else>
                            <button
                              type="button"
                              class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                              v-on:click="getId(student._id)"
                              @click=" $bvModal.show('bv-modal-example')"
                            >
                              <i class="fa fa-trash" />
                            </button>
                            <b-modal id="bv-modal-example" hide-footer>
                              <template #modal-title> {{mainTitle}} </template>
                              <div class="d-block text-center">
                                <h3>{{msgconfirm}}</h3>
                              </div>
                              <b-button
                                class="mt-3"
                                variant="success"
                                block
                                @click="deleteStudent()"
                                v-on:click="$bvModal.hide('bv-modal-example')"
                              >
                                Confirmar
                              </b-button>
                              <b-button
                                class="mt-3"
                                variant="danger"
                                block
                                @click="$bvModal.hide('bv-modal-example')"
                              >
                                Cancelar
                              </b-button>
                            </b-modal>
                        </span>  
                        <span v-if="actualizar && actualizarid == index+1">
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                            @click="actualizar=false"
                            >
                            <i class="fa fa-ban"></i>
                          </button>
                        </span>
                        <span v-else>
                           <button
                              type="button"
                              class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                              @click="updateStudent(index+1)"
                            >
                              <i class="fa fa-edit"></i>
                            </button>
                        </span>                         
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

import StudentService from '../../services/student.service'
import CourseService from '../../services/course.service'
import Addnew from '../Student/addStudent.vue'
export default {
  name: "Student",
  components:{Addnew},
  props:{
    msgconfirm: String,
    mainTitle: String
  },
  data: ()=> ({
    students : [],
    courses: [],
    course: '',
    actualizar: false,
    actualizarid: -1,
    selected: {},
    studentId:''
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
      StudentService.getAll().then(Response=>{
        if(this.$store.state.auth.user.rol === 'teacher') {
          for(let i = 0; i < Response.data.matchStudent.length; i++) {
            if(Response.data.matchStudent[i].course.teacher.email === this.$store.state.auth.user.email) {
              this.students.push(Response.data.matchStudent[i])
            }
          }
        } else {
          this.students = Response.data.matchStudent
        }
      },
      (error) => {
            this.$swal("Error!",
              (error.response && error.response.data) ||
              error.message ||
              error.toString(), 'error')
          })

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
          });
  },
  methods: {
    getId(id){
      this.studentId = id
    },
    deleteStudent(){
      StudentService.delete(this.studentId).then( response => {
        this.$swal("Successfully!", response.data.message, 'success')
      }, error => {
        this.$swal("Error!", error.response.data.message, 'error')
      })
    },
    updateStudent (id){
      this.actualizarid = id
      this.actualizar = true;
    },
    updatingStudent(user,id){
      user.course = this.selected
      StudentService.update(user, id).then(Response => {        
        this.$swal("Successfully!", Response.data.msg, 'success')
        this.actualizar = false
      },(error)=> {
        this.$swal("Error!", (error.response && error.response.data) ||
          error.message ||
          error.toString(), 'error')
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
</style>