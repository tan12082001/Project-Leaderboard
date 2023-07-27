import './style.css';
import addScore from './modules/add-score.js';
import refreshScores from './modules/refresh-score.js';

const REFRESH = document.getElementById('scores-refresh');
const ADDSCORE = document.getElementById('add-score');
const USERNAME = document.getElementById('name');
const USERSCORE = document.getElementById('score');
const Message = document.querySelector('.message');

document.addEventListener('DOMContentLoaded', refreshScores);
REFRESH.addEventListener('click', refreshScores);

ADDSCORE.addEventListener('click', (e) => {
  e.preventDefault();
  if (USERNAME.value === '' || USERSCORE.value === '') {
    Message.innerHTML = `
      <span>Enter both name and score to add to Leaderboard &#9940;</span>
    `;
    setTimeout(() => {
      Message.innerHTML = '';
    }, 2000);
  }
  if (USERNAME.value !== '' && USERSCORE.value !== '') {
    addScore(USERNAME.value, USERSCORE.value);
    USERNAME.value = '';
    USERSCORE.value = '';
    Message.innerHTML = `
      <span>Score added to Leaderboard &#9996;</span>
    `;
    setTimeout(() => {
      Message.innerHTML = '';
    }, 2000);
  }
});
