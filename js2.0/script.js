const buttons = document.querySelectorAll('button')

/* console.log(buttons[0].classList.value) //hamma class valuelarni chiqaradi
console.log(buttons[0].classList.item(1)) //class listdagi itemlar bilan ishlash
console.log(buttons[0].classList.add('yellow')) //yoki remove() o'chirish uchun
console.log(buttons[0].classList.toggle('blue')) //bor narsani yo'q, yo'q narsani bor qiladi (value)



if (buttons[0].classList.contains('red')) {
	console.log('true')
} //shu element class ichida borligini aniqlaydi

*/

buttons[0].addEventListener('click', () => {
	/* if (buttons[0].classList.contains('red')) {
		console.log('contain red class')
	} else {
		console.log('not found')
	} */

	buttons[1].classList.toggle('red') //ikkinchi raqamli elementga red class qo'had
})
