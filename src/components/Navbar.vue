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
            <router-link to="/favoris"><fa id="faIcon" icon="heart"/><span id="lengthFav"></span></router-link>
            <router-link to="/panier">Mon panier <fa icon="shopping-cart"/></router-link>
            <router-link to="/auth">se connecter</router-link>
        </nav>
    </div>
</template>

<script>


export default {
    name: "Navbar",
    likes : 0
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

  #menu, label[for="menu"]{
    display: none;
  }

  #faIcon{
    width: 30px;
    height: 30px;
    position: relative;
    z-index: 2;
  }

  #lengthFav{
    background: #F05;
    color: #FFFFFF;
    font-size: 10px;
    font-weight: bold;
    padding: 2px 5px;
    border-radius: 50%;
    position: absolute;
    visibility: hidden;
  }

  #lengthFav.visible{
    visibility: visible;
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

    #menu, label[for="menu"]{
      display: flex;
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