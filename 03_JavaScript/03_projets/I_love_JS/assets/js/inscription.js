//********Loader*************** */

let Loader = document.querySelector('#loader');
window.addEventListener('load',()=>{
    Loader.classList.add('hideLoader');
})

//click et affiche les informationd sur le mot de passe

let iconQuestion = document.querySelector('.fa-question');
let pMotDePasse = document.querySelector('p');

iconQuestion.addEventListener('click', ()=>{
pMotDePasse.classList.toggle('show');
})

// affichage du mot de passe

let afficheMdp = document.querySelector('.fa-eye-slash');

let password = document.querySelector('#password');

//console.log(password);

// console.log(password.type); 1ere methode

//console.log(password.getAttribute('type'));2eme methode

afficheMdp.addEventListener('click', ()=>{

    switch(password.type) {
        case "password":
           // password.setAttribute('type', 'text');
           password.type ="text";
           afficheMdp.classList.replace('fa-eye-slash', 'fa-eye');
        break;

        default:
        // password.setAttribute('type','password'))
        password.type ="password";
        afficheMdp.classList.replace('fa-eye','fa-eye-slash');
              
        break;
    }

})

//validation du formulaire

let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');

form.addEventListener('submit', (event)=> {
    
    event.preventDefault(); // une methode utilisée dans les événements Javascript pour empêcher le comportement pat default associé à un évenement de se produire.
    formVerif();
    
})
function formVerif() {
// trim en JS est utilisée pour supprimer les espace blancs au début et à la fin d'une chaine de caractéres
    let usernameValue = username.value.trim() ;    
    let emailValue = email.value.trim() ;
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();
    
    
}


