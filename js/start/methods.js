///String methods
let test = 'Hi, Artificial Intelligence'
const password = '               space.  '

console.log(test.length) //length
console.log(test.at(5)) //same
console.log(test[5]) //same
console.log(test.toUpperCase()) //upperCase
console.log(test.toLowerCase()) //lowerCase
console.log(test.slice(0, 7)) //to slice
console.log(test.substring(0, 7)) //can't use -7 here
console.log(password.trim()) //removes space
console.log(password.trimStart())
console.log(password.trimEnd())
console.log(test.indexOf('A')) //position

//Number Methods

let number = 18.8
const width = '220px'

console.log(number)
console.log(Math.round(number)) //eng yaqin son
console.log(Math.floor(number)) //sonni butun qilish uchun
console.log(parseInt(width)) //string to integer
console.log(parseFloat(width)) //from string to integer
