switch(e.key){
    case 'ArrowRight' :
    case 'd' :
    case 'D' :
          posLeftActuelle = parseInt(carrebleu.style.left);
    posLeftActuelle += 5;
    carrebleu.style.left = posLeftActuelle + 'px'; break;

    case 'ArrowLeft' : posLeftActuelle = parseInt(carrebleu.style.left);
    if(posLeftActuelle > 0){
    posLeftActuelle -= 5;
    carrebleu.style.left = posLeftActuelle + 'px';
    } 
    break;

    case 'ArrowUp' :  posTopActuelle = parseInt(carrebleu.style.top);
    if(posTopActuelle > 0)
    posTopActuelle -= 5;
    carrebleu.style.top = posTopActuelle + 'px'; break;

    case 'ArrowDown' :  posTopActuelle = parseInt(carrebleu.style.top);
    // if(posLeftActuelle > 0)
    posTopActuelle += 5;
    carrebleu.style.top = posTopActuelle + 'px'; break;
};
// });