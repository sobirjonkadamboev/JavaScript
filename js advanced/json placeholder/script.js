window.addEventListener('DOMContentLoaded', () => {
	const postWrapper = document.querySelector('.posts')

	const URL = 'https://jsonplaceholder.typicode.com/posts'

	//GET methodi:
	fetch(URL, {
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

	//POST method:

	const form = document.querySelector('form')

	form.addEventListener('submit', event => {
		event.preventDefault()
		const formData = new FormData(form)
		const object = {}
		formData.forEach((value, key) => {
			object[key] = value
		})

		const json = JSON.stringify(object)

		fetch(URL, {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: json,
		})
			.then(res => res.json())
			.then(data => {
				const postEl = document.createElement('div')
				postEl.classList.add('post')
				postEl.innerHTML += `<h4> <b>#1.
				${data.id}. </b> ${data.title}</h4>
			<p>${data.body}</p>`
				postWrapper.append(postEl)
			})

			.catch(err => console.log(err))
	})
})
