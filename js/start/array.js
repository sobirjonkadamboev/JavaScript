const colors = ['green', 'yellow', 'red', 'blue', 'navy blue']

console.log('Array Length:', colors.length)
console.log('Element Index:', colors[3])

//Pop and Push methods
//Pop - removes the last element
//Push - adds element to the end

console.log('Removing Element:', colors.pop())
console.log('Adding Element:', colors.push('brown'))

//Shift and Unshift methods
//Shift - removes the first element
//Unshift - adds element to the start

console.log('Removing First Element:', colors.shift())
console.log('Adding First Element:', colors.unshift('black'))

console.log(colors)

const carModels = ['Audi', 'BMW', 'Toyota', 'Ford', 'BYD']

//Sort method - by alphabet
carModels.sort()
console.log(carModels)

//Array Iteration

for (let i = 0; i < carModels.length; i++) {
	console.log(carModels[i])
}

//for of - use this for arrays
for (let car of carModels) {
	console.log(car)
}

colors.forEach((item, index, arr) => {
	console.log(`${index}: ${item} in array ${arr}`)
})

const numbers = [1, 2, 3, 4, 5, 6]
//numbers[6] = 7 - never add like this
console.log(numbers)

//Split - string to array

const games = 'UFC, FIFA, PES'
const arrGames = games.split(', ')
const string = arrGames.join('-')
console.log(arrGames)
console.log(string)
