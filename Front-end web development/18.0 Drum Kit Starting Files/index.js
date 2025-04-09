var numberOfButton = document.querySelectorAll(".drum").length;
var tom1 = new Audio("./sounds/tom-1.mp3");
var tom2 = new Audio("./sounds/tom-2.mp3");
var tom3 = new Audio("./sounds/tom-3.mp3");
var tom4 = new Audio("./sounds/tom-4.mp3");
var crash1 = new Audio("./sounds/crash.mp3");
var snare1 = new Audio("./sounds/snare.mp3");
var kickbass = new Audio("./sounds/kick-bass.mp3");

for(var x = 0; x < numberOfButton; x++){
    document.querySelectorAll(".drum")[x].addEventListener("click", function(){
        var buttonName = this.innerHTML;
        keyMaker(buttonName);
        buttonAnimation(buttonName);
    });
}
document.addEventListener("keypress", function(KeyboardEvent){
    keyMaker(KeyboardEvent.key);
    buttonAnimation(KeyboardEvent.key);
});
function keyMaker(key){
    switch(key){
        case "w":
            tom1.play();
            break;
        case "a":
            tom2.play();
            break;
        case "s":
            tom3.play();
            break;
        case "d":
            tom4.play();
            break;
        case "j":
            crash1.play();
            break;
        case "k":
            snare1.play();
            break;
        case "l":
            kickbass.play();
            break;
        default:
            break;
    }
}
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}