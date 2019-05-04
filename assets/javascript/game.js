var letterPool = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var winsCounter = 0;
var lossesCounter = 0;
var userGuess = [];
var guessesRemainingCounter = 8;
var guessedLetter = [];
var correctLetter = [];
var computerGuess=""

function reset() {
    guessesRemainingCounter = 8;
    userGuess = "";
    computerGuess = letterPool[Math.floor(Math.random() * letterPool.length)];
    
    console.log(computerGuess)
}

reset();

//once computer has its guess the user can choose their letter
//key up command
document.onkeyup = function (event) {
    var userGuess = event.key;
    console.log(userGuess);

    //users guess matches computer then win count goes up. game should restart
    if (userGuess === computerGuess) {
        alert('You Got IT!');
        winsCounter++;
        reset();
    } else { // tell player to try again, game resets and loss count should go up
        alert('TRY again!');
        guessesRemainingCounter--;
        
        // document.getElementById("guessesRemainingCounter").innerHTML = guessesRemainingCounter--;
        if (guessesRemainingCounter === 0) {
            alert('Game Over!');
            lossesCounter++;
            guessesRemainingCounter--;
            reset();
        }
    };




    document.getElementById('guessedLetter').textContent = "Your guess so far: " + userGuess;
    document.getElementById('wins').textContent = "You have " + winsCounter + " win! :D";
    document.getElementById('losses').textContent = "You have  " + lossesCounter + " loss! D:";
    document.getElementById('guessesRemaining').textContent = "You have " + guessesRemainingCounter + " guesses left";
    // document.getElementById('correct-letter').textContent = "The letter was : " + computerGuess;
    //line about shows the guessed letter how to make this appear after out of tries
    document.getElementById('outcome').textContent = "You WON! :D";
    document.getElementById('outcome').textContent = "You LOST! D:";


};

