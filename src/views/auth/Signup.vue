<template>
  
  <div class="SignupContainer">

    <form @submit.prevent="handleSubmit">

      <div class="panelHead">
        <h1>{{title}}</h1>
        <hr id="signin">
      </div>

      <div class="formGroup" v-for="(input, index) in inputs" :key="index">
        <label :for="input.name"><fa :icon="input.icon"/></label>
        <input :type="input.type" v-model="input.value" :id="input.name" autocomplete="off" :placeholder="input.placeholder">
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
  data: ()=>{
    return{
      title: "Inscription",
      inputs:[
        {
          label:"pseudo",
          placeholder:"Entrer votre nom d'utilisateur",
          value: '',
          name:'username',
          type: "text",
          icon:"user-tag"
        },
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
        {
          label:"Confirmation du mot de passe",
          placeholder:"Confirmer votre mot de passe",
          value: '',
          name:'cpassword',
          type: "password",
          icon:"lock"
        },
      ]
    }
  },
  methods:{
    handleSubmit(){
      console.log("hello");
      console.log(this.inputs[0].value,this.inputs[1].value, this.inputs[2].value, this.inputs[3].value);
    }
  }
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


  @media only screen and (max-width: 480px){
    .SignupContainer{
      padding-top: 0;
    }
  }

</style>