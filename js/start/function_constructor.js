// const number = new Number(5)

/* const name = new Function('7')
console.log(name) */

function functionConstructor(lastName, firstName) {
	//katta harf bilan boshlanadi function constructorlar
	this.lastName = lastName
	this.firstName = firstName
} //this is constructor function

function Car(model, name, year, color) {
	;((this.model = model),
		(this.name = name),
		(this.year = year),
		(this.color = color))
}

const car1 = new Car('AUDI RS-3', 'v8', '2009', 'gray')
const car2 = new Car('BMW i8', '2.0.0', '2024', 'white')
