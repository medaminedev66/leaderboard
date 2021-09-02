import populatePlayers from './dom.js';

const getAPIData = () => {
  const getFetch = async () => {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9I754jQkwVXa66yLA2rE/scores',
    );
    if (!response.ok) {
      throw new Error(`API error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  };
  getFetch().then((data) => {
    populatePlayers(data);
  });
  // .catch((e) => return e);
};

const saveFetch = async (nameInput, scoreInput) => {
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
};

export { getAPIData, saveFetch };
