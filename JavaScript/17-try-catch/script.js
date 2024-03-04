try{

    console.log(toto);
}

catch(erreur){

    console.log('Erreur personnalisée');
}

// ---------------------------------

function appel(){

    if(typeof(toto) == 'undefined'){
        throw new Error("Toto n'existe pas");
    }
    else{
        return toto;
    }
}

try{
    console.log( appel() );
}

catch(erreur){
    console.log('Erreur obtenue :' + erreur);
}

// ----------------------------------------

// On créé une classe pour ajouter une erreur personnalisée
class customError{
    constructor(message){
        this.message = message;
        this.name = 'Erreur personnalisée';
    }
}

function surfaceCercle(rayon){

    //perimetre : 2pi * r
    // surface : pi * r²
    if(isNaN(rayon)){
        // on instancie la classe pour fabriquer un objet de type 'customError'
        throw new customError("le rayon n'est pas numérique");
    }
    else{
        return Math.PI * Math.pow(rayon,2);
    }
}

try{
    console.log(surfaceCercle('4'));
}
catch(erreur){
    console.error(erreur.name + ':' + erreur.message);
}