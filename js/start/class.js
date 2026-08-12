class Person {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	greeting() {
		return `Full name: ${this.firstName} ${this.lastName}`
	}
}

const firstPerson = new Person('Sobirjon', 'Kadamboev')
const nextPerson = new Person('Akmal', 'Kadirov')

console.log(firstPerson.greeting())
