//map, filter, reduce - ma'lumot qaytaradi
//forEach - ma'lumot qaytarmaydi, iteratsiya qiladi

/* Map

const arr = ['BMW', 'LAMBORGHINI', 'HONDA', 'LEXUS']
const result = arr.map(item => item.toLowerCase()) //arrayni olib uni yangi arrayga o'zgartira oladi
console.log(result) 

//filter - filterlab yangi natija chiqarish uchun
const arr = [
	{
		name: 'BMW',
		model: 2023,
	},
	{
		name: 'TOYOTA',
		model: 2021,
	},
	{
		name: 'SUZUKI',
		model: 2020,
	},
	{
		name: 'BYD',
		model: 2018,
	},
]

const result = arr.filter(item => item.model > 2019)
console.log(result) 

//Every/Some
// Some - massivni ichida bitta ham son bo'lsa true qaytaradi
// Every - massivda hammasi son bo'lmaguncha false qaytaradi

const arr = [2024, 'November', 'December']
const some1 = arr.some(item => typeof item === 'number')
const every1 = arr.every(item => typeof item === 'string')
console.log(some1)
console.log(every1) */

//Reduce
const arr = [8, 13, 5, 2, 3, 1]
//prev - 0, current = 8
const result = arr.reduce((prev, current) => prev + current)
console.log(result)
