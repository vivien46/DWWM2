const uneSecondeDeg = 6;// 360deg / 60 Secondes
const uneMinuteDeg = 6;// 360deg / 60 minutes
const uneHeureDeg = 30;// 360deg / 12 heures

const PA = document.querySelector('.petiteaiguille');
const GA = document.querySelector('.grandeaiguille');
const TT = document.querySelector('.trotteuse');
const HN = document.querySelector('.hnum');

function majHorloge(){

    let maintenant = new Date();
    let heures = maintenant.getHours();
    let minutes = maintenant.getMinutes();
    let secondes = maintenant.getSeconds();

    
    if( heures <10 ) heures = '0' + heures;
    if( minutes <10 ) minutes = '0' + minutes;
    if( secondes <10 ) secondes = '0' + secondes;

    HN.innerHTML = `Il est ${heures} : ${minutes} : ${secondes}` ;

    //ou 
    // HN.innerHTML = `${(heures<10)?'0'+heures:heures} : ${(minutes<10)?'0'+minutes:minutes} : ${(secondes<10)?'0'+secondes:secondes}`;

    //solution 1
    if(heures>12) heures = heures - 12;

    //solution 2
    // let h12 = heures %12;
    // if( h12 == 0) heures = 12;
    // heures = (heures % 12 == 0) ? 12 : heures % 12;

    // let minutes = maintenant.getMinutes();
    // let secondes = maintenant.getSeconds();

    let angleHeures = heures * uneHeureDeg;
    let angleMinutes = minutes * uneMinuteDeg;
    let angleSecondes = secondes * uneSecondeDeg;

    PA.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleHeures}deg)`;
    GA.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleMinutes}deg)`;
    TT.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleSecondes}deg)`;
}
setInterval(majHorloge,1000);

//premier lancement de la fonction (pour ne pas avoir à attendre la première execution à la fin du temps alloué au setInterval)

majHorloge();

