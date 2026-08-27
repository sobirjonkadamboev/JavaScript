'use strict'

/* regEx -> /pattern/f

const name = 'Sobirjon'

const regEx = /o/ig

console.log(name.match(regEx))

console.log(name.search(regEx)) //nechinchi indexda turganini ko'rsatib beradi

const password = 'password123'

const password2 = 'pass....'

console.log(password2.replace(/\./g, "*")) // /\ - value sifatida oladi
console.log(password.replace(/./g, "*"))

const date = '2024-11-15'

console.log(date.replace(/-/g, ':')) //bu esa almashtirib beradi

*/

//i - register flag
//g - global flag
//m - ko'p qatorli flag

// \d - digits
// \w - words
// \s - space

const text = 'sobirjon2006 '

const regEx1 = /\d/gi

console.log(text.match(regEx1))

const email = 'sobirjonkadamboev@gmail.com'
const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/

console.log(regEx.test(email))
