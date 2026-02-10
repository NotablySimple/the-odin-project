console.log('Hello World');

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice = 0) {
        computerChoice = 'paper';
    }
    else if (compChoice = 1) {
        computerChoice = 'scissors';
    }
    else
        computerChoice = 'rock'
    return computerChoice;
}

function getHumanChoice(choice) {
    choice = prompt('Please enter your choice:')
    lowChoice = choice.toLowerCase();
    return lowChoice;
}

let humanScore = 0;
let computerScore = 0;
let roundCount = 1;


function playGame() {


    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Tie! You both chose ${humanChoice}.`);
        }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You win! Paper beats rock!`);
            ++humanScore;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You win! Scissors beats paper!`);
            ++humanScore;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You win! Rock beats scissors!`);
            ++humanScore;
        }
        else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log(`You lose! Paper beats rock!`);
            ++computerScore;
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log(`You lose! Scissors beats paper!`);
            ++computerScore;
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log(`You lose! Rock beats scissors!`);
            ++computerScore;
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    if (roundCount < 5) {
        playRound(humanSelection, computerSelection);
        console.log(`Results After Round ${roundCount}: 
    Human: ${humanScore}
    Computer: ${computerScore}`);
        ++roundCount;
    } else {
        playRound(humanSelection, computerSelection);
        console.log(`Final Score: 
    Human: ${humanScore}
    Computer: ${computerScore}`);
        roundCount = 0;
        if (humanScore > computerScore) {
            console.log("Congratulations - you win!");
        } else {
            console.log("Better luck next time!");
        }
        console.log("Refresh the page to play again!");
    }

}

playGame();
playGame();
playGame();
playGame();
playGame();