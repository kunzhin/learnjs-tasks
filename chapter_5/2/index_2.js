// Почему 6.35.toFixed(1) == 6.3?
// Методы Math.round и toFixed, согласно документации, округляют до ближайшего целого числа: 0..4 округляется в меньшую сторону, тогда как 5..9 в большую сторону.

console.log(6.35.toFixed(1))
console.log(1.35.toFixed(1))

console.log(6.35.toFixed(20))
console.log(1.35.toFixed(20))

console.log(Math.round(6.35 * 10) / 10)