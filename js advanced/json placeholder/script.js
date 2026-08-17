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
			const post = document.createElement('div')
			post.classList.add('post')
			data.forEach((item, index) => {
				post.innerHTML += `<h4> <b>#1.</b> sunt aut facere repellat provident occaecati excepturi optio reprehenderit</h4>
			<p>quia et suscipitnsuscipit recusandae consequuntur expedita et cumnreprehenderit molestiae ut ut quas
				totamnnostrum rerum est autem sunt rem eveniet architecto</p>`
			})

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
