const computerEl = document.getElementById('computer-el')
const yourEl= document.getElementById('your-el')
const resultEl = document.getElementById('result-el')
const possibleChoice = document.querySelectorAll('button')
let userChoice
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    yourEl.innerHTML = userChoice;
    
    generateComputerChoice();
    getResult();

}))


function generateComputerChoice(){
    let choiceArray = ["rock","paper","scissors"];
    let result = ''
    for(let i = 0; i < choiceArray.length; i++){
       result = Math.floor(Math.random() * 3) + 1
    }
    if(result === 1){
        computerChoice = 'rock'
    }
    if(result === 2){
        computerChoice = 'paper'
    }
    if(result === 3){
        computerChoice = 'scissors';
    }
    computerEl.innerHTML = computerChoice
}


function getResult(){
    if(computerChoice === userChoice){
       result = "it's Draw! 😎"
    }

    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win 🍾'
    }

    if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'you lose 🤯'
    }
    if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'you win 😇'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lose 😭'
    }
    if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'you lose 😱'
    }

    resultEl.innerHTML = result;

}