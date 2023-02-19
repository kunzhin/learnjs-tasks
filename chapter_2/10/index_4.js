// Перепишите конструкцию if с использованием условного оператора '?':

// let result;

// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

let result;
let a = 2;
let b = 3;

a + b < 4 ? (result = 'Мало') : (result = 'Много');

console.log(result);

result = a + b < 4 ? 'Мало' : 'Много';

console.log(result);
