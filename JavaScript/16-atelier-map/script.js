const megeolocaliser = document.querySelector('#megeolocaliser');
const adresse = document.querySelector('#adresse');
const boutonGO = document.querySelector('#go');
const carte = document.querySelector('#carte');

let leaflet;
let zoom = 17;
let marqueur;

function genereMap(lat,lon){

    //si y avait déjà une carte de générer, on la reinitialise
    if(leaflet){
        leaflet.off();
        leaflet.remove();
    }
    leaflet = L.map(carte).setView([lat,lon],zoom);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',{minZoom :1, maxzoom:20}).addTo(leaflet);

        //exemple
        L.circle([lat,lon],{radius: 50}).addTo(leaflet);

        //marqueur
        marqueur= L.marker([lat,lon]).addTo(leaflet).bindPopup('Vous êtes ici').openPopup();


}
megeolocaliser.addEventListener('click',function(){
    navigator.geolocation.getCurrentPosition(function(infos){
        let lat= infos.coords.latitude;
        let lon = infos.coords.longitude;

        console.log(infos.coords);
        genereMap(lat,lon);

    },function(error){},{
        enableHighAccuracy : true
    });
});

//test unitaire
// genereMap(10,50);

adresse.addEventListener('input',function(){
    if(this.value.length > 2 ){
        boutonGO.disabled=false;
    }
    else{
        boutonGO.disabled=true;
    }
});

const URLAPI = "https://nominatim.openstreetmap.org/search/";

function interroAPI(adresse,callback){

    let urlRecherche = `${URLAPI}${adresse}?format=json&limit=1&addressdetails=1&accept-language=fr-FR`;

    fetch(urlRecherche)
        .then(function(reponse){return reponse.json(); })
        .then(function(datas){callback(datas); })
        .catch(function(error){console.log(error); });
}

//test unitaire
// interroAPI('10, rue de rivoli, paris',function(donnees){
//     console.log(donnees);
//     genereMap(donnees[0].lat,donnees[0].lon);

// });

boutonGO.addEventListener('click',function(){
    let adresseSaisie = adresse.value;
    if( adresseSaisie.length > 2){
        interroAPI(adresseSaisie,function(donnees){

            if(donnees.length>0){
                genereMap(donnees[0].lat,donnees[0].lon);
                marqueur.bindPopup(donnees[0].display_name);
            }
        });
    }
})

// https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1
//remplacer {lat} et {lon} par la latitude et la longitude à rechercher

//pour itinaire prendre API Rooting leaflet rooting machine

function itineraire(lat_depart, lon_depart, lat_arrivee, lon_arrivee){
    genereMap(lat_depart, lon_depart);
 
L.routing.control(
    {
        language : 'fr',
        waypoints :[
            [lat_depart,lon_depart],
            [lat_arrivee,lon_arrivee]
        ],
        routeWhileDragging : false,
        draggableWaypoints : false,
        addWaypoints:false
    }
).addTo(leaflet);
}

itineraire(46,5,20,63);