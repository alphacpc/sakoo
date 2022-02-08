<template>
  

  <div class="LoginContainer">

    <form @submit.prevent="handleSubmit">

      <div class="panelHead">
        <h1>{{title}}</h1>
        <hr id="signin">
      </div>

      <div class="formGroup" v-for="(input,index) in inputs" :key="index">
        <label for="email"><fa :icon="input.icon"/></label>
        <input :type="input.type" :id="input.name" v-model="input.value" autocomplete="off" :placeholder="input.placeholder">
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

    data: ()=>{
      return {
        title:"Connexion",
        inputs: [
          {
            label:"Email",
            placeholder:"Entrer votre addresse electronique",
            value: '',
            name:'email',
            type: "email",
            icon:"envelope"
          },
          {
            label:"Mot de passe",
            placeholder:"Entrer votre mot de passe",
            value: '',
            name:'password',
            type: "password",
            icon:"lock"
          },
        ]
      }
    },
    methods:{
      handleSubmit(){
        console.log(this.inputs[0].value, this.inputs[1].value);
      }
    },
    
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
    padding: 10px;
    display: flex;
    border-radius: 4px;
    align-items: center;
    justify-content: space-between;
  }

  .formGroup > label{
    margin-right: 10px;
    background: tomato;
    border-radius: 50%;
    padding: 15px;
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


  @media only screen and (max-width:480px) {
    .LoginContainer{
      padding-top: 0px !important;
    }

    .divSignup{
      flex-direction: column;
    }

    .formGroup > label{
      padding: 8px;
    }
    .formGroup input{
      font-size: 15px;
    }
    .divSignup a{
      margin-left: 0;
      margin-top: 20px;
    }
  }

</style>