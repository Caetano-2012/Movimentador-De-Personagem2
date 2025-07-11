const player = document.getElementById("player");
const step = 20;
let posX = 180, posY = 180;

document.addEventListener("keydown", (event) =>{
    if (event.key === "ArrowUp" && posY > 0) posY -= step;
    if (event.key === "ArrowDown" && posY < 360) posY += step;
    if (event.key === "ArrowLeft" && posX > 0) posX -= step;
    if (event.key === "ArrowRight" && posX < 360) posX += step;
    player.style.top = posY + "px";
    player.style.left = posX + "px";
});