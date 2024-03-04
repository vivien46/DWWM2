<> ShareMyCode.io
Ajouter un code
Connexion
Inscription
Voici votre URL de partage https://sharemycode.io/c/61a64e6 (Cliquer pour copier)
<template>
  <!-- <h1>Bonjour {{ user.firstName }}</h1> -->
  <p>{{ prenom }}</p>
  <p>{{ age }}</p>
  <p>{{ majeur }}</p>
  <p>Je suis dans le composant HelloWorld</p>
  <input :type="typeInput">
  <!-- Directive -->
  <button @click="sayHello()">Cliquez ici</button>

  <hr>
  <!-- Exo 1 -->
  <h2>Exercice 1</h2>
  <input type="text" @input="changeColor($event.target.value)">
  <div class="square" :style="{ backgroundColor: colorSquare }"></div>
  <!-- Exo 2 -->
  <h2>Exercice 2</h2>
  <button @click="showHello = !showHello">
    <span v-if="showHello == true">Disparition</span>
    <span v-else>Apparition</span>
    du Hello
  </button>
  <p v-if="showHello == true">Hello!</p>
  <!-- Exo 3 -->
  <h2>Exercice 3</h2>
  <ul>
    <li v-for="user in users" :key="user">
      {{ user.firstName }} {{ user.lastName }}
    </li>
  </ul>
  <hr>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      prenom: 'chris',
      age: 30,
      majeur: true,
      typeInput: 'number',
      // Exo 1
      colorSquare: 'grey',
      // Exo 2
      showHello: true,
      // Exo 3
      users: [
        {
          firstName: 'Chris',
          lastName: 'B'
        },
        {
          firstName: 'Chris',
          lastName: 'B'
        },
        {
          firstName: 'Chris',
          lastName: 'B'
        },
        {
          firstName: 'Chris',
          lastName: 'B'
        },
        {
          firstName: 'Chris',
          lastName: 'B'
        }
      ]
    }
  },
  methods: {
    sayHello() {
      console.log('Salut!');
    },
    // Exo 1
    changeColor(color) {
      this.colorSquare = color;
    }
  },
  mounted() {
    // this.sayHello(); 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: 
red
  }
  p {
    background-color: 
rgb(205, 248, 205);
  }
  .square {
    height: 200px;
    width: 200px;
  }
</style>
HTML
Informations
Cet extrait a été créé le 19 avr. 2023 à 14:04:48

Cet extrait expire le 19 mai 2023 à 14:04:48

Langage : html

Logo html

Link
Voici votre URL de partage : https://sharemycode.io/c/61a64e6
Service par Nouvelle-Techno.fr - Mentions légales - Vie privée