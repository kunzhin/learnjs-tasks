// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 ? true : false
}

let user = {}

console.log(isEmpty(user))

user.name = 'John'

console.log(isEmpty(user))