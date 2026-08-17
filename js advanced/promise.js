//const friendStatus = 'failure'

const friend = {
	status: 'success',
}

const request = new Promise((resolve, reject) => {
	if (friend.status === 'success') {
		friend.time = '10:00'
		resolve(friend)
	} else {
		reject()
	}
})

request
	.then(data => {
		data.place = 'cinema'
		return data
	})
	.then(() => {
		console.log('Finished again') //for success
	})
	.then(() => {
		console.log(data)
	})
	.catch(() => {
		console.log('Not successful') //unsuccessful
	})
	.finally(() => {
		console.log('not success or success')
	})
