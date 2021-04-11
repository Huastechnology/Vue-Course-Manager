<template>
        <header class="header2">
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
export default {
    name:'Header'
}
</script>
<style scoped>
.header2{
    background: #C7D7F2;
    width: 100%;
    margin-top: 4%;
    height: 650px;
    padding: 5%;
    border-radius: 2%;
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
    transition: opacity 1.5s ease-in-out;
    border-radius: 10%;
}

.contenedor img.top:hover {
  opacity: 0;
}

</style>