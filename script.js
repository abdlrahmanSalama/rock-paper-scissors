let computerChoice, playerSelection;
let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const computerButton = document.querySelector(".computer-button");
const resetButton = document.querySelector(".reset-button");

let roundStatement = document.querySelector(".round-statement");
let scoreStatement = document.querySelector(".score-statement");

function getComputerChoice() {
    computerChoice = Math.trunc(Math.random() * 3) + 1;
    switch (computerChoice) {
        case 1:
            computerChoice = "Rock";
            computerButton.textContent = `✊🏻`;
            break;
        case 2:
            computerChoice = "Paper";
            computerButton.textContent = `🖐🏻`;
            break;
        case 3:
            computerChoice = "Scissors";
            computerButton.textContent = `✌🏻`;
            break;
    }
    return computerChoice;
}

function playRound() {
    getComputerChoice();
    whoWon(computerChoice, playerSelection);
    if (playerScore > computerScore) {
        scoreIcon = "📈";
    } else if (playerScore < computerScore) {
        scoreIcon = "📉";
    } else {
        scoreIcon = "🙄";
    }
    scoreStatement.textContent = `You: ${playerScore} ${scoreIcon} ${computerScore} :Computer`;
}

function whoWon(computerChoice, playerSelection) {
    if ((computerChoice === "Rock" && playerSelection === "Scissors") || (computerChoice === "Scissors" && playerSelection === "Paper") || (computerChoice === "Paper" && playerSelection === "Rock")) {
        computerScore += 1;
        roundStatement.textContent = `😭 Computer chose ${computerChoice} and you chose ${playerSelection}, computer won!`;
    } else if (computerChoice === playerSelection) {
        roundStatement.textContent = `😎 You both chose ${computerChoice}. That's a tie!`;
    } else {
        playerScore += 1;
        roundStatement.textContent = `🥳 Computer chose ${computerChoice} and you chose ${playerSelection}, you won!`;
    }
}

rockButton.addEventListener("click", function () {
    playerSelection = "Rock";
    playRound();
});

paperButton.addEventListener("click", function () {
    playerSelection = "Paper";
    playRound();
});

scissorsButton.addEventListener("click", function () {
    playerSelection = "Scissors";
    playRound();
});

resetButton.addEventListener("click", function () {
    roundStatement.textContent = `🎮 Start by choosing rock, paper or scissors!`;
    scoreStatement.textContent = `🏆 Score: 0`;
    playerScore = 0;
    computerScore = 0;
})