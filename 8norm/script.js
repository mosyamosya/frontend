const playTheGame = document.getElementById('playTheGame');
const firstScore = document.getElementById('firstScore');
const secondScore = document.getElementById('secondScore');
const firstRandNumber = document.getElementById('firstRandNumber');
const secondRandNumber = document.getElementById('secondRandNumber');

// При загрузке страницы пользователь вводит имя (prompt).
// По случайности (random) генерируются целые числа для обоих игроков.
// Балл начисляется тому, у кого число больше. Игра длится до 5 побед.

let firstScoreCount = 0;
let secondScoreCount = 0;

const rand = () => Math.floor(Math.random() * 100) + 1;

let counterOfClick = 0;
const clear = () => {
  // eslint-disable-next-line no-return-assign
  [firstScoreCount, secondScoreCount, counterOfClick].forEach((e) => e.innerHTML = 0);
};

const personA = prompt('Please enter name of first player', 'John Doe');
document.getElementById('name-player-A').value = personA || 'John Doe';
playTheGame.addEventListener(
  'click',
  () => {
    firstRandNumber.value = rand();
    secondRandNumber.value = rand();

    if (firstRandNumber.value > secondRandNumber.value) ++firstScoreCount;
    else if (secondRandNumber.value > firstRandNumber.value) ++secondScoreCount;
    else {
      ++firstScoreCount;
      ++secondScoreCount;
    }

    firstScore.value = firstScoreCount;
    secondScore.value = secondScoreCount;
    ++counterOfClick;
    if (firstScoreCount === 5 || secondScoreCount === 5) {
      alert(`${personA} is winner!`);
      playTheGame.removeEventListener('click', playTheGame);

      // eslint-disable-next-line no-multi-assign
      counterOfClick = firstScoreCount = secondScoreCount = 0;
      clear();
    }
  },
  { passive: true },
  // if(firstScoreCount>secondScoreCount) alert(personA + "win");
  // add crown emoji to winner
  // removeEventListener

);
