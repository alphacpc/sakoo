<template>
    <div class="divNavigation">
        <div class="logo">
            <router-link to="/"><img alt="Vue logo" width="100" src="../assets/images/logo.png"></router-link>
        </div>
        <input type="checkbox" name="menu" id="menu">
        <label for="menu" class="burger">
          <fa icon="bars" />
        </label>
        <nav id="nav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/favoris" v-if="[1,2]">favoris</router-link>
            <router-link to="/panier">Mon panier <fa icon="shopping-cart"/></router-link>
            <router-link to="/auth">se connecter</router-link>
        </nav>
    </div>
</template>

<script>


export default {
    name: "Navbar",
    data : () => {
      return {
        likede:[]
      }
    },
    computed:{
      getProductLiked(){
          let hello = localStorage.setItem("likes",JSON.stringify(this.liked));
          console.log(hello);
          return localStorage.setItem("likes",JSON.stringify(this.liked));
      },
    },
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

  @media only screen and (max-width:768px) {
    #nav {
      width: 80%;
    }
  }

  @media only screen and (max-width:480px) {
    .divNavigation{
      flex-direction: column;
      padding: 20px 0;
    }
    .logo{
      margin-bottom: 20px;
    }
    #nav {
      width: 100%;
      background-color: red;
      flex-direction: column;
      padding: 0;
      align-items: center;
      justify-content: center;
      display: none;
      transition: all ease .3s;
    }

    #nav a{
      background-color: #406882;
      width: 100%;
      padding: 15px;
      color: white;
      text-align: center;
      text-transform: capitalize;
    }

    .burger{
      display: block;
      position: absolute;
      right: 4%;
    }

    /* Start checked or not */
    #menu{
      display: none;
    }
    #menu:checked ~ #nav{
      display: flex;
    }
    
  }

</style>