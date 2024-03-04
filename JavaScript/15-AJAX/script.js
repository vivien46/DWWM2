/*

Asynchronus
Javascript
And
Xml

*/

/*
status HTTP - 200 OK , 404 non trouvé
readyState - 0 à 4 
*/

fetch('departements-region.json')
    .then( function(reponse){
        console.log(reponse);
        return reponse.json(); //alimenter la fonction du then suivant
    })
    .then( function(datas){
        console.log(datas);//tableau d'objets
        for( let i=0; i<datas.length; i++){
            let option = document.createElement('option');
            option.innerHTML = datas[i].dep_name;
            document.querySelector('#departement').appendChild(option);
        }
    })

    .catch (function(erreur){
        console.log('Erreur :' + erreur);
    });

    // fetch().then().then().catch();

    //--------------------------------------------------
    let URLAPI = 'https://apicarto.ign.fr/api/codes-postaux/communes/';
    document.getElementById('code_postal').addEventListener('input',function(){
        let cp = this.value;
        let $this = this;
        
        if(cp.length == 5){
            document.querySelector('#villes').innerHTML="";

            fetch(URLAPI + cp)
            .then(function(reponse){
                if (reponse.status == 200){
                    return reponse.json();
                }
                else{
                    console.log(reponse);
                    $this.value = $this.value.substring(0,5)+' non trouvé';
                }
            })
            .then(function(datas){
                console.log(datas);
                if(datas){
                    for(let i=0; i<datas.length; i++){
                        let option = document.createElement('option');
                        option.innerHTML= $this.value + ' ' + datas[i].nomCommune;
                        document.querySelector('#villes').appendChild(option);
                    }
                }
            })
            .catch(function(erreur){
                console.log(erreur);
            });
        }
    });