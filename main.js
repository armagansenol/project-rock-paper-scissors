let playerScore = 0;
let computerScore = 0;


// Button Animations and Events

const buttons = document.querySelectorAll('.button');

buttons.forEach(button => button.addEventListener('click', choose));

function choose(e) {
    this.classList.add('choosen');
    console.log(e)
}

buttons.forEach(button => button.addEventListener('transitionend', removeTransition));

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('choosen');
}


const rock = document.getElementById('rock');
rock.addEventListener('click', rockPlay);

function rockPlay() {
    playRound('rock', computerPlay())
}

const paper = document.getElementById('paper');
paper.addEventListener('click', paperPlay);

function paperPlay() {
    playRound('paper', computerPlay())
}

const scissors = document.getElementById('scissors');
scissors.addEventListener('click', scissorsPlay);

function scissorsPlay() {
    playRound('scissors', computerPlay())
}

// Restart Event

const restart = document.querySelectorAll('.restart');
for (i = 0; i < restart.length; i++) {
    restart[i].addEventListener('click', function () {
        window.location.reload()
    })
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Computer Choice Generator

function computerPlay() {

    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    let number = getRandomArbitrary(0, 3)
    if (number == 0) {
        return 'ROCK'
    } else if (number == 1) {
        return 'PAPER'
    } else {
        return 'SCISSORS'
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Single Round Main, Interface Transition

function playRound(playerSelection, computerSelection) {


    playerSelection = playerSelection.toUpperCase()


    if (computerSelection == playerSelection) {
        document.querySelector('.results').innerText = 'DEUCE\n\n' + 'PLAYER SCORE: ' + playerScore + '\n' + 'COMPUTER SCORE: ' + computerScore;
        document.querySelector('.computersChoiceBox').innerText = computerSelection;

    } else if ((playerSelection == 'ROCK' && computerSelection == 'SCISSORS') || (playerSelection == 'PAPER' &&
            computerSelection == 'ROCK') || (playerSelection == 'SCISSORS' && computerSelection == 'PAPER')) {
        playerScore++
        document.querySelector('.results').innerText = 'You Win! ' + playerSelection + ' beats ' + computerSelection +
            '\n\n' + 'PLAYER SCORE: ' + playerScore + '\n' + 'COMPUTER SCORE: ' + computerScore
        computerScore;
        document.querySelector('.computersChoiceBox').innerText = computerSelection;
        if (playerScore == 5) {
            document.getElementById('game-interface').style.display = 'none';
            document.getElementById('end-interface-win').style.display = 'block';
        }

    } else if ((playerSelection == 'SCISSORS' && computerSelection == 'ROCK') || (playerSelection == 'ROCK' &&
            computerSelection == 'PAPER') || (playerSelection == 'PAPER' && computerSelection == 'SCISSORS')) {
        computerScore++
        document.querySelector('.results').innerText = 'You Lose! ' + computerSelection + ' beats ' + playerSelection +
            '\n\n' + 'PLAYER SCORE: ' + playerScore + '\n' + 'COMPUTER SCORE: ' + computerScore
        computerScore;
        document.querySelector('.computersChoiceBox').innerText = computerSelection;
        if (computerScore == 5) {
            document.getElementById('game-interface').style.display = 'none';
            document.getElementById('end-interface-lose').style.display = 'block';
        }

    }
}