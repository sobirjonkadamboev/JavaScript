'use strict'

/* regEx -> /pattern/f

const name = 'Sobirjon'

const regEx = /o/ig

console.log(name.match(regEx))

console.log(name.search(regEx)) //nechinchi indexda turganini ko'rsatib beradi

//i - register flag
//g - global flag
//m - ko'p qatorli flag

const password = 'password123'
console.log(password.replace(/./g))

*/
const email = 'sobirjonkadamboev@gmail.com'
const regEx = '/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/'

console.log(regEx.test(email));














const firstName = 'Sobirjon'

const regEx = /b/ig


console.log(firstName.match(regEx)) //search - birinchi to'g'ri bo'lgan qiymatni aniqlaydi, match - esa hammasini aniqlab chiqaradi */


const password = 'admin1234!.....'

// const date = '2007-04-10'
console.log(password.replace(//g, '*'))
console.log((date.replace(/g/, '-')))
