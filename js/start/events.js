const buttons = document.querySelectorAll('button')

buttons.forEach((item, idx) => {
	item.addEventListener(
		'click',
		() => {
			console.log(idx + 1)
		},
		{ once: true },
	)
}) //showing item index with forEach method

/* const link = document.querySelector('a')

link.addEventListener('click', event => {
	console.log('click')
})

const btn1 = document.querySelector('button'),
	overlay = document.querySelector('.lay')

const callback = event => {
	console.log(event.target) //element name
	console.log(event.type) //type
}

overlay.addEventListener('click', callback)

btn1.addEventListener('click', callback)
btn1.onclick = function () {
	alert('1')
} 

btn1.onmousedown = function () {
	alert('mouse')
} 

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
