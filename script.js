//console.log("connected");

//global variables
const startButton = document.getElementById("start");
const buttons = document.getElementsByClassName("button");
const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
const highScore = document.getElementById("highScore");
const turnCounter = document.getElementById("score");
let compPattern = [];
let userPattern = [];
let newnumber;
let move = 600;
let light = move*.75;

//sounds
let startSound = document.getElementById("startSound");
let greenSound = document.getElementById("greenSound");
let redSound = document.getElementById("redSound");
let yellowSound = document.getElementById("yellowSound");
let blueSound = document.getElementById("blueSound");
let loseSound = document.getElementById("loseSound");

//global functions
function green(){
    greenButton.style.backgroundColor = "white";
    greenSound.play();
}
function red(){
    redButton.style.backgroundColor = "white";
    redSound.play();
}
function yellow(){
    yellowButton.style.backgroundColor = "white";
    yellowSound.play();
}
function blue(){
    blueButton.style.backgroundColor = "white";
    blueSound.play();
}
function originalColors(){
    greenButton.style.backgroundColor = "";
    redButton.style.backgroundColor = "";
    yellowButton.style.backgroundColor = "";
    blueButton.style.backgroundColor = "";
}

//Buttons
startButton.addEventListener("click", start);
greenButton.addEventListener("mousedown", ()=>{
    greenButton.style.backgroundColor = "white";
    greenSound.play();
    newNumber = 0;
    userPattern.push(newNumber);
    test();
});
greenButton.addEventListener("mouseup", ()=>{
    greenButton.style.backgroundColor = "green";
});
redButton.addEventListener("mousedown", () =>{
    redButton.style.backgroundColor = "white";
    redSound.play();
    newNumber = 1;
    userPattern.push(newNumber);
    test();
});
redButton.addEventListener("mouseup", () =>{
    redButton.style.backgroundColor = "red";
});
yellowButton.addEventListener("mousedown", () =>{
    yellowButton.style.backgroundColor = "white";
    yellowSound.play();
    newNumber = 2;
    userPattern.push(newNumber);
    test();
});
yellowButton.addEventListener("mouseup", () =>{
    yellowButton.style.backgroundColor = "yellow";
});
blueButton.addEventListener("mousedown", () =>{
    blueButton.style.backgroundColor = "white";
    blueSound.play();
    newNumber = 3;
    userPattern.push(newNumber);
    test();
});
blueButton.addEventListener("mouseup", () =>{
    blueButton.style.backgroundColor = "blue";
});
document.getElementById("green").disabled = true;
document.getElementById("red").disabled = true;
document.getElementById("yellow").disabled = true;
document.getElementById("blue").disabled = true;


//Start Logic
function start(){
    //event.preventDefault();
    //startSound.play();
    compPattern = [];
    userPattern = [];
    enable();
    playback();
}

//Select Playback Function
function playback(){
    //add random number to array
    disable();
    let compNumber = Math.floor(Math.random()*4);
    compPattern.push(compNumber);
    //show pattern on screen
    levelUp();
    var counter = 0;
    var a = setInterval(function(){
        showPattern(compPattern[counter]);
        counter++;
        if(counter === compPattern.length) {
            clearInterval(a);
            enable();
        }
    }, move);
};

//showing computer pattern with color changes
async function showPattern(show) {
    if(show == 0){
        green();
    } else if (show == 1){
        red();
    } else if (show == 2) {
        yellow();
    } else if (show == 3) {
        blue();
    }
    setTimeout(() => {
        originalColors();
     }, light);
};


//Select User Test Function
function test(){
    let newSpace = userPattern.length - 1;
    if(userPattern.length === compPattern.length && userPattern[newSpace] == compPattern[newSpace]){
        userPattern = [];
        setTimeout(playback,500);
    } else if(userPattern[newSpace] == compPattern[newSpace]){
        return;
    } else {
        loser();
    };
};

//Loser Screen Function
function loser(){
    loseSound.play();
    let counter = 0;
    let a = setInterval(function(){
        loserColor(compPattern);
        setTimeout(() => {
            originalColors(); 
         }, 200); 
        counter++;
        if(counter === 4) {
            clearInterval(a);
        }
    }, 250);
    setTimeout(() => {
        originalColors();
        compPattern = [];
        userPattern = [];
    }, 1000); 
    loseSound.play();
    disable();
};

function loserColor() {
    let wrongNumber = (compPattern[userPattern.length-1]);
    if(wrongNumber == 0){
        green();
    } else if (wrongNumber == 1){
        red();
    } else if (wrongNumber == 2) {
        yellow();
    } else if (wrongNumber == 3) {
        blue();
    }
};

function levelUp () {
    if(compPattern.length > 15){
        move = 200;
        light = move*.25;
    } else if (compPattern.length > 15){
        move = 300;
        light = move*.25;
    } else if (compPattern.length > 10){
        move = 400;
        light = move*.25;
    } else if (compPattern.length > 5){
        move = 500;
        light = move*.25;
    }
    if(compPattern.length <= 10){
        turnCounter.innerHTML = compPattern.length-1;
    } else { turnCounter.innerHTML = compPattern.length-1;}
    if(highScore.innerHTML <= compPattern.length-1 && compPattern.length < 10){
        highScore.innerHTML = compPattern.length-1;
    } else if (highScore.innerHTML <= compPattern.length-1){
        highScore.innerHTML = compPattern.length-1;
    };
};

function disable() {
    document.getElementById("green").disabled = true;
    document.getElementById("red").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("blue").disabled = true;
};

function enable() {
    document.getElementById("green").disabled = false;
    document.getElementById("red").disabled = false;
    document.getElementById("yellow").disabled = false;
    document.getElementById("blue").disabled = false;
};