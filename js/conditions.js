const light = 'green';

console.log(light === 'green');


if(light == 'red'){
	console.log('Stop!');
} else if(light == 'yellow'){
	console.log('Prepare!');
} else if(light == 'green'){
	console.log('Goo!');
}

const age = +prompt('How old are you?', '');
if(age <= 18){
	console.log('No Access!');
}
else{
	console.log('Access');
}