<template>
  
  <h1>Mon panier <span>(4 articles)</span></h1>

  <div class="cartContainer">
    <table id="products">

      <thead>
        <tr>
          <th id="deleteAction"></th>
          <th id="productImage">Image</th>
          <th id="productName">Nom du produit</th>
          <th id="productMatiere">Matiére</th>
          <th id="productQuantity">quantité</th>
          <th id="productPrice">Prix</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="item in [1,2,3,4]" :key="item">
          <td class="delete"><span>X</span></td>
          <td><img src="./../assets/images/sac1.jpg" width="100" alt="lacoste"></td>
          <td>lacoste Sac bandoulière</td>
          <td>Chlorure de polyvinyle</td>
          <td class="quantity">
            <span id="less">-</span>
            <span id="value">1</span>
            <span id="add">+</span>
          </td>
          <td class="price">12000 FCFA</td>
        </tr>
      </tbody>
    </table>

    <div class="divSup">
      
      <div class="linkActions">
        <router-link to="/" id="btn-continue-buy">Continuer mes achats</router-link>
        <router-link to="/" id="btn-checkout">Passer la commande</router-link>
      </div>

      <p>48000 FCFA</p>
    </div>

   


  </div>

</template>

<script>
export default {
    name: 'Cart'
}
</script>

<style>

  .cartContainer{
    padding-bottom: 100px;
  }


  /* ***** TABLE ******* */
  table{
    background-color: white;
    width: 100%;
    padding-bottom: 10px;
    margin-top: 50px;
  }
  
  thead tr th{
    padding: 20px 0 !important;
    color: black;
    text-transform: uppercase;
    letter-spacing: 1px;

  }

  tbody td{
    text-align: center;
    padding: 20px 0 !important;
    border-bottom: 1px solid grey;
  }
  tbody tr:last-child td{
    border-bottom: none;
  }

  tbody td.delete{
    font-weight: bold;
  }
  tbody td.delete span{
    background-color: rgba(0, 0, 0, 0.425);
    color: white;
    padding: 4px 8px;
    border-radius: 40px;
    cursor: pointer;
    font-size: 15px;
    transition: all ease .3s;
  }
  tbody td.delete span:hover{
    background-color: red;
  }

  tbody td img{
    height: 100px;
    object-fit: fill;
  }

  tbody td.quatity{
    font-weight: bold;
    font-size: 22px;
  }

  tbody td.price{
    font-weight: bold;
    font-size: 22px;
  }
  tbody td.quantity span{
    padding: 10px;
    font-weight: bold;
    cursor: pointer;
  }

  tbody td.quantity #less{
    background-color: red;
    border-radius: 5px 0 0 5px;
  }

  tbody td.quantity #value{
    background-color: transparent;
    padding: 10px 20px;
    background-color: white;

  }

  tbody td.quantity #add{
    background-color: greenyellow;
    border-radius: 0 5px 5px 0;

  }

  /* **** SOMME TOTALE ***** */
  .divSup{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 50px 20px 0 0;
    border-top: 2px solid rgb(168, 168, 168);
  }
  .divSup p{
    font-size: 35px;
    font-weight: bold;
    letter-spacing: 1px;
  }


  .linkActions{
    padding: 10px 0;
    width: 40%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .linkActions a{
    background-color: yellow;
    padding: 20px;
    width: 49%;
    text-align: center;
    font-weight: bold;
    transition: all ease .3s;
  }

  #btn-checkout{
    background-color: black;
    color: white;
  }

  .linkActions a:hover{
    border-radius: 8px;
  }


  @media only screen and (max-width:768px) {
    .divSup{
      align-items: flex-start;
    }
    
    .linkActions{
      flex-direction: column;
    }
    .linkActions a{
      width: 100%;
      padding: 20px 10px;
      margin-bottom: 10px;
    }
  }

</style>