<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Page d'accueil</h2>

    <div  v-for="product in products">
      <p>{{product.Nom}}</p>
    </div>
  </div>
</template>

<script>

  import myDatas from "./../data.json";

  const products = myDatas;

  console.log(products);

  export default {
    name: 'Home',

  }

</script>
