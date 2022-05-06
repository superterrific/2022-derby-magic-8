const contenders = [
  "Epicenter",
  "Zandon",
  "White Abarrio",
  "Mo Donegal",
  "Tiz the Bomb",
  "Cyberknife",
  "Crown Pride (Jpn)",
  "Taiba",
  "Simlification",
  "Smile Happy",
  "Classic Causeway",
  "Tawny Port",
  "Barber Road",
  "Messier",
  "Zozos",
  "Summer Is Tomorrow",
  "Charge It",
  "Happy Jack",
  "Pioneer of Medina",
  "Rich Strike",
  "No one on your tickets!"
];

document.getElementById('answer-button').onclick = function () {

  document.getElementById('answer-container').classList.remove('eight');
  document.getElementById('answer-container').classList.add('reveal');

  // remove aria-hidden attribute so the answer is read
  document.getElementById('answer-container').setAttribute("aria-hidden", false);
  document.getElementById('answer').classList.add('answer');
  document.getElementById('eight-ball').classList.add('shake');
  let derbyWinner = contenders[Math.floor(Math.random() * contenders.length)];

  document.getElementById('answer-container').textContent = derbyWinner;
};
