const player = document.getElementById("player");
const goal = document.querySelector(".goal");
let gameover = false;
const step = 20;
const obstacles = document.querySelectorAll(".obstacle");
let posX = 180, posY = 180;

function checkCollision(x,y) {
    for (let obstacle of obstacles) {
        let obsX = obstacle.offsetLeft;
        let obsY = obstacle.offsetTop;
        if (x < obsX + 40 && x + 40 > obsX && y < obsY + 40 && y + 40 > obsY ) {
            return true;
        }
    }
    return false;
}

function checkWin() {
    let goalX = goal.offsetLeft;
    let goalY = goal.offsetTop;
    if(posX < goalX + 40 && posX + 40 > goalX && posY < goalY + 40 && posY + 40 > goalY) {
        alert("Parabéns! Você venceu! 😎");
        gameover = true;
    }
}

document.addEventListener("keydown", (event) =>{
    if (gameover) return;
    let newX = posX;
    let newY = posY;
    if (event.key === "ArrowUp" && posY > 0) newY -= step;
    if (event.key === "ArrowDown" && posY < 360) newY += step;
    if (event.key === "ArrowLeft" && posX > 0) newX -= step;
    if (event.key === "ArrowRight" && posX < 360) newX += step;
    if (!checkCollision(newX, newY)) {
        posX = newX;
        posY = newY;
        player.style.top = posY + "px";
        player.style.left = posX + "px";
    }
    checkWin();
    
});

