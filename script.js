const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

const gifs = document.getElementById("gifs");
const gifImage = document.getElementById("gifImage");

const miss = document.getElementById("miss");


let clickCount = 0;



const gifList = [

    "IMG_5300.gif",
    "IMG_5306.gif",
    "IMG_5307.gif",
    "IMG_5308.gif",
    "IMG_5309.gif",
    "IMG_5310.gif",
    "IMG_5311.gif"

];


let currentGif = 0;



envelope.addEventListener("click", ()=>{


    clickCount++;



    if(clickCount === 1){


        // İlk tıklamada mektup açılır

        letter.classList.remove("hidden");


    }



    else if(clickCount === 2){


        // İkinci tıklamada GIF'ler başlar

        letter.classList.add("hidden");

        gifs.classList.remove("hidden");


        showNextGif();


    }



});





function showNextGif(){


    if(currentGif < gifList.length){


        gifImage.src = gifList[currentGif];


        currentGif++;


        setTimeout(showNextGif, 2500);


    }

    else {


        gifs.classList.add("hidden");


        miss.classList.remove("hidden");


    }


}
