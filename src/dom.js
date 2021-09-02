const populatePlayers = (data) => {
  data.result.forEach((player) => {
    const scores = document.querySelector('.scores > ul');
    const li = document.createElement('li');
    const playerName = document.createElement('p');
    const playerScore = document.createElement('p');
    li.appendChild(playerName);
    li.appendChild(playerScore);
    scores.appendChild(li);
    playerName.innerText = player.user;
    playerScore.innerText = player.score;
  });
};

export default populatePlayers;
