<template>
  <div class="home">
    
    <h1>Nos Produits</h1>

    <div class="divSearch">
      <input v-model="searchKey" id="search" type="search" placeholder="Recherche ..." autocomplete="off">
      <p v-if="searchKey && productFiltered.length >= 1">{{productFiltered.length}} résultat<span v-if="productFiltered.length >1">s</span></p>
    </div>

    <div class="divCardContainer">
      <Product :products="productFiltered"/>
    </div>

    <!-- NO RESULT WITH SEARCH -->
    <div class="divNotResult" v-if="productFiltered.length == 0">
      <p>Pas de résultats pour le produit "<span class="searchKey">{{searchKey}}</span>", veuillez réessayer avec un autre !</p>
    </div>

  </div>
</template>

<script>

  import myDatas from "./../data.json";
  import Product from "./../components/Product.vue";

  export default {
    name: 'Home',
    data : () => {
      return {
        elements: myDatas,
        searchKey: "",
      }
    },
    components: {Product},
    computed:{
      productFiltered(){
        return this.elements.filter((product) => product.nom.toLowerCase().includes(this.searchKey.toLowerCase()));
      }
    }
  }

</script>


<style>
  .home{
    padding-bottom: 100px;
  }

  /* **** BANNER ***** */
  .divBanner{
    background-color: aquamarine;
    height: 400px;
    width: 100%;
  }

  /* *******DIV PRODUCT LIST ******** */
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

  .divProduct .simpleInfos{
    display: none;
    margin-top: -40px;
  }

  .simpleInfos a{
    color: black;
  }

  .divProduct .simpleInfos h4{
    font-size: 18px;
    letter-spacing: .5px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    background: transparent;
    padding-left: 20px;
    padding-top: 10px;
    text-transform: uppercase;
  }

  .divProduct .simpleInfos h4:hover{
    color: #f05;
  } 

  .divImage img{
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 0px 0px ;
  }

  .divIcons{
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    box-shadow: 0 4px 4px 0;
    margin-top: -10px;
  }

  .divIcons .heart-icon-container svg{
    cursor: pointer;
  }
  .divIcons .heart-icon-container input{
    /* display: none; */
  }

  .divIcons .heart-icon-container input:checked ~ label svg{
    color: red;
  }

  .divIcons span.cart svg:hover{
    color: gold;
  }

  .divProduct:hover{
    transform: scale(1.05);
  }

  .divProduct:hover > .simpleInfos{
    display: flex;
  }

  .divProduct:hover > .divIcons{
    margin-top: 0px;
  }


  /* ******SEARCH ********* */
  .divSearch{
    display: flex;
    align-items: center;
    padding-bottom: 50px;
  }

  .divSearch #search{
    margin-right: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid ;
    font-size: 20px;
    outline: 0;
  }
  
  /* *****Title Product **** */
  h1{
    font-size: 45px;
    padding: 20px 0;
  }

  /****** NOT RESULT ***** */
  .divNotResult{
    padding: 100px 0 200px 0;
    text-align: center;
  } 
  .divNotResult p{
    padding-top: 50px;
    font-size: 25px;
    letter-spacing: 1px;
  }
  .searchKey{
    font-weight: bold;
    font-size: 30px;
    color: #f05;
  }


  @media only screen and (max-width: 768px) {
    .divProduct{
      width: 46%;
    }
    .divNotResult{
      padding: 120px 0 200px 0;
    } 
  }

  @media only screen and (max-width: 480px) {
    .divProduct{
      width: 100%;
      margin-bottom: 40px;
    }
  }

</style>
