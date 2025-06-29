// Rock = 0 Paper = 1 Scissors = 2
const choices = {0: "Rock", 1: "Paper", 2: "Scissors"};
let humanScore = 0;
let computerScore = 0;

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

    if(humanChoice === computerChoice) {
        console.log("It is a Tie: " + humanChoice + " is the same as " + computerChoice);
        humanScore++;
    }
    if((humanChoice === "Rock") && (computerChoice === "Scissors")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++
    }
    if((humanChoice === "Paper") && (computerChoice === "Rock")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++
    }
    if((humanChoice === "Scissors") && (computerChoice === "Paper")) {
        console.log("You Win! " + humanChoice + " beats " + computerChoice);
        humanScore++
    }
    if((computerChoice === "Rock") && (humanChoice === "Scissors")) {
        console.log("You Lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    if((computerChoice === "Paper") && (humanChoice === "Rock")) {
        console.log("You Lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
    if((computerChoice === "Scissors") && (humanChoice === "Paper")) {
        console.log("You Lose! " + humanChoice + " loses to " + computerChoice);
        computerScore++;
    }
}

playRound(getPlayerChoice(), getComputerChoice());