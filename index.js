window.addEventListener("load", function(){
    startTimer();
    onClick();
});

function startTimer() {
    document.querySelector("#Netflix-button").classList.add("color-fill");
    document.querySelector("#Netflix-button").addEventListener("animationend", endAnimation);
}

function endAnimation() {
    document.querySelector("body").style.backgroundColor = "lightblue";
    document.querySelector("#Netflix-button").removeEventListener("animationend", endAnimation);
/*     window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
 */}

function onClick(){
    document.querySelector("#Netflix-button").addEventListener("click", function(){
        document.querySelector("#Netflix-button").classList.remove("color-fill");
        document.querySelector("body").style.backgroundColor = "lightcoral";
})}



