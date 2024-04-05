// --------------------- Dark mode -----------------//

let switchBox = document.querySelector('.switch'); // je stock l'élément div.switch

let container = document.querySelector('.container-fluid'); // je stock l'élément div.container

switchBox.addEventListener('click', changeMode);// je déclare l'événement click sur la div.switch 

let nav = document.querySelector('.navbar-desktop');

let liens = document.querySelectorAll('.navbar-desktop a');

let btnChange = document.querySelector('.btn');

let icon = document.querySelector('.switch i');

let titre = document.querySelector('h1');


function changeMode(){

    //  la div container ch&nge de couleur de fond
    container.classList.toggle('container-change');
    nav.classList.toggle('nav-dark');

    for (let lien of liens) {
        
        lien.classList.toggle('lienDarkMode');
    }

    // je déplace le bouton 
    btnChange.classList.toggle('btn-change');
    //je change la couleur du bouton
    btnChange.classList.toggle('btn-dark');

    icon.classList.toggle('icone-change');

    if (icon.classList.contains('bi-sun-fill')) {

        icon.classList.remove('bi-sun-fill');
        icon.classList.add("bi-moon-fill");
        
    } else {
        icon.classList.remove('bi-moon-fill');
        icon.classList.add("bi-sun-fill");  
    }

    switchBox.classList.toggle('switch-change');

    titre.classList.toggle('titre');

}

//-----------------------partie video-----------------------//
// -----------------------icone smile-------------------//


let iconeSmile = document.querySelector('.bi-emoji-neutral');

iconeSmile.addEventListener('click', ()=> {
    
    // 1 ere methode

    if (iconeSmile.classList.contains('bi-emoji-neutral')) {

        iconeSmile.classList.remove('bi-emoji-neutral');
        iconeSmile.classList.add("bi-emoji-heart-eyes-fill");
        
    } else {
        iconeSmile.classList.remove('bi-emoji-heart-eyes-fill');
        iconeSmile.classList.add("bi-emoji-neutral");  
    };
}
    )

     // 2 eme methode

    //  iconeSmile.classList.toggle('bi-emoji-wink-fill');

     //-----bouton abonez vous-----//

     let btnAbonne = document.querySelector('.btn-abonner');
     
     btnAbonne.addEventListener('click',() =>{

        if (btnAbonne.innerText === "Abonnez-vous") {
            btnAbonne.innerHTML = 'Abonné <i class="bi bi-check"></i>';
            
        } else {
            btnAbonne.innerText = 'Abonnez-vous';
        }
        })
    
        //---------------------cookies----------------------//

        let btnCookies = document.querySelector('.btn-success');3
        
        let cookies = document.querySelector('.cookies');

        btnCookies.addEventListener('click', ()=> {
        
            // cookies.style.opacity = "0";
            cookies.style.bottom = "auto";

            

        })





