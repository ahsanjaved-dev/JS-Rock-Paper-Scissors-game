const choices = ['rock','paper','scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultdisplay = document.getElementById("resultDisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerScore = 0;
let computerScore = 0;


function playgame(playerChoices){
    const computerChoices = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if (playerChoices===computerChoices){
        result = "Its a Tie";
    }
    else{
        switch(playerChoices){
            case "rock":
                result = (computerChoices === "scissors") ? "You Win":"You Lose";
                break;
            case "paper":
                result = (computerChoices === "rock") ? "You Win":"You Lose";
                break;
            case "scissors":
                result = (computerChoices === "paper") ? "You Win":"You Lose";
                break;
        }
    }

    playerDisplay.textContent = `Player: ${playerChoices}`;
    computerDisplay.textContent = `Computer: ${computerChoices}`;
    resultdisplay.textContent = result;

    resultdisplay.classList.remove("greentext","redtext");

    switch(result){
        case "You Win":
            resultdisplay.classList.add("greentext");
            playerScore++;
            playerscoredisplay.textContent = playerScore;
            break;
        case "You Lose":
            resultdisplay.classList.add("redtext");
            computerScore++;
            computerscoredisplay.textContent = computerScore;
            break;
    }
}