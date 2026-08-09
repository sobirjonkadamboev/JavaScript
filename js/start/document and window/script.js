const box = document.querySelector('.box')

//const width = box.clientWidth
//const height = box.clientHeight -> bu foydalanuvchi ko'radigan eni va bo'y qismi

const width = box.offsetWidth
const height = box.offsetHeight

console.log(width)
console.log(height)
