// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
// Если объект salaries пуст, то результат должен быть 0.

const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

const sumSalaries = (obj) => {
    let sum = 0
    for (let key in obj) {
        sum += obj[key]
    }
    return sum
}



console.log(sumSalaries(salaries))