window.addEventListener('DOMContentLoaded', () => {
	const postWrapper = document.querySelector('.posts')

	//GET methodi:
	fetch('https://jsonplaceholder.typicode.com1/posts', {
		//fetch - bu serverdan ma'lumot olganda ishlatiladi, ya'ni serverga so'rov yuboriladi
		method: 'GET',
		headers: {
			'Content-type': 'application/json',
		},
	})
		.then(response => response.json()) //.json formatda userga ko'rsatish(oson)
		.then(data => {
			data.forEach((item, index) => {
				const postEl = document.createElement('div')
				postEl.classList.add('post')
				postEl.innerHTML += `<h4> <b>#1.
				${index + 1}. </b> ${item.title}</h4>
			<p>${item.body}</p>`
				postWrapper.append(postEl)
			})
		})
		.catch(() => {
			const errorEl = document.createElement('div')
			errorEl.classList.add('error')
			errorEl.textContent = 'Something went wrong'
			postWrapper.append(errorEl)
		})
		.finally(() => {
			//oxirida chiqarish uchun success or not success bo'lsayam
			console.log('Finally done!')
		})

	//POST method:

	const form = document.querySelector('form')

	form.addEventListener('submit', event => {
		event.preventDefault()
		const formData = new FormData(form)
		console.log(formData)
	})
})
