<template>
    <Fragment>
        <div class="container_hero">
            <div class="title"> Mi perfil <img class="img-title" src="./img/dashboard.png" alt=""></div>
                <div class="container">
                    <router-link to="/schedule" class="btn-area"> {{ route10 }} <br> <img class="uno" src="./img/calendario.png" alt=""> </router-link>
                    <router-link to="/students" class="btn-area2">{{ route7 }}<br> <img class="dos" src="./img/student.png" alt=""> </router-link>
                    <router-link to="/courses" class="btn-area3">{{ route8 }} <br> <img class="uno" src="./img/open-book.png" alt=""> </router-link>
                    <router-link to="/teachers" v-if="currentAdminRol()" class="btn-area4">{{ route9 }} <br> <img class="uno" src="./img/presentation.png" alt=""> </router-link>
                    <button @click="showModal()" type="button" class="btn-area3">{{dataInfo}} <i class="fa fa-user"></i> </button>
                    <UserData 
                        title="Informacion de Cuenta" 
                        buttonText="Cerrar" 
                        cross="x"
                        v-show="isModalVisible" 
                        @close="closeModal"
                    />
                </div>
            </div>
       <div class="slider">
            <ul>
                <li><img class="sl" src="./img/uno.jpg" alt=""></li>
                <li><img class="sl" src="./img/cuatro.jpg" alt=""></li>
                <li><img class="sl" src="./img/dos.jpg" alt=""></li>
                <li><img class="sl" src="./img/tres.png" alt=""></li>
                
            </ul>
       </div>
       <particles-bg type="cobweb"  :num="50" :bg="true"/>
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
import { ParticlesBg } from "particles-bg-vue";
import UserData from './userData.vue'
export default {
    name: 'Dashboard',
    data: () => ({
        isModalVisible: false
    }),
    components:{ Fragment ,ParticlesBg , UserData},
    props:{
        route7: String,
        route8: String,
        route9: String,
        route10: String,
        dataInfo: String
    },
    computed:{
        currentUser(){
            return this.$store.state.auth.user
        }
    },
    mounted(){
        if(!this.currentUser){
            this.$router.push('/login')
        }
    },
    methods: {
        currentAdminRol(){
            if(this.$store.state.auth.user !== null && this.$store.state.auth.user.rol === 'admin') {
                return true
            } else {
                return false
            }
        },
        showModal(){
            this.isModalVisible =  true
        },
        closeModal(){
            this.isModalVisible = false
        }
    }
}
</script>

 <style scoped>
 *{
     
    margin: 0;
    padding: 0;
}
.container_hero{
    justify-content: center;
    display: flex;
    flex-direction: column;
    backdrop-filter: saturate(180%)blur(20px);
    background-color: rgba(0, 0, 0, 0.123);
    box-shadow: 2px 2px 5px 1px;
    margin: 1.5%;
    margin-top: 4%;
    border-radius: 15px;
    position:-webkit-sticky;
}
.title{
   background:rgba(146, 209, 240, 0);
    margin-left: 8%;
    width: 84%;
    margin-top: 40px;
    font-size: 20px;
    text-align: center;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
.img-title{
    
    width: 20px;
    height: 15px;
}
.container{
    width: 84%;
    height: 160px;
   background:rgba(146, 209, 240, 0);
    display: flex;
    justify-content: center;
    margin-left: 8%;
}

.btn-area{
    background: red ;
    width: 200px;
    height: 100px;
    color: #000;
    margin: 30px;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
}
.btn-area3{
    background: #9f12ca;
    width: 200px;
    height: 100px;
    color: #000;
    margin: 30px;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
}
.btn-area2{
    background: #00b285;
    width: 200px;
    height: 100px;
    color: #000;
    margin: 30px;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
}
.btn-area4{
    background: yellow;
    width: 200px;
    height: 100px;
    color: #000;
    margin: 30px;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
}
.uno{
    width: 30px;
    height: 30px;
    margin-top: 10px;
}
.dos{
    width: 40px;
    height: 40px;
}
.slider{
    
    text-align: center;
    width: 42%;
    margin: auto;
    overflow: hidden;
    margin-top: 10px;
}
.slider ul {
    display: flex;
    padding: 0;
    width: 400%;

    animation: cambio 20s infinite alternate linear;
    
}
.slider li{
    width: 100%;
    list-style: none;
}
.slider img{

    width: 80%;
    border-radius: 20px;

}

@keyframes cambio{
    0% { margin-left: 0; }
    20% { margin-left: 0; }

    25% { margin-left: -100%; }
    45% { margin-left: -100%; }

    50% { margin-left: -200%; }
    70% { margin-left: -200%; }

    75% { margin-left: -300%; }
    100% { margin-left: -300%; }
}

.btn-area:hover{
    background-color: rgb(173, 24, 24);
}
.btn-area2:hover{
    background-color: rgb(7, 114, 82);
}
.btn-area3:hover{
    background-color: rgb(69, 24, 173);
}
.btn-area4:hover{
    background-color: rgb(209, 147, 12);
}
 </style>