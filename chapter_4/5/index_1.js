// Возможно ли создать функции A и B, чтобы new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true

// Ссылаемся на ожин и тот же объект при вызове конструктора
const obj = {};

function A() {
  return obj;
}
function B() {
  return obj;
}

console.log(new A() == new B()); // true
