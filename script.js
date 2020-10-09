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
startButton.addEventListener("click", start);
greenButton.addEventListener("click", ()=>{
    newNumber = 0;
    userPattern.push(newNumber);
    test();
});
redButton.addEventListener("click", () =>{
    newNumber = 1;
    userPattern.push(newNumber);
    test();
});
yellowButton.addEventListener("click", () =>{
    newNumber = 2;
    userPattern.push(newNumber);
    test();
});
blueButton.addEventListener("click", () =>{
    newNumber = 3;
    userPattern.push(newNumber);
    test();
});


//Start Logic
function start(){
    //event.preventDefault();
    playback();
}


//Select Playback Function
function playback(){
    //add random number to array
    let compNumber = Math.floor(Math.random()*4);
    compPattern.push(compNumber);
    console.log("computer pattern " + compPattern);
    //show pattern on screen
    var counter = 0;
    var a = setInterval(function(){
        showPattern(compPattern[counter]);
        counter++;
        if(counter === compPattern.length) {
            clearInterval(a);
        }
    }, 1000);
};

//showing computer pattern with color changes
function showPattern(show) {
    console.log(show);
    if(show == 0){
        greenButton.style.backgroundColor = "lightgreen";
        setTimeout(() => {
           greenButton.style.backgroundColor = "";   
        }, 1000); 
    } else if (show == 1){
        redButton.style.backgroundColor = "purple";
        setTimeout(() => {
            redButton.style.backgroundColor = "";
        }, 1000); 
    } else if (show == 2) {
        yellowButton.style.backgroundColor = "purple";
        setTimeout(() => {
            yellowButton.style.backgroundColor = "";
        }, 1000);
    } else if (show == 3) {
        blueButton.style.backgroundColor = "lightblue";
        setTimeout(() => {
            blueButton.style.backgroundColor = "";
        }, 1000); 
    }
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
    }
};



//Loser Screen Function
function loser(){
    console.log("loser");
    greenButton.disable = "true";
};



