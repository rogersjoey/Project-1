//console.log("connected");

//global variables

const startButton = document.getElementById("start");
// const playAgain = document.getElementById("playAgain");
const buttons = document.getElementsByClassName("button");
const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
let compPattern = [];
let userPattern = [];
let newnumber;
let move = 1000;
let light = move*.75;

//global functions
function green(){greenButton.style.backgroundColor = "white";}
function red(){redButton.style.backgroundColor = "white";}
function yellow(){yellowButton.style.backgroundColor = "white";}
function blue(){blueButton.style.backgroundColor = "white";}
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
    newNumber = 0;
    userPattern.push(newNumber);
    test();
});
greenButton.addEventListener("mouseup", ()=>{
    greenButton.style.backgroundColor = "green";
});
redButton.addEventListener("mousedown", () =>{
    redButton.style.backgroundColor = "white";
    newNumber = 1;
    userPattern.push(newNumber);
    test();
});
redButton.addEventListener("mouseup", () =>{
    redButton.style.backgroundColor = "red";
});
yellowButton.addEventListener("mousedown", () =>{
    yellowButton.style.backgroundColor = "white";
    newNumber = 2;
    userPattern.push(newNumber);
    test();
});
yellowButton.addEventListener("mouseup", () =>{
    yellowButton.style.backgroundColor = "yellow";
});
blueButton.addEventListener("mousedown", () =>{
    blueButton.style.backgroundColor = "white";
    newNumber = 3;
    userPattern.push(newNumber);
    test();
});
blueButton.addEventListener("mouseup", () =>{
    blueButton.style.backgroundColor = "blue";
});


//Start Logic
function start(){
    //event.preventDefault();
    compPattern = [];
    userPattern = [];
    document.getElementById("green").disabled = false;
    document.getElementById("red").disabled = false;
    document.getElementById("yellow").disabled = false;
    document.getElementById("blue").disabled = false;
    playback();
}

//Select Playback Function
function playback(){
    //add random number to array
    let compNumber = Math.floor(Math.random()*4);
    compPattern.push(compNumber);
    console.log("computer pattern " + compPattern);
    //show pattern on screen
    levelUp();
    var counter = 0;
    var a = setInterval(function(){
        showPattern(compPattern[counter]);
        counter++;
        if(counter === compPattern.length) {
            clearInterval(a);
        }
    }, move);
};

//showing computer pattern with color changes
async function showPattern(show) {
    console.log(show);
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
    //console.log("user pattern " + userPattern);
    let newSpace = userPattern.length - 1;
    //console.log(newSpace);
    if(userPattern.length === compPattern.length && userPattern[newSpace] == compPattern[newSpace]){
        userPattern = [];
        playback();
    } else if(userPattern[newSpace] == compPattern[newSpace]){
        return;
    } else {
        loser();
        // compPattern = [];
        // userPattern = [];
    }
};

//Loser Screen Function
function loser(){
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
    document.getElementById("green").disabled = true;
    document.getElementById("red").disabled = true;
    document.getElementById("yellow").disabled = true;
    document.getElementById("blue").disabled = true;
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
    if(compPattern.length > 1){
        move = 750;
        light = move*.75;
    } else if (compPattern.length > 4){
        move = 500;
        light = move*.75;
    } else if (compPattern.length > 6){
        move = 250;
        light = move*.75;
    }
};

