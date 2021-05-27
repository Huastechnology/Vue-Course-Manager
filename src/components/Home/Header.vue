<template>
        <header class="header2">
            <particles-bg type="polygon"  :num="10" :bg="true"/>
            <h1 class="text-tittle">Bienvenidos al gestor de cursos de A&A</h1> 
            <br/>
            <h2 class="text">Hacemos que la tarea aburrida se vuelva aprendizaje divertido</h2>
            <div class="contenedor">
                <img src="../img/tarea_facil.jpg" />
                <img class="top" src="../img/mucha_tarea.jpeg" />
            </div>
        </header> 
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";
export default {
    name:'Header',
    components:{ParticlesBg}
}
</script>
<style scoped>
.header2{
    background: rgba(130, 167, 247, 0.288);
    width: 95%;
    margin-top: 4%;
    backdrop-filter: saturate(180%)blur(20px);
    height: 650px;
    padding: 5%;
    border-radius: 20px;
    margin-left: 2.5%;
}
.text-tittle{
    text-align: center;
    text-decoration-line: underline
}
.text{
    text-align: center
}

.contenedor {
    padding: 1% 35%;
    position: relative;
}

.contenedor img {
    height: 390px;
    width: 600px;
    position: absolute;
    display: block;
    margin: auto;
    transition: opacity 1.5s ease-in-out;
    border-radius: 20px;
}

.contenedor img.top:hover {
  opacity: 0;
}

</style>