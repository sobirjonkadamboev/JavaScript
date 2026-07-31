const btn1 = document.querySelector('button'),
	overlay = document.querySelector('lay')
/* btn1.onclick = function () {
	alert('1')
} 

btn1.onmousedown = function () {
	alert('mouse')
} */

const callback = function () {
	console.log(event.target) //pointer events
	event.target.textContent = 'Text'
	event.target.style.backgroundColor = 'red'
	console.log('first click')
}

btn1.addEventListener('click', callback)

/* btn1.addEventListener('click', () => {
	console.log('second click')
}) */
