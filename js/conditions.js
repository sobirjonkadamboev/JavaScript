/* const light = 'green';

console.log(light === 'green');


if(light === 'red'){
	console.log('Stop!');
} else if(light === 'yellow'){
	console.log('Prepare!');
} else if(light === 'green'){
	console.log('Goo!');
}
	== - bu ikkita qiymatga qarab tekshiradi
	=== - bu qat'iy tekshiruv turi, ham ma'lumotga, ham qiymatni tekshiradi

const age = +prompt('How old are you?', '');
if(age <= 18){
	console.log('No Access!');
}
else{
	console.log('Access');
} 

if(light === 'red'){
	console.log('Stop!');
} else if(light === 'yellow'){
	console.log('Prepare!');
} else if(light === 'green'){
	console.log('Goo!');
} 

const light = 'yellow';

switch(light){
	case 'green':
		console.log('Go.');
		break
	case 'red':
		console.log('Stop!');
		break
	case 'yellow':
		console.log('Prepare');
		break
	default:
		console.log('Just go now.');
} 

let number = 0;

while(number <= 10){
	console.log(number);
	number++;
}

do{
	console.log(number);
	number++;
} while(number <= 10);

*/
let number = 0;
for(number; number <= 10; number++){
	if(number === 7){
		break;
	}
	console.log(number);
	
}
