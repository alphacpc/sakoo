<template>
    <div class="divNavigation">
        <div class="logo">
            <router-link to="/"><img alt="Vue logo" width="100" src="../assets/images/logo.png"></router-link>
        </div>

        <nav id="nav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/favoris">favoris</router-link>
            <router-link to="/panier">Mon panier <fa icon="shopping-cart"/></router-link>
            <router-link to="/auth">se connecter</router-link>
        </nav>
    </div>
</template>

<script>

export default {
    name: "Navbar"
}

</script>

<style>

  .divNavigation{
      background: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 4%;
      /* border-bottom: 1px dashed gray; */
  }

  #nav {
    padding: 30px;
    background: transparent;
    width: 40%;
    display: flex;
    justify-content: space-between;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }


</style>