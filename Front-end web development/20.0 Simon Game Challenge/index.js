var buttonColours = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userClickedPattern = [];
var currentLevel = 0;

function nextSequence(){
    while (userClickedPattern.length > 0) {
        userClickedPattern.pop();
    }
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChoseColour = buttonColours[randomNumber];
    gamePattern.push(randomChoseColour);
    playSound(randomChoseColour);
    $("div."+randomChoseColour).fadeIn(100).fadeOut(100).fadeIn(100);
    currentLevel++;
    $("h1").text("Level " + currentLevel);
    console.log(gamePattern);
}
function playSound(playThis){
    var soundPlay = new Audio("./sounds/"+playThis+".mp3");
    soundPlay.play();
}
    
function animatePress(key){
    $("#"+key).addClass("pressed");
    setTimeout(function(){
        $("#"+key).removeClass("pressed");
    }, 100);
}

function startOver(){
    $("body").css("background-color", "red");
    setTimeout(function(){
        $("body").css("background-color", "#011F3F");
    }, 1000)
    while(gamePattern.length > 0){
        gamePattern.pop();
    }
    currentLevel = 0;
    $("h1").text("Game Over, Press Any Key to Restart");
    playSound("wrong");
}

function checkAnswer(indexKey){
    if(userClickedPattern[indexKey] == gamePattern[indexKey]){
        if(indexKey === gamePattern.length-1){ 
            setTimeout(nextSequence(), 100);
        }
    }
    else{
       startOver()
    }
}

$(document).keypress(function(event){
    if(currentLevel == 0)
    {
        $("h1").text("Level " + currentLevel);
        nextSequence();
    }
});

$("div.btn").click(function(event){
    userClickedPattern.push(event.currentTarget.id);
    playSound(event.currentTarget.id);
    console.log(userClickedPattern + " and length of "+ userClickedPattern.length);
    checkAnswer(userClickedPattern.length - 1);
});