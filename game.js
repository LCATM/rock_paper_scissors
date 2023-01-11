// function getComputerChoice(){
//     let x = Math.ceil((Math.random()* 3))
//     if(x === 1){
//         x = "Rock";
//         let choice = x.toLowerCase()
//         return choice;
//     } else if(x === 2){
//         x = "Paper";
//         let choice = x.toLowerCase()
//         return choice;

//     } else if(x === 3){
//         x = "Scissors";
//         let choice = x.toLowerCase()
//         return choice;
//     }
// }



// let computerChoice = getComputerChoice()

// function play_round(computerChoice, playerChoice){
//     if (computerChoice === playerChoice){
//         console.log(`It's a Draw, you both choose ${playerChoice}.`);
//     } else if(computerChoice === "paper"){
//         if(playerChoice === "rock"){
//             console.log("You loose, Paper beats Rock.");
//         } else{
//             console.log("you win, Scissors beats Paper." );
//         }
//     } else if(computerChoice === "scissors"){
//         if(playerChoice === "rock"){
//             console.log("You win, Rock beats Scissors.");
//         } else{
//             console.log("You loose, Scissors beats paper.");

//         }
//     } else if(computerChoice === "rock"){
//         if(playerChoice === "paper"){
//             console.log("You win, Paper beats Rock")
//         } else{
//             console.log("You loose, Rock beats Scissors");
//         }
//     }
// }

// console.log(play_round(computerChoice, playerChoice));

//////////

const choiceList = [
    "rock",
    "paper",
    "scissors"
]

var playerChoice;

function getPlayerChoice(){
    playerChoice = prompt("Choose between Rock, Paper and Scissors")
    playerChoice = playerChoice.toLowerCase();
    checkWord(playerChoice);
}

function checkWord(playerChoice){
        if (choiceList.includes(playerChoice) == true){
            playGame();
            return;
        } else{
            alert("Try Again !");
        }
        getPlayerChoice();
    }


// Si c'est true alors on peut lancer la fonction qui initialise le jeu.







