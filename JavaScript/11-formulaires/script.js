//control login
let login = document.querySelector('#login');
let checklogin = document.querySelector('#checklogin');
let loginOK = false;

// s'assurer que le login 
//login.value.length

login.addEventListener('input',function(){
    
    if (login.value.length <= 3 ){
        checklogin.innerHTML = '<small>Le login doit faire au moins 4 caractères</small>';
        checklogin.classList.add('error');
        loginOK = false;
    }
    else {
        checklogin.innerHTML = '<i class="fa-solid fa-check"></i>';
        checklogin.classList.remove('error');
        checklogin.classList.add('ok');
        loginOK = true;
    }
    validControles();
});

// ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{5,15}$
// (?=.*[a-z]) imposer la présence d'une minuscule
// (?=.*[A-Z]) imposer la présence d'une majuscule
// (?=.*[0-9]) imposer la présence d'un chiffre
// [a-zA-Z0-9_] Caractères autorisés
// {5,15} Longueur mini/maxi

//tester si 2 caractères successifs sont présents dans l'expression réguliere
///^(?=.+$).*(.)\1{1,}.*$/gm

let patternMdp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_]{5,15}$/;
let mdp = document.querySelector('#mdp');
let checkmdp = document.querySelector('#checkmdp');
let oeil = document.querySelector('#oeil');
let mdpOK = false;

mdp.addEventListener('input',function(){
    
checkmdp.innerHTML ="";
    if(this.value.length > 0){
    
    if (!patternMdp.test(this.value)){
        checkmdp.innerHTML = "Le mot de passe doit comporter entre 5 et 15 caractères non accentués et doit contenir au moins 1 minuscule, 1 majuscule et 1 chiffre";
        checkmdp.classList.add('error');
        mdpOK = false;
    }
    else{
        checkmdp.innerHTML = '<i class="fa-solid fa-check"></i>';
        checkmdp.classList.remove('error');
        checkmdp.classList.add('ok');
        mdpOK = true;
    }
}
else{
    mdpOK = false;
}
    validControles();
});

oeil.addEventListener('click',function(){
    if( mdp.getAttribute('type') == 'password'){
        mdp.setAttribute('type','text');
        document.querySelector('#oeil i').classList.replace('fa-eye','fa-eye-slash');
    }
    else{
        mdp.setAttribute('type','password');
        document.querySelector('#oeil i').classList.replace('fa-eye-slash','fa-eye');

    }
});

let avatar = document.querySelector('#avatar');
let preview = document.querySelector('#preview');
let checkavatar = document.querySelector('#checkavatar');

function majPreview(e){
    console.log(e);
    //on controle qu'un fichier à été choisi
    if(e.target.files.length > 0){

        let fichier = e.target.files[0];
        let types_mimes_autorises = ['image/jpeg','image/png'];
        if(types_mimes_autorises.includes(fichier.type)){
            checkavatar.innerHTML ='';
            let reader = new FileReader;
            reader.readAsDataURL(fichier);
            reader.addEventListener('load',function(event){
                console.log(event);
                preview.setAttribute('src',event.target.result);
            });

        }
        else{
            checkavatar.innerHTML = 'type de fichier invalide. merci de choisir une image de Type JPEG ou PNG';
            checkavatar.classList.add('error');
        }
    }
};

avatar.addEventListener('change',majPreview);

//Drag and Drop de fichier sur la page web
let maPage = document.querySelector('html');

maPage.addEventListener('dragover',function(e){
    e.preventDefault();
    preview.classList.add('bordure');
});
maPage.addEventListener('dragleave',function(e){
    e.preventDefault();
    preview.classList.remove('bordure');
});

maPage.addEventListener('drop',function(e){
    e.preventDefault();
    preview.classList.remove('bordure');
});

preview.addEventListener('drop',function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log(e.dataTransfer.files);
    avatar.files = e.dataTransfer.files;
    preview.classList.remove('bordure');

    // je créé un evenement Artificiel 'change' que je dispatche à mon input Avatar

    let evenement = new Event('change');
    avatar.dispatchEvent(evenement)
});

let rgpd = document.querySelector('#rgpd');
let checkrgpd = document.querySelector('#checkrgpd');


function validControles(){
    if (rgpd.checked == false){
        checkrgpd.innerHTML="Merci d'accepter la politique de Confidentialité";
        checkrgpd.classList.add('error');
    }
    else{
        checkrgpd.innerHTML='<i class="fa-solid fa-check"></i>';
        checkrgpd.classList.remove('error');
        checkrgpd.classList.add('ok');
    }


    if (loginOK && mdpOK && rgpd.checked){
        document.querySelector('button[type="submit"]').disabled=false;
    }
    else{
        document.querySelector('button[type="submit"]').disabled=true;
    }
};
rgpd.addEventListener('change',validControles);

//refaire les controles sur changement de valeur
//Login.addEventListener('change',validControles);
//mdp.addEventListener('change',validControles);


