function getComputerChoice() { // random number 1,2,3
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) 
        return "PAPER";
    if (choice == 1)
        return "ROCK";
    if (choice == 2)
        return "SCISSOR";
}

function playARound(playerSelection, computerChoice) {
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

function playAGame(numberRounds) {

    let score= 0;
    let matches = 0;

    for (let index = 0; index < numberRounds; index++) {
        let playerSelection = prompt("Paper, Rock, Scissor:").trim().toUpperCase();
        if (playerSelection === "PAPER" || playerSelection === "ROCK" || playerSelection === "SCISSOR") {
            let computerSelection = getComputerChoice();
            let result = playARound(playerSelection, computerSelection);

            if (result == "WIN")
                score += 1;
            matches += 1;

            alert(`Your choice ${playerSelection} \nComputer choice: ${computerSelection} \nResult: ${result} \nFinal score: ${score}/${matches}`)

        } else {
            alert("Wrong input!!! Try again.")
        }
    }
}


let rounds = prompt("How many rounds?");
if (isNaN(parseInt(rounds))) {
    alert("Wrong INput! Try again!.")
} else {
    playAGame(parseInt(rounds));
}

