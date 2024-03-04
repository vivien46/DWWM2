const spanOeil = document.querySelector('#oeil');
const mdp = document.querySelector('#mdp');

console.log(spanOeil);

spanOeil.addEventListener('click',function(){
    this.getElementById('oeil');

});

//correction
/*
const mdp = document.getElementById('mdp');
const oeil = document.getElementById('oeil');

oeil.addEventListener('click',function(){
    
    if (mdp.getAttribute('type') == 'password'){
     mdp.setAttribute('type','text');   
    }
    else{
        //il n'est pas en password, c'est qu'il est forcément de type text
        mdp.setAttribute('type','password');
    }
});*/