// callback is a function passed as an argument to another function.

/* const greet = () => {
	setTimeout(function (){
		console.log(1);
	}, 500)
}

const firstLog = () => {
	console.log(2);
}

greet();
firstLog(); 

function greet(callback) {
	console.log('Hi, students');
	callback();

};

function callback (){
	console.log('Are you ready today?');
};

greet(callback);  */


const person = {
	name: 'Sobirjon',
	year: 2006,
	job: 'Student',
	hobbies: {
		sport: 'Running', 
		other: 'coding, and travel'
}
};

for(let key in person){

}
