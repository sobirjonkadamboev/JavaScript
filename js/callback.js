// callback is a function passed as an argument to another function.

const greet = () => {
	console.log(1);
}

const firstLog = () => {
	console.log(2);
}

greet();
firstLog();