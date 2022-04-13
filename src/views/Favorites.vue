<template>


  <div v-if="loadFavorites">
    <h1>Mes Favoris <span>({{loadFavorites.length}} {{ (loadFavorites.length == 1) ? 'article' : 'articles'}})</span></h1>

    <div class="FavoprisContainer">
      
      <div v-for="product in loadFavorites" :key="product" class="divProduct">
          <div class="divImage">
            <img :src="require(`./../assets/images/${product.image}`)" alt="">
          </div>

          <div class="simpleInfos">
            <router-link to="/"><h4>{{product.nom}}</h4></router-link>
          </div>
          
          <div class="divIcons">
            <span><fa icon="heart"/></span>
            <span><fa icon="shopping-cart"/></span>
          </div>
      </div>
    </div>
  </div>

    <!-- PAS DE FAVORIS -->
  <div v-else class="noFavoris">
    <img src="./../assets/coup-de-coeur.png" alt="">
    <p>Aucun produit aimé pour le moment !</p>
  </div>





</template>






<script>

  export default {
      name:"Favorites",

      computed: {
        loadFavorites(){
          console.log(JSON.parse(localStorage.getItem("likes")))
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