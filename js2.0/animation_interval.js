/* setTimeout(() => {
	console.log('Hi, this is timeout')
}, 3000).  1-usuli */

function log() {
	console.log('Timeout 2s')
}

const newID = setTimeout(log, 2000) //2-usul
