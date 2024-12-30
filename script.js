const controlbutton = document.querySelector(".controlbutton");
const pause = document.querySelector(".pause");
const play = document.querySelector(".play");
const audio = document.querySelector("#backgroundAudio");
const btn = document.querySelector(".btn"); 
function control() {
    pause.classList.toggle("hide");
    play.classList.toggle("hide");
    if (audio.paused) audio.play();
    else audio.pause();
}

controlbutton.addEventListener("click", control);
btn.addEventListener("click", control);