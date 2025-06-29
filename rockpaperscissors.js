function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Rock = 0 Paper = 1 Scissors = 2
const choices = {0: "Rock", 1: "Paper", 2: "Scissors"};

function getComputerChoice () {
    return choices[getRandomInt(3)];
}

function getPlayerChoice () {
    let playerInput = prompt("Your Choice");
    let playerChoice = playerInput[0].toUpperCase() + playerInput.slice(1).toLowerCase();
    return playerChoice;
}


console.log(getComputerChoice());
console.log(getPlayerChoice());