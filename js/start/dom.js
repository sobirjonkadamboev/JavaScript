//DOM - Document Object Model

//Old syntax

//const box = document.getElementById('box')
//const box = document.getElementsByClassName('box')
//const buttons = document.getElementsByTagName('button')

//New syntax

//const box = document.querySelector('button') //for class - . for class # - for id
//const buttons = document.querySelectorAll('button')

const wrapper = document.querySelector('.wrapper')
const hearts = wrapper.querySelectorAll('.heart')

console.log(wrapper)
console.log(hearts)
