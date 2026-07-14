const numberOfSeries = +prompt('Nechta serial kordingiz?', '')
const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
}

for (let i = 0; i < 2; i++) {
	const a = prompt('Oxirgi korgan serialingiz', '')
	const b = +prompt('Nechi baxo berasiz?', '')
}
/*

seriesDB.series[a] = b
seriesDB.series[c] = d */

console.log(seriesDB)
