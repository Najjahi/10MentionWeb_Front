let nav = document.querySelector('#nav-menu');
let burgerMenu = document.querySelector('#burger-menu');
burgerMenu.addEventListener('click', function () {
  nav.classList.toggle('hidden');
});

/*
 changeColor est une fonction qui va changer le background color d'un lien a des liens du menu de la navigation  
 */

function changeColor() {
  let lienURL = window.location.href; // c'est pour récupérer l'URL de la page courante

  // Sélectionner tous les liens dans le menu
  let liens = document.querySelectorAll('#nav-menu a'); // pour Sélectionner tous les liens du menu

  // on opte pour une Boucle pour viser chaque lien
  for (let i = 0; i < liens.length; i++) {
    let lien = liens[i];

    // une autre methode pour Ajouter ou retirer une couleur en fonction de l'URL
    if (lien.href === lienURL) {
      lien.classList.add('text-green');
    }
  }
}

// Appeler la fonction pour appliquer le changement lors du chargement de la page
changeColor();
