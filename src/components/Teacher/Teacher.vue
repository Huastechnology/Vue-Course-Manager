<template>
  <div class="cuadro">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title text-uppercase mb-0">Manage Teachers</h5>
            </div>
            <div class="table-responsive">
              <table class="table no-wrap user-table mb-0">
                <ul>
                  <tr>
                    <th
                      scope="col"
                      class="border-0 text-uppercase font-medium pl-4"
                    >
                      #
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Name
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Email
                    </th>
                    <th scope="col" class="border-0 text-uppercase font-medium">
                      Phone
                    </th>
                  </tr>
                  <tr v-for="(teacher, index) in teachers" :key="index">
                    <th>{{ index + 1 }}</th>
                    <td>{{ teacher.completeName }}</td>
                    <td>{{ teacher.email }}</td>
                    <td>{{ teacher.phone }}</td>

                    <td>
                      <div>
                        <button
                          class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
                          id="show-btn"
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
                              Eliminar al profesor
                            </template>
                            <div class="d-block text-center">
                              <h3>¿Deseas Eliminar al profesor?</h3>
                            </div>
                            <b-button
                              class="mt-3"
                              variant="success"
                              block
                              @click="deleteTeacher(teacher._id)"
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
import TeacherService from "../../services/teacher.service";


export default {
  name: "Teacher",
  data: () => ({
    teachers: [],
    activator: true
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
  mounted() {
    TeacherService.getAll().then(
      (Response) => {
        this.teachers = Response.data.msg;
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
    deleteTeacher(id){
      TeacherService.deleteTeacher(id).then(response =>{
        console.log(response)
        alert(response.data.msg)
      })
    }
  }
};
</script>

<style scoped>
.cuadro {
  padding: 0% 20%;
}

body {
  background: #edf1f5;
  margin-top: 20px;
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
.btn-circle.btn-lg,
.btn-group-lg > .btn-circle.btn {
  width: 50px;
  height: 50px;
  padding: 14px 15px;
  font-size: 18px;
  line-height: 23px;
}
.text-muted {
  color: #8898aa !important;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
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