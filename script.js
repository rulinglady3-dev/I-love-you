// --------------------
// ELEMENTLER
// --------------------

const startScreen = document.getElementById("startScreen");
const letterScreen = document.getElementById("letterScreen");
const gifScreen = document.getElementById("gifScreen");
const missScreen = document.getElementById("missScreen");
const okayScreen = document.getElementById("okayScreen");
const catScreen = document.getElementById("catScreen");

const envelope = document.getElementById("envelope");

const letter = document.getElementById("letter");

const gifImage = document.getElementById("gifImage");

const movingButtons =
document.querySelectorAll(".movingBtn");

const catYes =
document.getElementById("catYes");

const catNo =
document.getElementById("catNo");



// --------------------
// GIF LİSTESİ
// --------------------

const gifList = [

"IMG_5300.gif",

"IMG_5306.gif",

"IMG_5307.gif",

"IMG_5308.gif",

"IMG_5309.gif",

"IMG_5310.gif",

"IMG_5311.gif"

];



let gifIndex = 0;



// --------------------
// ZARF
// --------------------

envelope.addEventListener("click",()=>{

    startScreen.classList.add("hidden");

    letterScreen.classList.remove("hidden");

});
// --------------------
// MEKTUBA TIKLAMA
// --------------------

letter.addEventListener("click", () => {

    // Mektubu gizle
    letterScreen.classList.add("hidden");

    // GIF ekranını göster
    gifScreen.classList.remove("hidden");

    // İlk GIF'i başlat
    playGif();

});



// --------------------
// GIF OYNATMA
// --------------------

function playGif() {

    if (gifIndex >= gifList.length) {

        gifScreen.classList.add("hidden");

        missScreen.classList.remove("hidden");

        // I miss you 2.5 saniye görünsün
        setTimeout(() => {

            missScreen.classList.add("hidden");

            okayScreen.classList.remove("hidden");

            startMovingButtons();

        }, 2500);

        return;
    }

    gifImage.src = gifList[gifIndex];

    gifIndex++;

    // Her GIF için süre (istersen sonra değiştirebiliriz)
    setTimeout(playGif, 2500);

} 
// --------------------
// HAREKETLİ BUTONLAR
// --------------------

function randomPosition(button){

    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;

    button.style.left = Math.random() * maxX + "px";
    button.style.top = Math.random() * maxY + "px";

}



function startMovingButtons(){

    movingButtons.forEach(button=>{

        randomPosition(button);

        setInterval(()=>{

            randomPosition(button);

        },1800);



        button.addEventListener("click",()=>{

            okayScreen.classList.add("hidden");

            catScreen.classList.remove("hidden");

        });

    });

} 
// --------------------
// CAT GAME
// --------------------

let yesScale = 1;
let noScale = 1;

function moveNoButton(){

    const maxX = window.innerWidth - catNo.offsetWidth - 20;
    const maxY = window.innerHeight - catNo.offsetHeight - 20;

    catNo.style.position = "absolute";
    catNo.style.left = Math.random() * maxX + "px";
    catNo.style.top = Math.random() * maxY + "px";

}



// No butonu

catNo.addEventListener("click",()=>{

    noScale -= 0.12;

    if(noScale < 0.20){

        noScale = 0.20;

    }

    catNo.style.transform =
    `scale(${noScale})`;



    yesScale += 0.12;

    catYes.style.transform =
    `scale(${yesScale})`;



    moveNoButton();

});




// Yes butonu

catYes.addEventListener("click",()=>{

    launchConfetti();

});




// --------------------
// KONFETİ
// --------------------

function launchConfetti(){

    const duration = 2500;

    const end = Date.now() + duration;

    const canvas = document.getElementById("confettiCanvas");

    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const pieces = [];

    for(let i=0;i<180;i++){

        pieces.push({

            x:Math.random()*canvas.width,

            y:-20,

            size:5+Math.random()*8,

            speed:2+Math.random()*5,

            color:`hsl(${Math.random()*360},100%,60%)`

        });

    }

    function draw(){

        ctx.clearRect(0,0,canvas.width,canvas.height);

        pieces.forEach(p=>{

            p.y += p.speed;

            ctx.fillStyle = p.color;

            ctx.fillRect(p.x,p.y,p.size,p.size);

        });

        if(Date.now() < end){

            requestAnimationFrame(draw);

        }else{

            ctx.clearRect(0,0,canvas.width,canvas.height);

        }

    }

    draw();

}
