// html
const input = document.createElement('textarea');
const output = document.createElement('input');
const div = document.createElement('div');
const div2 = document.createElement('div');
const div4 = document.createElement('div');
const div5 = document.createElement('div');

const image = document.createElement('img');
const style = document.createElement('style');
const button = document.createElement('button');
button.innerHTML = 'Передбачити';
div.className = 'image';
div2.className = 'parent';
output.readOnly = true;
image.src = 'ball.png';
image.setAttribute('width', '450');
image.setAttribute('heigth', '450');
div5.append(input);
div4.append(button);
div2.append(div, div4, div5);
div.append(image, output);
document.head.append(style); // додає ці теги в боді і хед
document.body.append(div2);

const { sheet } = style; // sheet = style.sheet домтуп до стилів
sheet.insertRule(`textarea {
  position: absolute;
    top: 50px;
    left: 50%;
    transform: translate(-50%, -50%);
}`);
sheet.insertRule(`img {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}`);
sheet.insertRule(`body {
  background-color: #1f1f1f;
 }`);

sheet.insertRule(`.parent {
  display: flex;
  flex-direction: column-revers;
 }`);
sheet.insertRule(`button {
  background-color: #1f1f1f;
  color: blue;
  position: absolute;
  top: 90px;
  left: 50%;
  transform: translate(-50%, -50%);
 }`);
sheet.insertRule(`input {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: rgba(12, 12, 12, 0);
  color: white;
  width: 220px;
  border: none;
  font-size: 15px;
}`);

const answers = ['Духи кажуть мені "Так"', 'ТАК!', 'Запитай пізніше', 'Безперечно',
  'Ніяких сумнівів', 'Можеш бути впев\nненим у цьому', 'Вірогідніше всього', 'Краще не розповідати',
  'Не можу точно передбачити', 'Зконцентруйся і запитай знову', 'Ні', 'Дуже сумнівно',
  'Перспективи дуже сумнівні', 'Навіть не думай'];

button.addEventListener('click', () => {
  // eslint-disable-next-line no-alert
  if (!input.value) alert('Постав запитання!');
  else {
    const num = Math.floor(Math.random() * answers.length);
    output.value = answers[num];
  }
  // аутпут = spread operator
}, { passive: true });
