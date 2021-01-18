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

function createSnake(){
    for(cont=0; cont<snake.length; cont++){
        context.fillStyle="yellow";
        context.fillRect(snake[cont].x, snake[cont].y, box, box);

    }

}


criarBG();
createSnake();