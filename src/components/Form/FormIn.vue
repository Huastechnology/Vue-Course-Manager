<template>
    <div class="container">
        <form class="login-signIn" @submit.prevent="handleLogin">
            <div class="avatar">
                <img src="../../assets/a&a.png" alt="avatar-A&A">
            </div>

            <span class="title">account login</span>
            
            <input class="login" type="email" name="email" v-model="user.email" placeholder="E-mail">
            <input class="login" type="password" name="password" v-model="user.password" placeholder="Password">
            <button class="boton" type="submit">Login</button>
        </form>
        <particles-bg type="cobweb" :num="40" :bg="true"/>
    </div>
</template>

<script>
import User from "../../models/user";
import { ParticlesBg } from "particles-bg-vue";
export default {
  name: "FormIn",
   components:{ParticlesBg},
  data: () => ({
    user: new User("", ""),
  }),
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleLogin(){
      if (this.user.email && this.user.password) {
        this.$store.dispatch("auth/login", this.user).then(
          () => {
            this.$router.push("/");
          },
          (error) => {
            alert( 
              (error.response && error.response.data) ||
              error.message ||
              error.toString())
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.login-signIn {
    margin: 5em 0 0 0;
}
.avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
}
.avatar img {
    width: 100%;
}
.title {
    margin: 10px 0 3em 0;
    font-family: Helvetica;
    text-transform: uppercase;
}
.login {
    outline: none;
    border: none;
    margin: 5px;
    background-color: rgb(230, 225, 225);
    font-family: Helvetica;
    font-size: 15px;

    width: 22.5%;
    padding: 10px 15px;
    border-radius: 30px;
}
.container {
    width: 100%;
    height: 100vh;
}
.container .login-signIn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container .boton {
    outline: none;
    border: none;
    color: #FFF;
    background-color: #000;
    font-family: Helvetica;
    font-size: 15px;

    width: 25%;
    margin-top: 10px;
    padding: 10px 15px;
    border-radius: 30px;
    transition: all 1s;
    cursor: pointer;
}
.container .boton:hover {
    color: #d22938;
}
</style>