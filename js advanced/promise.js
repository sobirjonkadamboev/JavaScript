const friendStatus = 'failure'

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
		console.log('Finished again') //for success
	})
	.catch(() => {
		console.log('Not successful') //unsuccessful
	})
	.finally(() => {
		console.log('not success or success')
	})
