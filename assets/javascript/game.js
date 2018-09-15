//Instructions:
//The game starts with a random "target number" on the screen. The player has to reach the same number by clicking on any of the 4 cristals (the crystals are buttons).
//Each crystal has a random number assigned to it, these numbers will be added to the "score counter" every time the player clicks on the crystals.
//The value assigned to each crystal is hidden and it will randomly change everytime the game ends.
//The player will win only when the "score counter" matches the "target number", this win will be added to the "wins counter"
//If the player's "score counter" exceeds the "target number" then it will be counted as a loss and added to the "losses counter"
//The game will restart once a win or a loss is recorded.

//Here we generate the random "target number" that will appear when the game starts. This number has to be in a range so that it's never smaller than the 4 crystals combined.
var targetNumber = Math.floor(Math.random() * 51) + 60; //I chose the number to be generated bewteen 50 and 100
console.log(targetNumber);

var winsCounter = 0;
var lossesCounter = 0;
var playerScore = 0;

var gray = Math.floor(Math.random() * 10) + 1; //This will generate 1-9 numbers
var purple = Math.floor(Math.random() * 10) + 11; //This will generate 1-20 numbers 
var green = Math.floor(Math.random() * 10) + 6; //This will generate 1-15 numbers
var yellow = Math.floor(Math.random() * 10) + 11; //this will generate 1-20 nunmbers
console.log(gray, purple, green, yellow);

//The random target number, the player's score, and the number of wins and losses will be written inside the card.
$("#targetNumber").text(targetNumber);
$("#Wins").text(winsCounter);
$("#Losses").text(lossesCounter);
$("#playerScore").text(playerScore);

function restartGame() {
  if (playerScore >= targetNumber){
    playerScore = 0;
    

    
  } 
}

//Here the clicks will be added up and displayed under "your score"
$("#gray").on('click', function() {
    playerScore = playerScore + gray;
        $("#playerScore").text(playerScore); 
          
        if (playerScore == targetNumber){
          win();
        }
        else if (playerScore > targetNumber){
          lose();
        }   
});

$("#purple").on('click', function() {
  playerScore = playerScore + purple;
      $("#playerScore").text(playerScore); 
        
      if (playerScore == targetNumber){
        win();
      }
      else if (playerScore > targetNumber){
        lose();
      }   
});

$("#green").on('click', function() {
  playerScore = playerScore + green;
      $("#playerScore").text(playerScore); 
        
      if (playerScore == targetNumber){
        win();
      }
      else if (playerScore > targetNumber){
        lose();
      }   
});

$("#yellow").on('click', function() {
  playerScore = playerScore + yellow;
      $("#playerScore").text(playerScore); 
        
      if (playerScore == targetNumber){
        win();
      }
      else if (playerScore > targetNumber){
        lose();
      }   
});

//To finish, the win and lose alerts to indicate the end of the round and to restart the game. 
function win() {

	alert("Congratulations, you won!");
	winsCounter ++;
	$("#Wins").text(winsCounter);
	restartGame();
}

function lose() {

	alert("Better luck next time!");
	lossesCounter ++;
	$("#Losses").text(lossesCounter);
	restartGame();
}