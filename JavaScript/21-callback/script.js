fetch('https://cdn.futura-sciences.com/sources/maison-argile.jpg')
.then(function (reponse){
    console.log(reponse);
    return reponse.blob()
})