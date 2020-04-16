const body = document.querySelector("body");

const IMG_NUMBER = 5;
function handleImgLoad(){
    console.log("finished loading");
}
function paintImane(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}image.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}
function init(){
    const randomNumber = genRandom();
    paintImane(randomNumber); 
}

init();