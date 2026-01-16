/* let a = 10,
	b = a;

b = b + 10;
console.log(a)
console.log(b);
*/

//Object clone: shallow and deep clone

/* const person = {
	name: 'Sobirjon',
	age: 19,
	hobbies: {
		games: 'FC Mobile',
		sport: 'Running'
	}
};

//1. Iteration
const copyObj = (obj) => {
	const clone = {}
	
	for(let key in obj){
		clone[key] = obj[key];
	}

	return clone;
};

const seconddPerson = copyObj(person);
seconddPerson.name = 'Sobirjon';
seconddPerson.age = 20;
console.log(person);
console.log(seconddPerson);


const clone2Obj = (obj2) => {
	const clone = {};

	for(let key in obj2){
		clone[key] = obj2[key]
	}

	return clone;
}

const copiedObj = clone2Obj(person);
copiedObj.mysecondName = 'Usmonjon';
copiedObj.mysecondAge = 22;

console.log(person);
console.log(copiedObj);


//2.Object Assign

const secondPerson = Object.assign({isMarried: false}, person);
secondPerson.name = 'Ahmad';
secondPerson.age = 29;

console.log(person);
console.log(secondPerson); 

//3. Spread Operator ES8

const person = {
	name: 'Sobirjon',
	age: 19,
	hobbies: {
		games: 'FC Mobile',
		sport: 'Running'
	}
};

const secondPerson = {...person}
secondPerson.name = 'Ahmad';
secondPerson.age = 29;

console.log(person);
console.log(secondPerson);  

//Clone Array
//1. Slice Method

const cars = ['BMW', 'Lamborghini', 'KIA', 'Hyundai'];

const clone = cars.slice()
clone.push('Audi');

console.log(cars);
console.log(clone);

//2.Spread Operator

const copy = [...cars];
copy.push('Subaru');

console.log(cars);
console.log(copy);
*/

//Function - Spread Clone

function log(a, b, c){
	console.log('First: ', a);
	console.log('Second: ', b);
	console.log('Third: ', c);
};

const arr = [4, 5, 6];

log(...arr);