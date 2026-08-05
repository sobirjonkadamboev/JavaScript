/* setTimeout(() => {
	console.log('Hi, this is timeout')
}, 3000).  1-usuli */

const btn = document.querySelector('#btn')

let theTimerID,
	index = 0

btn.addEventListener('click', () => {
	theTimerID = setTimeout(log, 1000) //2-usul
})

function log() {
	console.log('Timeout 2s')
}
