/*
Consegna:
Dato un array contenente una lista di cinque immagini, 
creare un carosello come nello screenshot allegato.

MILESTONE 1
Per prima cosa, creiamo il markup statico: 
costruiamo il container e inseriamo un'immagine grande al centro: 
avremo così la struttura base e gli stili pronti per poterci poi 
concentrare solamente sull'aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini 
dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena 
un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica 
che la renderà visibile.
Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, 
ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, 
che quindi verrà visualizzata al posto della precedente.
*/

const images = ['01','02', '03', '04','05'];

// recuperare container delle immagini
const container = document.getElementById('carousel-container');

// container.innerHTML += '<img class="item active" src="img/01.jpg" alt="due"/>'


for (let i = 0; i < images.length; i++){

    const image = images[i];
    container.innerHTML +=`<img class="item" src="img/${image}.jpg" alt='${image}'/>` 
}

const firstItem = document.querySelector('.item')
firstItem.classList.add('active')



const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');


nextButton.addEventListener('click',
    function(){


        // recupero l'elemento attivo
        const activeItem = document.querySelector('.item.active');

        const nextElement = activeItem.nextElementSibling;


        if(nextElement){
            activeItem.classList.remove('active')
            nextElement.classList.add('active');
        } else{
            activeItem.classList.remove('active')
            firstItem.classList.add('active')

            
        }
           
    }       
);

previousButton.addEventListener('click',
    function(){


        // recupero l'elemento attivo
        const activeItem = document.querySelector('.item.active');
        
        const previousElement = activeItem.previousElementSibling;

        if(previousElement){
            activeItem.classList.remove('active')
            previousElement.classList.add('active');
        } else{
            activeItem.classList.remove('active')
            const items = document.querySelectorAll('.item')
            
            const lastItem = items[items.length -1]
            
            lastItem.classList.add('active')
        }
    }       
);
