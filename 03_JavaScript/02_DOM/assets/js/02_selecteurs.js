// alert("ok");
/* afin de modifier notre page html selon les intéractions nous allons modifier notre DOM GRACE à javascript*/
//-------------------------------
// SELECTIONER NOS ELEMENTS
//-------------------------------
// Selection via tag

let title = document.getElementsByTagName('h1');
console.log(title);

//on recupere un array (tableau) d'elements

let lesP = document.getElementsByTagName('p') // on cherche le tous les paragraphes de notre page 
console.log(lesP);

// grace à ma variable dans laquelle j'ai selectionné tous les éléments p je peux viser un seul des éléments grace à son index.Pour faire du CSS j'utilise la propriété 'style ' suivi des memes declarations que j'utilise en CSS, avec du camelCase à la place de kebab-case.
// la propriété style permet d'acceder finement au style qui concerne un élément particulier.

lesP[0].style.backgroundColor = " red ";
lesP[0].style.color = " white ";
lesP[0].style.fontWeight = " bold ";

// Selection via id

let titre = document.getElementById('titre');
console.log(titre);

// Selection via classe

let selectClass = document.getElementsByClassName('selectClass');
console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);

// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// MINI EXO1: modifier le contenu du h2 qui a la classe.subtitle:'ceci est le titre modifié avec Javascript'

let aChanger = document.getElementsByClassName("subtitle");
console.log(aChanger);
aChanger[0].innerHTML = "<strong> ceci est le titre modifié avec Javascript</strong>";
aChanger[0].innerHTML = "<em> ceci est le titre modifié avec Javascript</em>";

// MINI EXO 3 : Sélectionner tous les p dans la page et changer le texte en majuscules.

// lesP[0].style.textTransform='uppercase'; // titre les selecteurs
// lesP[1].style.textTransform='uppercase';
// lesP[2].style.textTransform='uppercase';
// lesP[3].style.textTransform='uppercase';
// lesP[4].style.textTransform='uppercase';

//deuxieme facon

// for (let i = 0; i < lesP.length; i++) {

//     lesP[i].style.textTransform='uppercase';
    
// }

// troisieme facon

// Boucle for of : je déclare une variable p qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'appelle la variable p en lui attribuant le style souhaité avec la propriété style.

for (p of lesP) {

    p.style.textTransform='uppercase'
}
//titre.style.backgroundColor="pink"; //changer bgcolor h1 en rose.

// avec une classe pink dans le titre h1

let pink = document.getElementsByClassName(`pink`);

pink[0].style.backgroundColor="pink";

// selection via queryselector ( selectionner les premier élément trouvé)
// La méthode querySelector() retourne le 1er élément trouvé spécifié en paramètres.
// L'avantage de querySelector c'est qu'il utilise la syntaxe de sélection CSS -> #monId .maClass <balise>.

let div = document.querySelector('div ');
console.log(div);
div.style.border = "1px solid #000";

// selection via querySelectorAll() (selectionne tous les éléments trouvés)
// selectinne toutes les balises en ensemble et retourne un array d'éléments

let query = document.querySelectorAll('.selectClass')
console.log(query); // on a 3 paragraphes qui ont la classe selectClass

for (let i = 0; i < query.length; i++) {
    console.log(query[i].innerHTML);  
    console.log(query[i].innerText); 
}

//La propriété innerText est similaire à innerHTML, mais elle fonctionne avec le texte brut à l'intérieur d'un élément, plutôt qu'avec le HTML. Elle permet d'accéder au texte contenu dans un élément HTML et de le modifier si nécessaire.

let rajout = document.querySelector(".bg-success p");
rajout.innerText=" je suis là ";

// CREATION D'UN NOUVEL ELEMENT ET JS

let section = document.querySelector('section')

// pour créer un élément, nous utilisons la méthode createElement (), puis nous l'intégrons dans le noeud souhaité

let nouveauParaFin = document.createElement('p');

nouveauParaFin.innerHTML ="<strong> Coucou, je suis ton nouveau paragraphe à la fin de la section </strong> "

nouveauParaFin.style.color ="red"

section.append(nouveauParaFin); // append() ->insére du contenu à la fin de la section. // append() accepte tous les éléments (balise ou string)

let nouveauParaDebut = document.createElement('p');
nouveauParaDebut.innerHTML = "<strong> Coucou, je suis ton nouveau paragraphe au debut de la section </strong> ";
nouveauParaDebut.style.color = "green";

section.prepend(nouveauParaDebut); // prepend ()-> insére du contenu au debut de la selection

// DEPLACER UN ELEMENT 

// Pour déplacer un élément, il faut 3 paramétres 
/**
 * -> le parent qui va accueillir l'élément
 * -> l'élément à déplacer 
 * -> l'élément qui vient après
 
 */

let parent = document.querySelector('main');
let jeBouge = document.querySelector('h4');
let h2 = document.querySelector('h2');

parent.insertBefore(jeBouge, h2);

// SUPPRIMER UN ELEMENT

//pour supprimer un élément, il faut deux paramétres :
/**
 * le parent
 * l'element à supprimer
 
 */
let ul = document.querySelector('ul');

let li = document.querySelector('ul :nth-child(2')

// let li = document.getElementsByTagName('li')[1];

console.log(li);

// pour supprimer, on utilise .removeChild()
ul.removeChild(li);

// CREER UN ATTRIBUT ET SA VALEUR

// setAttribute() : méthode pour ajouter un nouvel attribut ou changer la valeur d'un attribut existant pour un élément

let baliseA = document.querySelector('a');

baliseA.setAttribute("attribut", "valeurAttribute"); // je rajoute un attribut à la balise

baliseA.setAttribute("href", "01_introduction.html");// CHANGER LA VALEUR DE L'attribut href

let lesA = document.querySelectorAll('a');
console.log(lesA);

let valeurA = lesA[3].getAttribute('href'); // ici je récupére la valeur de l'attribut href avec le getAttribute()
console.log(valeurA);

// Grâce à votre script, créez une balise a dans la balise h1 avec le lien vers la documentation JS () qui s'affiche sur un nouvel onglet.
// Ce lien sera de couleur blanche et non souligné.

// 1 ere façon

   let container = document.querySelector('h1');
// let element = document.createElement('a');
// element.setAttribute('href', 'https://developer.mozilla.org/fr/');
// element.setAttribute('target', '_blank');
// element.style.color ="white";
// element.style.textDecoration ="none";
// element.innerText = "cours JS";
// element.innerText = "";
// container.append(element)
// console.log(element);

// 2 eme façon

// container. innerHTML = "<a> Cours JAVAscript </a>";
// let element = document.querySelector('h1 a')
// element.setAttribute('href', 'https://developer.mozilla.org/fr/');
// element.setAttribute('target', '_blank');
// element.style.color ="white";
// element.style.textDecoration ="none";

// 3 eme façcon
container.innerHTML = "<a href = 'https://developer.mozilla.org/fr/' target='_blank' > Cours JAVAscript </a>";
let element = document.querySelector('h1 a');
element.style.color = "white";
element.style.textDecoration ="none";








  






