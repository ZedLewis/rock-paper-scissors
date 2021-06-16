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
        return "Winner!!";
    } else {
        return "Loser!!";
    }    
}

function game() {
    
}