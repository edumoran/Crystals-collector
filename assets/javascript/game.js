//Instructions:
//The game starts with a random "target number" on the screen. The player has to reach the same number by clicking on any of the 4 cristals (the crystals are buttons).
//Each crystal has a random number assigned to it, these numbers will be added to the "score counter" every time the player clicks on the crystals.
//The value assigned to each crystal is hidden and it will randomly change everytime the game ends.
//The player will win only when the "score counter" matches the "target number", this win will be added to the "wins counter"
//If the player's "score counter" exceeds the "target number" then it will be counted as a loss and added to the "losses counter"
//The game will restart once a win or a loss is recorded.



function randomNumber (x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
};

//Here we generate the random "target number" that will appear when the game starts. This number has to be in a range so that it's never smaller than the 4 crystals combined.
var targetNumber = randomNumber (19, 120);
console.log(targetNumber);

var winsCounter = 0;
var lossesCounter = 0;
var playerScore = 0;
var crystals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// To define the function that will assign a different value to each crystal
function uniqueCrystalNumber () {
  var index = randomNumber (0, crystals.length - 1);
  var number = crystals[index];
  //sconsole.log(index);
  crystals = crystals.filter(function(value){
  return value !== number;
  });
  return number;
};

var gray = Math.floor(Math.random() * crystals.length) + 1;
var purple = Math.floor(Math.random() * crystals.length) + 1;
var green = Math.floor(Math.random() * crystals.length) + 1;
var yellow = Math.floor(Math.random() * crystals.length) + 1;


//State the document.ready to trigger jquery
$(document).ready(function(){

  //Here the clicks will be added up and displayed under "your score"
$("#gray").on('click', function() {
  crystalValue = ($(this).attr("data-crystalValue"));
  crystalValue = parseInt(crystalValue);
  playerScore = playerScore + gray;
        $("#playerScore").text(playerScore); 
          
        if (playerScore == targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          win();
        }
        else if (playerScore > targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          lose();
        }   
});

$("#purple").on('click', function() {
  crystalValue = ($(this).attr("data-crystalValue"));
  crystalValue = parseInt(crystalValue);
  playerScore = playerScore + purple;
        $("#playerScore").text(playerScore); 
          
        if (playerScore == targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          win();
        }
        else if (playerScore > targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          lose();
        }   
});

$("#green").on('click', function() {
  crystalValue = ($(this).attr("data-crystalValue"));
  crystalValue = parseInt(crystalValue);
  playerScore = playerScore + green;
        $("#playerScore").text(playerScore); 
          
        if (playerScore == targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          win();
        }
        else if (playerScore > targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          lose();
        }   
});

$("#yellow").on('click', function() {
  crystalValue = ($(this).attr("data-crystalValue"));
  crystalValue = parseInt(crystalValue);
  playerScore = playerScore + yellow;
        $("#playerScore").text(playerScore); 
          
        if (playerScore == targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          win();
        }
        else if (playerScore > targetNumber){
          playerScore = 0;
          resetCrystalNumber ();
          lose();
        }   
});

});

//The random target number, the player's score, and the number of wins and losses will be written inside the card.
$("#targetNumber").text(targetNumber);
$("#Wins").text(winsCounter);
$("#Losses").text(lossesCounter);
$("#playerScore").text(playerScore);

function resetCrystalNumber () {
  gray = Math.floor(Math.random() * crystals.length) + 1;
  purple = Math.floor(Math.random() * crystals.length) + 1;
  green = Math.floor(Math.random() * crystals.length) + 1;
  yellow = Math.floor(Math.random() * crystals.length) + 1;
  targetNumber = randomNumber (19, 120);
  playerScore = 0;
  $("#playerScore").text(playerScore);
  $("#targetNumber").text(targetNumber);
};

// To define the function that will push the unique crystal number into the HTML
function resetCrystalValues () {
  $("#gray").attr("data-crystalValue", uniqueCrystalNumber());
  $("#purple").attr("data-crystalValue", uniqueCrystalNumber());
  $("#green").attr("data-crystalValue", uniqueCrystalNumber());
  $("#yellow").attr("data-crystalValue", uniqueCrystalNumber());
};
//console.log(gray, purple, green, yellow);

//To finish, the win and lose alerts to indicate the end of the round and to restart the game. 
function win() {

	alert("Congratulations, you won!");
	winsCounter ++;
	$("#Wins").text(winsCounter);
  resetCrystalNumber();
  
}

function lose() {

	alert("Better luck next time!");
	lossesCounter ++;
	$("#Losses").text(lossesCounter);
	resetCrystalNumber();
}