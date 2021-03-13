<template>
    <div>
        <Header/>
        <Section/>
        <Footer/>
    </div>
</template>

<script>
import Header from '../components/Home/Header.vue'
import Section from '../components/Home/Section.vue'
import Footer from '../components/Home/Footer.vue'
export default {
    name: 'Home',
    components: { 
    Header,
    Section,
    Footer 
    }
}
</script>