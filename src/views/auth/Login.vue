<template>
  

  <div class="LoginContainer">

    <form method="post">

      <div class="panelHead">
        <h1>Connexion</h1>
        <hr id="signin">
      </div>

      <div class="formGroup">
        <label for="email">E</label>
        <input type="text" id="email" placeholder="Entre addresse électronique">
      </div>

      <div class="formGroup">
        <label for="mdp">M</label>
        <input type="password" id="mdp" placeholder="Entre votre mot de passe">
      </div>

      <div class="divForget">
        <router-link to="/auth">Mot de passe oublié</router-link>
      </div>

      <input type="submit" class="btn-login" value="se connecter">

      <hr id="signup">

      <div class="divSignup">
        <p>Vous n'avez pas de compte !</p><router-link to="/inscription">s'inscrire</router-link>
      </div>

    </form>

  </div>

</template>

<script>


  export default {
    name: 'Login',
  }


</script>

<style>



  .LoginContainer{
    background: white;
    padding: 100px 0 140px 0;
    display: flex;
    justify-content: center;
  }

  /* ****FORMULAIRE***** */
  form{
    background: white;
    width: 400px;
    padding-bottom: 20px;
  }

  #signin{
    padding: 4px;
    width: 30%;
    background-color: tomato;
    border: none;
    margin-bottom: 40px;
  }

  .formGroup{
    background-color: white;
    margin-bottom: 20px;
    border: 1px solid grey;
    padding: 4px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .formGroup > label{
    margin-right: 10px;
    background: tomato;
    border-radius: 50%;
    padding: 4px 8px;
    color: whitesmoke;
    font-weight: bold;
    cursor: pointer;
  }

  .formGroup input{
    width: 90%;
    padding: 8px 2px;
    border-color: transparent;
    outline: 0;
    font-size: 18px;
    letter-spacing: 1px;
  }

  .divForget{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 20px;
  }
  .divForget a{
    font-size: 15px;
    letter-spacing: 1px;
    color: black;
  }

  .btn-login{
    width: 100%;
    background-color: tomato;
    padding: 14px;
    border: none;
    color: white;
    font-weight: bold;
    letter-spacing: 1px;
    border-radius: 4px;
    cursor: pointer;
  }

  hr#signup{
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .divSignup{
    display: flex;
  }
  .divSignup a{
    color: tomato;
    font-weight: bold;
    margin-left: 10px;
  }

</style>