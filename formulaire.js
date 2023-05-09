let longueur = false;
let chiffre = false;
let symbole = false;
let motdepasse = "";
let nbCharMdp = "";
let nbSymbMdp = "";
let nbChiffresMdp = "";
let mdpOk = "";
let nameOk = "";
let mailOk = "";
let userName = "";
let password = "";
let mail = "";
let mdpConfOk = "";
let boutonValAffiche = "";

let imgResultat = document.querySelector("#resultat");
let imgEmail = document.querySelector("#resultatMail");
let imgMdp = document.querySelector("#resultatMdp");
let imgConfMdp = document.querySelector("#resultatConfMdp");
let boutonFinal = document.querySelector("#boutonFinal");
let forceMdp = document.querySelector("#forceMdp");
let textForceMdp = document.querySelector("#textForce");

window.onload = init;

function init(){
    document.getElementById("nbCaracteres").addEventListener('input', verifLong);
    document.getElementById("email").addEventListener('input', verifEmail);
    document.getElementById("mdp").addEventListener('input', verifSymbole);
    document.getElementById("mdp").addEventListener('input', verifChiffre);
    document.getElementById("mdp").addEventListener('input', verifLongMdp);
    document.getElementById("mdp").addEventListener('input', validationMDP);
    document.getElementById("mdp").addEventListener('input', verifForceMdp);
    document.getElementById("mdpConf").addEventListener('input', confirmationMDP); 
}


//verification de la longeur du nom d'utilisateur
function verifLong() {
    let str = document.getElementById("nbCaracteres").value;
    let img = "";
    if (str.length > 2){
        nameOk = true;
        userName = str;
        img ="<div><img src='ressources/check.svg' class='tailleImage'></div>";
    } else if (str.length > 0){
        nameOk = false;
        img ="<div><img src='ressources/error.svg' class='tailleImage'></div>";
    } else if (str.length === 0){
        nameOk = false;
        img = "";
    }
    imgResultat.innerHTML = img;
    if (nameOk==true &&
        mdpOk==true &&
        mailOk==true &&
        mdpConfOk==true) {
            boutonValAffiche = true;
            bouton ="<div><button type='button' id='btnValider' class='btn btn-success btn-lg'>Valider</button></div>";
            boutonFinal.innerHTML = bouton;
            document.getElementById("btnValider").addEventListener("click", enregistrement);
    } else if (nameOk==false ||
               mdpOk==false ||
               mailOk==false ||
               mdpConfOk==false){
                boutonValAffiche = false;
        bouton ="<div><button type='button' class='btn btn-success btn-lg' disabled>Valider</button></div>";
        boutonFinal.innerHTML = bouton;
    }
}


//verification de l'email
function verifEmail() {
    let adresse_email = document.getElementById("email").value;
    let img = "";
    if (adresse_email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        mailOk = true;
        mail = adresse_email;
        img +="<div><img src='ressources/check.svg' class='tailleImage'></div>";
    } else if (!adresse_email.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i)) {
        mailOk = false;
        img +="<div><img src='ressources/error.svg' class='tailleImage'></div>";
    }
    imgEmail.innerHTML = img;
    if (nameOk==true &&
        mdpOk==true &&
        mailOk==true &&
        mdpConfOk==true) {
            boutonValAffiche = true;
            bouton ="<div><button type='button' id='btnValider' class='btn btn-success btn-lg'>Valider</button></div>";
            boutonFinal.innerHTML = bouton;
            document.getElementById("btnValider").addEventListener("click", enregistrement);
    } else if (nameOk==false ||
               mdpOk==false ||
               mailOk==false ||
               mdpConfOk==false){
               boutonValAffiche = false;
        bouton ="<div><button type='button' class='btn btn-success btn-lg' disabled>Valider</button></div>";
        boutonFinal.innerHTML = bouton;
    }
}


//vérification mot de passe pour savoir si il correspond aux critères
function validationMDP(){
    let img = "";
    if (longueur==true && 
        symbole==true && 
        chiffre==true) {
        motdepasse = document.getElementById("mdp").value;
        mdpOk = true;
        img +="<div><img src='ressources/check.svg' class='tailleImage'></div>";
        imgMdp.innerHTML = img;
    } else {
        mdpOk = false;
        img +="<div><img src='ressources/error.svg' class='tailleImage'></div>";
        imgMdp.innerHTML = img;
    }
    if (nameOk==true &&
        mdpOk==true &&
        mailOk==true &&
        mdpConfOk==true) {
            boutonValAffiche = true;
            bouton ="<div><button type='button' id='btnValider' class='btn btn-success btn-lg'>Valider</button></div>";
            boutonFinal.innerHTML = bouton;
            document.getElementById("btnValider").addEventListener("click", enregistrement);
    } else if (nameOk==false ||
               mdpOk==false ||
               mailOk==false ||
               mdpConfOk==false){
               boutonValAffiche = false;
        bouton ="<div><button type='button' class='btn btn-success btn-lg' disabled>Valider</button></div>";
        boutonFinal.innerHTML = bouton;
    }
} 
    function verifLongMdp() {  
        let str = document.getElementById("mdp").value;
        nbCharMdp = str.length;
        if (str.length > 6){
            longueur = true;
        } else {
            longueur = false;
        }
    }
    function verifSymbole() {  
        let str = document.getElementById("mdp").value; 
        if (str.match(/[^a-zA-Z0-9]/)) {
            symbole = true;
            nbSymbMdp = 1;
        } else { 
            nbSymbMdp = 0;
            symbole = false;
        }
    }
    function verifChiffre() {  
        let str = document.getElementById("mdp").value;
        if (str.match(/[0-9]/)) {
            nbChiffresMdp = 1;
            chiffre = true;
            
        } else {   
            nbChiffresMdp = 0;
            chiffre = false;
        }
    }

//confirmation : est-ce que les 2 password sont identiques
function confirmationMDP(){
    let img = "";
    let bouton = "";
    let confMotDePasse = document.getElementById("mdpConf").value;
    if (motdepasse===confMotDePasse) {
        img +="<div><img src='ressources/check.svg' class='tailleImage'></div>";
        imgConfMdp.innerHTML = img;
        mdpConfOk = true;
        password = confMotDePasse;
    } else if (motdepasse!==confMotDePasse){
        img +="<div><img src='ressources/error.svg' class='tailleImage'></div>";
        imgConfMdp.innerHTML = img;
        mdpConfOk = false
    }
    if (nameOk==true &&
        mdpOk==true &&
        mailOk==true &&
        mdpConfOk==true) {
            boutonValAffiche = true;
            bouton ="<div><button type='button' id='btnValider' class='btn btn-success btn-lg'>Valider</button></div>";
            boutonFinal.innerHTML = bouton;
            document.getElementById("btnValider").addEventListener("click", enregistrement);
    } else if (nameOk==false ||
               mdpOk==false ||
               mailOk==false ||
               mdpConfOk==false){
        boutonValAffiche = false;
        bouton ="<div><button type='button' class='btn btn-success btn-lg' disabled>Valider</button></div>";
        boutonFinal.innerHTML = bouton;
    }
}

//affichage de la force du mot de passe
function verifForceMdp(){
let force = "";
let textForce ="";
     if (nbCharMdp==0 && 
        nbSymbMdp==0 && 
        nbChiffresMdp==0) {  
    //test avec barre vide        
    //force +="<div class='progress' style='height: 5px;width: 25%'><div class='progress-bar progress-bar-striped progress-bar-animated bg-success' role='progressbar' style='width: 0%' aria-valuenow='0' aria-valuemin='0' aria-valuemax='100'></div></div>";
    //textForce +="<div></div>";
    } else if (nbCharMdp>9 && 
        nbSymbMdp==1 && 
        nbChiffresMdp==1) {
    //fort
    force +="<div class='progress' style='height: 10px;width: 75%'><div class='progress-bar progress-bar-striped progress-bar-animated bg-success' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div></div>";
    textForce +="<p>Fort</p>";
    } else if (nbCharMdp>6 && nbSymbMdp==1 && nbChiffresMdp==0 || 
               nbCharMdp>6 && nbSymbMdp==0 && nbChiffresMdp==1 ||
               nbCharMdp>6 && nbSymbMdp==1 && nbChiffresMdp==1) {
    //moyen
    force +="<div class='progress' style='height: 10px;width: 50%'><div class='progress-bar progress-bar-striped progress-bar-animated bg-warning' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div></div>";
    textForce +="<p>Moyen</p>";

    } else if (nbCharMdp<7 && nbChiffresMdp==0 && nbSymbMdp==0 ||
               nbCharMdp<7 && nbChiffresMdp==1 && nbSymbMdp==0 ||
               nbCharMdp<7 && nbChiffresMdp==0 && nbSymbMdp==1){
    //faible
    force +="<div class='progress' style='height: 10px;width: 25%'><div class='progress-bar progress-bar-striped progress-bar-animated bg-danger' role='progressbar' style='width: 100%' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'></div></div>";
    textForce ="<p>Faible<p/>";
    }
    forceMdp.innerHTML = force;
    textForceMdp.innerHTML = textForce;
}

//local storage : j'ajoute mon pseudo, mon mail et mon password à mon local storage 
function enregistrement() {
    let verifEnregistrement = true; //je considère de base que l'utilisateur n'est pas déjà enregistré
    for (let i = 0; i < localStorage.length; i++) {
        //je crée une boucle pour passer en revue chaque clef (mes clefs correspondent à mes userName) à chaque fois que j'ajoute ou que je retire une lettre du input
        let userNameStock = localStorage.key(i); //à chaque fois que je passe dans ma boucle je met dans une variable le userName (la clef) présent dans le local storage
        console.log(userNameStock);
        let userMailStock = localStorage.getItem(userNameStock); //je met dans une variable les valeurs correspondant au userName
        console.log(userMailStock);
        let mailJson = JSON.parse(userMailStock); // je met dans une variable le mail correspondant à la clef
        console.log(mailJson);
        if(userNameStock == userName || mailJson.mail == mail){ // je vérifie si, à chaque passage dans ma boucle, je trouve un mail ou un userName déjà utilisé 
            verifEnregistrement = false; // si je rentre dans mon if, alors c'est que j'ai trouvé un utilisateur donc mon booléen change
            console.log(verifEnregistrement);
        } 
    }
    if (verifEnregistrement == true){ //si je ne suis jamais entré dans mon if précédent, alors aucun utilisateur n'est présent donc je peux ajouter mon nouvel utilisateur
        let data = {mail,password}; //je crée une variable contenant le mail et le password
        let val = JSON.stringify (data);//je met cette variable en string
        window.localStorage.setItem(userName, val); //j'ajoute le userName (la clef) et ma variable (mail + password) à mon storage
        window.location.href="http://127.0.0.1:5500/connexion.html" //je redirige l'utilisateur vers la page de connexion
    } else {
        alert("Vous avez déjà un compte."); //si je ne suis pas entré dans le if précedent, alors c'est qu'un compte exite donc j'affiche un popup pour en informer l'utilisateur
    }
}



