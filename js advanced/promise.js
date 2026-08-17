//const friendStatus = 'failure'

const friend = {
	status: 'failure',
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

const logger = time => {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve()
		}, time)
	})
}

Promise.all([logger(1000), logger(2000)]).then(() => {
	console.log('All promises resolved')
})

/*logger(1000).then(
	() => console.log('1000ms'),

	logger(2000).then(() => console.log('2000ms')),
) */
