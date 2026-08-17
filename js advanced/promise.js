const friendStatus = 'success'

const request = new Promise((resolve, reject) => {
	if (friendStatus === 'success') {
		resolve()
	} else {
		reject()
	}
})

request
	.then(() => {
		console.log('Successful')
	})
	.then(() => {
		console.log('Finished again')
	})
	.catch(() => {
		console.log('Not successful')
	})
