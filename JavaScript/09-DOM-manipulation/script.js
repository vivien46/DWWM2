let contenu = document.querySelector('#contenu');

/*
.createElement() permet de créer une balise HTML

.appendChild() placer un element à l'interieur d'un autre à la suite de contenu existant
.before() placer avant l'élément
.after() placer après l'élément

*/

let unP = document.createElement('p');

unP.classList.add('style1');
unP.innerHTML = 'Ceci est mon Paragraphe';

contenu.appendChild(unP);

let uneImage = document.createElement('img');
uneImage.setAttribute('src','https://picsum.photos/200/200');
uneImage.setAttribute('alt','une image aléatoire');

// solution
contenu.appendChild(uneImage);
//ou
// unP.after(uneImage);


