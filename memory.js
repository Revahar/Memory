const divResultat = document.querySelector("#resultat");
const totalPair = 6;
let tabJeu = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
    [0,0,0]
];
//let tabResultat = [
//    [2,1,3],
//    [6,2,1],
//    [4,3,5],
//    [4,5,6]
//] sans random

let tabResultat = tabAlea();
let selectionPrecedente=[];
let nbImageAffichee = 0;
let clique = true;
let divEssais = document.querySelector("#essais");
let divSucces = document.querySelector("#succes");
let divRelance = document.querySelector("#relance");
let essais = "";
let nbPair = "";


//création du tableau
afficherTableau();
function afficherTableau(){
    let txt = "";
    for (let i = 0; i < tabJeu.length; i++) {
        txt += "<div>";
        for (let j = 0; j < tabJeu[i].length; j++) {
            if(tabJeu[i][j]===0){
                txt +="<input class='btn btn-primary m-2' id='carteCachee' type='image' src='ressources/question.svg' style='width:15%;height:10%' onclick='verification(\""+i+"-"+j+"\")'></input>";
            } else {
                txt +="<img src='"+choixCarte(tabJeu[i][j])+"' class='m-2' id='carteRevelee' style='width:15%;height:10%'>";
            }
        }
        txt += "</div>";
    }
    divResultat.innerHTML = txt;
    
    
}

//attribution des cartes en fonction des numéros des cases
function choixCarte(event){
    let imgTxt = "ressources/"
    switch (event) {
        case 1: imgTxt += "memory-legume/1.svg";  
        break;
        case 2: imgTxt += "memory-legume/2.svg";  
        break;
        case 3: imgTxt += "memory-legume/3.svg";  
        break;
        case 4: imgTxt += "memory-legume/4.svg";  
        break;
        case 5: imgTxt += "memory-legume/5.svg";    
        break;
        case 6: imgTxt += "memory-legume/6.svg";  
        break;
        default: console.log("erreur");
        break;
    }
    return imgTxt;
}

//je vérifie, lors du clique sur une carte, le nombre de clique et les pairs
function verification(event){
    if(clique){
        essais++;
        nbImageAffichee++;
        let ligne = event.substr(0,1);
        let colonne = event.substr(2,1);
        tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
        afficherTableau();
        if(nbImageAffichee>1){
            //verification
            clique = false;
            setTimeout(() => {
                //vérification si 2 cartes identiques sont révélées
                if(tabJeu[ligne][colonne] !== tabResultat[selectionPrecedente[0]][selectionPrecedente[1]]){ //0=ligne, 1=colonne
                    tabJeu[ligne][colonne] = 0;
                    tabJeu[selectionPrecedente[0]][selectionPrecedente[1]] = 0;
                    nbPair--;
                    //console.log("secouer écran");
                }
                afficherTableau();
                nbPair++;
                //si toutes les cartes sont révélées alors
                if (nbPair === totalPair) {
                    divSucces.innerHTML = "Victoire en " + essais + " coups !"; //j'affiche un texte + le nombre de coups
                    divRelance.innerHTML = "Pour relancer une partie, appuyez sur   <kbd>Espace</kbd>."; //j'affiche l'option pour redémarrer une partie
                    document.addEventListener('keydown', function (event) { //j'attends pour savoir si l'utilisateur va appyer sur espace
                        if (event.code === 'Space') {
                            location.reload(); //si l'utilisateur appuie sur espace, alors je recharge la page
                        }
                    });
                }
                //si toutes les cartes ne sont pas retournées, alors on remet le nombre de clique à 0
                clique = true;
                nbImageAffichee = 0;
                selectionPrecedente = [ligne,colonne];
            }, 500);
        } else {
            selectionPrecedente = [ligne,colonne];
        }
    }

}

//fonction servant à disposer des chiffres aléatoirement dans un table i j 
function tabAlea(){
    let tab = [];
    let nbImagePosition=[0,0,0,0,0,0,];
    for (let i = 0; i<4 ; i++){
        let ligne = [];
        for (let j = 0; j<3; j++){
            let fin = false;
            while(!fin){
                let randomNbImage = Math.floor(Math.random() * 6);
                if (nbImagePosition[randomNbImage]<2) { //si il y a 2x le même chiffre, alors je peux sortir de mon while
                    ligne.push(randomNbImage+1);
                    nbImagePosition[randomNbImage]++;
                    fin=true;
                }
            }
        }
        tab.push(ligne);
    }
    return tab;
}

