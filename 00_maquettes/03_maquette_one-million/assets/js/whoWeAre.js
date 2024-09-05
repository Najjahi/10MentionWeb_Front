const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const image4 = document.querySelector('#image4');

// joanne
image1.addEventListener('mouseover',function(){
    image1.classList.add('joanne')

});
image1.addEventListener('mouseout',function(){
    image1.classList.remove('joanne')    
});

//gaston
image2.addEventListener('mouseover',function(){
    image2.classList.add('gaston')
});
image2.addEventListener('mouseout',function(){
    image2.classList.remove('gaston')    
});

//manuel
image3.addEventListener('mouseover',function(){
    image3.classList.add('manuel')
});
image3.addEventListener('mouseout',function(){
    image3.classList.remove('manuel')    
});

//tracy
image4.addEventListener('mouseover',function(){
    image4.classList.add('tracy')
});
image4.addEventListener('mouseout',function(){
    image4.classList.remove('tracy')    
});

//////*************spartac***************** *////////
       
// let classPerson = document.querySelectorAll('.team'); // c'est un tableau
// let donnee = ['personGaston', 'personJoanne' , 'personManuel' , 'personTracy'];
// for ( i=0; i <classPerson.length; i++) {
//         let classPersonNew = classPerson[i];
//         let image = donnee[i];

// function changeBackground(element, classLi){
//     element.classList.toggle(classLi)
//    }
// classPerson[i].addEventListener('mouseover',()=>{
//     changeBackground(classPersonNew, image)

// })
// classPerson[i].addEventListener('mouseleave',()=>{
//     changeBackground(classPersonNew, image)

// })
// }
//////*************maurine***************** */////

// let persons = document.querySelectorAll('.team')

// persons[0].addEventListener('mouseover', function team1(){
   
//     persons[0].Style.backgroundImage = 'url(assets/img/team1.jpg)';

// });
   

// j'ajoute un ecouteur d'evt qui est mouseover et je fais une fonction qui s'execute aprés l'evt

// persons[0].addEventListener('mouseover',()=>{
//     person[0].style.backgroundImage = 'url(assets/img/team1.jpg)';

// })
// persons[1].addEventListener('mouseover',()=>{
//     persons[1].Style.backgroundImage = 'url(assets/img/team1.jpg)';
   
// })
// persons[2].addEventListener('mouseover',()=>{
//     persons[2].Style.backgroundImage = 'url(assets/img/team1.jpg)';

// })
// persons[3].addEventListener('mouseover',()=>{
//     persons[3].Style.backgroundImage = 'url(assets/img/team1.jpg)';

// })

//*********methode for************//

// for(let person of persons) {

//     person.addEventListener('mouseout',()=> {
//         person.Style.backgroundImage = "";
//     })

// }


//********methode for avec index**********//

// for (let i = 0; i < persons.length; index++) {
//   persons[index].addEventListener('mouseout',()=>{
//         persons[i].Style.backgroundImage ="";
//   })
    
// }


//**********methode while***********//

let i = 0;
while (i< persons.length) {
    persons[index].addEventListener('mouseout',()=>{
        persons[i].Style.backgroundImage ="";
    
})

i++

}


// methode sahar//

let bg = document.querySelectorAll('.team');

for (let i = 0; i < array.length; i++) {
    bg[i].addEventListener('mouseover', function(){
        bg[i].setAttribute("id",`team${i+1}`)
    })

    bg[i].addEventListener('mouseout', function(){
        bg[i].setAttribute("id",``)
    })  
    
}

    