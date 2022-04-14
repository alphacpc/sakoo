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

window.addEventListener('load', () => {
  alert("Sassssss")
  let inputCheckboxLiked = document?.querySelectorAll(".divProduct input")

  const checkboxCheck = () => {
    for(let el of inputCheckboxLiked){
      if(el.checked){
        return true
      }
    }
    return false
  }
  console.log(checkboxCheck())
  
})
  

export default{


  components:{
    Navbar,
    Footer
  },
  mounted: ()=>{
    
    let getAllLikes = () => {
      console.log("salam")
    }

    document.addEventListener('click', ()=>{
        getAllLikes()
    })
    
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
