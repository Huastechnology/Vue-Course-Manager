<template>
    <div>
        <Header/>
        <Section/>
    </div>
</template>

<script>
import Header from '../components/Home/Header.vue'
import Section from '../components/Home/Section.vue'
export default {
    name: 'Home',
    components: { 
    Header,
    Section
    }
}
</script>