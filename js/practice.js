const numberOfSeries = +prompt('How many series you have watched?', '');

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
};

for(let i = 0; i < 2; i++){
	const a = prompt('The last one you have watched?', '');
	const b = +prompt('Can you rate', '');
	if(a !== null && b !== null && a !== '' && b !== ''){
		seriesDB.series[a] = b;
		console.log('Done!');
	} else{
		i--
	}
}

if(seriesDB.count < 5){
	console.log('You havent watched a lot');
} else if(seriesDB.count >= 5 && seriesDB.count < 10){
	console.log('You are a classic fan');
} else if(seriesDB.count >= 10){
	console.log('You are actually a FAN!');
}

console.log(seriesDB);




