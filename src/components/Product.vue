<template>

    <div v-for="product in products" :key="product.nom" class="divProduct">
        <div class="divImage">
            <a :href="$router.resolve({name:'Detail', params:{ name:product.nom}}).href">
                <img :src="require(`./../assets/images/${product.image}`)" alt="">
            </a>
        </div>

        <div class="simpleInfos">
            <a :href="$router.resolve({name:'Detail', params:{ name:product.nom}}).href">
                <h4>{{product.nom}}</h4>
            </a>
        </div>
            
        <div class="divIcons">
            <div class="heart-icon-container">
                <input 
                type="checkbox" 
                name="checkbox" 
                v-bind:id="product.nom" 
                :value="product" 
                v-model="liked" 
                @click="setLikeStorage()"
                >
                <label v-bind:for="product.nom">
                <fa icon="heart"/>
                </label>
            </div>
            <span class="cart" @click="addToCart()"><fa icon="shopping-cart"/></span>
        </div>
    </div>
  
</template>

<script>

let likeds = []


export default {
    name:"Product",
    data : () => {
      return {
        liked : likeds
      }
    },
    props: ['products'],
    methods:{
      setLikeStorage(){
          setTimeout(() => {
            localStorage.setItem("likes",JSON.stringify(this.liked))
          }, 300);
      },
      addToCart(){
        alert("Add to cart second !")
      }
    },
    updated: ()=>{
        this.setLikeStorage
    }
}

</script>




<style>

</style>