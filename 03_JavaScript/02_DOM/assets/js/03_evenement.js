/* Les évènement vont me permettre de déclencher une fonction c'est à dire une série d'instruction, suite à une action de mon utilisateur..

// OBJECTIF : Étre en mesure de capturer ces évènements afin d'exécuter une fonction 
    Les Évènement MOUSE (Souris):

        click   : au click sur un élément
        mouseenter : la souris passe au dessus de le zone d'un élément
        mouseleave  : la souris sort de la zone d'un élément*
    
    Les Évènements KEYBOARD (Clavier):

        Keydown  : une touche du clavier est enfoncée
        Keyup   : une touche du clavier a été relachée

    Les Évènements WINDOW (Fenêtre)

        scroll   : défilement de la fenêtre 
        resize   : redimensionnement de la fenêtre

    Les Évènements FORM (formulaire)

        Change    : pour les éléments <input>, <select> et <textearea>
        submit   : à l'envoi du formulaire 
        input     : pour capter la saisie  d'un utilisateur sur un champ <input>

        ------------------ Les écouteurs d'évènements -------------------

    Pour attacher un évènementà un élèment, ou autrement dit, pour déclencher un écouteur d'évènement qui se chargera de déclencher une fonction, je vais utliser la syntaxe suivante
         selecteur.addEventListener('évènement', fonction);

          Etape 1 -> selectionner les elements
          Etape 2 -> Créer les fonctions qui seront executé par l'evenement
          Etape 3 -> Poser l'écouteur d'evenement pour l'intéraction
*/

// div #rouge 

let divRouge = document.querySelector('#rouge'); // je selectionne ma div par son id ensuite je lui ajoute un ecouteur d"evenement

divRouge.addEventListener('click', fDivRouge);

// l'ecouteur d'evenement se décompose en deux arguments 
// 1 -> l'action ici le click 
// 2 -> le nom de la fonction ici fDivRouge

function fDivRouge(){
    divRouge.style.backgroundColor = "gold";
    divRouge.style.borderRadius = "50%";
    divRouge.innerText = "gold";
}

// le pargraphe p
function fP1(){
    alert('le paragraphe est cliqué');
}
// div #orange 
    let divOrange = document.querySelector("#orange");
    divOrange.addEventListener('dblclick', function(){     
    divOrange.style.backgroundColor = "gold";
    divOrange.style.borderRadius = "50%";
    divOrange.innerText = "gold";

})

// le h2 avec onbdlclick 
function dbl() {
    alert('Suite à un double click');
}

// div #bleu

    let divBleu = document.querySelector("#bleu");
    divBleu.addEventListener('mouseover', function(){
    //divBleu.addEventListener('mouseover', ()=>{
    divBleu.style.backgroundColor = "gold";
    divBleu.style.borderRadius = "50%";
    divBleu.innerText = "gold";

})

// div primary

let divPrimary = document.querySelector("#primary");
divPrimary.addEventListener('mouseout', ()=>{
divPrimary.style.backgroundColor = "gold";
divPrimary.style.borderRadius = "50%";
divPrimary.innerText = "gold";

})

// div success : click et reclick
// let divChangeCouleur = document.getElementById('success')

let divChangeCouleur = document.querySelector('#success');

console.log(divChangeCouleur.classList);

divChangeCouleur.addEventListener('click', ()=>{
 
    if (divChangeCouleur.classList.contains('vert')) {
    //je verifie si la div contient la classe vert dans la liste de classes
       
        divChangeCouleur.classList.remove('vert');
        divChangeCouleur.classList.add('gold');
        divChangeCouleur.innerText = "GOLD";

        
    } else {
        divChangeCouleur.classList.remove('gold');
        divChangeCouleur.classList.add('vert') ;
        divChangeCouleur.innerText = "#success";
          
    }

})

// cache-cache
let imgchat = document.querySelector('img');

imgchat.style.width = "300px";

// couleur de p change + bold + souligné en rose

let lesP = document.querySelectorAll('.lesP p');
console.log(lesP);

    // for (let i = 0; i < lesP.length; i++) {
 
    //     lesP[i].style.color="#ff3366";
    //     lesP[i].style.textDecoration ="underline";
    //     lesP[i].style.fontWeight ="bold";
  
        
    // }

    // for (let p of lesP) {

    //     p.style.color="#ff3366";
    //     p.style.fontWeight="bold";
    //     p.style.textDecoration="underline";
        
    //}

    // while 

    let i = 0;
    while(i< lesP.length) {

        lesP[i].style.color="#ff3366";
        lesP[i].style.textDecoration ="underline";
        lesP[i].style.fontWeight ="bold";
    i++;
        
     }

     lesP[0].addEventListener('click',()=> {
        imgchat.classList.add('hide');
     }) 
    
     lesP[1].addEventListener('click',()=> {
        imgchat.classList.remove('hide');
     }) 

     lesP[2].addEventListener('click',()=> {
        imgchat.classList.toggle('hide');
     }) 
    
    



