<template>
  <article class="blog post m-5">
    <h1 class="blog-post-title">Acerca de la Compañía</h1>
    <p class="blog-post-meta m-2 fecha">Marzo 14, 2021 by Huastechnology Company</p>
    <p class="m-4">Hola somos A&A Company y nos dedicamos a ayudar a estudiantes que desean expandir sus conocimientos en las materias que
      imparta la institución en la que se encuentren.
    </p>  
    <div class="row mb-2">  
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden
        flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h4 class="mb-0">Misión</h4>
            <hr>
            <p class="card-text mb-auto">Garantizar una educación democrática, laica, integral, de calidad, con equidad, 
              pertinencia y calidez humana, en los distintos tipos de niveles y modalidades, con transparencia y 
              con una comunicación permanente entre otros docentes y padres de familia.
            </p>
          </div>
        </div>      
      </div>
      <div class="col-md-6">
        <div class="row g-0 border rounded overflow-hidden
        flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h4 class="mb-0">Visión</h4>
            <hr>
            <p class="card-text mb-auto">Promover una administración escolar eficiente; facilitar la participación de los particulares 
              en la prestación de los servicios educativos; promover políticas que agilicen la movilidad académica 
              y la acreditación de conocimientos adquiridos.
            </p>
          </div>
        </div>      
      </div>
    </div>
  </article>  
</template>

<script>
export default {
    name:'about'
}
</script>

<style scoped>
  .fecha {
    font-size: 12px;
  }
</style>