let canvas=document.getElementById("snake");
let context= canvas.getContext("2d");
let box=32;

function criarBG(){
    context.fillStyle="lightgreen";
    context.fillRect(0,0,16 * box,16 * box);
}
let snake=[];
snake[0]={
    x: 8 * box,
    y: 8 * box,
}

let direction="right";


function createSnake(){
    for(cont=0; cont<snake.length; cont++){
        context.fillStyle="yellow";
        context.fillRect(snake[cont].x, snake[cont].y, box, box);
    }
}

function startGame(){
    criarBG();
    createSnake();

    let eixoX=snake[0].x;
    let eixoY=snake[0].x;

    if(direction == "right"){eixoX += box};
    if(direction == "left") {eixoX -= box};
    if(direction=="up"){eixoY -= box};
    if(direction=="down"){eixoY += box}

    snake.pop();

    let newHead={
        x:eixoX,
        y:eixoY
    }

    snake.unshift(newHead);


}

let game=setInterval(startGame,100);


