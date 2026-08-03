const buttons = document.querySelectorAll('button')

console.log(buttons[0].classList.value) //hamma class valuelarni chiqaradi
console.log(buttons[0].classList.item(1)) //class listdagi itemlar bilan ishlash
console.log(buttons[0].classList.add('yellow')) //yoki remove() o'chirish uchun
console.log(buttons[0].classList.toggle('blue')) //bor narsani yo'q, yo'q narsani bor qiladi
console.log(buttons[0].classList.value)
