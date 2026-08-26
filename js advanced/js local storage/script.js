'use strict'

localStorage.setItem('sobirjon-theme', 'navy blue')

const theme = localStorage.getItem('sobirjon-theme')
console.log(theme)

if (theme === 'light') {
	document.body.style.backgroundColor = '#ffa'
} else if (theme === 'navy blue') {
	document.body.style.backgroundColor = '#003568'
}

const form = document.querySelector('form')
const postParent = document.querySelector('posts')

form.addEventListener('submit', event => {
	event.preventDefault()

	const formData = new FormData(form)

	const object = {}
	formData.forEach((value, key) => {
		object[key] = value
	})

	const posts = []
	posts.push(object)

	const db = JSON.parse(localStorage.getItem('posts'))
	if (db) {
		localStorage.setItem('posts', JSON.stringify([...db, object]))
	} else {
		localStorage.setItem('posts', JSON.stringify(object))
	}
})

function getPosts() {
	const posts = JSON.parse(localStorage.getItem('posts'))
	posts.forEach(item => {
		const postEl = document.createElement('div')
		postEl.classList.add('post')
		postEl.innerHTML
	})
}
// localStorage.clear() - hammasini o'chiradi
//localStorage.removeItem('item name')
