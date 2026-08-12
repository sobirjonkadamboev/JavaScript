class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	greeting() {
		return `Full name: ${this.firstName} ${this.lastName}`
	}
}

class PersonStatus extends Person {
	//extends -> o'zidan oldingi classni copy qiladi
	constructor(isMarried) {
		super() //super -> this context va boshqalarni copy qiladi ichidagi
		this.isMarried = isMarried
	}

	get() {
		return `Full name: ${this.firstName} ${this.lastName}`
	}
}

const firstPerson = new Person('Sobirjon', 'Kadamboev')
const nextPerson = new Person('Akmal', 'Kadirov')

console.log(firstPerson.greeting())
console.log(nextPerson.greeting())
