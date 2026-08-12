class New {
	constructor(firstName, lastName) {
		this.firstName = firstName
		this.lastName = lastName
	}

	greeting() {
		return `Full name: ${this.firstName} ${this.lastName}`
	}
}

const firstPerson = new New('Sobirjon', 'Kadamboev')

console.log(firstPerson)
