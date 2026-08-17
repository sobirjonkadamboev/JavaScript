window.addEventListener('DOMContentLoaded', () => {
	fetch('https://jsonplaceholder.typicode1.com/posts', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		})
})
