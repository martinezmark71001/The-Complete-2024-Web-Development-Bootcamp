$("h1").text("Mark's jQuery");
$("h1").addClass("bigTitle");
$("a").attr("href", "https://www.bing.com");

$("h1").click(function(){
    $("h1").css("color", "red");
});

$("button").click(function(event){
    $("h1").css("color", "blue");
    console.log(event);
});
$(document).keypress(function(event){
    $("h1").text(""+event.key);
});