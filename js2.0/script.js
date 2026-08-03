const buttons = document.querySelectorAll('button'),
	wrapper = document.querySelector('.wrapper')

buttons.forEach(item => {
	item.addEventListener('click', () => {
		console.log('CLICKED')
	})
})

wrapper.addEventListener('click', event => {
	if (event.target && event.target.tagName === 'BUTTON') {
		console.log('CLICK')
	}
	console.log(event.target)
})

const newButton = document.createElement('button')
newButton.classList.add('yellow')
newButton.textContent = '6'
wrapper.append(newButton)
/* console.log(buttons[0].classList.value) //hamma class valuelarni chiqaradi
console.log(buttons[0].classList.item(1)) //class listdagi itemlar bilan ishlash
console.log(buttons[0].classList.add('yellow')) //yoki remove() o'chirish uchun
console.log(buttons[0].classList.toggle('blue')) //bor narsani yo'q, yo'q narsani bor qiladi (value)



if (buttons[0].classList.contains('red')) {
	console.log('true')
} //shu element class ichida borligini aniqlaydi


 buttons[0].addEventListener('click', () => {
	/* if (buttons[0].classList.contains('red')) {
		console.log('contain red class')
	} else {
		console.log('not found')
	} 
	buttons[1].classList.toggle('red') //ikkinchi raqamli elementga red class qo'shadi

	
}) */
