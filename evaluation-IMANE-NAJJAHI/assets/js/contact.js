// Validation du formulaire

let form = document.querySelector('form');
let address = document.querySelector('#address');
let username = document.querySelector('#name');
let email = document.querySelector('#email');
let phone = document.querySelector('#phone');
let alertMessage = '';
let myAlert = document.querySelector('#alert');
let inputs = document.querySelectorAll('input');
//console.log(username);p

//La fonction setValidation crée un élément div qui jouera le role d'une alerte de type "alert danger" avec un message d'erreur et lui applique plusieurs classes CSS pour contrôler son apparence.
// La méthode document.createElement('div') est une méthode native de JavaScript utilisée pour créer un nouvel élément HTML dans le DOM. Voici une explication détaillée :

// Quand cette méthode est appelée avec l'argument 'div', elle crée un nouvel élément div, une balise <div></div> vide, pour ajouter cet élément au DOM, on a utilisé la méthodes appendChild.

function setValidation(infos = null) {
  const alert = document.createElement('div');
  alert.classList.add('alert', 'alert-danger', 'text-center', 'my-3');

  //Ajout du message d'erreur
  if (infos !== '') {
    alert.innerText = infos;

    myAlert.classList.remove('hidden');
    myAlert.appendChild(alert);
  }
}

form.addEventListener('submit', event => {
  event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.

  // trim() en JS est utilisée pour supprimer les espaces blanc au début et à la fin d'une chaîne de caractéres
  let usernameValue = username.value.trim();
  let addressValue = address.value.trim();
  let emailValue = email.value.trim();
  let phoneValue = phone.value.trim();
  let messageValue = message.value.trim();

  let donnees = [usernameValue, addressValue, emailValue, phoneValue, messageValue];

  //verification que tous les champs sont remplies
  if (donnees.includes('')) {
    myAlert.classList.remove('hidden');
    myAlert.innerHTML = '<p class="text-center alert alert-danger">Veuillez remplir tous les champs</p>';
  } else {
    myAlert.innerHTML = '';
    /* La méthode `match()` en JavaScript est utilisée pour faire correspondre une chaîne à une expression régulière. Lorsqu'il est appelé sur une chaîne, il renvoie un tableau contenant les correspondances, ou « null » si aucune correspondance n'est trouvée.
                     
        ^ : C'est un ancrage qui indique le début de la chaîne. La correspondance doit commencer au début de la chaîne.
        [a-zA-Z] : C'est une classe de caractères qui correspond à n'importe quelle lettre de l'alphabet anglais, qu'elle soit en minuscule (a-z) ou en majuscule (A-Z).
        + : C'est un quantificateur qui signifie "une ou plusieurs fois". Il indique que la classe de caractères [a-zA-Z] doit apparaître une ou plusieurs fois dans la chaîne.
        $ : C'est un ancrage qui indique la fin de la chaîne. La correspondance doit se terminer à la fin de la chaîne.
        */

    if (!usernameValue.match(/^[a-zA-Z]+$/)) {
      alertMessage = 'Verifier votre nom';
      setValidation(alertMessage);
    } else {
      alertMessage = '';
      setValidation(alertMessage);
    }

    // email verify
    let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;

    if (!regexEmail.test(emailValue)) {
      alertMessage = 'Email nest pas valide';
      setValidation(alertMessage);
    } else {
      alertMessage = '';
      setValidation(alertMessage);
    }

    // phone verify
    if (!/^[0-9]{10}$/.test(phoneValue)) {
      alertMessage = 'Vérifier votre phone';
      setValidation(alertMessage);
    } else {
      alertMessage = '';
      setValidation(alertMessage);
    }

    // message verify
    let lengthMessage = messageValue.length;

    if (lengthMessage < 20) {
      alertMessage = 'Message doit avoir au moins 20 caractéres';
      setValidation(alertMessage);
    } else {
      alertMessage = '';
      setValidation(alertMessage);
    }

    if (myAlert.innerHTML == '' && alertMessage == '') {
      myAlert.innerHTML = '<p class="alert alert-success text-center mt-3" role="alert">Vous êtes bien inscrit ! <a href="#"> Connectez-vous ici </a></p>';
    }
  }
});
