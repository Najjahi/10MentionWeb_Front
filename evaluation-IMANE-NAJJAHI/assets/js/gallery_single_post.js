// mousseenter est l'événement qui se déclenche lorsqu'un utilisateur place le curseur de la souris sur la page gallery-single-post qui va parmettre de changer la couleur du titre, du boutton contact et de mettre une ombre le cote droit et bas, du noir en vert ( cyan foncé ou turquoise) 
let container = document.querySelector('#post')
container.addEventListener('mouseenter', function () {

let postImage = document.querySelector('#post');  
postImage.style.boxShadow = '8px 8px 0px 0 rgba(11, 163, 156, 0.9)';//la couleur de la section devient verte

let postTitle = document.querySelector('#post-title');
postTitle.style.color = 'rgba(11, 163, 156, 0.9)'; // la couleur du titre redevient verte

let button = document.querySelector('.btn');
button.style.backgroundColor = 'rgba(11, 163, 156, 0.9)'; // la couleur du backround du boutton devient verte
button.style.color = 'black';  // la couleur du texte du bouton devient verte
button.style.borderColor = 'black'; //la couleur de la bordure du bouton devient verte

});
// mousseleave est l'événement qui se déclenche lorsqu'un utilisateur sort le curseur de la souris de la section de la page gallery-single-post qui va parmettre de remettre la couleur du titre, du boutton contact et enlever l'ombre du cote droit et bas.
container.addEventListener('mouseleave', function () {
let postImage = document.querySelector('#post');  
postImage.style.boxShadow = 'none';  //  l'ombre sur l'image va disparaitre

let postTitle = document.querySelector('#post-title');
postTitle.style.color = '';  // la couleur du titre redevient noire)

let button = document.querySelector('.btn');
button.style.backgroundColor = '';  // la couleur du backround du boutton redevient blache
button.style.color = '';  // la couleur du texte du bouton redevient noire
button.style.borderColor = '';  // Réinitialiser la couleur de la bordure du bouton
});



