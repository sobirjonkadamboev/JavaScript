/* setTimeout(() => {
	console.log('Hi, this is timeout')
}, 3000).  1-usuli */

const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
	const newID = setTimeout(log, 1000) //2-usul
})

function log() {
	console.log('Timeout 2s')
}
