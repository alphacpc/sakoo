<template>
  
  <div class="singleContainer single-product" v-if="product">
    <div class="divInformations">
      <div class="divProductImage">
        <img :src="require(`./../assets/images/${product.image}`)" alt="single product">
      </div>

      <div class="divProductInfos">
        <div class="productName">
          <h2>{{product.marque}}</h2>
          <hr id="separeted"/>
          <h1>{{product.nom}}</h1>
          <h4 class="product-price">{{product.prix}} FCFA</h4>
        </div>

        <div class="productDescription">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit adipisci alias illum? Modi laborum reiciendis dolor nesciunt blanditiis accusamus maiores, sequi ratione voluptate distinctio libero asperiores cum adipisci harum veritatis!
          Possimus aut, esse non beatae corrupti exercitationem recusandae eum fugit eius impedit explicabo a? Doloribus, eaque delectus culpa laudantium veniam fugiat magnam ex quasi libero a quaerat soluta sunt excepturi.</p>
        </div>

        <div class="productDelevery">
          <h2>livraison</h2>
          <div class="borderDelevery">
            <img src="./../assets/icon3.png" alt="icon livraison">
            <div>
              <span class="label">1 à 2 jours</span>
              <span class="value">Gratuit</span>
            </div>
          </div>
        </div>

        <div class="productAddCart">
          <button class="btn-add-cart">Ajouter au panier</button>
        </div>

        <div class="productCaracteristique">
          <h2>caractéristiques</h2>
          <ul>
            <li><span class="label">Couleur</span><span class="value">Noir</span></li>
            <li v-for="item in [1,2,3,4]" :key="item"><span class="label">Matiére</span><span class="value">Polyuréthane, polyester</span></li>
          </ul>
        </div>

      </div>
    
    </div>

    <div class="relatedProducts" v-if="relatedProduct">
      <h2>Produits associés</h2>

      <div class="productList">
        <router-link v-for="item in relatedProduct" :key="item" to="/detail/sakoo"><img :src="require(`./../assets/images/${item.image}`)" alt=""></router-link>
      </div>
    </div>

  </div>



</template>

<script>
  import myDatas from "./../data.json";
  import { useRoute } from "vue-router";  

  export default {
  name: 'Detail',
  data: ()=>{
    return{
      name: "",
      marque:"",
      datas: myDatas
    }
  },
  mounted(){
    const route = useRoute();
    this.name = route.params.name;
    this.marque = route.params.marque;
  },
  computed:{
      product(){
        let tab = this.datas.filter(product => product.nom == this.name);
        return tab[0];
      },
      relatedProduct(){
        return this.datas.filter(product => product.marque == this.marque);
        
      }
  }
}
</script>

<style>

  .singleContainer{
    background-color: white;
    padding: 50px 0 100px 0;
  }

  /* ***** BLOC INFORMATIONS PRODUCT ******* */
  .divInformations{
    display: flex;
    justify-content: space-between;
  }

  .divProductImage{
    background-color: white;
    width: 40%;
  }

  .divProductImage img{
    width: 100%;
  }

  .divProductInfos{
    width: 59%;
    padding: 0 20px;

  }

  .divProductInfos h2{
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: capitalize;
  }

  .productName h2{
    text-transform: uppercase;
  }

  .productCaracteristique h2{
    padding: 30px 0 10px 0;
  }

  #separeted{
    width: 20% !important;
    padding: 2px;
    background-color: grey;
    border: none;
    margin-top: 20px;
  }
  .product-price{
    color: #f05;
    font-size: 35px;
    letter-spacing: 1px;
    margin: 20px 0;
  }

  .productDescription p{
    letter-spacing: 0.5px;
    text-align: justify;
    line-height: 30px;
  }

  .productDelevery{
    margin-top: 40px;
    padding-bottom: 40px;
  }
  .productDelevery h2{
    padding-bottom: 40px;
  }

  .borderDelevery{
    border: 1px solid rgb(202, 202, 202);
    padding: 20px;
    border-radius: 4px;
  }

  .borderDelevery > div{
    display: flex;
    justify-content: space-between;
  }

  .borderDelevery > div .label{
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  .productAddCart{
    display: flex;
    justify-content: flex-end;
    padding: 5px;
  }
  .btn-add-cart{
    background-color: black;
    color: white;
    padding: 14px;
    width: 100%;
    font-weight: bold;
    border: 1px solid transparent;
    border-radius: 4px;
    cursor: pointer;
    transition: all ease .3s;
  }
  .btn-add-cart:hover{
    background-color: gold;
    color: black;
  }

  .productCaracteristique ul{
    list-style: none;
  }
  .productCaracteristique li{
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    padding: 15px 0;
  }
  .productCaracteristique li .label{
    font-weight: bold;
    letter-spacing: 1px;
  }
  .productCaracteristique li:last-child{
    border-bottom: none;
  }




  /* ***** BLOC INFORMATIONS PRODUCT ******* */
  .relatedProducts{
    margin-top: 100px;
  }
  .relatedProducts h2{
    text-align: center;
    font-size: 45px;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 20px 0;
  }
  .productList{
    display: flex;
    justify-content: space-between;
  }

  .productList a{
    display: flex;
    width: 24%;

  }

  .productList a img{
    width: 100%;
  }

</style>