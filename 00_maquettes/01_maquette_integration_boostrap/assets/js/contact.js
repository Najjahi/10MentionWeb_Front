

let regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,6}$/;
let email = document.querySelector('#email');
let emailValue = email.value.trim();
let message = "";
let myAlert = document.querySelector('#alert');
let question = document.querySelector('.fa-question');

if (!regexEmail.test(emailValue)) {

    message = 'Email n\est pas valide';
    setValidation(email, message);


} else {
    setValidation(email);
}

if (myAlert.innerHTML =="" && message == "") {
    myAlert.innerHTML = `<p class="alert alert-success text-center mt-3" role="alert">Votre a bien été crée</p>`;                    
}

function setValidation(element, infos) {

    let formControl = element.parentElement;

    let small = formControl.querySelector('small');
    if (infos != null) {
        small.innerText = infos;
        formControl.className = "form-control error";
    } else {
        formControl.className = "form-control success";
    }

}



