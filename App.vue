<template>
  <div>
    <Nav/>
    <Header/>
    <Services/>
    <Costumers/>
    <Footer/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'
import Services from './components/Services.vue'
import Costumers from './components/Costumers.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Header,
    Services,
    Costumers,
    Footer
  }
}
</script>

<style>
#app {
  /* margin-top: 60px; */
}

</style>
