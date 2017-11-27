//whole alphabet array list for computer to choose from
var computerOptions = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//getting the game setup and presets to appropriate #'s
var numberWins = 0;
var numberLosses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

startNewGame();

//function to reset stats for new game
function prepareNewGame() {
    guessesSoFar = [];
    guessesLeft = 9;
    startNewGame();
}

//computer generating a random letter selection 
function startNewGame() {
    var computerRandomGuess = computerOptions[Math.floor(Math.random() * computerOptions.length)];

    document.onkeypress = function (event) {
        var myGuess = event.key;

        if (guessesLeft !== 0) {
            if (myGuess === computerRandomGuess) {
                numberWins += 1;
                prepareNewGame();
            } 

            //(myGuess !== computerRandomGuess)
            else {
                guessesLeft -= 1;
                guessesSoFar.push(myGuess);
            }
        }

        if (guessesLeft === 0) {
            numberLosses += 1;
            prepareNewGame();
        }


        document.getElementById("startNewGame").innerHTML = "Number of Wins: " + numberWins + "<br>" + "Number of Losses: " + numberLosses + "<br>" + "Guesses Left: " + guessesLeft + "<br>" + "Letters Guessed so Far: " + guessesSoFar;
    }
}
