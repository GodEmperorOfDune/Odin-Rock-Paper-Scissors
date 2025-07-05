// Rock = 0 Paper = 1 Scissors = 2
const choices = {0: "Rock", 1: "Paper", 2: "Scissors"};
let humanScore = 0;
let computerScore = 0;

const selectionButtons = document.querySelectorAll(".selectionButton");
const humanScoreDiv = document.querySelector("#humanScoreDiv");
const computerScoreDiv = document.querySelector("#computerScoreDiv");
const resultsDiv = document.querySelector(".resultsDiv");


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice () {
    return choices[getRandomInt(3)];
}

function getPlayerChoice () {
    let playerInput = prompt("Your Choice");
    let playerChoice = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerChoice;
}

function playRound (humanChoice, computerChoice) {
    console.log(humanChoice);
    console.log(computerChoice);
    let winText = "You Win! " + humanChoice + " beats " + computerChoice;
    let loseText = "You Lose! " + humanChoice + " loses to " + computerChoice
    let tieText = "It is a Tie: " + humanChoice + " is the same as " + computerChoice
    
    if(humanChoice === computerChoice) {
        console.log(tieText);
        resultsDiv.textContent = tieText;
        humanScore++;
    }
    if((humanChoice === "Rock") && (computerChoice === "Scissors")) {
        console.log(winText);
        resultsDiv.textContent = winText;
        humanScore++
    }
    if((humanChoice === "Paper") && (computerChoice === "Rock")) {
        console.log(winText);
        resultsDiv.textContent = winText;
        humanScore++
    }
    if((humanChoice === "Scissors") && (computerChoice === "Paper")) {
        console.log(winText);
        resultsDiv.textContent = winText;
        humanScore++
    }
    if((computerChoice === "Rock") && (humanChoice === "Scissors")) {
        console.log(loseText);
        resultsDiv.textContent = loseText;
        computerScore++;
    }
    if((computerChoice === "Paper") && (humanChoice === "Rock")) {
        console.log(loseText);
        resultsDiv.textContent = loseText;
        computerScore++;
    }
    if((computerChoice === "Scissors") && (humanChoice === "Paper")) {
        console.log(loseText);
        resultsDiv.textContent = loseText;
        computerScore++;
    }

    // updating score and showing most recent round win/loss/tie
    humanScoreDiv.textContent = "Your Score: " + humanScore;
    computerScoreDiv.textContent = "Computer Score: " + computerScore;

}

function playGame(rounds) {
    for(let i=0; i<rounds; i++){
        playRound(getPlayerChoice(), getComputerChoice());
    }
    if(humanScore > computerScore) {
        console.log("You Win!");
    } else {
        console.log("You Lose!");
    }
}

// playGame(5);

function buttonPlayRound(humanChoice) {
    playRound(humanChoice, getComputerChoice());
}

selectionButtons.forEach((button => {
    button.addEventListener("click", function(e){
        buttonPlayRound(e.target.textContent)
    });
}));