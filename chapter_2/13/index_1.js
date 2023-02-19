// Какое последнее значение выведет этот код? Почему?
// Ответ: выведет 1, затем уменьшит i до 0 => while вернет false

let i = 3;

while (i) {
  console.log(i--);
}

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выводят alert с одинаковыми значениями или нет? Ответ: нет

let j = 0;
while (++j < 5) console.log(j); // 1, 2, 3, 4
while (j++ < 5) console.log(j); // 1, 2, 3, 4, 5

// Для каждого цикла запишите, какие значения он выведет. Потом сравните с ответом.
// Оба цикла выведут alert с одинаковыми значениями или нет? Ответ: одинаковый вывод

for (let i = 0; i < 5; i++) console.log(i); // 0, 1, 2, 3, 4
for (let i = 0; i < 5; ++i) console.log(i); // 0, 1, 2, 3, 4

// При помощи цикла for выведите чётные числа от 2 до 10.

for (let i = 2; i <= 10; ++i) {
  i % 2 !== 0 || console.log(i);
}

// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
//   console.log(`number ${i}!`);
// }

let y = 0;

while (y < 3) {
  console.log(`number ${y}!`);
  y++;
}
