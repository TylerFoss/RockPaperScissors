var choices = ["rock", "paper","scissors"];
var index = Math.floor(Math.random() * 3);
var computerChoice = choices[index];
var p1Button = $("#p1");
var compButton = $("#comp");
var p1Display = $("#p1Display");
var compDisplay = $("#compDisplay");
var p1Score = 0;
var compScore = 0;

p1Button.on("click", function(){
  p1Score++;
  p1Display.text(p1Score);
});
compButton.on("click", function(){
  compScore++;
  compDisplay.text(compScore);
});
$("#rock").on("click", playerChoiceRock());
function playerChoiceRock(){
  if(computerChoice === "rock"){
    $('#result').text('Rock vs Rock its a tie');
  } else if(computerChoice === "scissors"){
    $('#result').text('Rock vs Scissors You Win');
  }else if(computerChoice === "paper"){
    $('#result').text('Rock vs Paper You Lose');
  }
}
$("#scissors").on("click", playerChoiceScissors());
function playerChoiceScissors(){
  if(computerChoice === "scissors"){
    $('#result').text('Scissors vs Scissors its a tie');
  } else if(computerChoice === "paper"){
    $('#result').text('Scissors vs Paper You Win');
  }else if(computerChoice === "rock"){
    $('#result').text('Scissors vs Rock You Lose');
  }
}
$("#paper").on("click", playerChoicePaper());
function playerChoicePaper(){
  if(computerChoice === "paper"){
    $('#result').text('Paper vs Paper its a tie');
  } else if(computerChoice === "rock"){
    $('#result').text('Paper vs Rock You Win');
  }else if(computerChoice === "scissors"){
    $('#result').text('Paper vs Scissors You Lose');
  }
}
$("#resetbtn").on("click", function(){
  $("#result").fadeOut( "fast" );
  $("#result").fadeIn("fast").delay(3000);
  $("#result").text("Make Your move");
  p1Display.text("0");
  compDisplay.text("0");
  p1Score = 0;
  compScore = 0;
  index = Math.floor(Math.random() * 3);
  computerChoice = choices[index];
});


// $("#rock").on("click", playerChoiceRock());
// $("#scissors").on("click", playerChoiceScissors());
// $("#paper").on("click", playerChoicePaper());
