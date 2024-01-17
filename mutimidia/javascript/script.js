const imgs = document.getElementById("img_carrossel");
const img = document.querySelectorAll("#img_carrossel img");

let fluxo = 0;
function carrossel(){
    fluxo++;
    if(fluxo > img.length - 1){
        fluxo = 0;
    }

    imgs.style.transform ='translateX(${-fluxo * 500}px)';

}
setInterval(carrossel, 1800);
