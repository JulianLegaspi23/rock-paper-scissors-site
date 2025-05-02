let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById("player-score");
const computerScoreElement = document.getElementById("computer-score");
const resultElement = document.getElementById("result");

const choices = ['rock', 'paper', 'scissors'];

document.getElementById("rock").addEventListener("click", () => playGame('rock'));
document.getElementById("paper").addEventListener("click", () => playGame('paper'));
document.getElementById("scissors").addEventListener("click", () => playGame('scissors'));

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    updateScores(result);
    displayResult(result, playerChoice, computerChoice);
}

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "draw";
    }

    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
        return "player";
    }

    return "computer";
}

function updateScores(result) {
    if (result === "player") {
        playerScore++;
    } else if (result === "computer") {
        computerScore++;
    }

    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
}

function displayResult(result, playerChoice, computerChoice) {
    let message = "";

    if (result === "draw") {
        message = `It's a draw! Both chose ${playerChoice}.`;
    } else if (result === "player") {
        message = `You win! ${capitalize(playerChoice)} beats ${capitalize(computerChoice)}.`;
    } else {
        message = `You lose! ${capitalize(computerChoice)} beats ${capitalize(playerChoice)}.`;
    }

    resultElement.textContent = message;
    resultElement.style.display = "block";
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
