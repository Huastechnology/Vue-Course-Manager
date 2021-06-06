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
      title="Agregar un nuevo Curso"
      @ok="handleOk"
    >
      <form ref="form" @submit.prevent="handleSubmit()">
        <b-form-group invalid-feedback="campo requerido">
          <b-form-input
            v-model="course.courseName"
            placeholder="Nombre del curso"
            required
          />

          <h5 v-if="currentUser.rol == 'admin'">Profesor</h5>
          <select v-if="currentUser.rol == 'admin'" v-model="course.teacher">
            <option
              v-for="(teacher, teacherindex) in teachers"
              :key="teacherindex"
              :value="teacher._id"
            >
              {{ teacher.completeName }}
            </option>
          </select>
          <h5 v-else :value="currentUser.id">{{  teacherStored }}</h5>

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
            <h5>{{ course.schedule }}</h5>

          <b-form-input
            v-model="course.description"
            placeholder="Descripcion"
            required
          />
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import Courses from "../../models/course";
import courseService from '../../services/course.service';
import TeacherService from "../../services/teacher.service";
// import CourseService from "../../services/course.service";

export default {
  name: "Addcourse",
  data: () => ({
    course: new Courses("", "", "", ""),
    teacherStored: localStorage.getItem("name"),
    teacher: "",
    teachers: [],
    schedule_string: "",
    schedule: [],
    
  }),
  mounted() {
    TeacherService.get(this.teacher).then(
      (Response) => {
        if (this.$store.state.auth.user.rol === "admin") {
          this.teachers = Response.data.msg;
         
        }
      },
      (error) => {
        this.$swal(
          "Error!",
          (error.response && error.response.data) ||
            error.message ||
            error.toString(),
          "error"
        );
      }
    );
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },

    handleSubmit() {
      this.course.teacher = this.$store.state.auth.user.id;
      
      
      courseService.createCourse(this.course).then (Response =>{
        alert(Response.data.msg)
      },error =>{
        alert("Error!", 
              (error.response && error.response.data) ||
              error.message ||
              error.toString(), 'error')
      })

      this.$nextTick(() => {
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
};
</script>