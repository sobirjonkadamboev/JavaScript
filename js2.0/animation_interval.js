/* setTimeout(() => {
	console.log('Hi, this is timeout')
}, 3000).  1-usuli */

const btn = document.querySelector('#btn')

const move = () => {
	const car = document.querySelector('.car')
	let position = 0

	const animation = setInterval(go, 1)

	function go() {
		if (position === 1000) {
			clearInterval(animation)
		} else {
			position++
			car.style.left = position + 'px'
		}
	}
}

btn.addEventListener('click', move)

/*
let theTimerID,
	index = 0

//Set Time Out - bu bir function qanchadir vaqtdan keyin bir marotaba ishlaydi
//Set Interval - bitta function har nechidir sekundda ishga tushadi

btn.addEventListener('click', () => {
	theTimerID = setInterval(log, 1000) //2-usul
})

function log() {
	if (index === 5) {
		clearInterval(theTimerID)
	}
	console.log('Timeout 2s')
	index++
}

let timeoutID = setTimeout(function log() {
	console.log('Timeout for 1s')
	timeoutID = setTimeout(log, 1000)
}, 1000) */
