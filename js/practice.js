let numberOfSeries;

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
};

startApp();
favouriteSeries();
detectLevel();
writeGenres();
showDB(seriesDB.private);

function startApp(){
	numberOfSeries = +prompt('How many series you have watched?', '');
	while (
		numberOfSeries == '' || numberOfSeries == null || isNaN(numberOfSeries)
	) {
		numberOfSeries = +prompt('Nechta serial ko’rdingiz?', '')
	}
}

function favouriteSeries(){
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
}

function detectLevel(){
	if(seriesDB.count < 5){
	console.log('You havent watched a lot');
} else if(seriesDB.count >= 5 && seriesDB.count < 10){
	console.log('You are a classic fan');
} else if(seriesDB.count >= 10){
	console.log('You are actually a FAN!');
}
}

function writeGenres(){
	for(let i = 0; i < 3; i++){
		const genre = prompt(`Yaxshi korgan janringiz ${i + 1}?`, '');
		seriesDB.genres[i] = genre;
	}
}

function showDB(isPrivate){
	if(!isPrivate){
		console.log(seriesDB);
	}
	else{
		console.log('Secret Data');
	}
}





