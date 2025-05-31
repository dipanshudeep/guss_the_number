const input = document.querySelector('#guessInput');
const button = document.querySelector('.button');
const preGuess = document.querySelector('.gus_num');
const remainGuess = document.querySelector('.re_num');

let randNum = Math.floor(Math.random() * 5) + 1;
let guessesLeft = 5;
let guesses = [];
let gameStarted = false;
input.style.display = 'none';



button.addEventListener('click', function () {
  if (!gameStarted) {
    gameStarted = true;
    button.textContent = 'Submit Guess';
    input.style.display = 'inline';
    return;
  }

  const guess = parseInt(input.value);
  if (isNaN(guess) || guess < 1 || guess > 5) {
    alert('Please enter a number between 1 and 5.');
    return;
  }

  guesses.push(guess);
  guessesLeft--;
  preGuess.textContent = guesses.join(', ');
  remainGuess.textContent = guessesLeft;
  input.value = '';

  if (guess === randNum) {
    alert('Congratulations! You guessed the number!');
    resetGame();
  } else if (guessesLeft === 0) {
    alert(`You've used all attempts. The number was ${randNum}.`);
    resetGame();
  }
});

function resetGame() {
  alert('Game over. Restarting...');
  guesses = [];
  guessesLeft = 5;
  preGuess.textContent = 'None';
  remainGuess.textContent = guessesLeft;
  input.value = '';
  randNum = Math.floor(Math.random() * 5) + 1;
  button.textContent = 'Start Game';
  gameStarted = false;
}