let computerScore = 0;
let userScore = 0;
let userScore_span; 
let computerScore_span;
let scoreBoard_div = document.querySelector(".score-board");


// Main function starts game based on button press //
window.onload = function main() {
    userScore_span = document.getElementById("user-score");
    computerScore_span = document.getElementById("computer-score");

    let rock_btn = document.getElementById("rock");
    rock_btn.addEventListener("click",function(){
        playRound("rock", computerPlay());
    });

    let paper_btn = document.getElementById("paper");
    paper_btn.addEventListener("click",function(){
        playRound("paper", computerPlay());
    });

    let scissors_btn = document.getElementById("scissors");
    scissors_btn.addEventListener("click",function(){
        playRound("scissors", computerPlay());    
    });
}

//** Runs game to a best of 5 */
// if(userScore == 5 || computerScore == 5){
//         endGame()
//     }

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        draw (); 
    } else if (
        (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") || 
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") || 
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ){
        win ();
     } else {
        lose ();
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
    document.querySelector(".result");
    result.textContent = 'You win this time!';

    if(userScore == 5 || computerScore == 5){
        endGame()
    }
}

function lose () {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    result.textContent = 'Round to the Computer! Try again..';

    if(userScore == 5 || computerScore == 5){
        endGame()
    }
}

function draw () {
    result.textContent = 'No winners this time. Keep trying pal'
}




function endGame() {
    if (userScore > computerScore) {
        result.textContent = 'You win! Congratulations. Press F5 to play again.';
        } else if (computerScore > userScore) {
            result.textContent = 'Bested by a machine... not a good look! Press F5 to play again';
        }
    
}