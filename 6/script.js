// html
const input = document.createElement('textarea');
const output = document.createElement('textarea');
const style = document.createElement('style');

output.readOnly = true;
document.head.append(style);
document.body.append(input);
document.body.append(output);

// style
const { sheet } = style; // sheet = style.sheet
sheet.insertRule(`textarea {
  margin-top: 40px;
  margin-left: 25vw;
  width: 50vw;
  height: 30vh;
}`);
sheet.insertRule(`textarea:last-child {
  margin-top: 20px;
}`);

// insert spaces
input.addEventListener('input', () => {
  output.value = [...input.value].reduce((acc, val) => `${acc}${val} `, '');
}, { passive: true });
