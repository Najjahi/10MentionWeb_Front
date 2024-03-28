// alert("ok");
/* afin de modifier notre page html selon les intéractions nous allons modifier notre DOM GRACE 0 javascript*/
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

// trisieme facon

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









  






