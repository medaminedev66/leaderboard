import './style.css';
import { getAPIData, saveFetch } from './data.js';

const scores = document.querySelector('.scores > ul');

document.querySelector('.add').addEventListener('click', () => {
  const nameInput = document.querySelector('.name').value;
  const scoreInput = document.querySelector('.score').value;
  saveFetch(nameInput, scoreInput);
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
});

document.querySelector('.refresh').addEventListener('click', () => {
  scores.innerHTML = '';
  getAPIData();
});

window.onload = getAPIData();
