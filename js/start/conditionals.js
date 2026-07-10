/* if, else if, else

const trafficLight = 'green'

if (trafficLight == 'red') {
	console.log('Stop!')
} else if (trafficLight == 'yellow') {
	console.log('Prepare!')
} else if (trafficLight == 'green') {
	console.log('Go!')
}

const age = +prompt('Your Age?', '')
if (age <= 18) {
	console.log('No Access!')
} else {
	console.log('Access')
} */

const age = 20

console.log(age === '20') //qat'iy tekshiruv

const trafficLight = 'green'

if (trafficLight == 'red') {
	console.log('Stop!')
} else if (trafficLight == 'yellow') {
	console.log('Prepare!')
} else if (trafficLight == 'green') {
	console.log('Go!')
}

switch (trafficLight) {
	case 'green':
		console.log('Go!')
		break
	case 'read':
		console.log('Be prepared!')
		break
	case 'yellow':
		console.log('Prepare!')
		break
	default:
		console.log('Just run away!')
}

/* for, while, do while

let number = 1
while (number < 5) {
	console.log(number)
	number++
}

do {
	console.log(number)
	number++
} while (number < 5) */

let number = 1

for (number; number <= 5; number++) {
	if (number === 2) {
		break
	}
	console.log(number)
}
