/* setTimeout(() => {
	console.log('Hi, this is timeout')
}, 3000).  1-usuli */

const btn = document.querySelector('#btn')

let theTimerID,
	index = 0

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
