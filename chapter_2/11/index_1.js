// Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.

let age = 15;

age >= 14 && age <= 90
  ? console.log('Находится в диапазоне от 14 до 90')
  : console.log('Не находится в диапазоне от 14 до 90');

if (age >= 14 && age <= 90) {
  console.log('Находится в диапазоне от 14 до 90');
} else {
  console.log('Не находится в диапазоне от 14 до 90');
}
