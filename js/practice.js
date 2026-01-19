const seriesDB = {
	count: 0,
	series: {},
	actors: {},
	genres: [],
	private: false,
	start: function () {
		seriesDB.count = +prompt('How many series you have watched?', '');

		while (seriesDB.count == '' || seriesDB.count == null || isNaN(seriesDB.count)) {
		seriesDB.count = +prompt('How many series you have watched?', '')
	}
	},
	favSeries: function () {
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
},
  detectLevel: function () {
		if(seriesDB.count < 5){
			console.log('You watched least series');
		} else if(seriesDB.count >=5 && seriesDB.count < 10){
			console.log('You are a classic fan');
		} else if(seriesDB.count >= 10){
			console.log('You are a famous fan now');
		}
	},
	visibleDB: function () {
		if(seriesDB.private){
			seriesDB.private = false
		} else{
			seriesDB.private = true
		}
	},
	showDB: function () {
		if(!isPrivate){
		console.log(seriesDB);
	} else{
		console.log('Secret Data');
	}
	},
	writeGenres: function (){
		/* for(let i = 0; i < 3; i++){
		const genre = prompt(`What's your Favorite genre ${i + 1}?`, '');
		if(genre === '' || genre === null){
			i--
		} else {
			seriesDB.genres[i] = genre;
		}
		
	} */
		
		
		let genres = prompt('Write your favorite genre', '');
		console.log(genres);
		if(genres === '' || genres === null){
			genres = prompt('Write your favorite genre', '');
		}else {
			seriesDB.genres = genres.split(', ');
		}
	}

};

seriesDB.start();
seriesDB.favSeries();




