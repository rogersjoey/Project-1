//console.log("connected");

//global variables
const start = document.getElementById("start");
const playAgain = document.getElementById("playAgain");
const green = document.getElementById("green");
let compPattern = [];
let userPattern = [];

//Start Button Logic
start.addEventListener("click", (event) => {
    event.preventDefault();
    game();
});




//Game Logic
function game(){
    playback();
    test();
    loser();
};





//Select Playback Function
function playback(){

};




//Select User Test Function
function test(){
    green();
    red();
    yellow();
    blue();
};




//funcion for individual color presses
function green(){

};
function red(){

};
function yellow(){

};
function blue(){

};




//Loser Screen Function
function loser(){

};
//Select Playback Function
    //Select User Test Function
        //funcion for individual color presses


