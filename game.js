var game=[];
var userclicks=[];
var level=0;
var start=1;
var index=0;
var colors=["red","blue","green","yellow"];
$(document).on("keydown",function(){
  if(start===1)
  {
    nextsequence();
    start=0;
  }
});
function nextsequence()
{
  $("h1").text("Level "+level);
  level++;
  var randomno=Math.floor(Math.random()*4);
  var nextcolor=colors[randomno];
  game.push(nextcolor);
  $("#"+nextcolor).fadeOut(100).fadeIn(100);
     playsound(nextcolor);
  userclicks=[];
  index=0;
}

$(".btn").on("click",function(){
  var usercolor=this.id;
  animatepress(usercolor);
  userclicks.push(usercolor);
  playsound(usercolor);
  checkanswer(index);
  index++;
});

function checkanswer(index)
{
  if(game[index]!=userclicks[index])
  {
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("h1").text("Wrong answer, Refresh & Restart");
    $("body").addClass("game-over");
    setTimeout(function(){ $("body").removeClass("game-over"); },200);
  }
  else
  {
    if(game.length === userclicks.length)
    {
      setTimeout(nextsequence,1000);
    }
  }
}

function playsound(nextcolor)
{
  switch(nextcolor)
  {
    case "red":  var audio = new Audio("sounds/red.mp3");
                 audio.play();
                 break;
    case "blue":  var audio = new Audio("sounds/blue.mp3");
                 audio.play();
                 break;
    case "green":  var audio = new Audio("sounds/green.mp3");
                 audio.play();
                 break;

    case "yellow":  var audio = new Audio("sounds/yellow.mp3");
                 audio.play();
                 break;
    case "default" :  var audio = new Audio("sounds/wrong.mp3");
                 audio.play();
                 break;
  }
}
function animatepress(color)
{
  $("#"+color).addClass("pressed");
 setTimeout(function(){ $("#"+color).removeClass("pressed"); },100);
}
