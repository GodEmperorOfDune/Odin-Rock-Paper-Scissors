function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Rock = 0 Paper = 1 Scissors = 2
const choices = {0: "Rock", 1: "Paper", 2: "Scissors"};

function getComputerChoice () {
    return choices[getRandomInt(3)];
}

console.log(getComputerChoice());