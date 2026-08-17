window.addEventListener('DOMContentLoaded', () => {
	fetch('https://jsonplaceholder.typicode.com/posts', {
		//fetch - bu serverdan ma'lumot olganda ishlatiladi
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
		.finally(() => {
			console.log('Finally done!')
		})
})
