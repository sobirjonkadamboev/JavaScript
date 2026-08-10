const box = document.querySelector('.box'),
	button = document.querySelector('button')

console.log(box.getBoundingClientRect()) //height, width'larni chiqarib beradi
console.log(window.getComputedStyle(box)) //qanaqa style'lar borligini ko'rsatadi

/* button.addEventListener('click', () => {
	box.style.height = box.scrollHeight + 'px'
	//console.log(box.scrollTop)
})



//const width = box.clientWidth
//const height = box.clientHeight -> bu foydalanuvchi ko'radigan eni va bo'y qismi

 const width = box.offsetWidth
const height = box.offsetHeight  -> bu faqat contentni width bn height

const width = box.scrollWidth
const height = box.scrollHeight

console.log(width)
console.log(height) */
