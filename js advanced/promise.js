const friendStatus = 'success'

const request = new Promise((resolve, reject) => {
	if (friendStatus === 'success') {
		resolve()
	} else {
		reject()
	}
})
