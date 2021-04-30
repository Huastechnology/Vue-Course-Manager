<template>
    <header class="Navbar">
        <router-link to="/" class="logo">A&A</router-link >
            <nav>
                <ul class="nav-area">
                    <li> <router-link to="/" class="a">{{ route1 }}</router-link></li>
                    <li> <router-link to="/about" class="a">{{ route2 }}</router-link></li>
                    <li> <router-link to="/contact" class="a">{{ route3 }}</router-link></li>
                    <li> <router-link to="/dashboard" class="a" v-if="currentUser">{{ route6 }}</router-link></li>
                </ul>
            </nav>
        <nav class="nav-button" v-if="!currentUser">
            <router-link to="/login" class="btn-area">{{ route4 }}</router-link>
        </nav>
        <nav class="nav-button" v-if="currentUser">
            <router-link to="/signUp" v-if="currentUser.rol == 'admin'" class="btn-area">{{ route5 }}</router-link>
            <b-button @click.prevent="logOut" variant="outline-info" class="mb-2">
                <b-icon icon="box-arrow-in-right" aria-hidden="true"></b-icon>Cerrar Sesion
            </b-button>
        </nav>
    </header>
</template>

<script>

export default {
   name:'Navbar',
   props:{
       route1: String,
       route2: String,
       route3: String,
       route4: String,
       route5: String,
       route6: String,
   },
    computed:{
        currentUser(){
           return this.$store.state.auth.user
        }
    },
    methods:{
        logOut(){
            this.$store.dispatch('auth/logout')
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>

.Navbar{
    display:  -webkit-flex;
    display: -moz-flex;
    display: -ms-flex;
    display: -o-flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    background-color: #000;
    margin-top: 5px;
    width: 95%;
    height: 60px;
    border-radius: 50px;
    margin-left: 2.5%;
    left:0;           /* top left corner should start at leftmost spot */
    top:0;            /* top left corner should start at topmost spot */
    position: fixed;
    z-index:200;
}
.logo{
    color:#fff;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 30px;
    text-decoration: none;
    padding: 0px 30px;
}
.nav-area li{
    display: inline-block;
    padding: 0 15px;
    text-transform: uppercase;
    
}
.nav-area li .a{
    transition: .3s;
    color: #fff;
    text-decoration: none;
}
.nav-area li .a:hover{
    color: #d22938;
    
}
.btn-area{
    cursor: pointer;
    color: #fff;
    font-size: 16px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 10px 30px;
    border-radius: 5px;
    background: #d22938;
    margin-right: 20px;
    text-decoration: none;
}
.btn-area:hover:hover{
    background: #c51120;
}
.nav-button{
    padding: 0px 20px;
}
</style>