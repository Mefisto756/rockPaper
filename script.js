function getComputerChoice() { // random number 1,2,3
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) 
        return "PAPER";
    if (choice == 1)
        return "ROCK";
    if (choice == 2)
        return "SCISSOR";
}

function playARound(playerSelection, computerChoice) { //return LOSE, TIE, WIN
    switch (playerSelection) {
        case "PAPER":
            {
                switch (computerChoice) {
                    case "PAPER":
                        return "TIE";
                    case "ROCK":
                        return "WIN";
                    case "SCISSOR":
                        return "LOSE";
                }
             }
        case "ROCK":
           { 
                switch (computerChoice) {
                    case "PAPER":
                        return "LOSE";
                case "ROCK":
                    return "TIE";
                case "SCISSOR":
                    return "WIN";
                }
            }
        case "SCISSOR":
            {
                switch (computerChoice) {
                    case "PAPER":
                        return "WIN";
                    case "ROCK":
                        return "LOSE";
                    case "SCISSOR":
                        return "TIE";
                }
            }
    }

}

function reset() {
    const htmlYourMove = document.querySelector("#yourMove");
    htmlYourMove.textContent = `Your move: Pending`;
    const htmlPcMove = document.querySelector("#PcMove");
    htmlPcMove.textContent = `Computer move: Waiting for Player's move`;
    const htmlResult = document.querySelector("#result");
    htmlResult.textContent = `Result: None`;
    const htmlScore = document.querySelector("#score");
    htmlScore.textContent = "Score: 0";
}

function showResult() {
    const htmlScore = document.querySelector("#score");
    let score = Number(htmlScore.textContent.split(": ")[1]);
    let result = "";

    if (score >= 3)
        result = "Win";
    else
        result = "Lose";

        alert(`Game is over!!\nYou have ${score} and${result}.`)
}

function playAGame(playerChoice) {

    let score= 0;
    let computerSelection = getComputerChoice();
    let result = playARound(playerChoice, computerSelection);

    const htmlYourMove = document.querySelector("#yourMove");
    htmlYourMove.textContent = `Your move: ${playerChoice}`;

    const htmlPcMove = document.querySelector("#PcMove");
    htmlPcMove.textContent = `Computer move: ${computerSelection}`;

    const htmlResult = document.querySelector("#result");
    htmlResult.textContent = `Result: ${result}`;

    const htmlScore = document.querySelector("#score");
    score = Number(htmlScore.textContent.split(": ")[1]);

    if (result == "WIN")
        score += 1;

    htmlScore.textContent = `Score: ${score}`;


}

function main () {
    let matches = 0;
    const scissorButton = document.querySelector("#scissor");
    scissorButton.addEventListener("click", () => {
        playAGame("SCISSOR");
        matches++;
        if(matches == 5) {
            showResult();
            reset();
            matches = 0;
        }
    
    });
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", () => {playAGame("ROCK");
    matches++;
    if(matches == 5) {
        showResult();
        reset();
        matches = 0;
    }
    });
    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", () => {playAGame("PAPER");
    matches++;
    if(matches == 5) {
        showResult();
        reset();
        matches = 0;
    }});
}

main();