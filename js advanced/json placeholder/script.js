window.addEventListener('DOMContentLoaded', () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
})
