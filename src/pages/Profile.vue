<template>
    <div>
        <Dashboard 
            route10="Horario" 
            route7="Studiantes" 
            route8="Cursos" 
            route9="Docentes" 
            dataInfo="Información Personal"
        />
    </div>
</template>

<script>
import Dashboard from '../components/Dashboard/Dashboard.vue'
export default {
    name: 'Profile',
    components: {
        Dashboard
    }
}
</script>