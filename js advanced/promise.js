//const friendStatus = 'failure'

const friend = {
	status: 'success',
}

const request = new Promise((resolve, reject) => {
	if (friend.status === 'success') {
		friend.time = '10:00'
		resolve(friend)
	} else {
		friend.cancel = 'no news'
		reject(friend)
	}
})

request
	.then(data => {
		data.place = 'cinema'
		return data
	})
	.then(data => {
		data.food = 'LA'
		console.log(data) //for success
	})
	.catch(error => {
		console.log(error)
	})
	.finally(() => {
		console.log('not success or success')
	})
