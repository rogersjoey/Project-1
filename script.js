//console.log("connected");

//global variables
const startButton = document.getElementById("start");
const playAgain = document.getElementById("playAgain");
const greenButton = document.getElementById("green");
const redButton = document.getElementById("red");
const yellowButton = document.getElementById("yellow");
const blueButton = document.getElementById("blue");
let compPattern = [];
let userPattern = [];
let newnumber;

//Buttons
startButton.addEventListener("click", start());
greenButton.addEventListener("click", green());
redButton.addEventListener("click", red());
yellowButton.addEventListener("click", yellow());
blueButton.addEventListener("click", blue());


//Start Logic
function start(){
    preventDefault();
    playback();
}


//Select Playback Function
function playback(){
    //add random number to array
    let compNumber = Math.floor(Math.random()*3);
    compPattern.push(compNumber);
    console.log(compPattern)
    //show pattern on screen
};




//Select User Test Function
function test(){
    let newSpace = userPattern.length - 1;
    if(userPattern.length === compPattern.length){
        userPattern = [];
        game();
    } else if(userPattern[newSpace] != compPattern[newSpace]){
        return;
    } else {
        loser;
    }
};




//funcion for individual color presses
function green(){
    newNumber = 0;
    userPattern.push(newNumber)
    console.log("Green")
    test();
};
function red(){
    newNumber = 1;
    userPattern.push(newNumber)
    console.log("Red")
    test();
};
function yellow(){
    newNumber = 2;
    userPattern.push(newNumber)
    console.log("Yellow")
    test();
};
function blue(){
    newNumber = 3;
    userPattern.push(newNumber)
    console.log("Blue")
    test();
};




//Loser Screen Function
function loser(){
    console.log("loser");
};
//Select Playback Function
    //Select User Test Function
        //funcion for individual color presses


