<template>
    <div>
        <Dashboard route10="Schedule" route7="Student" route8="Courses" route9="Teachers"/>
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