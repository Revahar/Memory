let presenceUser = "";
let presencePassword = "";
let imgMdp = document.querySelector("#resultatMdp");
let imgResultat = document.querySelector("#resultat");

window.onload = init;

function init(){
    document.getElementById("nbCaracteres").addEventListener('input', verifUserName);
    document.getElementById("password").addEventListener('input', verifPassword);  
}

//vérification du nom d'utilisateur
function verifUserName() {
    let img = "";
    let str = document.getElementById("nbCaracteres").value;
    document.cookie = ("userName=" + str);
    presenceUser = false;
    img ="<div><img src='ressources/error.svg' class='tailleImage'></div>";
    imgResultat.innerHTML = img;
    for (let i = 0; i < localStorage.length; i++) {
        userNameStock = localStorage.key(i);
        if(userNameStock == str) {
            presenceUser = true;
            img ="<div><img src='ressources/check.svg' class='tailleImage'></div>";
            imgResultat.innerHTML = img;
        }
    }
    console.log(presenceUser);
    if (presencePassword==true && presenceUser==true) {
        bouton ="<div><button type='button' id='btnValider' class='btn btn-success btn-lg'>Valider</button></div>";
        boutonFinal.innerHTML = bouton;
        document.getElementById("btnValider").addEventListener("click", validerConnexion);
    } else if (presencePassword==false || presenceUser == false) {
        bouton ="<div><button type='button' class='btn btn-success btn-lg' disabled>Valider</button></div>";
        boutonFinal.innerHTML = bouton;
    }
}

//vérification du mot de passe
function verifPassword() {
    let img = "";
    presencePassword = false;
    img ="<div><img src='ressources/error.svg' class='tailleImage'></div>";
    imgMdp.innerHTML = img;
    let str = document.getElementById("password").value;
        for (let i = 0; i < localStorage.length; i++) {
            let userNameStock = localStorage.key(i);
            let userPasswordStock = localStorage.getItem(userNameStock);
            let passwordJson = JSON.parse(userPasswordStock);
            if(passwordJson.password == str){ 
                presencePassword = true;
                img ="<div><img src='ressources/check.svg' class='tailleImage'></div>";
                imgMdp.innerHTML = img;
            } 
        }
        console.log(presencePassword);
        if (presencePassword==true && presenceUser==true) {
            bouton ="<div><button type='button' id='btnValider' class='btn btn-success btn-lg'>Valider</button></div>";
            boutonFinal.innerHTML = bouton;
            document.getElementById("btnValider").addEventListener("click", validerConnexion);
        } else if (presencePassword==false || presenceUser == false) {
            bouton ="<div><button type='button' class='btn btn-success btn-lg' disabled>Valider</button></div>";
            boutonFinal.innerHTML = bouton;
        }
    }

//validation de la connexion si mot de passe et userName ok
function validerConnexion() {
    let cookies = document.cookie; //mettre le cookie dans une variable, cookie = pseudo précédemment saisi
    //console.log(cookies); //contenu du cookie
    let cookiesTab = cookies.split('; ');//je scinde la chaine de caractère représentant tous les cookies en un tableau de cookies (le séparateur étant le ; et l'espace)
    //1er étape : détecter si le cookie existe
    let trouve = false
    let valeurCookie;
    cookiesTab.forEach((cookie) => {
        let nomCookie = cookie.split('=')[0];
        if (nomCookie === 'userName') {
            trouve = true;
            valeurCookie = cookie.split('=')[1];      
        }
    });
    alert('Tu es connecté(e) ' + valeurCookie + ' !');  
    window.location.href="http://127.0.0.1:5500/profil.html"
}






