var ball;
var position,database;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ballPosition = database.ref('ball/position')
    ballPosition.on("value",readPosition,showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writeData(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writeData(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writeData(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writeData(0,+1);
    }
    drawSprites();
}
function readPosition(data){
    position = data.val()
    ball.x = position.x;
    ball.y = position.y;
}
function showError(){
    console.log("error in reading or writing data");
}
function writeData(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}


