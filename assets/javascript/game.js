//selects a random number between 19 - 120 to be shown at start of game
$(document).ready(function() {
  var random = Math.floor(Math.random()*101+19)

//sends the random number to the randomNumber ID in the HTML
$("#randomNumber").text(random);


//selects random numbers between 1 - 12 for each jewel
var red = Math.floor(Math.random()*11+1)
var yellow = Math.floor(Math.random()*11+1)
var green = Math.floor(Math.random()*11+1)
var blue = Math.floor(Math.random()*11+1)


//variables for user scores
var wins = 0;
var losses = 0;
var userTotal = 0;

//sends user scores to numberWins and numberLosses ID in the HTML
$("#numberWins").text(wins);
$("#numberLosses").text(losses);


//adds wins to userTotal
function winner() {
    alert("You won!");
    wins++; 
    $("#numberWins").text(wins);  //sends the number of wins to HTML
    reset();
  }


//adds losses to userTotal
function loser() {
    alert ("You lose!  Try again!");
    losses++;
    $("#numberLosses").text(losses);  //sends the number of losses to HTML
    reset();
  }


//resets the game
function reset() {
    random = Math.floor(Math.random()*101+19);
    $("#randomNumber").text(random);

    red = Math.floor(Math.random()*11+1);
    yellow = Math.floor(Math.random()*11+1);
    green = Math.floor(Math.random()*11+1);
    blue = Math.floor(Math.random()*11+1);
    userTotal = 0;
    $("#totalScore").text(userTotal);
  }


//click functions for jewels
$("#redGem").on ('click', function() {
    userTotal = userTotal + red;  //on click, adds number assigned to the jewel to user total
    $("#totalScore").text(userTotal);  //sends updated total score to HTML

        if (userTotal === random) {
          winner();  //if user total is equal to or less than Number To Get, user wins
        }
        else if (userTotal > random) {
          loser();  //if user total is greater than Number To Get, user loses
        }
  })


$("#yellowGem").on ('click', function() {
    userTotal = userTotal + yellow;
    $("#totalScore").text(userTotal); 

        if (userTotal === random) {
          winner();
        }
        else if (userTotal > random) {
          loser();
        } 
  })


$("#greenGem").on ('click', function() {
    userTotal = userTotal + green;
    $("#totalScore").text(userTotal);

          if (userTotal === random) {
          winner();
        }
        else if (userTotal > random) {
          loser();
        } 
  })


$("#blueGem").on ('click', function() {
    userTotal = userTotal + blue;
    $("#totalScore").text(userTotal); 
      
          if (userTotal === random) {
          winner();
        }
        else if (userTotal > random) {
          loser();
        }
  });

});
