import dic from './dictionary.json' assert { type: 'json' };

const print = (text = '', append = false) => {
  if (!append) output.value = text;
  else output.value += !output.value ? text : `\n${text}`;
  output.scrollTop = output.scrollHeight;
};

const words = Object.keys(dic);
words.sort(() => Math.random() - 0.5);
let wordIndex = 0;
print([words[wordIndex]]);

$('#leftArrow').click(() => {
  if (wordIndex > 0) print([words[--wordIndex]]);
  $('#numOfCard').val(wordIndex);
})

$('#rightArrow').click(() => {
  if (wordIndex < words.length - 1) print([words[++wordIndex]]);
  $('#numOfCard').val(wordIndex);
});

let counterTrue = 0;
let counterFalse = 0;

// $('#output').click(() => {

//   if (translate.value.trim() === dic[words[wordIndex]]) {
//     print('Вірно!')
//     counterTrue++;
//     $('#correct').val(counterTrue);
//   }
//   else print('Невірно!');
//   counterFalse++;
//   $('#incorrect').val(counterFalse);
// })

$('#check-button').click(() => {
  if (translate.value.trim() === dic[words[wordIndex]]) {
    print('Вірно!')
    counterTrue++;
  $('#correct').val(counterTrue);
  }
  else{ print('Невірно!');
  counterFalse++;
  $('#incorrect').val(counterFalse);
}
})
