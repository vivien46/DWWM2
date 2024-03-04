const APIKEY = '';

const URLAPI = 'https://api.rss2json.com/v1/api.json?';

let flux1 = 'https://fr.motorsport.com/rss/motogp/news/';
let flux2 = 'https://fr.motorsport.com/rss/f1/news/';
let flux3 = 'https://feeds.feedburner.com/crunchyroll/rss/news?lang=frFR';//

function xml2json(source, callback){
    let option = {
        'rss_url' : source,
        'api_key' : APIKEY
    };
    // à transformer en rss_url=source&api_key=apikey
    // la classe URLSearchParams fabrique une notation URL à partir d'un objet

    fetch(URLAPI + new URLSearchParams(option).toString() )
    .then(function(reponse){ return reponse.json(); })
    .then(function(datas){ callback(datas); })
    .catch(function(error){ console.log(error); })
}

let contenu = document.querySelector('#contenu');

let listeFlux = [flux1, flux2];

listeFlux.forEach(function (flux){
    xml2json(flux,function(donnees){
        console.log(donnees);
        if(donnees.status == 'ok'){

            donnees.items.forEach(function(item){
                //console.log(item);
                let article = document.createElement('article');
                let titreArticle = document.createElement('h2');
                let imageArticle = document.createElement('img');

                titreArticle.innerHTML = item.title;
                imageArticle.setAttribute('src',item.enclosure.link);
                imageArticle.classList.add('vignette');
                article.appendChild(titreArticle);
                article.appendChild(imageArticle);
                contenu.appendChild(article);
            });
        }
    });
});