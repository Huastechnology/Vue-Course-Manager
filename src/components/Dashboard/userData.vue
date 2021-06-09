<template>
<div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          {{title}}
        </slot>
        <button
          type="button"
          class="btn-close"
          @click="close"
        >
          {{cross}}
        </button>
      </header>

      <section class="modal-body">
        <slot name="body">
            <div v-for="(user,index) in userData" :key="index">
                <p>UUID: {{user._id.substring(0,7)}} ... {{user._id.substr(user._id.length -5)}}</p>
                <p>Nombre Completo: {{user.completeName}}</p>
                <p>Correo: {{user.email}}</p>
                <p>Telefono: {{user.phone}}</p>
                <p>Tipo de Cuenta: {{user.role}}</p>
            </div>
        </slot>
       </section>

      <footer class="modal-footer">
        <button
          type="button"
          class="btn-green"
          @click="close"
        >
          {{buttonText}}
        </button>
      </footer>
    </div>
  </div>
</template>
<script>
  import TeacherService from '../../services/teacher.service'
  export default {
    name: 'UserData',
    props:{
        title: String,
        buttonText: String,
        cross: String
    },
    data: () => ({
        userData:{}
    }),
    methods: {
      close() {
        this.$emit('close');
      },
    },
    mounted(){
        TeacherService.getCurrent(localStorage.getItem('id')).then(Response=>{
            this.userData = Response.data.userData
        },error => {
            alert(error.response && error.response.data)
        })
    }
  };
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap');
 .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(238, 238, 238, 0);
    display: flex;
    justify-content: center;
    align-content: center;

  }

  .modal {
    backdrop-filter: saturate(190%)blur(30px);
    background-color: rgba(255, 255, 255, 0.836);
    border-radius: 18px;
    box-shadow: 2px 2px 20px 1px;
    left: 33%;
    width: 600px;
    height: 380px;
    display: flex;
    flex-direction: column;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    font-size:30px;
    justify-content:  center;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    padding: 10px 5px;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 5px;
  }
</style>