const btn1 = document.querySelector('button')

/* btn1.onclick = function () {
	alert('1')
} 

btn1.onmousedown = function () {
	alert('mouse')
} */

btn1.addEventListener('click', event => {
	console.log(event.target) //pointer events
	event.target.textContent = 'Text'
	event.target.style.backgroundColor = 'red'
	console.log('first click')
})

/* btn1.addEventListener('click', () => {
	console.log('second click')
}) */
