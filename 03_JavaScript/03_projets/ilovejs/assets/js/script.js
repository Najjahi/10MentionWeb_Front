//----------------dark mode------------------------//

let switchBox = document.querySelector('.switch');

let container = document.querySelector('.container-fluid');

// je stock l'element div .container

switchBox.addEventListener('click', changeMode);

 // je declare l'evenement cick sur la div.switch

let nav = document.querySelector('.navbar-desktop');

let liens = document.querySelectorAll('.navbar-desktop a')

let btnChange = document.querySelector('.btn');

let icon = document.querySelector('.switch i');

let titre = document.querySelector('h1');

let btnsmile = document.querySelector('bloc-btn i')




function changeMode() {

    // la div container change de couleur de fond   
    
    nav.classList.toggle('nav-dark');
   
    container.classList.toggle('container-change'); // toggele = basculer
   
    for (const lien of liens) {
       
        lien.classList.toggle('lienDarkMode');
        
    }

    // je déplace le bouton

    btnChange.classList.toggle('btn-change');

// je change la couleur du bouton

    btnChange.classList.toggle('btn-dark');

    icon.classList.toggle('icone-change');

    if (icon.classList.contains('bi-sun-fill')) {

        icon.classList.remove('bi-sun-fill');

        icon.classList.add('bi-moon-fill');
        
    } else {

        icon.classList.remove('bi-moon-fill');

        icon.classList.add('bi-sun-fill');        
        
    }
        switchBox.classList.toggle('switch-change');

        titre.classList.toggle('titre');

        btnChange.classList.toggle('.btn-add')

    if (btnChange.classList.contains('bg-black')) {

        btnChange.classList.remove('bg-black');

        btnChange.classList.add('btn-add');
        
    } else {

        btnChange.classList.remove('btn-add');

        btnChange.classList.add('bg-black');        
        
    }
        // icon.classList.toggle('iconer')
    
}




