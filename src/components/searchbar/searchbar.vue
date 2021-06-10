
<template>
  <div class="s130">
    <form>
      <div class="inner-form">
        <div class="input-field first-wrap">
          <div class="svg-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
              />
            </svg>
          </div>
          <input
            id="search"
            type="text"
            name="name"
            placeholder="Escriba el nombre del usuario"
            v-model="user"
          />
        </div>
        <div class="input-field second-wrap">
          <button class="btn-search" type="button" @click="Search">Buscar</button>
        </div>
      </div>
      <div class="cuadro">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-uppercase mb-0"> Buscar {{title}} </h5>
                </div>
                <div class="table-responsive">
                  <table class="table no-wrap user-table mb-0">
                    <ul>
                      <tr>
                        <th scope="col" class="border-0 text-uppercase font-medium pl-4">{{colum}}</th>
                        <th scope="col" class="border-0 text-uppercase font-medium">{{colum2}}</th>
                        <th scope="col" class="border-0 text-uppercase font-medium">{{colum3}}</th>
                        <th scope="col" class="border-0 text-uppercase font-medium">{{colum4}}</th>
                        <th v-if="type !== 'teacher'" scope="col" class="border-0 text-uppercase font-medium">{{colum6}}</th>
                        <th  v-if="type !== 'teacher'" scope="col" class="border-0 text-uppercase font-medium">{{colum7}}</th>
                      </tr>
                      <tr v-for="(useresponse, index) in userresponse" :key="index">
                        <th>{{index + 1 }}</th>
                        <td v-if="type !== 'student'">{{useresponse.completeName}}</td>
                        <td v-if="type !== 'teacher'">{{useresponse.name}}</td>
                        <td>{{useresponse.email}}</td>
                        <td v-if="type !== 'student'">{{useresponse.phone}}</td>
                        <td v-if="type !== 'teacher'">{{useresponse.course.courseName}}</td>
                        <td v-if="type !== 'teacher'">{{useresponse.tutorName}}</td>
                        <td v-if="type !== 'teacher'">{{useresponse.tutorPhone}}</td>
                      </tr>
                    </ul>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import TeacherService from "../../services/teacher.service";
import StudentService from '../../services/student.service';

export default {
  name: "Searchbar",
  props:{
       title: String,
       colum: String,
       colum2: String,
       colum3: String,
       colum4: String,
       colum5: String,
       colum6: String,
       colum7: String,
       type: String,
       array: [], 
   },
  data: () => ({
    user: "",
    userresponse: []
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/login");
    }
  },
  methods: {
    searchTeacher() {
      TeacherService.get(this.user).then(
        response => {
          this.user = Response.matchUser
          this.userresponse = response.data.matchuser
        },
        error => {
          this.$swal("Error!", (error.response && error.response.data) ||
            error.message ||
            error.toString(), 'error')
        }
      );
    },
    searchStudent() {
      StudentService.get(this.user).then(
        response => {
          this.user = Response.matchStudent
          this.userresponse = response.data.matchStudent
        },
        error => {
          this.$swal("Error!",
            (error.response && error.response.data) ||
              error.message ||
              error.toString(), 'error'
          );
        }
      );
    },
    Search(){
      if(this.type === "teacher"){
        this.searchTeacher()
      } else {
        this.searchStudent()
      }
    }
  }
};
</script>

<style scoped>
input,
button {
  font-family: "Poppins", sans-serif;
}

* {
  box-sizing: border-box;
}
svg:not(:root) {
  overflow: hidden;
}
.s130 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-size: 0%;
  padding: 0px;
}

.s130 form {
  width: 100%;
  max-width: 1300px;
  padding-top: 24vh;
}

.s130 form .inner-form {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.15);
  border-radius: 34px;
  overflow: hidden;
  margin-bottom: 30px;
}

.s130 form .inner-form .input-field {
  height: 68px;
}

.s130 form .inner-form .input-field input {
  height: 100%;
  background: transparent;
  border: 0;
  display: block;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #000;
}

.s130 form .inner-form .input-field input.placeholder {
  color: #222;
  font-size: 16px;
}

.s130 form .inner-form .input-field input:-moz-placeholder {
  color: #222;
  font-size: 16px;
}

.s130 form .inner-form .input-field input::-webkit-input-placeholder {
  color: #222;
  font-size: 16px;
}

.s130 form .inner-form .input-field input:hover,
.s130 form .inner-form .input-field input:focus {
  box-shadow: none;
  outline: 0;
}

.s130 form .inner-form .input-field.first-wrap {
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  background: #d9f1e3;
}

.s130 form .inner-form .input-field.first-wrap input {
  -ms-flex-positive: 1;
  flex-grow: 1;
}

.s130 form .inner-form .input-field.first-wrap .svg-wrapper {
  min-width: 80px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}

.s130 form .inner-form .input-field.first-wrap svg {
  width: 36px;
  height: 36px;
  fill: #222;
}

.s130 form .inner-form .input-field.second-wrap {
  min-width: 216px;
}

.s130 form .inner-form .input-field.second-wrap .btn-search {
  height: 100%;
  width: 100%;
  white-space: nowrap;
  font-size: 16px;
  color: #fff;
  border: 0;
  cursor: pointer;
  position: relative;
  z-index: 0;
  background: #5089c9;
  transition: all 0.2s ease-out, color 0.2s ease-out;
  font-weight: 300;
}

.s130 form .inner-form .input-field.second-wrap .btn-search:hover {
  background: #366294;
}

.s130 form .inner-form .input-field.second-wrap .btn-search:focus {
  outline: 0;
  box-shadow: none;
}

.s130 form .info {
  font-size: 15px;
  color: #ccc;
  padding-left: 26px;
}
.s130 form .inner-form .input-field.first-wrap svg {
  width: 26px;
  height: 26px;
  fill: #222;
}
@media screen and (max-width: 992px) {
  .s130 form .inner-form .input-field {
    height: 50px;
  }
}

@media screen and (max-width: 767px) {
  .s130 form .inner-form .input-field.first-wrap .svg-wrapper {
    min-width: 40px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 10px;
  }
}
.s130 form .inner-form .input-field.second-wrap {
  min-width: 100px;
}
.s130 form .inner-form .input-field.second-wrap .btn-search {
  font-size: 13px;
}

.cuadro {
  padding: 0% 5%;
  align-items: center;
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