// Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.

function randomInteger(min, max) {
    return (min - 0.5 + Math.random() * (max - min + 1)).toFixed(0)
}

console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))
console.log(randomInteger(1, 5))