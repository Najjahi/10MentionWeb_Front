
//------------------  Loader ------------- //

let loader = document.querySelector('#loader');
window.addEventListener('load', () => {
       loader.classList.add('hideLoader');
})

//-----------------Boutton No -------------------//

// let btnNo = document.querySelector('#btnNo');
// btnNo.addEventListener('mouseover', ()=>{


//     let x = Math.floor(Math.random()*80);
//     let y = Math.floor(Math.random()*80);
//     console.log(x);
//     console.log(y);

//     btnNo.style.left = x + "rem";
//     btnNo.style.top = y + "rem";

// })

//-----------------Boutton No methode2-------------------//

let btnNo = document.querySelector('#btnNo');
btnNo.addEventListener('mouseover', ()=>{

function rand(){
    return Math.floor(Math.random()*80);  

}

btnNo.style.left = x + "rem";
btnNo.style.top = y + "rem";
})

