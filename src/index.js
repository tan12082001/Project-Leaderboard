import './style.css';
import addScore from './modules/add-score.js';
import refreshScores from './modules/refresh-score.js';

const REFRESH = document.getElementById('scores-refresh');
const ADDSCORE = document.getElementById('add-score');
const USERNAME = document.getElementById('name');
const USERSCORE = document.getElementById('score');

document.addEventListener('DOMContentLoaded', refreshScores);
REFRESH.addEventListener('click', refreshScores);

ADDSCORE.addEventListener('click', (e) => {
  e.preventDefault();
  addScore(USERNAME.value, USERSCORE.value);
  USERNAME.value = '';
  USERSCORE.value = '';
});
