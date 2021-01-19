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
let food={
    x:Math.floor(Math.random()*15+1) * box,
    y:Math.floor(Math.random()*15+1) * box

}

function createSnake(){
    for(cont=0; cont<snake.length; cont++){
        context.fillStyle="yellow";
        context.fillRect(snake[cont].x, snake[cont].y, box, box);
    }
}


function drawFood(){
    context.fillStyle="red";
    context.fillRect(food.x, food.y, box, box)
}




document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction!="right"){direction="left"};
    if(event.keyCode == 38 && direction!="down"){direction="up"};
    if(event.keyCode==39 && direction!="left"){direction="right"};
    if(event.keyCode==40 && direction!="up"){direction="down"};

}




function startGame(){
    if(snake[0].x > 15 * box && direction=="right"){snake[0].x = 0}
    if(snake[0].x < 0 &&  direction =="left"){ snake[0].x = 16 * box}
    if(snake[0].y >15 * box && direction=="down"){ snake[0].y = 0}
    if(snake[0].y < 0  && direction=="up"){snake[0].y = 16 * box}

    criarBG();
    createSnake();
    drawFood();

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
update();




