'use strict'

localStorage.setItem('sobirjon-theme', 'navy blue')

const theme = localStorage.getItem('sobirjon-theme')
console.log(theme)

if (theme === 'light') {
	document.body.style = '#ffa'
} else if (theme === 'navy blue') {
	document.body.style = '#003568'
}
