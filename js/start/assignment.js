const numberOfSeries = +prompt('Nechta serial kordingiz?', '')
const seriesDB = {
	count: numberOfSeries,
	series: {},
	actors: {},
	genres: [],
	private: false,
}

let a = prompt('Oxirgi korgan serialingiz', '')
let b = +prompt('Nechi baxo berasiz?', '')

seriesDB.series[a] = b

console.log(seriesDB)
