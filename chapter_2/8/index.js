// Чему будут равны переменные a, b, c и d в примере ниже?

let a = 1,
  b = 1;

let c = ++a; // 2
let d = b++; // 1

//console.log(c, d);

// Чему будут равны переменные a и x после исполнения кода в примере ниже?

let a1 = 2;

let x = 1 + (a1 *= 2); // 5

//console.log(x);

// Какой результат будет у выражений ниже?

console.log('' + 1 + 0); // '10'
console.log('' - 1 + 0); // -1
console.log(true + false); // 1
console.log(6 / '3'); // 2
console.log('2' * '3'); // 6
console.log(4 + 5 + 'px'); // '9px'
console.log('$' + 4 + 5); // '$45'
console.log('4' - 2); // 2
console.log('4px' - 2); // NaN
console.log('  -9  ' + 5); // '  -9  5'
console.log('  -9  ' - 5); // -14
console.log(null + 1); // 1
console.log(undefined + 1); // NaN
console.log(' \t \n' - 2); // -2
