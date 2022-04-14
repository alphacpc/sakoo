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

// window.addEventListener('load', () => {

//   let inputsCheckbox = document?.querySelectorAll(".divProduct input")

//   const checkboxCheck = () => {
    
//     let likes = JSON.parse(localStorage.getItem("likes"))

//     for(let el of inputsCheckbox){
//       for(let liked of likes){
//         if(el.id == liked.nom){
//           el.checked = true
//         }
//       }
//     }
//   }

//   checkboxCheck()

//   document.addEventListener('click', checkboxCheck)
  
// })
  

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
