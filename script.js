let computerScore = 0;
let userScore = 0;
let userScore_span; 
let computerScore_span;
let scoreBoard_div = document.querySelector(".score-board");
let outcome_p = document.querySelector(".outcome");

// Latest - now working on button click, but need to reintegrate game function so that it runs 5 rounds. Also make result print, and work out why undefined player selection in console. //

window.onload = function main() {
    userScore_span = document.getElementById("user-score");
    computerScore_span = document.getElementById("computer-score");

    let rock_btn = document.getElementById("rock");
    rock_btn.addEventListener("click",function(){
        playRound("rock", computerPlay());
    });

    let paper_btn = document.getElementById("paper");
    paper_btn.addEventListener("click",function(){
        game("paper");
    });

    let scissors_btn = document.getElementById("scissors");
    scissors_btn.addEventListener("click",function(){
        game("scissors");
    });
}

//** Runs game to a best of 5 */
function game() {
    // let playerSelection = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    playRound(playerSelection, computerPlay());
    if(userScore < 5 && computerScore < 5){
        game();
    }
    else {
        endGame()
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "Tie"; 
    } else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || 
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || 
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ){
        win ();
        return "Winner!";
     } else {
        lose ();
        return "Loser!!";
     }    
}

//** Prompts computer to pick a random option from array */
function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random()*3); 
    return options[randomNum];
}

function win () {
    userScore ++;
    userScore_span.innerHTML = userScore;
    outcome_p.innerHTML = playerSelection + "beats" + computerSelection + ". you win!";
}

function lose () {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
}


function endGame() {
    if (userScore > computerScore) {
        console.log ("Game over! You win!")
        } else if (computerScore > userScore) {
            console.log ("You lose! Better luck next time.")
        }
    
}