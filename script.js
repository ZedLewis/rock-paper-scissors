function computerPlay() {
    let options = new Array();
    options = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random()*3); 
    return options[randomNum];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie"; 
    } else if (
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "scissors" && computerSelection == "paper") || 
        (playerSelection == "paper" && computerSelection == "rock") ){
        return "Winner!!";
    } else {
        return "Wanker";
    }
    
    

    
}