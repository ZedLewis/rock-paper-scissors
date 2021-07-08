let computerScore = 0;
let userScore = 0;

//** Prompts computer to pick a random option from array */
function computerPlay() {
    let options = new Array();
    options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random()*3); 
    return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "Tie"; 
    } else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || 
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || 
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ){
        userScore++;
        return "Winner!!";
    } else {
        computerScore++;
        return "Loser!!";
    }    
}

//** Runs game to a best of 5 */
function game() {
    let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    console.log(playRound(playerSelection, computerPlay()));
    if(userScore < 5 && computerScore < 5){
        game();
    }
    else {
        endGame()
    }
}

function endGame() {
    if (userScore > computerScore) {
        console.log ("Game over! You win!")
        } else if (computerScore > userScore) {
            console.log ("You lose! Better luck next time.")
        }
    
}