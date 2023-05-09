let imgResultat = document.querySelector("#resultat");
let cookieUserName = document.querySelector("#cookieUserName");
let cookieUserMail = document.querySelector("#cookieUserMail");

window.onload = init;

function init() {
    document.getElementById("choixImgJeu").addEventListener('click', choixImg);
}
let cookies = document.cookie; //mettre le cookie dans une variable
console.log(cookies); //contenu du cookie
let cookiesTab = cookies.split('; '); //je scinde la chaine de caractère représentant tous les cookies en un tableau de cookies (le séparateu étant le ; et l'espace)

//détecter si le cookie existe
let trouve = false
let valeurCookie;
cookiesTab.forEach((cookie) => {
    let nomCookie = cookie.split('=')[0];

    if (nomCookie === 'userName') {
        trouve = true;
        valeurCookie = cookie.split('=')[1];      
    }
});
cookieUserName.innerHTML = valeurCookie;

//comparer cookie userName avec les clefs local storage
for (let i = 0; i < localStorage.length; i++) {
    let userNameStock = localStorage.key(i);
    let userMailStock = localStorage.getItem(userNameStock);
    let mailJson = JSON.parse(userMailStock);
    console.log(mailJson.mail);
    if(valeurCookie == userNameStock){
        cookieUserMail.innerHTML = mailJson.mail;
    } 
}

//fonction pour changer l'image du select memory
function choixImg() {
    let img = "";
    if (document.querySelector('select').options[0].selected == true) {
        img ="<img src='ressources/font_transparent.png' class='tailleImageProfil'>";
    }
    if (document.querySelector('select').options[1].selected == true) {
        img ="<img src='ressources/memory-legume/memory_detail.png' alt='Image représentant un memory légume' title='Un jeu Memory légume complet.' class='tailleImageProfil' >";
        localStorage.setItem('jeu', '1');
    }
    if (document.querySelector('select').options[2].selected == true) {
        img ="<img src='ressources/animaux/memory_detail_animaux.png' alt='Image représentant un memory animaux' title='Un jeu Memory animaux complet.' class='tailleImageProfil'>";
        localStorage.setItem('jeu', '2');
    }
    if (document.querySelector('select').options[3].selected == true) {
        img ="<img src='ressources/alphabet-scrabble/memory_detail_scrabble.png' alt='Image représentant un memory scrabble' title='Un jeu Memory scrabble complet.' class='tailleImageProfil'>";
        localStorage.setItem('jeu', '3');
    }
    if (document.querySelector('select').options[4].selected == true) {
        img ="<img src='ressources/animauxAnimes/memory_detail_animaux_animes.png' alt='Image représentant un memory animaux animés' title='Un jeu Memory animaux animés complet.' class='tailleImageProfil'>";
        localStorage.setItem('jeu', '4');
    }
    if (document.querySelector('select').options[5].selected == true) {
        img ="<img src='ressources/animauxdomestiques/memory_detail_animaux_domestiques.png' alt='Image représentant un memory animaux domestiques' title='Un jeu Memory animaux domestiques complet.' class='tailleImageProfil'>";
        localStorage.setItem('jeu', '5');
    }
    if (document.querySelector('select').options[6].selected == true) {
        img ="<img src='ressources/chiens/memory_details_chiens.png' alt='Image représentant un memory chiens' title='Un jeu Memory chiens complet.' class='tailleImageProfil'>";
        localStorage.setItem('jeu', '6');
    }
    if (document.querySelector('select').options[7].selected == true) {
        img ="<img src='ressources/dinosaures/memory_detail_dinosaures.png' alt='Image représentant un memory dinosaures' title='Un jeu Memory dinosaures complet.' class='tailleImageProfil'>";
        localStorage.setItem('jeu', '7');
    }
    imgResultat.innerHTML = img;
}   


