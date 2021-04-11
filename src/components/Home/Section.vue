<template>
    <section class="seccion-servicios">
        <div class="cuadro">
            <img class="img-cuadro" src="../img/cursos-en-linea-para-mejorar.jpg" alt="">
            <div class="cuadro-texto">
                <h1 class="titulo-cuadro">Aquí podrás encontrar a tus profesores</h1>
                <h2 class="parrafo-cuadro">En este gestor de cursos podrás mirar a tus profesores</h2>
            </div> 
        </div>
        <div class="cuadro">
            <img class="img-cuadro" src="../img/btn_plataforma_1.jpg" alt="">
            <div class="cuadro-texto">
                <h1 class="titulo-cuadro">Podrás encontrar muchos cursos</h1>
                <h2 class="parrafo-cuadro">Aquí se encuentran los diferentes cursos que puedes tomar</h2>
            </div> 
        </div>
        <div class="cuadro">
            <img class="img-cuadro" src="../img/Tarea.jpg" alt="">
            <div class="cuadro-texto">
                <h1 class="titulo-cuadro">Cuenta con la ayuda de nuestros docentes</h1>
                <h2 class="parrafo-cuadro">Todos los profesores estan perfectamente capacitados en la docencia infantil</h2>
            </div> 
        </div>
    </section>
</template>

<script>
export default {
    name:'Section'
}
</script>

<style scoped>
.seccion-servicios{
    padding: 40px 40px;
    background: #ffffff;

}
.cuadro{
    display: flex;
    align-items: center;
    text-transform: uppercase;
}
.img-cuadro{
    width: 50%;
}
.cuadro:nth-child(2n){
    flex-direction: row-reverse;
    background: #C7D7F2;
}
.cuadro-texto{
    width: 40%;
    margin-left: 5%;
}
.cuadro:nth-child(2n) .cuadro-texto{
    margin-left: 0%;
    margin-right: 5%;
}
.titulo-cuadro{
    font-size: 30px;
    text-transform: uppercase;
}
.parrafo-cuadro{
    font-size: 15px;
}
</style>