//Code for 1st Dice 
var randomNumber1 = Math.floor(Math.random() * 6)+1; // Random no between 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // concatinating image with random number

var randomImageSource = randomDiceImage; //images/dice1-dice6.png

var image1= document.querySelectorAll("img")[0]; 
//[0] means there is 2 img tag it will function like an array [0]will select the 1st image
image1.setAttribute("src", randomImageSource);

//Code for 2nd Dice
var randomNumber2 = Math.floor(Math.random() * 6)+1;

var randomImageSource = "dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 Wins";
}
else if(randomNumber1 < randomNumber){
    document.querySelector("h1").innerHTML = "🏁 Player 2 Wins";
}
else{
    document.querySelector("h1").innerHTML = "Draw";
}