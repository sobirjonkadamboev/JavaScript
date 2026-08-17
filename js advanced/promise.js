//const friendStatus = 'failure'

const friend = {
	status: 'success',
}

const request = new Promise((resolve, reject) => {
	if (friendStatus === 'success') {
		friend.time = '10:00'
		resolve(friend)
	} else {
		reject()
	}
})

request
	.then(data => {
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
