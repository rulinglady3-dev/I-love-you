const envelope = document.getElementById("envelope");
const sorry = document.getElementById("sorry");

const letter = document.getElementById("letter");

const gifBox = document.getElementById("gifBox");
const gif = document.getElementById("gif");

const miss = document.getElementById("miss");

const okayBox = document.getElementById("okayBox");

const catBox = document.getElementById("catBox");

const catYes = document.getElementById("catYes");
const catNo = document.getElementById("catNo");



let envelopeClick = 0;



// GIF listesi

const gifs = [
"IMG_5300.gif",
"IMG_5306.gif",
"IMG_5307.gif",
"IMG_5308.gif",
"IMG_5309.gif",
"IMG_5310.gif",
"IMG_5311.gif"
];


let gifIndex = 0;



// Zarfa tıklama

envelope.addEventListener("click",()=>{


    envelopeClick++;


    if(envelopeClick === 1){


        sorry.style.display="none";

        letter.classList.remove("hidden");


    }


    else if(envelopeClick === 2){


        letter.classList.add("hidden");

        gifBox.classList.remove("hidden");

        playGif();


    }


});




// GIF oynatma

function playGif(){


    if(gifIndex < gifs.length){


        gif.src = gifs[gifIndex];

        gifIndex++;


        setTimeout(playGif,2500);


    }

    else{


        gifBox.classList.add("hidden");


        miss.classList.remove("hidden");


        setTimeout(()=>{


            miss.classList.add("hidden");

            okayBox.classList.remove("hidden");

            moveButtons();


        },2500);


    }


}



// 3 hareketli buton

function moveButtons(){


    const buttons=document.querySelectorAll(".moving");


    buttons.forEach(btn=>{


        setInterval(()=>{


            btn.style.left=Math.random()*70+"%";

            btn.style.top=Math.random()*70+"%";


        },1500);



    });



}




// Kedi bölümü için

// Şimdilik Yes butonuna basınca gösterir

document.querySelectorAll(".moving").forEach(btn=>{


    btn.addEventListener("click",()=>{


        okayBox.classList.add("hidden");

        catBox.classList.remove("hidden");


    });


});





// No küçülür Yes büyür


let yesSize=1;

let noSize=1;



catNo.addEventListener("click",()=>{


    noSize-=0.15;


    if(noSize<0.2){

        noSize=0.2;

    }


    catNo.style.transform=`scale(${noSize})`;



    yesSize+=0.2;


    catYes.style.transform=`scale(${yesSize})`;



    catNo.style.position="absolute";

    catNo.style.left=Math.random()*80+"%";

    catNo.style.top=Math.random()*80+"%";


});
