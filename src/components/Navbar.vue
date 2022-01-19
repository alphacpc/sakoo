<template>
    <div class="divNavigation">
        <div class="logo">
            <img alt="Vue logo" width="100" src="../assets/logo.png">
        </div>

        <nav id="nav">
            <router-link to="/">Accueil</router-link>
            <router-link to="/favories">Favories</router-link>
            <router-link to="/panier">Mon panier</router-link>
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
    background: yellowgreen;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 4%;
}

#nav {
  padding: 30px;
  background: hotpink;
  width: 30%;
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