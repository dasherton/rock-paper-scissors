const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const LOST = 0;
const DRAW = 1;
const WON  = 2;

let buttons = Array.from(document.querySelectorAll('button'));
let score = document.querySelector('#score');

let playerScore = 0;
let computerScore = 0;

function computerPlay()
{
	const r = Math.random();

	if(r < 0.3)
	{
		return ROCK;
	}
	else if(r < 0.6)
	{
		return PAPER;
	}
	else
	{
		return SCISSORS;
	}
}

function determineWinner(playerSelection, computerSelection)
{
	if(playerSelection === ROCK)
	{
		switch(computerSelection)
		{
			case ROCK: return DRAW;
			case PAPER: return LOST;
			case SCISSORS: return WON;
		}
	}
	else if(playerSelection === PAPER)
	{
		switch(computerSelection)
		{
			case ROCK: return WON;
			case PAPER: return DRAW;
			case SCISSORS: return LOST;
		}
	}
	else // playerSelection === SCISSORS
	{
		switch(computerSelection)
		{
			case ROCK: return LOST;
			case PAPER: return WON;
			case SCISSORS: return DRAW;
		}
	}
}

function setScore(playerScore, computerScore)
{
	score.textContent = `The score is ${playerScore}-${computerScore}`;
}

function playRound(playerSelection)
{
	const computerSelection = computerPlay();
	const result = determineWinner(playerSelection, computerSelection);

	if(result === WON)
	{
		alert(`You won this round!  ${playerSelection} beats ${computerSelection}`);
		++playerScore;
	}
	else if(result === DRAW)
	{
		alert(`Replay this round.  The computer also chose ${computerSelection} `);
	}
	else
	{
		alert(`You lost this round!  The computer chose ${computerSelection}`);
		++computerScore;
	}

	setScore(playerScore, computerScore);
}

setScore(playerScore, computerScore);

buttons.forEach( (button) => {
	button.addEventListener('click', (e) => {
		playRound(button.value);
	});
} );
