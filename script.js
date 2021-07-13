let computerScore = 0;
let userScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

window.onload = function main() {
    let rock_btn = document.getElementById("rock");
    rock_btn.addEventListener("click",function(){
        game();
    });

    let paper_btn = document.getElementById("paper");
    paper_btn.addEventListener("click",function(){
        game();
    });

    let scissors_btn = document.getElementById("scissors");
    scissors_btn.addEventListener("click",function(){
        game();
    });
}


//** Prompts computer to pick a random option from array */
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
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