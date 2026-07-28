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
	circles = document.getElementsByClassName('circle'),
	wrapper = document.getElementsByClassName('.wrapper')

/* box.style.backgroundColor = 'blue'
box.style.width = '500px'

buttons[3].style.width = '200px'
circles[1].style.borderRadius = '0'

circles[0].style.cssText = 'background-color: green' */

console.log(buttons)
console.log(circles)

for (let i = 0; i < circles.length; i++) {
	circles[i].style.borderRadius = '0'
}

buttons.forEach(item => {
	item.style.borderRadius = '100%'
})

const div = document.createElement('div')
div.classList.add('heart')
div.style.backgroundColor = 'yellow'

//document.body.append(div) //adds an element to the body
