window.addEventListener('DOMContentLoaded', () => {
	const postWrapper = document.querySelector('.posts')

	fetch('https://jsonplaceholder.typicode.com/posts', {
		//fetch - bu serverdan ma'lumot olganda ishlatiladi, ya'ni serverga so'rov yuboriladi
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
				post.innerHTML += `<h4> <b>#1.
				${index + 1}</b> ${item.title}</h4>
			<p>${item.body}</p>`
				postWrapper.append(post)
			})
		})
		.catch(err => {
			console.log(err)
		})
		.finally(() => {
			//oxirida chiqarish uchun success or not success bo'lsayam
			console.log('Finally done!')
		})
})
