'use strict';

const message = document.querySelector('.message');
const scoreField = document.querySelector('.score');
const againBtn = document.querySelector('.again');
const highScoreField = document.querySelector('.highscore');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');

let score = 20; //initial value
let highScore = 0;

const displayMessage = function(msg) {
    message.textContent = msg;
}

const inputField = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');

checkBtn.addEventListener('click', function () {
  const guess = Number(inputField.value);

  // when there is no input
  if (!guess) {
    displayMessage('No Number!');

    // when guess is correct
  } else if (guess === secretNumber) { 
    displayMessage('Correct Number!');
    number.textContent = secretNumber;
    document.querySelector('body').style.background = '#60b347';
    number.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      highScoreField.textContent = highScore;
    }

//     // when guess is to high
//   } else if (guess > secretNumber) {
//     if (score > 1) {
//       message.textContent = 'To high...';
//       score--;
//       scoreField.textContent = score;
//     } else {
//       message.textContent = 'YOU LOST THE GAME!';
//       scoreField.textContent = 0;
//     }

//     // when guess is to low
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       message.textContent = 'To low...';
//       score--;
//       scoreField.textContent = score;
//     } else {
//       message.textContent = 'YOU LOST THE GAME!';
//       scoreField.textContent = 0;
//     }
//   }
    // when guess is wrong
    } else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'To high...' : 'To low...');
            score--;
            scoreField.textContent = score;
        } else {
            displayMessage('YOU LOST THE GAME!');
            scoreField.textContent = 0;
        }
    }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  scoreField.textContent = score;
  number.textContent = '?';
  inputField.value = '';
  document.querySelector('body').style.background = '#222';
  number.style.width = '15rem';
});
