'use strict'

//regEx -> /pattern/f

const firstName = 'Sobirjon'

const regEx = /b/i

//i - register flag
//g - global flag

console.log(firstName.match(regEx)) //search - birinchi to'g'ri bo'lgan qiymatni aniqlaydi, match - esa hammasini aniqlab chiqaradi
