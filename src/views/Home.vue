<template>
  <div class="home">
    

    <div class="divCardContainer">
      <div v-for="product in elements" :key="product" class="divProduct">
        <div class="divImage">
          <img :src="require(`./../assets/images/${product.image}`)" alt="">
        </div>
        <h4>{{product.Nom}}</h4>
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
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .divProduct{
    margin-bottom: 20px;
    margin: 2% 2%;
    width: 20%;
    transition: all ease .3s;
    cursor: pointer;
  }

  .divProduct h4{
    display: none;
  }

  .divProduct:hover{
    transform: scale(1.05);
  }

  .divProduct:hover > h4{
    display: block;
    padding: 10px 20px;
  }

  .divProduct:hover > .divIcons{
    background-color: white;
  }

  .divImage > img{
    width: 100%;
  }

  .divIcons{
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }

</style>
