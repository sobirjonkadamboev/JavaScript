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
form.addEventListener('submit', event => {
	event.preventDefault()

	const formData = new FormData(form)
})
// localStorage.clear() - hammasini o'chiradi
//localStorage.removeItem('item name')
