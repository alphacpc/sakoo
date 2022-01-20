<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>Page d'accueil</h2>

    <div v-for="product in elements" :key="product">{{product.Nom}}</div>

    <p>Salam</p>

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
