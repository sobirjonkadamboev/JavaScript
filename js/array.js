const colors = ['red', 'yellow', 'black', 'green', 'brown'];
console.log('Array length: ', colors.length); // in array length, if there is 2, it adds one more.
console.log('Choosing the specific array: ', colors[4]);



//Pop and Push
// 1.Pop - removes the last element of an array
// 2.Push - adds one element to an array

console.log('Removing the last element: ', colors.pop());
console.log('Adding new element:', colors.push('orange'));


//Shift and Unshift
// 1.Shift - removes the first element of an array
// 2.Unshift - adds one element to start of an array
console.log('Removing the first element: ', colors.shift());
console.log('Adding one element from first: ', colors.unshift('gray'));


console.log(colors);

/*Iteration
const cars = ['Lamborghini', 'Audi', 'BMW', 'Toyota', 'Damas'];

for(let i = 0; i < cars.length; i++){
	console.log(cars[i]);
};

for (let car of cars){
	console.log(car);
}; 

colors.forEach((item, index, arr) => {
	console.log(`${index}: ${item} in array ${arr}`);
	
}); */

const numbers = [1, 2, 3, 4, 5];
numbers[5] = 6; //never use this, its a categoric error

//Split

const socialMedia = 'YouTube, Telegram, Instagram';
const arr = socialMedia.split(', ');
const vary = arr.join('-')
console.log(arr);
console.log(vary);

const n = [39, 434, 2, 0 , 54, 6];
n.sort(compareNum);
function compareNum(a, b) {
	return a - b
};
console.log(n); //sort can't sort for numbers there, for strings




