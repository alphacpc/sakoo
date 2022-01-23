<template>
  
  <div class="SignupContainer">

    <form method="post">

      <div class="panelHead">
        <h1>Inscription</h1>
        <hr id="signin">
      </div>

      <div class="formGroup">
        <label for="email">S</label>
        <input type="text" id="email" placeholder="Entrer votre nom d'utilisateur">
      </div>

      <div class="formGroup">
        <label for="email">E</label>
        <input type="text" id="email" placeholder="Entre votre addresse électronique">
      </div>

      <div class="formGroup">
        <label for="mdp">M</label>
        <input type="password" id="mdp" placeholder="Entre votre mot de passe">
      </div>

      <div class="formGroup">
        <label for="mdp">C</label>
        <input type="password" id="mdp" placeholder="Confimer le mot de passe">
      </div>

      <input type="submit" class="btn-login" value="Enregistrer">

      <hr id="signup">

      <div class="divSignup">
        <p>Vous avez déjà un compte !</p><router-link to="/auth">se connecter</router-link>
      </div>

    </form>

  </div>


</template>

<script>
export default {
  name: 'Signup',
}
</script>

<style>

  .SignupContainer{
    background: white;
    padding: 100px 0 100px 0;
    display: flex;
    justify-content: center;
  }  

  .SignupContainer hr#signin{
    background-color: yellowgreen;
  }

  .SignupContainer .formGroup > label{
    background: yellowgreen;
  }

  .SignupContainer .divSignup a{
    color: yellowgreen;
  }

  .SignupContainer .btn-login{
    background-color: yellowgreen;
  }


</style>