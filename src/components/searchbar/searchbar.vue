
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
          <button class="btn-search" type="button" @click="search">Buscar</button>
        </div>
      </div>
      <div class="cuadro" v-if="userresponse != null">
        <div class="container">
          <div class="row">
            <div class="col-md-12" style="margin-left: 14%;">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title text-uppercase mb-0">Manage Teachers</h5>
                </div>
                <div class="table-responsive">
                  <table class="table no-wrap user-table mb-0">
                    <ul>
                      <tr>
                        <th scope="col" class="border-0 text-uppercase font-medium pl-4">#</th>
                        <th scope="col" class="border-0 text-uppercase font-medium">Name</th>
                        <th scope="col" class="border-0 text-uppercase font-medium">Email</th>
                        <th scope="col" class="border-0 text-uppercase font-medium">Phone</th>
                      </tr>
                      <tr v-for="(useresponse, index) in userresponse" :key="index">
                        <th>{{index + 1 }}</th>
                        <td>{{useresponse.completeName}}</td>
                        <td>{{useresponse.email}}</td>
                        <td>{{useresponse.phone}}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-info btn-circle btn-lg btn-circle ml-2"
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
    </form>
  </div>
</template>

<script>
import TeacherService from "../../services/teacher.service";

export default {
  name: "Searchbar",
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
    search() {
      console.log(this.user);
      TeacherService.get(this.user).then(
        response => {
          console.log(response);
          this.user = Response.matchUser
          this.userresponse = response.data.matchuser
          console.log(response.data)
        },
        error => {
          alert(
            (error.response && error.response.data) ||
              error.message ||
              error.toString()
          );
        }
      );
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
  padding: 5px;
}

.s130 form {
  width: 50%;
  max-width: 790px;
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
</style>