<template>


  <h1>Mes Favoris <span>(2 articles)</span></h1>

  <div class="FavoprisContainer">
    
    <div v-for="product in [1,2,3]" :key="product" class="divProduct">
        <div class="divImage">
          <img src="./../assets/images/sac10.jpg" alt="">
        </div>

        <div class="simpleInfos">
          <router-link to="/"><h4>Tommy Hilfiger</h4></router-link>
        </div>
        
        <div class="divIcons">
          <span><fa icon="heart"/></span>
          <span><fa icon="shopping-cart"/></span>
        </div>
    </div>

    <!-- PAS DE FAVORIS -->
    <div v-if="product" class="noFavoris">
      <img src="./../assets/coup-de-coeur.png" alt="">
      <p>Aucun produit aimé pour le moment !</p>
    </div>

  </div>



</template>

<script>
export default {
    name:"Favorites"
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