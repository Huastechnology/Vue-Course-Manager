<template>
  <div>
    <button
      v-b-modal.modal-prevent-closing
      class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
    >
      Nuevo <i class="fa fa-plus"></i>
    </button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Agregar un nuevo estudiante"
      @ok="handleOk"
    >
      <form ref="form" @submit.prevent="handleSubmit()">
        <b-form-group invalid-feedback="campo requerido" >
          <b-form-input
            v-model="student.name"
            placeholder="Nombre"
            required
          />
          <b-form-input placeholder="Email" v-model="student.email" />
          <h5>Seleccione un curso</h5>
          <select v-model="student.course">
                <option v-for="(course, courseindex) in courses" 
                    :key="courseindex" 
                    :value="course._id"
                    >
                       {{course.courseName}}
                </option>
          </select>
          <b-form-input
             placeholder="Nombre del Tutor"
             v-model="student.tutorName"
          />
          <b-form-input
            placeholder="Telefono del tutor"
            v-model="student.tutorPhone"
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Student from "../../models/student";
import StudentService from '../../services/student.service'
import CourseService from "../../services/course.service";
export default {
  name: "Addnew",
  data: () => ({
    student: new Student("", "", "", "", ""),
    course: "",
    courses: [],
  }),
  mounted () {
      CourseService.getCourse(this.course).then(
      (Response) => {
        if (this.$store.state.auth.user.rol === "teacher") {
          for (let i = 0; i < Response.data.matchCourse.length; i++) {
            if (
              Response.data.matchCourse[i].teacher.email ===
              this.$store.state.auth.user.email
            ) {
              this.courses.push(Response.data.matchCourse[i]);
              console.log(Response.data)
            }
          }
        } else {
          this.courses = Response.data.matchCourse;
        }
      },
      (error) => {
        alert(
          (error.response && error.response.data) ||
            error.message ||
            error.toString()
        );
      }
    );
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Push the name to submitted names
      StudentService.create(this.student).then(Response =>{
           alert(Response.data.msg)
      },(error) => {
            alert( 
              (error.response && error.response.data) ||
              error.message ||
              error.toString())
          })
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>