import './style.css';

const scores = document.querySelector('.scores > ul');
const getAPIData = () => {
  async function getFetch() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I754jQkwVXa66yLA2rE/scores',
    );
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  getFetch().then((data) => {
    //   console.log(data.result[0]);
    data.result.forEach((player) => {
      const li = document.createElement('li');
      const playerName = document.createElement('p');
      const playerScore = document.createElement('p');
      li.appendChild(playerName);
      li.appendChild(playerScore);
      scores.appendChild(li);
      playerName.innerText = player.user;
      playerScore.innerText = player.score;
    });
  });
  // .catch((e) => return e);
};
document.querySelector('.add').addEventListener('click', () => {
  const nameInput = document.querySelector('.name').value;
  const scoreInput = document.querySelector('.score').value;
  async function saveFetch() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I754jQkwVXa66yLA2rE/scores',
      {
        method: 'POST',
        body: JSON.stringify({
          user: nameInput,
          score: scoreInput,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  }
  saveFetch();
  //   saveFetch().then((json) => console.log(json));
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
});

document.querySelector('.refresh').addEventListener('click', () => {
  scores.innerHTML = '';
  getAPIData();
});

window.onload = getAPIData();
