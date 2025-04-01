// SOLUTION 1 START
// function randomizer(variableLinked){
//     var player1 = Math.floor(Math.random() * 6);
//     var player2 = Math.floor(Math.random() * 6);
//     var pElement1 = document.querySelector(".img1");
//     var pElement2 = document.querySelector(".img2");
//     diceVisualizer(player1, pElement1);
//     diceVisualizer(player2, pElement2);
//     if(player1 > player2){
//         variableLinked.innerHTML = "Player 1 Wins!";
//     }
//     else if(player2 > player1){
//         variableLinked.innerHTML = "Player 2 wins!";
//     }
//     else{
//         variableLinked.innerHTML = "Draw!";
//     }
// }
// function diceVisualizer(playerNum, playerElement){
//     if(playerNum == 1){
//         playerElement.setAttribute("src","./images/dice1.png");
//     }
//     else if(playerNum == 2){
//         playerElement.setAttribute("src","./images/dice2.png");
//     }
//     else if(playerNum == 3){
//         playerElement.setAttribute("src","./images/dice3.png");
//     }
//     else if(playerNum == 4){
//         playerElement.setAttribute("src","./images/dice4.png");
//     }
//     else if(playerNum == 5){
//         playerElement.setAttribute("src","./images/dice5.png");
//     }
//     else if(playerNum == 6){
//         playerElement.setAttribute("src","./images/dice6.png");
//     }
//     else{
//         playerElement.setAttribute("src","./images/dice1.png");
//     }
// }
// var winner = document.querySelector(".container h1");
// randomizer(winner);
// SOLUTION 1 END
function playerDiceVisualizer(playerNum, playerElement){
    var images = "./images/dice"+playerNum+".png";
    playerElement.setAttribute("src", images);
}
var player1 = Math.floor(Math.random() * 6 + 1);
var player2 = Math.floor(Math.random() * 6 + 1);
// alert("Player 1: "+ player1 +" Player 2: "+ player2);
var p1 = document.querySelector(".img1");
var p2 = document.querySelector(".img2");
playerDiceVisualizer(player1, p1);
playerDiceVisualizer(player2, p2);
var variableLinked = document.querySelector(".container h1");

if(player1 > player2){
    variableLinked.innerHTML = "Player 1 Wins!";
}
else if(player2 > player1){
    variableLinked.innerHTML = "Player 2 wins!";
}
else{
    variableLinked.innerHTML = "Draw!";
}
