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


export default {
    name:"Product",
    props: ['products'],
    data : () => {
      return {
        liked : [],
        panier: []
      }
    },
    methods : {
        setLikeStorage(){

            setTimeout(() => {
                localStorage.setItem("likes",JSON.stringify(this.liked))

                if(this.liked.length > 0){
                    document.querySelector("#lengthFav").classList.add("visible")
                }else{
                    document.querySelector("#lengthFav").classList.remove("visible")
                }
                document.querySelector("#lengthFav").innerHTML = this.liked.length


            }, 300);
        },
        getProductLiked(){
            let productsLiked = JSON.parse(localStorage.getItem("likes"))
            this.liked = (productsLiked == null) ? [] : productsLiked

            if(this.liked.length > 0){
                document.querySelector("#lengthFav").classList.add("visible")
            }else{
                document.querySelector("#lengthFav").classList.remove("visible")   
            }
            document.querySelector("#lengthFav").innerHTML = this.liked.length

        },
        addToCart(){
            setTimeout(() => {
                localStorage.setItem("cart",JSON.stringify(this.panier))
            }, 300);
        }
    },
    mounted(){
        this.getProductLiked()
    }
}

</script>




<style>

</style>