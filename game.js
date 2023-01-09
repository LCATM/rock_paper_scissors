function getComputerChoice(){
    let x = Math.ceil((Math.random()* 3))
    if(x === 1){
        x = "Rock";
        let computerChoice = x.toLowerCase()
        return computerChoice;
    } else if(x === 2){
        x = "Paper";
        let computerChoice = x.toLowerCase()
        return computerChoice;

    } else if(x === 3){
        x = "Scissors";
        let computerChoice = x.toLowerCase()
        return computerChoice;
    }
}

console.log(getComputerChoice())