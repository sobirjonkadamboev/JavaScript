const numberOfSeries = +prompt('How many series you have watched?', '');

const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
};

const a = prompt('The last one you have watched?', '');
const b = +prompt('Can you rate', '');
const c = prompt('The last one you have watched?', '');
const d = +prompt('Can you rate', '');

seriesDB.series[a] = b;
seriesDB.series[c] = d;

console.log(seriesDB);




