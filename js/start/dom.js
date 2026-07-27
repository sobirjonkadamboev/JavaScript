//DOM - Document Object Model

//Old syntax

//const box = document.getElementById('box')
//const box = document.getElementsByClassName('box')
//const buttons = document.getElementsByTagName('button')

//New syntax

//const box = document.querySelector('button') //for class - . for class # - for id
/*const buttons = document.querySelectorAll('.button')

const wrapper = document.querySelector('.wrapper')
const hearts = wrapper.querySelectorAll('.heart')
 
console.log(wrapper)
console.log(hearts) */

const box = document.querySelector('#box'),
	buttons = document.querySelectorAll('button'),
	circles = document.querySelectorAll('.circle')

box.style.backgroundColor = 'blue'
box.style.width = '500px'

buttons[2].style.width = '200px'
circles[1].style.borderRadius = '0'
