//Element nodes
playerScoreText = document.getElementById('playerScoreText');
computerScoreText = document.getElementById('computerScoreText');
// resetButton = document.getElementById('resetBtn');


//Event Listeners
const buttons = document.getElementsByClassName('btn-choice');

for (let i = 0; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', function(event) {
        let playerChoice = event.currentTarget.dataset.option;
        playRound(playerChoice);
    });
}

// resetButton.addEventListener('click', function() {
//     resetGame();
// });



//Variables for the game
const choices = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;


//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    let randomIndex = Math.floor(Math.random() * (choices.length));
    let computerChoice = choices[randomIndex];
    console.log(playerChoice);
    console.log(computerChoice);
    if (computerChoice === playerChoice) {
        console.log('tie');
        return;
    }

    if (computerChoice === "Rock" && playerChoice === "Paper") {
        console.log('Player won paper covers rock');
        resultText("You Won!", "Paper covers Rock")
        playerScore += 1;
    } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
        console.log('Computer won scissors cut paper');
        resultText("You Lost!", "Paper gets cut by Scissors ")
        computerScore += 1;
    } 
    // else if (computerChoice === "Paper" && playerChoice === "Scissors") {
    //     console.log('Player won scissors cut paper');
    //     resultText("You Won!", "Scissors cut Paper")
    //     playerScore += 1;
    // } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
    //     console.log('Computer won rock smashes scissors');
    //     resultText("You Lost!", "Your scissors get smashed by Rock")
    //     computerScore += 1;
    // } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
    //     console.log('Player won rock smashes scissors');
    //     resultText("You Won!", "Rock smashes Scissors")
    //     playerScore += 1;
    // } else if (computerChoice === "Paper" && playerChoice === "Rock") {
    //     console.log('Computer won paper covers rock');
    //     resultText("You Lost!", "Your Rock is covered by paper")
    //     computerScore += 1;
    // }

    computerScoreText.innerHTML = computerScore;
    playerScoreText.innerHTML = playerScore;
}


//Update the text between the scores with the result of the round and with what each player played
function resultText(resultText, resultPlays) {
    document.getElementById('roundResultText').innerHTML = resultText;
    document.getElementById('roundResultPlays').innerHTML = resultPlays;
}


//Reset scores and text elements to 0
function resetGame() {
    
}


//Alert the player whether they won or not after someone reaches 10 points
function gameOver() {
    
}