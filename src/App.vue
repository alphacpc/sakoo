<template>
  <Navbar/>

  <div class="divContainer">
      <router-view/>
  </div>

  <Footer/>

</template>

<script>

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";



export default{
  components:{
    Navbar,
    Footer
  }
}
</script>






<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.divContainer{
  padding: 40px 10%;
  background-color: rgba(245, 244, 244, 0.205);
}

</style>
