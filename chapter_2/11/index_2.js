// Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
// Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

let age = 5;

if (!(age >= 14 && age <= 90)) {
  console.log('Не находится в диапазоне от 14 до 90');
}

if (age < 14 || age > 90) {
  console.log('Не находится в диапазоне от 14 до 90');
}