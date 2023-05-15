// variabili

let imagePosition = 0;

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const btnPrevious = document.getElementById("previous-image");

const btnNext = document.getElementById("next-image");



// creazione container immagini principali e side

images.forEach ( (element) => {

    document.getElementById("container").innerHTML += `
    <div style="background-image: url('${element.image}')">
    <h2> ${element.title} </h2>
    <p> ${element.text} </p>
    </div>
    `

    document.getElementById("side-bar-container").innerHTML += `
    <div class="opacity-controller">
    <div class="opacity"></div>
    <img src="${element.image}" alt="immagine">
    </div>
    `

    console.log(element);

    } 
);



// selezione elementi creati

    // main images
    const containerImage = document.querySelectorAll("#container div");

    containerImage[imagePosition].classList.add("active");


    // side images
    const containerSideImage = document.querySelectorAll(".opacity-controller div");

    console.log(containerSideImage);

    containerSideImage[imagePosition].classList.remove("opacity");


// funzionalità pulsanti


    //previous
    btnPrevious.addEventListener("click",
        function () {

            containerImage[imagePosition].classList.remove("active");

            containerSideImage[imagePosition].classList.add("opacity");

            if (imagePosition == 0) {
                imagePosition = containerImage.length;
            }
            
            imagePosition--;

            containerImage[imagePosition].classList.add("active");

            containerSideImage[imagePosition].classList.remove("opacity");

        }
    )


    // next
    btnNext.addEventListener("click",
        function () {

        containerImage[imagePosition].classList.remove("active");

        containerSideImage[imagePosition].classList.add("opacity");

        if (imagePosition == (containerImage.length) - 1) {
            imagePosition = -1;
        }

        imagePosition++;

        containerImage[imagePosition].classList.add("active");

        containerSideImage[imagePosition].classList.remove("opacity");

        }
    )


