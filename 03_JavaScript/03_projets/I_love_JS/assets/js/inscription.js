
//------------------  Loader ------------- //

let loader = document.querySelector('#loader');
window.addEventListener('load', () => {
    loader.classList.add('hideLoader');
})


// Click et affiche les information sur le mot de passe



let question = document.querySelector('.fa-question');
let pe = document.querySelector('p');


document.addEventListener('click', moovator);

function moovator(event) {
    if (event.target === question) {
        pe.classList.toggle('apparition');

    } else {
        pe.classList.remove('apparition')
    }
}

// Affichage du mot de passe 
let afficheMdp = document.querySelector('.fa-eye-slash');
let password = document.querySelector('#password');

afficheMdp.addEventListener('click', () => {
    switch (password.type) {
        case "password":
            //  password.setAttribute('type', 'text');
            password.type = "text";
            afficheMdp.classList.replace('fa-eye-slash', 'fa-eye');

            break;

        default:
            // password.setAttribute('type', 'password');
            password.type = "password";
            afficheMdp.classList.replace('fa-eye', 'fa-eye-slash');

            break;

    }

})

// Validation du formulaire 

let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password2 = document.querySelector('#password2');
let message = "";
let myAlert = document.querySelector('#alert');
let inputs = document.querySelectorAll('input');


function setValidation(element, infos = null) {

    let formControl = element.parentElement;

    let small = formControl.querySelector('small');
    if (infos != null) {
        small.innerText = infos;
        formControl.className = "form-control error";
    } else {

        formControl.className = "form-control success";
    }


}



form.addEventListener('submit', (event) => {

    event.preventDefault(); // Une méthode utilisée dans les événements JavaScript pour empêcher le comportement par défaut associé à un évenement de se produire.
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    let donnees = [usernameValue, emailValue, passwordValue, password2Value];

    // Username verify
    if (donnees.includes("")) {

        myAlert.innerHTML = '<p class="alert alert-danger text-center mt-3" role="alert">Veuillez renseigner tout les champs</p>';   
        for (let input of inputs) {

            setValidation(input,message);
            
        }



    } else {
        myAlert.innerHTML = '';

        if (!usernameValue.match(/^[a-zA-Z]+$/)) {


            message = 'Username ne\'est pas valide, username doit contenir que des lettres ';

            setValidation(username, message);

        } else {

            let lengthUsername = usernameValue.length;
            // console.log(lengthUsername);
            if (lengthUsername < 3) {

                message = "Username doit avoir au moins 3 caractéres";
                setValidation(username, message);

            } else {
                setValidation(username);


            }
        }

        // email verify

        let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;

        if (!regexEmail.test(emailValue)) {

            message = 'Email n\est pas valide';
            setValidation(email, message);


        } else {
            setValidation(email);
        }

        // password verify

        let regexPassWord = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/;

        if (!regexPassWord.test(passwordValue)) {

            message = 'Le mot de passe n\'est pas valide';
            setValidation(password, message);

        } else {

            setValidation(password);
        }
        // password2 verify
        if (password2Value != passwordValue) {

            message = 'La confirmation du mot de passe ne correspondent pas  ';
            setValidation(password2, message);

        } else {

            setValidation(password2);

        }
        

    }


    if (myAlert.innerHTML == "" && message == "") {

        myAlert.innerHTML = '<p class="alert alert-success text-center mt-3" role="alert">Vous êtes bien inscrit ! <a href="#"> Connectez-vous ici </a></p>';      
    }



})










