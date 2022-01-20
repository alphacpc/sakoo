<template>
  <div class="home">
    

    <div class="divCardContainer">
      <div v-for="product in elements" :key="product" class="divProduct">
        <div class="divImage">
          <img width="200" :src="require(`./../assets/images/${product.image}`)" alt="">
        </div>
        <div class="divIcons">
          <span>Cart</span>
          <span>Heart</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

  import myDatas from "./../data.json";



  export default {
    name: 'Home',
    data : () => {
      return {
        message : "Hello everybody",
        elements: myDatas
      }
    }
  }

</script>


<style>
.divCardContainer{
  background-color: greenyellow;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>
