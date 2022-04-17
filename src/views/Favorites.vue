<template>

  <div v-if="loadFavorites">
    <h1>Mes Favoris <span>({{loadFavorites.length}} {{ (loadFavorites.length == 1) ? 'article' : 'articles'}})</span></h1>

    <div class="FavoprisContainer">
      
      <Product :products="loadFavorites"/>
      
    </div>
  </div>

    <!-- PAS DE FAVORIS -->
  <div v-else class="noFavoris">
    <img src="./../assets/coup-de-coeur.png" alt="">
    <p>Aucun produit aimé pour le moment !</p>
  </div>

</template>





<script>

  import Product from "./../components/Product.vue";

  export default {
      name:"Favorites",
      components: {Product},
      computed: {
        loadFavorites(){
          return JSON.parse(localStorage.getItem("likes"))
        }
      }

  }
  

</script>






<style>
  .FavoprisContainer{
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 100px;
    min-height: 60vh;
  }


  .noFavoris{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 0 100px 0;
  }

  .noFavoris p{
    letter-spacing: 1px;
    font-weight: bold;
    font-size: 25px;
  }

  @media only screen and (max-width:480px) {
    h1{
      font-size: 30px;
    }
  }

</style>