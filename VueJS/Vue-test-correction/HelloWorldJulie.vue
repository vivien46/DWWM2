<template> 
    <!-- {{  }} = interpolation  -->
      <!-- <h1>Bonjour {{ user.firstName }}</h1> -->
      <p>{{ prenom }}</p>
      <p>{{age}}</p>
      <p>{{fille}}</p>
      <p>Je suis ds le composant Hello Word</p>
      <input :type="typeInput">
      <!-- Directive  -->
      <button @click="sayHello()">Cliquez ici</button>
    
      <hr>
      <hr>
      <!-- Exo1 -->
      <h2>Exercice 1</h2>
      <input type="text" @input="  changeColor($event.target.value)"/>
      <div class="square" :style="{backgroundColor: colorSquare}"></div>
    
      <hr>
      <hr>
      <!-- Exo2 -->
      <h2>Exercice 2</h2>
    
      <button @click="appararition = !appararition">
        <span v-if="appararition"> Disparition</span>
        <span v-else>Apparition </span>
      </button>
    
      <p v-if="appararition" :style="{backgroundColor: 'red', color: 'white'}">Hello ! </p>
    
      <hr>
      <hr>
      <!-- Exo3 -->
      <h2>Exercice 3</h2>
      <ul>
        <li v-for="user in users" :key="user">{{ user.firstName }} {{ user.lastName }}</li>
      </ul>
    
    
    </template>
    
    <script>
    export default {
      name: 'HelloWorld',
      data(){ 
        return{ 
          //Objet
          // user:{ firstName: 'Julie'},
          // String
          prenom: 'Julie',
           // Number
          age: 23,
          // Boolean
          fille: true,
          typeInput : 'number',
          // Exo 1
          colorSquare: 'grey',
          // Exo 2
          appararition: false,
          // Exo 3
          users: [ 
            {
              firstName: "Julie",
              lastName: "Mai",
            },
            {
              firstName: "Julie",
              lastName: "Mai",
            },
            {
              firstName: "Julie",
              lastName: "Mai",
            },
            {
              firstName: "Julie",
              lastName: "Mai",
            },
            {
              firstName: "Julie",
              lastName: "Mai",
            },
            
          ]
        }
          
      },
      methods: { 
        sayHello(){
          console.log("Salut !")
        },
        changeColor(color){
          this.colorSquare = color;
        },
      },
      mounted(){ 
        this.sayHello();
      },
      }
    
    
    
    </script>
    
    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>
    h1 { 
      color: 
    red;
    }
    p { 
      color: 
    blue;
    }
    
    .square { 
      border: 1px solid 
    black;
      height: 150px;
      width: 150px;
      margin-top: 15px;
    }
    </style>