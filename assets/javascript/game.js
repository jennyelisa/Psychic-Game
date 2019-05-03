var letterPool = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winsCounter = 0;
var lossesCounter =0;
var userGuess= [];
var guessesRemainingCounter = 8;
var guessedLetter = [];

//will need startup() to call at the end. 
function reset() {
    guessesRemainingCounter = 8;
    winsCounter = 0;
    lossesCounter = 0;
} 
//computer has to guess a random letter. math.floormath.random
var computerGuess = [Math.floor(Math.random() * letterPool.length)];
for (let i=1; i< letterPool.length; i++); {
    console.log(computerGuess); //getting a number, turn this into a string?
    letterPool.push(userGuess);
}
//everytime the game restarts the computer should have chosen a new letter




//once computer has its guess the user can choose their letter
//key up command
document.onkeyup = function(event) {
    var userGuess =  event.key;
    console.log(userGuess);
    

//users guess matches computer then win count goes up. game should restart
if (userGuess === computerGuess) {
    alert('You Got IT!' + guessedLetter);
    winsCounter ++;
    // document.getElementById("wins").innerHTML = winsCounter;
    userGuess.push(wins)
    reset();
}

if (guessesRemaining === 0) {
    alert('Game Over!');
    lossesCounter ++;
    // document.getElementById("losses").innerHTML = lossesCounter;
    reset();
} 

 else { // tell player to try again, game resets and loss count should go up
    alert('TRY again!');
    lossesCounter ++;
    guessesRemainingCounter --;
    // document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    reset();
}

//when out of 8 guesses, I want game to reset (reset guesses, but add a loss)




document.getElementById('guessedLetter').textContent = "Your guess so far: " + userGuess;
document.getElementById('guessesRemaining').textContent = "You have " + guessesRemainingCounter + " left! D:";
document.getElementById('wins').textContent = "You've WON " + winsCounter + " times! :)";
document.getElementById('losses').textContent = "You've LOST  " + lossesCounter + " times. :(";

}

  

//need reset function to call after user guesses letter correct
// and when player is out of guesses. 
// needs to use document.getElementById().innerHTML to talk to html page.
//need .join something .push to an array 
