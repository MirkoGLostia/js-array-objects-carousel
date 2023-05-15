// variabili

let imagePosition = 0;

const image = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"]

const btnPrevious = document.getElementById("previous-image");

const btnNext = document.getElementById("next-image");



// creazione container immagini principali e side

for (let i = 0; i < image.length; i++) {
    
    const cicleImage = image[i];

    // principali
    const div = document.createElement('div');

    div.innerHTML = `<img src="img/${cicleImage}" alt="immagine">`; 

    document.getElementById("container").append(div);

    // side
    const divSecond = document.createElement('div');

    divSecond.innerHTML = 
    `
    <div class="opacity"></div>
    <img src="img/${cicleImage}" alt="immagine">
    `; 
    
    document.getElementById("side-bar-container").append(divSecond);
    
}



// selezione elementi creati

    // main images
    const containerImage = document.querySelectorAll("#container div");

    containerImage[imagePosition].classList.add("active");


    // side images
    const containerSideImage = document.querySelectorAll("#side-bar-container div div");

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


