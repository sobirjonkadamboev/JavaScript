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

