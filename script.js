function getComputerChoice() { // random number 1,2,3
    let choice = Math.floor(Math.random() * 3);
    if (choice == 0) 
        return "Paper";
    if (choice == 1)
        return "Rock";
    if (choice == 2)
        return "Scissor";
}
alert(getComputerChoice())