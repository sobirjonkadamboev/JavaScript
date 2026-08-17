window.addEventListener('DOMContentLoaded', () => {
	const postWrapper = document.querySelector('.posts')

	fetch('https://jsonplaceholder.typicode.com/posts', {
		//fetch - bu serverdan ma'lumot olganda ishlatiladi
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then(response => response.json()) //.json formatda userga ko'rsatish(oson)
		.then(data => {
			console.log(data)
		})
		.catch(err => {
			console.log(err)
		})
		.finally(() => {
			//oxirida chiqarish uchun success or not success bo'lsayam
			console.log('Finally done!')
		})
})
