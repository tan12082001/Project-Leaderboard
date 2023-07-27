import MY_API from './api.js';

const addScore = async (name, score) => {
  const response = await fetch(MY_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=UTF-8' },
    body: JSON.stringify({ user: name, score }),
  });
  const data = await response.json();
  return data.result;
};

export default addScore;