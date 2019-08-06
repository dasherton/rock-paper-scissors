const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const LOST = 0;
const DRAW = 1;
const WON  = 2;

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

function standardiseSelection(selection)
{
	return selection.toLowerCase();
}

function isValidSelection(selection)
{
	switch(selection)
	{
		case ROCK:
		case PAPER:
		case SCISSORS:
			return true;

		default:
			return false;
	}
}

function playGame(numRounds)
{
	let round = 1;
	let playerScore = 0;
	let computerScore = 0;

	while(round <= numRounds)
	{
		let playerSelection;

		do
		{
			const selection = prompt('Your selection: ');
			playerSelection = standardiseSelection(selection);

		} while( !isValidSelection(playerSelection) )

		const computerSelection = computerPlay();

		console.log(`You play: ${playerSelection}`);
		console.log(`Computer plays: ${computerSelection}`);

		const result = determineWinner(playerSelection, computerSelection);

		if(result === WON)
		{
			alert(`You won this round!  ${playerSelection} beats ${computerSelection}`);
			++playerScore;
			++round;
		}
		else if(result === DRAW)
		{
			alert(`Replay this round.  The computer also chose ${computerSelection} `);
		}
		else
		{
			alert(`You lost this round!  The computer chose ${computerSelection}`);
			++computerScore;
			++round;
		}
	}

	return playerScore >= computerScore;
}

var buttons = Array.from(document.querySelectorAll('button'));

buttons.forEach( (button) => {
	const val = button.value;
	button.addEventListener('click', (e) => {
		console.log(val);
	});
} );
