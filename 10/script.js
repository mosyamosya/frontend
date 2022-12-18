// eslint-disable-next-line no-unused-vars
const imagыes = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
];
let attempts = 0;

const nameDiv = document.createElement('div');
const resultDiv = document.createElement('div');
const attemptDiv = document.createElement('div');
const firstCol = document.querySelectorAll('.first__collumn');
const secondCol = document.querySelectorAll('.second__collumn');
const thirdCol = document.querySelectorAll('.third__collumn');
const btnRoll = document.getElementById('roll');

let nickname = prompt('Input your nickname');
while (nickname === null || nickname.trim() === '') {
  nickname = prompt('Input your nickname correctly');
}

nameDiv.style = 'font-weight:bold;color:white;text-align:center;font-size:2rem;';
attemptDiv.style = 'font-weight:bold;color:white;text-align:center;font-size:2rem;font-style:italic';
resultDiv.style = 'font-weight:bold;text-align:center;font-size:3rem;';

nameDiv.textContent = nickname;
document.body.prepend(attemptDiv);
document.body.prepend(nameDiv);
// eslint-disable-next-line no-use-before-define
btnRoll.addEventListener('click', roll);

function getRandom() {
  return Number(Math.floor(Math.random() * 6 + 1));
}

function roll() {
  ++attempts;
  const slots = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  for (let i = 0; i < slots.length; ++i) {
    for (let j = 0; j < slots.length; ++j) {
      slots[i][j] = getRandom();
    }
  }
  console.log(slots);

  for (let i = 0; i < 3; ++i) { firstCol[i].setAttribute('src', `./images/${slots[0][i]}.png`); }

  for (let i = 0; i < 3; ++i) { secondCol[i].setAttribute('src', `./images/${slots[1][i]}.png`); }

  for (let i = 0; i < 3; ++i) { thirdCol[i].setAttribute('src', `./images/${slots[2][i]}.png`); }
  // перевірка у консолі
  for (let index = 0; index < slots.length; ++index) {
    console.log(slots[index][1]);
  }

  console.log(`attempts: ${attempts}`);
  if (slots[0][1] === slots[1][1] && slots[1][1] === slots[2][1]) {
    resultDiv.style.color = 'green';
    document.body.append(resultDiv);
    resultDiv.textContent = 'You win';
    btnRoll.style.display = 'none';
    attempts = 0;
    setTimeout(() => {
      for (let i = 0; i < slots.length; i++) {
        firstCol[i].setAttribute('src', './images/placeholder.png');
        secondCol[i].setAttribute('src', './images/placeholder.png');
        thirdCol[i].setAttribute('src', './images/placeholder.png');
      }
      btnRoll.style.display = 'block';
      resultDiv.textContent = ' ';
    }, 5000);
  } else if (attempts === 3) {
    resultDiv.style.color = 'red';
    resultDiv.textContent = 'You lose';
    btnRoll.style.display = 'none';
    document.body.append(resultDiv);
    attempts = 0;
    setTimeout(() => {
      btnRoll.style.display = 'block';
      resultDiv.textContent = ' ';
      for (let i = 0; i < slots.length; ++i) {
        firstCol[i].setAttribute('src', './images/placeholder.png');
        secondCol[i].setAttribute('src', './images/placeholder.png');
        thirdCol[i].setAttribute('src', './images/placeholder.png');
      }
    }, 5000);
  }
}
